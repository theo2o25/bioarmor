import { tool } from "@opencode-ai/plugin"
import { which } from "bun"

async function nodeScript(rel: string): Promise<string | null> {
  if (!(await which("node"))) return null
  return new URL(rel, import.meta.url).pathname
}

export default tool({
  description:
    "Inspect STL mesh files: 'info' (triangle count, volume, bbox, optional mass by material), 'diff' (compare two STLs), or 'toobj' (convert to Wavefront OBJ). Pure parser, no CAD needed.",
  args: {
    command: tool.schema.string().describe("One of: info | diff | toobj"),
    file: tool.schema.string().describe("Path to the first .stl file"),
    file2: tool.schema.string().optional().describe("Second .stl for 'diff'"),
    material: tool.schema.string().optional().describe("Material name for mass (steel/aluminum/ceramic/aramid/uhmwpe/surlyn/nitinol/cnt)"),
  },
  async execute(args) {
    const script = await nodeScript("node-stl/stl.mjs")
    if (!script) return "node not available on this system."
    try {
      const out = await Bun.$`node ${script} ${args.command} ${args.file} ${args.file2 ?? ""} ${args.material ?? ""}`.text()
      return out
    } catch (e: any) {
      return "stl tool failed: " + String(e)
    }
  },
})
