---
name: svg-to-pdf
description: Render BioArmor SVG diagrams (or any SVG/HTML/MD) to PDF for sharing/printing. Use when the user wants diagram figures as PDF, or asks to "export to PDF" / "make a pdf".
license: MIT
compatibility: opencode
---

# SVG / Document -> PDF

Render project diagrams and docs to PDF using the `pdf` custom tool.

## When to use
- User asks to "export the diagram to PDF", "make a pdf of the SVGs", or similar.
- You need a printable/shareable figure of `images/*.svg` or `docs/assets/*.svg`.
- Converting Markdown concept docs to PDF for distribution.

## How
Call the `pdf` tool:
```
pdf({ input: "images/BIOARMOR_SUBSYSTEMS.svg", output: "images/BIOARMOR_SUBSYSTEMS.pdf" })
```
The tool auto-detects an installed renderer in this priority:
1. `rsvg-convert`  (SVG->PDF, best for our diagrams)
2. `inkscape`
3. `chromium` / `chrome` / `msedge` --headless --print-to-pdf
4. `pandoc`  (MD/HTML->PDF)
5. `libreoffice` / `soffice`

If it reports "No PDF renderer found", install one:
```
winget install rsvg-convert        # recommended for SVG
winget install Inkscape.Inkscape
winget install pandoc
winget install LibreOffice.LibreOffice
```

## Notes
- SVG->PDF via rsvg-convert preserves vector crispness (preferred over raster).
- For Markdown->PDF, pandoc needs a LaTeX engine OR weasyprint; if both missing, fall back to printing HTML via headless Chromium.
- Output PDFs are not committed unless the user asks; they are build artifacts.
- Keep source SVGs as the source of truth; PDFs are derivatives.
