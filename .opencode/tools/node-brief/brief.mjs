// node-brief/brief.mjs — assemble concept doc (markdown) + diagrams into ONE PDF.
// Usage: node brief.mjs <concept.md> <output.pdf> [diagram1.svg ...]
// No browser needed: custom markdown->PDFKit renderer + resvg for SVG + pdf-lib merge.

import fs from "fs";
import PDFDocument from "pdfkit";
import { Resvg } from "@resvg/resvg-js";
import { PDFDocument as PDFLib } from "pdf-lib";

// ---------- minimal markdown -> PDFKit ----------
function renderMarkdown(doc, md) {
  const lines = md.split(/\r?\n/);
  let i = 0;
  const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const inline = (s) => escape(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>");

  while (i < lines.length) {
    let line = lines[i];
    if (/^\s*$/.test(line)) { i++; continue; }
    // heading
    let m = line.match(/^(#{1,4})\s+(.*)$/);
    if (m) {
      const level = m[1].length;
      const size = [22, 17, 14, 12][level - 1];
      doc.moveDown(0.4).font("Helvetica-Bold").fontSize(size).fillColor("#16324f");
      doc.text(m[2], { continued: false });
      doc.moveDown(0.3).fillColor("#000").font("Helvetica").fontSize(10.5);
      i++; continue;
    }
    // horizontal rule
    if (/^---+\s*$/.test(line)) { doc.moveDown(0.3); doc.moveTo(doc.x, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).stroke(); doc.moveDown(0.3); i++; continue; }
    // code block
    if (/^```/.test(line)) {
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) { buf.push(lines[i]); i++; }
      i++;
      doc.font("Courier").fontSize(9).fillColor("#222");
      doc.text(buf.join("\n"), { paragraphGap: 4 });
      doc.fillColor("#000").font("Helvetica").fontSize(10.5);
      continue;
    }
    // table
    if (/^\|/.test(line) && i + 1 < lines.length && /^\|[\s:|-]+\|$/.test(lines[i + 1])) {
      const parseRow = (r) => r.replace(/^\s*\|/, "").replace(/\|\s*$/, "").split("|").map((c) => c.trim());
      const head = parseRow(line);
      i += 2;
      const rows = [];
      while (i < lines.length && /^\|/.test(lines[i])) { rows.push(parseRow(lines[i])); i++; }
      drawTable(doc, head, rows);
      continue;
    }
    // list
    if (/^\s*[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) { items.push(lines[i].replace(/^\s*[-*]\s+/, "")); i++; }
      for (const it of items) { doc.list([it], { bulletRadius: 1.5, indent: 12 }); }
      doc.moveDown(0.2);
      continue;
    }
    // paragraph (gather consecutive non-blank, non-special)
    const para = [line];
    i++;
    while (i < lines.length && !/^\s*$/.test(lines[i]) && !/^(#{1,4}\s|\s*[-*]\s+|```|^\||---+\s*$)/.test(lines[i])) { para.push(lines[i]); i++; }
    doc.font("Helvetica").fontSize(10.5).fillColor("#000");
    doc.text(inline(para.join(" ")), { align: "left", paragraphGap: 4 });
    doc.moveDown(0.2);
  }
}

function drawTable(doc, head, rows) {
  const colCount = head.length;
  const avail = doc.page.width - doc.page.margins.left - doc.page.margins.right;
  const colW = avail / colCount;
  const cellH = 16;
  doc.font("Helvetica").fontSize(9);
  const drawRow = (cells, fill) => {
    if (doc.y + cellH > doc.page.height - doc.page.margins.bottom) doc.addPage();
    let x = doc.page.margins.left;
    const y = doc.y;
    for (const c of cells) {
      doc.rect(x, y, colW, cellH).fill(fill).stroke();
      doc.fillColor("#000").text(c, x + 3, y + 3, { width: colW - 6, height: cellH - 4, ellipsis: true });
      x += colW;
    }
    doc.fillColor("#000");
    doc.y = y + cellH;
  };
  drawRow(head, "#dbe7f3");
  for (const r of rows) drawRow(r, "#ffffff");
  doc.moveDown(0.3);
}

// ---------- SVG -> PNG buffer ----------
function svgToPngBuf(svgPath) {
  const svg = fs.readFileSync(svgPath);
  const r = new Resvg(svg, { fitTo: { mode: "zoom", value: 2 }, background: "white" });
  return r.render().asPng();
}

// ---------- main ----------
async function main() {
  const [mdPath, outPath, ...svgs] = process.argv.slice(2);
  if (!mdPath || !outPath) { console.error("usage: node brief.mjs <concept.md> <out.pdf> [diagrams...]"); process.exit(2); }

  // 1) render markdown to a PDF buffer
  const doc = new PDFDocument({ autoFirstPage: true, margin: 50 });
  const chunks = [];
  doc.on("data", (c) => chunks.push(c));
  const mdBufPromise = new Promise((res) => doc.on("end", () => res(Buffer.concat(chunks))));
  renderMarkdown(doc, fs.readFileSync(mdPath, "utf8"));
  doc.end();
  const mdPdf = await mdBufPromise;

  // 2) build PDFs: [md, ...svgs]
  const pdfs = [mdPdf];
  for (const s of svgs) {
    if (!fs.existsSync(s)) { console.error("skip missing svg: " + s); continue; }
    const png = svgToPngBuf(s);
    const d = new PDFDocument({ autoFirstPage: false, margin: 40 });
    const ch = [];
    d.on("data", (c) => ch.push(c));
    const p = new Promise((r) => d.on("end", () => r(Buffer.concat(ch))));
    d.addPage();
    d.image(png, { fit: [d.page.width - 80, d.page.height - 80], align: "center", valign: "center" });
    d.end();
    pdfs.push(await p);
  }

  // 3) merge
  const merged = await PDFLib.create();
  for (const buf of pdfs) {
    const src = await PDFLib.load(buf);
    const pages = await merged.copyPages(src, src.getPageIndices());
    for (const pg of pages) merged.addPage(pg);
  }
  fs.writeFileSync(outPath, await merged.save());
  console.log("wrote " + outPath + " (" + pdfs.length + " sections, " + svgs.length + " diagrams)");
}

main().catch((e) => { console.error(e); process.exit(1); });
