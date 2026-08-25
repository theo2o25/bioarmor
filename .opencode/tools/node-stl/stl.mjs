// node-stl/stl.mjs — parse STL (ASCII + binary), report geometry, diff, convert.
// Usage: node stl.mjs <command> <file> [file2] [opts]
//   commands: info, diff, toobj
// Pure JS. Volume via divergence theorem (sum of signed tetra volumes).

import fs from "fs";

function parseSTL(buf) {
  const head = buf.slice(0, 5).toString("latin1");
  if (head.replace(/\s/g, "").toLowerCase().startsWith("solid")) {
    return parseASCII(buf.toString("latin1"));
  }
  return parseBinary(buf);
}

function parseASCII(txt) {
  const facets = [];
  const re = /facet\s+normal\s+([-\d.eE]+)\s+([-\d.eE]+)\s+([-\d.eE]+)\s+outer\s+loop\s+vertex\s+([-\d.eE]+)\s+([-\d.eE]+)\s+([-\d.eE]+)\s+vertex\s+([-\d.eE]+)\s+([-\d.eE]+)\s+([-\d.eE]+)\s+vertex\s+([-\d.eE]+)\s+([-\d.eE]+)\s+([-\d.eE]+)\s+endloop\s+endfacet/g;
  let m;
  while ((m = re.exec(txt))) {
    const v = [];
    for (let i = 4; i <= 12; i += 3) v.push([+m[i], +m[i + 1], +m[i + 2]]);
    facets.push(v);
  }
  return facets;
}

function parseBinary(buf) {
  // skip 80-byte header + uint32 count
  const count = buf.readUInt32LE(80);
  const facets = [];
  let off = 84;
  for (let i = 0; i < count; i++) {
    const n = [buf.readFloatLE(off), buf.readFloatLE(off + 4), buf.readFloatLE(off + 8)];
    off += 12;
    const v = [];
    for (let j = 0; j < 3; j++) { v.push([buf.readFloatLE(off), buf.readFloatLE(off + 4), buf.readFloatLE(off + 8)]); off += 12; }
    facets.push(v);
    off += 2; // attribute byte count
  }
  return facets;
}

function tetraVol(a, b, c) {
  // signed volume of tetrahedron (origin,a,b,c)
  const ax = a[0], ay = a[1], az = a[2];
  const bx = b[0], by = b[1], bz = b[2];
  const cx = c[0], cy = c[1], cz = c[2];
  return (ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx)) / 6;
}

function analyze(facets) {
  let vol = 0, min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (const [a, b, c] of facets) {
    vol += Math.abs(tetraVol(a, b, c));
    for (const p of [a, b, c]) for (let i = 0; i < 3; i++) {
      if (p[i] < min[i]) min[i] = p[i];
      if (p[i] > max[i]) max[i] = p[i];
    }
  }
  const dims = [0, 1, 2].map((i) => +(max[i] - min[i]).toFixed(3));
  const density = { steel: 7850, aluminum: 2700, ceramic: 3900, aramid: 1440, uhmwpe: 970, surlyn: 960, nitinol: 6450, cnt: 1500 };
  return {
    triangles: facets.length,
    volume_mm3: +Math.abs(vol).toFixed(1),
    volume_cm3: +(Math.abs(vol) / 1000).toFixed(3),
    bbox_mm: dims,
    materialDensities_kg_m3: density,
  };
}

function massReport(facets, material) {
  const a = analyze(facets);
  const dens = a.materialDensities_kg_m3[material];
  if (!dens) return { error: "unknown material; pick from " + Object.keys(a.materialDensities_kg_m3).join(", ") };
  const vol_m3 = Math.abs(a.volume_mm3) * 1e-9;
  return { material, density_kg_m3: dens, mass_g: +(vol_m3 * dens * 1000).toFixed(2) };
}

function toOBJ(facets) {
  let s = "# BioArmor STL export\n";
  const verts = [];
  for (const [a, b, c] of facets) for (const v of [a, b, c]) verts.push(v);
  const seen = new Map(); const uniq = [];
  for (const v of verts) {
    const key = v.map((x) => x.toFixed(4)).join(",");
    if (!seen.has(key)) { seen.set(key, uniq.length + 1); uniq.push(v); }
  }
  for (const v of uniq) s += `v ${v[0]} ${v[1]} ${v[2]}\n`;
  for (let i = 0; i < facets.length; i++) {
    const idx = [];
    for (const v of facets[i]) idx.push(seen.get(v.map((x) => x.toFixed(4)).join(",")));
    s += `f ${idx[0]} ${idx[1]} ${idx[2]}\n`;
  }
  return s;
}

const [cmd, file, file2, mat] = process.argv.slice(2);
if (!cmd || !file) { console.error("usage: node stl.mjs <info|diff|toobj> <file.stl> [file2.stl|material] [material]"); process.exit(2); }
const diffFile = cmd === "diff" ? (file2 || mat) : undefined;
const material = cmd === "info" ? (mat || (file2 && !diffFile ? file2 : undefined)) : undefined;
const facets = parseSTL(fs.readFileSync(file));
if (cmd === "info") {
  const a = analyze(facets);
  const out = { file, ...a };
  if (material) out.mass = massReport(facets, material);
  console.log(JSON.stringify(out, null, 2));
} else if (cmd === "diff") {
  if (!diffFile) { console.error("diff needs two files"); process.exit(2); }
  const a = analyze(facets), b = analyze(parseSTL(fs.readFileSync(diffFile)));
  console.log(JSON.stringify({
    file1: file, file2: diffFile,
    triangles: { f1: a.triangles, f2: b.triangles, delta: b.triangles - a.triangles },
    volume_mm3: { f1: a.volume_mm3, f2: b.volume_mm3, delta: +(b.volume_mm3 - a.volume_mm3).toFixed(1) },
  }, null, 2));
} else if (cmd === "toobj") {
  fs.writeFileSync(file.replace(/\.stl$/i, ".obj"), toOBJ(facets));
  console.log("wrote " + file.replace(/\.stl$/i, ".obj"));
} else { console.error("unknown command " + cmd); process.exit(2); }
