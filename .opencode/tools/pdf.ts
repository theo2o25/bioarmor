import { tool } from "@opencode-ai/plugin"
import { which } from "bun"

/**
 * pdf — render an input file (SVG, HTML, MD, or other) to PDF.
 *
 * Tries available engines in order:
 *   1. rsvg-convert  (SVG -> PDF, best fidelity for our diagram SVGs)
 *   2. inkscape      (SVG -> PDF)
 *   3. chromium/chrome --headless --print-to-pdf  (HTML/SVG, page-aware)
 *   4. pandoc        (MD/HTML -> PDF via latex or weasyprint)
 *   5. libreoffice   (any -> PDF)
 *
 * The tool only needs ONE of these installed. Install any with:
 *   winget install rsvg-convert
 *   winget install Inkscape.Inkscape
 *   winget install LibreOffice.LibreOffice
 *   winget install pandoc
 * (Chromium/Edge usually already present on Windows.)
 */
async function findEngine(): Promise<{ name: string; run: (input: string, output: string) => Promise<void> } | null> {
  const has = async (cmd: string) => {
    try { return !!(await which(cmd)) } catch { return false }
  }

  if (await has("rsvg-convert")) {
    return {
      name: "rsvg-convert",
      run: async (input, output) => {
        await Bun.$`rsvg-convert -f pdf ${input} -o ${output}`.quiet()
      },
    }
  }
  if (await has("inkscape")) {
    return {
      name: "inkscape",
      run: async (input, output) => {
        await Bun.$`inkscape ${input} --export-type=pdf --export-filename=${output}`.quiet()
      },
    }
  }
  for (const bin of ["chromium", "chrome", "google-chrome", "msedge"]) {
    if (await has(bin)) {
      return {
        name: bin,
        run: async (input, output) => {
          await Bun.$`${bin} --headless --no-sandbox --disable-gpu --print-to-pdf=${output} ${input}`.quiet()
        },
      }
    }
  }
  if (await has("pandoc")) {
    return {
      name: "pandoc",
      run: async (input, output) => {
        await Bun.$`pandoc ${input} -o ${output}`.quiet()
      },
    }
  }
  if (await has("libreoffice") || await has("soffice")) {
    const lo = (await has("libreoffice")) ? "libreoffice" : "soffice"
    return {
      name: lo,
      run: async (input, output) => {
        const dir = output.split(/[\\/]/).slice(0, -1).join("/") || "."
        await Bun.$`${lo} --headless --convert-to pdf --outdir ${dir} ${input}`.quiet()
      },
    }
  }
  // Node-based fallback: @resvg/resvg-js + pdf-lib (installed under .opencode/tools/node-pdf)
  if (await has("node")) {
    const script = new URL("../tools/node-pdf/render.mjs", import.meta.url).pathname
    return {
      name: "node-resvg",
      run: async (input, output) => {
        await Bun.$`node ${script} ${input} ${output}`.quiet()
      },
    }
  }
  return null
}

export default tool({
  description:
    "Render a file (SVG, HTML, Markdown, or other) to PDF using whatever renderer is installed (rsvg-convert, inkscape, chromium, pandoc, or libreoffice). Reports which engine was used.",
  args: {
    input: tool.schema.string().describe("Path to the source file to render"),
    output: tool.schema
      .string()
      .optional()
      .describe("Optional output PDF path; defaults to <input>-rendered.pdf beside the source"),
  },
  async execute(args, context) {
    const input = args.input
    const output =
      args.output ??
      input.replace(/\.[^.]+$/, "") + "-rendered.pdf"

    const engine = await findEngine()
    if (!engine) {
      return (
        "No PDF renderer found. Install one with winget, e.g.:\n" +
        "  winget install rsvg-convert\n" +
        "  winget install Inkscape.Inkscape\n" +
        "  winget install pandoc\n" +
        "  winget install LibreOffice.LibreOffice\n" +
        "Then retry. (Chromium/Edge may already be present.)"
      )
    }

    try {
      await engine.run(input, output)
      return `PDF written to ${output} (engine: ${engine.name})`
    } catch (e) {
      return `PDF render failed with engine ${engine.name}: ${String(e)}`
    }
  },
})
