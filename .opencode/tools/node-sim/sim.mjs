// node-sim/sim.mjs — BioArmor numerical models.
// Usage: node sim.mjs <model> [json-args]
//   models: joint, power, thermal
// Pure JS, no deps. Outputs JSON to stdout.

import fs from "fs";
const P_SPACE = 5.67e-8; // Stefan-Boltzmann

function jointModel(args) {
  const pressure_kPa = args.pressure_kPa ?? 29.6; // 4.3 psi
  const P = pressure_kPa * 1000; // Pa
  const eff = args.effFactor ?? 0.5; // effective moment-arm factor (assumption)
  const wireLever = (args.wireLever_mm ?? 150) / 1000;
  const smaForce = args.smaForce_N ?? 25; // per joint total
  const motor = args.motor_N ?? null; // optional total motor force per joint

  function pressureTorque(dia_mm) {
    const r = dia_mm / 2 / 1000;
    const A = Math.PI * r * r;
    return P * A * (eff * r); // Nm
  }
  const joints = {
    shoulder: pressureTorque(args.shoulder_mm ?? 150),
    elbow: pressureTorque(args.elbow_mm ?? 100),
    knee: pressureTorque(args.knee_mm ?? 100),
  };
  const smaTorque = smaForce * wireLever;
  const motorTorque = motor ? motor * wireLever : null;

  const out = { pressure_kPa, assumptions: { effFactor: eff, wireLever_mm: wireLever * 1000 } };
  for (const [k, pt] of Object.entries(joints)) {
    const smaRed = (smaTorque / pt) * 100;
    const row = {
      pressureTorque_Nm: +pt.toFixed(2),
      smaTorque_Nm: +smaTorque.toFixed(2),
      smaTorqueReduction_pct: +smaRed.toFixed(1),
    };
    if (motorTorque != null) {
      row.motorTorque_Nm = +motorTorque.toFixed(2);
      row.motorTorqueReduction_pct = +((motorTorque / pt) * 100).toFixed(1);
    }
    out[k] = row;
  }
  // Weighted fatigue estimate (usage-weighted, shoulders dominate EVA)
  const w = args.weights ?? { shoulder: 0.6, elbow: 0.25, knee: 0.15 };
  const wSma = (out.shoulder.smaTorqueReduction_pct * w.shoulder +
    out.elbow.smaTorqueReduction_pct * w.elbow +
    out.knee.smaTorqueReduction_pct * w.knee);
  out.weightedTorqueReduction_pct = +wSma.toFixed(1);
  // Micro-rest nonlinearity: fatigue reduction exceeds torque reduction ~1.2x (cap 60%)
  out.estimatedFatigueReduction_pct = +Math.min(60, wSma * 1.2).toFixed(1);
  return out;
}

function powerModel(args) {
  const sources = args.sources ?? [
    { name: "PV tiles", mW: 50, duty: 0.3 },
    { name: "Piezo", mW: 5, duty: 0.5 },
    { name: "Tribo", mW: 10, duty: 0.3 },
    { name: "TEG", mW: 15, duty: 1.0 },
  ];
  const loads = args.loads ?? [
    { name: "Micro-LED", mW: 200, duty: 0.05 },
    { name: "Sensors", mW: 10, duty: 1.0 },
    { name: "Comm", mW: 30, duty: 0.1 },
    { name: "Pumps", mW: 50, duty: 0.1 },
    { name: "Heater", mW: 500, duty: 0.02 },
  ];
  const avg = (a) => a.reduce((s, x) => s + x.mW * x.duty, 0);
  const s = avg(sources), l = avg(loads);
  return {
    harvest_mW: +s.toFixed(1),
    load_mW: +l.toFixed(1),
    balance_mW: +(s - l).toFixed(1),
    status: s >= l ? "SURPLUS" : "DEFICIT",
    sources, loads,
  };
}

function thermalModel(args) {
  const area = args.area_m2 ?? 2.0;
  const solar = args.solar_Wm2 ?? 1361; // solar constant
  const alpha = args.alpha ?? 0.3; // absorptivity
  const emiss = args.emissivity ?? 0.85;
  const sinkK = args.sink_K ?? 4; // deep space ~4K (lunar night) or 250 for planet
  const Pabs = alpha * solar * area;
  // steady: Pabs = emiss*sigma*area*(T^4 - sink^4)
  const T4 = Pabs / (emiss * P_SPACE * area) + Math.pow(sinkK, 4);
  const Teq = Math.pow(T4, 0.25);
  return {
    area_m2: area, Pabs_W: +Pabs.toFixed(1),
    T_eq_K: +Teq.toFixed(1), T_eq_C: +(Teq - 273.15).toFixed(1),
    note: "Radiative equilibrium, no internal heat. Add metabolic/electronics load for real suit temp.",
  };
}

const [model, json] = process.argv.slice(2);
let args = {};
if (json) {
  args = json.startsWith("@")
    ? JSON.parse(fs.readFileSync(json.slice(1), "utf8").replace(/^\uFEFF/, ""))
    : JSON.parse(json);
}
let res;
if (model === "joint") res = jointModel(args);
else if (model === "power") res = powerModel(args);
else if (model === "thermal") res = thermalModel(args);
else { console.error("unknown model: " + model); process.exit(2); }
console.log(JSON.stringify(res, null, 2));
