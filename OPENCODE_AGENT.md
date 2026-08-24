# BioArmor — OpenCode Agent Guide

Everything you need to run the BioArmor research and development workflow in OpenCode.

---

## Quick Start

1. Open a new OpenCode session
2. Copy the relevant prompt(s) below
3. Replace `[MONTH YEAR]` with the current date
4. Run agents in parallel using the Task tool

---

## Research Agents (Run Quarterly)

Run all 4 in parallel for a full technology landscape update.

### Agent 1: Spacesuit Technology

```
Search for and compile all information about spacesuit technology as it stands in [MONTH YEAR]. I need a comprehensive technology landscape analysis. Search for:

1. "AxEMU spacesuit status" — current schedule, budget, testing progress
2. "SpaceX EVA suit updates" — any new capabilities or limitations
3. "spacesuit competitors" — new companies entering the market
4. "Axiom space suit NASA contract" — contract status, milestones
5. "space suit technology breakthroughs" — any new materials or approaches

Organize findings into sections:
- AxEMU Status (schedule, budget, testing)
- SpaceX EVA Suit (capabilities, limitations)
- New Competitors (companies, technologies)
- Key Market Gaps (where BioArmor fits)
- Sources with URLs

Be thorough — read at least 5-10 pages from each search.
```

### Agent 2: Algae Bioreactors & Life Support

```
Search for and compile all information about algae bioreactors and biological life support systems as it stands in [MONTH YEAR]. I need to understand current state of the art. Search for:

1. "algae bioreactor space station ISS" — current status of photobioreactors in space
2. "algae life support system space" — bio-regen life support progress
3. "wearable algae oxygen device" — any body-worn algae systems
4. "bioregenerative life support" — latest advances
5. "Chlorella Spirulina oxygen production rate" — updated production data
6. "PBR@LSR DLR status" — what happened with the ESA experiment
7. "Lunar Palace" or "BIOS-3" — Chinese/Russian bio-regen systems

Organize findings into sections:
- ISS Photobioreactor Status (PBR@LSR, any new experiments)
- Ground-Based Bio-Regen (Lunar Palace, BIOS-3, NuCLEUS)
- Wearable Algae Systems (TAPED, medical devices)
- Sizing Requirements (volume needed per person for O₂)
- Key Technical Challenges
- Implications for BioArmor design
- Sources with URLs

Be thorough — read at least 5-10 pages from each search.
```

### Agent 3: Materials Science

```
Search for and compile all information about key materials for BioArmor spacesuit concept as it stands in [MONTH YEAR]. I need latest developments in these specific materials:

1. CNT FABRIC: "carbon nanotube fabric cost" or "CNT fiber production scale" — current pricing and availability
2. SELF-HEALING: "Surlyn self-healing space" or "self-healing polymer radiation" — any updates on Surlyn performance
3. CERAMIC ARMOR: "3D printed ceramic armor" or "DLP alumina armor" — latest in additive ceramic manufacturing
4. PEROVSKITE SOLAR: "perovskite solar cell efficiency record" — current efficiency records
5. AEROGEL: "hydrophilic aerogel textile" or "flexible aerogel insulation" — new aerogel textile products
6. EAP: "electroactive polymer exoskeleton" or "soft robotics spacesuit" — joint assistance developments

For each material, document:
- Latest performance data (efficiency, strength, cost)
- New suppliers or manufacturers
- Key risks or limitations discovered
- Published papers or press releases (with dates)

Organize into a table format with: Material | Latest Finding | Source | Impact on BioArmor

Be thorough — read at least 5-10 pages from each search.
```

### Agent 4: Grant Opportunities

```
Search for and compile all available grant funding opportunities relevant to BioArmor as it stands in [MONTH YEAR]. I need current deadlines and application requirements. Search for:

1. "NASA SBIR" or "NASA SBIR Phase I" — current BAA, deadlines, amounts
2. "NSF SBIR" — current solicitation, deadlines, amounts
3. "DARPA spacesuit" or "DARPA life support" — any open solicitations
4. "DOE SBIR" — current opportunities
5. "space technology grants" — other government programs
6. "space startup accelerator" — Seraphim, CDL, other programs
7. "NASA Tipping Point" — any reopening announcements
8. "SBIR Phase II Sequential" — white paper deadlines

For each opportunity, document:
- Program name and agency
- Amount (Phase I, Phase II, etc.)
- Deadline (exact date if available)
- Application portal (SAM.gov, ProSAMS, etc.)
- Key requirements (company size, topic alignment)
- URL to solicitation

Organize by deadline (soonest first) and mark which ones BioArmor is eligible for.

Be thorough — read at least 5-10 pages from each search.
```

---

## Concept Development Agents

### Agent: Image Generation Prompts

```
Read docs/PERCHANCE_PROMPTS.md and generate new concept images for BioArmor V1 and V2. Use the prompts at perchance.org/ai-text-to-image-generator. Generate 5-10 variations per prompt. Save the best images to images/ folder.
```

### Agent: Technical Validation

```
Read docs/BIOARMOR_CONCEPT.md and validate the technical claims. Search for:
1. Verify CNT mesh tensile strength (63 GPa claim)
2. Verify Surlyn self-healing mechanism and temperature data
3. Verify algae O₂ production rates (10-15 mmol/L/hour)
4. Verify aerogel thermal conductivity (0.004-0.02 W/m·K)
5. Check if any claims have been disproven or updated

Update the concept doc with corrections.
```

### Agent: Patent Landscape

```
Search for existing patents related to:
1. "algae life support spacesuit" — any prior art on bio-integrated suits
2. "self-healing spacesuit bladder" — Surlyn pressure vessel patents
3. "CNT mesh spacesuit" — carbon nanotube suit structure patents
4. "wearable bioreactor" — wearable algae device patents
5. "ceramic armor spacesuit" — modular tile armor patents

Document: patent number, assignee, filing date, key claims, and whether it blocks BioArmor.
```

---

## Compilation Template

After agents complete, create `docs/RESEARCH_BRIEF_[MONTH YEAR].md` using this structure:

```markdown
# BioArmor Research Brief — [MONTH YEAR]

> Compiled from [N] parallel research agents.

## Executive Summary

| Domain | Key Finding | Impact on BioArmor |
|--------|-------------|-------------------|
| Spacesuit Tech | [finding] | [impact] |
| Algae Bioreactor | [finding] | [impact] |
| Materials | [finding] | [impact] |
| Grants | [finding] | [impact] |

## 1. Spacesuit Technology Landscape
[from Agent 1]

## 2. Algae Bioreactor & Life Support
[from Agent 2]

## 3. Materials Developments
[from Agent 3]

## 4. Grant Opportunities
[from Agent 4, sorted by deadline]

## 5. Strategic Recommendations
- Immediate actions (30 days)
- Medium-term (3-6 months)

## Sources
[all URLs]
```

---

## Update Checklist

After compiling the brief, update these files:

- [ ] `docs/BIOARMOR_CONCEPT.md` — Add findings to "Research Updates" section
- [ ] `docs/BIOARMOR_CONCEPT.md` — Update "Current State of Art" table
- [ ] `docs/FUNDING.md` — Update grant amounts and deadlines
- [ ] `docs/FUNDING.md` — Remove expired opportunities
- [ ] `docs/PERCHANCE_PROMPTS.md` — Update if design changes
- [ ] Git commit: `docs: add [Month Year] research brief`

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `docs/BIOARMOR_CONCEPT.md` | Full technical spec (1800+ lines) |
| `docs/FUNDING.md` | Grant/investor strategy |
| `docs/PERCHANCE_PROMPTS.md` | AI image generation prompts |
| `docs/RESEARCH_BRIEF_2026.md` | Latest research findings |
| `docs/RESEARCH_PROCESS.md` | Research agent prompts |
| `docs/PROJECT_STRUCTURE.md` | Repo structure guide |
| `docs/CONTRIBUTING.md` | Contributor guidelines |
| `models/` | STL 3D print files |
| `images/` | Concept images |

---

## BioArmor Architecture Summary

### Two-System Design

**System 1: Daily Wear Suit (Bio-Layer)** — 2.2 kg
- Hybrid Aramid/UHMWPE structural layer
- Self-healing Surlyn pressure bladder
- Hydrophilic aerogel + algae (supplemental O₂ + CO₂ scrubbing)
- Tendon-driven joint assistance (900g, 2W)
- Comfort liner + liquid cooling micro-tubes

**System 2: ExoArmor (Modular Shell)** — 19.3 kg full
- Perovskite PV coating (27.5% efficiency)
- Ceramic armor tiles (DLP-printed Al₂O₃)
- CNT mesh skeleton (structural + electrical)
- Snap-on algae pods (optional, 4 × 500g)
- Total with all improvements: 25.5 kg vs EMU 127 kg

### Mass Budget

| Component | Mass |
|-----------|------|
| Daily wear suit | 2.2 kg |
| Joint assistance | 0.9 kg |
| Gloves + Boots | 0.5 kg |
| Chest armor | 6.7 kg |
| Full ExoArmor | 19.3 kg |
| + 4 algae pods | 21.3 kg |
| + All improvements | 25.5 kg |
| **EMU (current)** | **127 kg** |

### Cost Comparison

| System | Cost | Per EVA |
|--------|------|---------|
| BioArmor | ~$10M/unit | ~$710K |
| EMU | $150M/unit | $8.75M |
| AxEMU | ~$150M/unit | ~$8.75M |

---

## Grant Quick Reference (2026)

| Program | Amount | Deadline | Status |
|---------|--------|----------|--------|
| NASA SBIR Phase I | $225K | TBD (BAA valid through Sept 2027) | Open |
| NASA SBIR Phase II Seq | Up to $225K | Sept 11, 2026 | White paper |
| NSF SBIR Phase I | $305K | Nov 4, 2026 | Opening soon |
| DOE SBIR Genesis/AI | Phase I | Sept 10, 2026 | Open |
| NASA Tipping Point | $10-50M | Irregular | Closed (watch) |
| Seraphim Accelerator | Equity | ~Annual | Watch |

**Portals:** Register in ProSAMS (NASA) and SAM.gov (federal) immediately.
