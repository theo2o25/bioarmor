// node-diagram/diagram.mjs — generate the BioArmor layer-stack SVG from spec data.
// Usage: node diagram.mjs <output.svg> [spec.json]
// If spec.json omitted, uses an embedded default (daily-wear stack).

import fs from "fs";

const DEFAULT = {
  title: "BioArmor Daily-Wear Layer Stack (cross-section)",
  unit: "mm",
  layers: [
    { name: "CNT-Aramid EDS Weave", thick: 0.5, color: "#6b8fb5", note: "structural + electrodynamic dust shield" },
    { name: "UHMWPE inner", thick: 0.5, color: "#9bbf8a", note: "radiation shielding (H-rich)" },
    { name: "SMA wires", thick: 0.2, color: "#c9a06b", note: "joint movement assist (Nitinol)" },
    { name: "Surlyn bladder", thick: 1.0, color: "#d98cae", note: "pressure seal + self-heal" },
    { name: "Aerogel + algae", thick: 6.0, color: "#7fc7c7", note: "thermal + supplemental O2/CO2" },
    { name: "Comfort liner", thick: 0.3, color: "#cccccc", note: "skin contact, wicking" },
  ],
};

function build(spec) {
  const W = 820, padX = 240, barX = 260, barW = 360;
  const top = 70, gap = 14, minH = 26;
  const maxThick = Math.max(...spec.layers.map((l) => l.thick));
  const scale = 90 / maxThick; // px per mm for the thickest layer
  let y = top;
  const parts = [];
  parts.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${top + spec.layers.length * (minH + gap) + 40}" viewBox="0 0 ${W} ${top + spec.layers.length * (minH + gap) + 40}">`);
  parts.push(`<rect width="${W}" height="${top + spec.layers.length * (minH + gap) + 40}" fill="#ffffff"/>`);
  parts.push(`<text x="${W / 2}" y="36" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="20" font-weight="700" fill="#16324f">${spec.title}</text>`);
  for (const l of spec.layers) {
    const h = Math.max(minH, l.thick * scale);
    parts.push(`<rect x="${barX}" y="${y}" width="${barW}" height="${h}" rx="6" fill="${l.color}" stroke="#16324f" stroke-width="1.5"/>`);
    parts.push(`<text x="${barX - 12}" y="${y + h / 2 + 4}" text-anchor="end" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="700" fill="#16324f">${l.name}</text>`);
    parts.push(`<text x="${barX + barW + 12}" y="${y + h / 2 - 2}" font-family="Segoe UI, Arial, sans-serif" font-size="12" fill="#333">${l.thick} ${spec.unit}</text>`);
    parts.push(`<text x="${barX + barW + 12}" y="${y + h / 2 + 14}" font-family="Segoe UI, Arial, sans-serif" font-size="11" fill="#666">${l.note}</text>`);
    y += h + gap;
  }
  parts.push(`</svg>`);
  return parts.join("\n");
}

const out = process.argv[2];
if (!out) { console.error("usage: node diagram.mjs <output.svg> [spec.json]"); process.exit(2); }
const spec = process.argv[3] ? JSON.parse(fs.readFileSync(process.argv[3], "utf8")) : DEFAULT;
fs.writeFileSync(out, build(spec));
console.log("wrote " + out + " (" + spec.layers.length + " layers)");
