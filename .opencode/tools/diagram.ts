import { tool } from "@opencode-ai/plugin"
import { which } from "bun"

async function nodeScript(rel: string): Promise<string | null> {
  if (!(await which("node"))) return null
  return new URL(rel, import.meta.url).pathname
}

export default tool({
  description:
    "Generate the BioArmor layer-stack cross-section SVG from spec data (embedded default or a provided spec JSON). Outputs an SVG file.",
  args: {
    output: tool.schema.string().describe("Path for the generated .svg file"),
    spec: tool.schema.string().optional().describe("Optional path to a spec JSON overriding the default daily-wear stack"),
  },
  async execute(args) {
    const script = await nodeScript("node-diagram/diagram.mjs")
    if (!script) return "node not available on this system."
    try {
      const out = await Bun.$`node ${script} ${args.output} ${args.spec ?? ""}`.text()
      return out
    } catch (e: any) {
      return "diagram generation failed: " + String(e)
    }
  },
})
