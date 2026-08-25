import { tool } from "@opencode-ai/plugin"
import { which } from "bun"

async function nodeScript(rel: string): Promise<string | null> {
  if (!(await which("node"))) return null
  return new URL(rel, import.meta.url).pathname
}

export default tool({
  description:
    "Run a BioArmor numerical model: 'joint' (pressure-induced joint torque + SMA/motor torque reduction + estimated fatigue reduction), 'power' (harvest vs load balance), or 'thermal' (radiative equilibrium temperature). Returns JSON.",
  args: {
    model: tool.schema.string().describe("One of: joint | power | thermal"),
    params: tool.schema.string().optional().describe("Optional JSON string of model parameters (e.g. {\"pressure_kPa\":29.6,\"smaForce_N\":25})"),
  },
  async execute(args) {
    const script = await nodeScript("node-sim/sim.mjs")
    if (!script) return "node not available on this system."
    const p = args.params ?? ""
    try {
      const out = await Bun.$`node ${script} ${args.model} ${p}`.text()
      return out
    } catch (e: any) {
      return "sim failed: " + String(e)
    }
  },
})
