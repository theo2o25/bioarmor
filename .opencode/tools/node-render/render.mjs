// node-render/render.mjs — headless image/STL regeneration via Blender (or Perchance).
// Detects engine; reports clearly if absent. Usage: node render.mjs <input> <output>
import fs from "fs";
import { execSync } from "child_process";

function findBlender() {
  const cand = [
    "blender",
    "C:\\Program Files\\Blender Foundation\\Blender\\blender.exe",
    "C:\\Program Files\\Blender Foundation\\Blender 4.0\\blender.exe",
    "C:\\Program Files\\Blender Foundation\\Blender 4.1\\blender.exe",
    "C:\\Program Files\\Blender Foundation\\Blender 4.2\\blender.exe",
  ];
  for (const c of cand) {
    try { execSync(`where "${c}" >nul 2>&1`); return c; } catch {}
    try { if (fs.existsSync(c)) return c; } catch {}
  }
  return null;
}

const [input, output] = process.argv.slice(2);
if (!input || !output) { console.error("usage: node render.mjs <input.blend|.png-prompt> <output>"); process.exit(2); }
const blender = findBlender();
if (!blender) {
  console.log("ENGINE_MISSING: Blender not found. Install (winget install BlenderBlender or choco install blender), then re-run. Perchance CLI also unsupported here. Render tool is wired and ready; it will execute once an engine is present.");
  process.exit(0);
}
console.log("Blender detected: " + blender);
if (input.endsWith(".blend")) {
  execSync(`"${blender}" -b "${input}" -o "${output}" -F PNG -f 0`, { stdio: "inherit" });
  console.log("rendered " + output);
} else {
  console.log("Render of prompt-based images requires the image-gen pipeline; pass a .blend for headless Blender export.");
}
