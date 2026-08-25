import { Resvg } from "@resvg/resvg-js";
import { PDFDocument } from "pdf-lib";
import { readFileSync, writeFileSync } from "fs";

const [, , input, output] = process.argv;
if (!input || !output) {
  console.error("usage: node render.mjs <input.svg> <output.pdf>");
  process.exit(2);
}

const svg = readFileSync(input);
const resvg = new Resvg(svg, {
  fitTo: { mode: "zoom", value: 3 }, // 3x for crisp raster
  background: "white",
});
const png = resvg.render().asPng();

const pdf = await PDFDocument.create();
const img = await pdf.embedPng(png);
const page = pdf.addPage([img.width, img.height]);
page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });

writeFileSync(output, await pdf.save());
console.log("wrote " + output);
