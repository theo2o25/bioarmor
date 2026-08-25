import { tool } from "@opencode-ai/plugin"
import { which } from "bun"

async function nodeScript(rel: string): Promise<string | null> {
  if (!(await which("node"))) return null
  return new URL(rel, import.meta.url).pathname
}

export default tool({
  description:
    "Assemble the BioArmor concept markdown + SVG diagrams into a single submission-ready PDF. No browser needed (custom markdown->PDF renderer + resvg + pdf-lib merge).",
  args: {
    md: tool.schema.string().describe("Path to the concept markdown (e.g. docs/BIOARMOR_CONCEPT.md)"),
    output: tool.schema.string().describe("Output .pdf path"),
    diagrams: tool.schema.string().optional().describe("Optional space-separated SVG diagram paths to append as full pages"),
  },
  async execute(args) {
    const script = await nodeScript("node-brief/brief.mjs")
    if (!script) return "node not available on this system."
    const diags = args.diagrams ?? ""
    try {
      const out = await Bun.$`node ${script} ${args.md} ${args.output} ${diags}`.text()
      return out
    } catch (e: any) {
      return "brief generation failed: " + String(e)
    }
  },
})
