import { tool } from "@opencode-ai/plugin"
import { which } from "bun"

async function nodeScript(rel: string): Promise<string | null> {
  if (!(await which("node"))) return null
  return new URL(rel, import.meta.url).pathname
}

export default tool({
  description:
    "Headless image/STL regeneration via Blender. Detects a Blender install; if present, renders a .blend to PNG. Reports clearly if the engine is missing (tool is wired and activates once Blender is installed).",
  args: {
    input: tool.schema.string().describe("Path to a .blend file (or a prompt placeholder)"),
    output: tool.schema.string().describe("Output image path"),
  },
  async execute(args) {
    const script = await nodeScript("node-render/render.mjs")
    if (!script) return "node not available on this system."
    try {
      const out = await Bun.$`node ${script} ${args.input} ${args.output}`.text()
      return out
    } catch (e: any) {
      return "render failed: " + String(e)
    }
  },
})
