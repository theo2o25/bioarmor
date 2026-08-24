# BioArmor Research Process

A repeatable template for conducting technology research updates. Run quarterly or before major decisions.

## How to Run

1. Copy this template into a new opencode session
2. Each agent prompt below is self-contained — paste it directly
3. Agents run in parallel (4 concurrent)
4. Compile results into `docs/RESEARCH_BRIEF_[DATE].md`
5. Update `BIOARMOR_CONCEPT.md` and `FUNDING.md` with findings

---

## Agent 1: Spacesuit Technology

```
Search for and compile all information about spacesuit technology as it stands in [MONTH YEAR]. I need a comprehensive technology landscape analysis. Search for:

1. "AxEMU spacesuit status 2026" — current schedule, budget, testing progress
2. "SpaceX EVA suit updates" — any new capabilities or limitations
3. "spacesuit competitors 2026" — new companies entering the market
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

## Agent 2: Algae Bioreactors & Life Support

```
Search for and compile all information about algae bioreactors and biological life support systems as it stands in [MONTH YEAR]. I need to understand current state of the art. Search for:

1. "algae bioreactor space station ISS" — current status of photobioreactors in space
2. "algae life support system space" — bio-regen life support progress
3. "wearable algae oxygen device" — any body-worn algae systems
4. "bioregenerative life support 2026" — latest advances
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

## Agent 3: Materials Science

```
Search for and compile all information about key materials for BioArmor spacesuit concept as it stands in [MONTH YEAR]. I need latest developments in these specific materials:

1. CNT FABRIC: "carbon nanotube fabric cost 2026" or "CNT fiber production scale" — current pricing and availability
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

## Agent 4: Grant Opportunities

```
Search for and compile all available grant funding opportunities relevant to BioArmor as it stands in [MONTH YEAR]. I need current deadlines and application requirements. Search for:

1. "NASA SBIR 2026" or "NASA SBIR Phase I" — current BAA, deadlines, amounts
2. "NSF SBIR 2026" — current solicitation, deadlines, amounts
3. "DARPA spacesuit" or "DARPA life support" — any open solicitations
4. "DOE SBIR 2026" — current opportunities
5. "space technology grants 2026" — other government programs
6. "space startup accelerator 2026" — Seraphim, CDL, other programs
7. "NASA Tipping Point" — any reopening announcements
8. "SBIR Phase II Sequential 2026" — white paper deadlines

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

## Compile Results

After all 4 agents complete, create `docs/RESEARCH_BRIEF_[MONTH YEAR].md` with:

1. **Executive Summary** — key findings table
2. **Spacesuit Landscape** — from Agent 1
3. **Algae Bioreactor Status** — from Agent 2
4. **Materials Developments** — from Agent 3
5. **Grant Opportunities** — from Agent 4 (sorted by deadline)
6. **Strategic Recommendations** — what BioArmor should do based on findings
7. **Sources** — all URLs

---

## Update Concept & Funding Docs

After compiling the brief, update:

### BIOARMOR_CONCEPT.md
- Add new findings to "2026 Research Updates" section
- Update "Current State of Art" table
- Adjust any specs if materials have changed

### FUNDING.md
- Update grant amounts and deadlines
- Add new opportunities
- Remove expired opportunities
- Update portal requirements

### Git Commit
```
docs: add [Month Year] research brief + update concept and funding docs
```
