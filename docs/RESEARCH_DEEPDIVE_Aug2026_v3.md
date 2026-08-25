# BioArmor Deep-Dive Analysis — v3 (Aug 2026)

> Third pass after the author's latest edits to `BIOARMOR_CONCEPT.md` (now 2,163 lines). Confirms the v2 fixes survived, analyzes new edits, and corrects two FTO factual errors. Inputs: full re-read + technical-validation + patent-landscape agents (Aug 2026).

---

## A. Status of the 7 v2 Fixes — ALL CONFIRMED INTACT (no regression)

| # | Fix | Location | Verdict |
|---|-----|----------|---------|
| 1 | CNT 1–2 GPa (Galvorn-class), ~10–50× vs steel, 1.3 g/cm³ | L1021, L1085–1087 | ✅ Fixed, still present |
| 2 | Surlyn 95 °C melt; residual SEAL recovery; vacuum + radiation risks; US 11,192,667 noted | L201, L213, L217–219, L1055, L1634, L2147 | ✅ Fixed, still present |
| 3 | Algae ~3 L/hr (10–20%, optimistic); pods tens of mL/hr; LIFE SUPPORT ANALYSIS ~3 vs ~15 L/hr | L73, L261, L1336, L1976 | ✅ Fixed, arithmetic self-consistent |
| 4 | Perovskite standardized (GaAs removed) | L856–860, L995–998 | ✅ Fixed, no GaAs remains |
| 5 | Aerogel ~600–800 °C continuous; 1200 °C = sintering threshold | L917 | ✅ Fixed, still present |
| 6 | FTO expiry ~2039 | L219, L2147 | 🟠 **Was slightly off** — corrected to **2037-02-17** (see §E) |
| 7 | Power-scale reconciliation notes | L1279, L1961 | ✅ Fixed, still present |

**No prior error regressed.** The document is materially stronger than v1.

---

## B. New Edits Added Since v2 (scope scan)

- **Quantified thermal model** (radiative-balance, variable-emissivity radiator, VO₂ references) — physically reasonable first-order analysis.
- **Flexible perovskite PV** fully standardized across Blueprint, Architecture, and thermal model.
- **HDPE / boron-PE radiation liner** added as a shielding subsystem.
- Subsystem-coverage gap analysis (dust, helmet, avionics, redundancy, prebreathe) retained/expanded.

## C. Technical Verification of New Claims

- **Thermal model:** Plausible. Variable-emissivity VO₂ references are real and correctly nuanced. The ~400 W PV caveat (vs 285 mW actual canopy) is already reconciled in the notes — good.
- **Perovskite PV:** Now internally consistent; flexible perovskite ~27–34% is accurate (NREL 2025 single-junction 27.3%; tandems 30–34.85%).
- **HDPE / boron-PE liner:** Boron-loaded polyethylene is the *standard* space radiation shielding approach (high H content + neutron capture). Plausible, but verify the doc's dose-reduction % against areal-density math (typical PE liners cut SPE dose ~20–40% at ~2–5 g/cm²; claims outside that need citation).
- **Residual overstatement:** CNT "10–50× vs steel" top end is vs *stainless* (DexMat's own claim is 10× strong-steel / 30× stainless). Acceptable but note. "~6× lighter than steel" (7.8/1.3 = 6.0) ✅.

## D. Internal Contradictions — None New (after fixes)

- Mass budget, O₂/CO₂ balance, and power reconciliation are internally consistent per the validation agent. The mass tables were reconciled (see Fixes Applied): 9.4 kg → 8.9 kg chest armor; STL-derived 6.7 kg noted as authoritative chest-plate mass.

---

## E. Patent / FTO — SAME-to-SLIGHTLY-WORSE (two factual errors found & fixed)

| Patent | Assignee | True status (Aug 2026) | Doc said | Action |
|--------|----------|------------------------|----------|--------|
| **US 11,192,667 B2** | NASA (LAR-TOPS-122) | **Active, expires 2037-02-17** | "~2039" | ❌ Fixed → **2037-02-17** |
| **US 11,001,684 B2** | NASA | **Active, expires 2037-05-06** | (not dated in all spots) | Note both ~2037 |
| **US 7,612,152 B2** | Univ. of Illinois | **ACTIVE until 2026-12-17** | cited as *expired/free* design-around | ❌ **Wrong — NOT free yet** |
| **WO 2008/154107 A1** | Estée Lauder | **Ceased** (cosmetics field) | cited as design-around | Weak basis; different field |
| **US 7,354,877 B2** | Lockheed | Expired Oct 2023 | free | ✅ Correct |
| **US 7,834,527 B2** | DEA joints | Expired May 2026 | free | ✅ Correct |

### Two errors in the current doc (and in v2's recommendation):
1. **US 11,192,667 expiry is ~2037, not ~2039.** Corrected in the FTO section.
2. **US 7,612,152 is NOT free** — it is active until **Dec 17, 2026**. The doc's design-around strategy (rely on expired capsule-healing chemistry from US 7,612,152) was **not available until Dec 2026**. Until then the only routes are: (a) **license NASA's US 11,192,667/US 11,001,684**, or (b) use **WO 2008/154107 A1** (ceased, cosmetics — weak/uncertain enforceability), or (c) identify a *different* genuinely-expired microcapsule/vascular self-healing patent.

### IP position assessment
- **Slightly worse than v2 implied:** the cheap design-around was blocked until Dec 2026, and the two new claim areas (flexible perovskite PV, HDPE/boron-PE liner) sit in **crowded, already-patented fields** — they are NOT defensible white space.
- **Genuinely defensible white space remains:** the **integrated multi-subsystem EVA architecture** + **wearable algae/O₂-regenerative life support** (essentially unpatented). Lead the IP strategy there.
- **Free foundations still valid:** CNT garment fabric (US 7,354,877) and DEA joints (US 7,834,527) are expired and usable.

---

## F. Recommended Fixes (low effort, high value)

1. **FTO dates:** change US 11,192,667 expiry "~2039" → "~2037 (2037-02-17)" — **DONE**.
2. **Design-around correction:** rewrite the bladder FTO path to state US 7,612,152 is active until **Dec 2026**; until then pursue NASA license or WO 2008/154107 A1 (note its cosmetics-field weakness), and search for a truly-expired capsule-healing patent — **DONE**.
3. **Don't over-claim** perovskite PV / radiation liner as novel IP; frame them as licensed/known components, not BioArmor-patentable — left as author judgment.
4. **Verify radiation-liner dose %** against areal-density references before review — author action.

---

## Fixes Applied (2026-08-25)

Following the author's go-ahead, the following were corrected in `docs/BIOARMOR_CONCEPT.md` (and `deck.html`):

1. **FTO expiry** US 11,192,667: "~2039" → "**2037-02-17**" (both FTO mentions).
2. **US 7,612,152 status:** added ⚠ correction that it is **active until 2026-12-17** (not free); design-around unavailable until then; WO2008154107A1 noted as ceased/cosmetics.
3. **GCR 15% claim removed:** replaced with accurate PARTIAL statement (SPE attenuated; GCR largely unmitigated by ~6 mm algae layer).
4. **Lunar Palace 365 attribution:** Chinese Academy of Sciences → **Beihang University (BUAA)**.
5. **CNT specific-strength wording:** "~10–50× vs steel" → "~6–12× vs high-strength steel (~30× vs mild steel; vendor top-spec — macroscale woven fabric lower)".
6. **Mass table:** 9.4 kg chest armor → **8.9 kg** (arithmetic fix); added reconciliation note that the detailed STL chest plate is 6.7 kg (authoritative) and summary tables are estimates.
7. **Daily-wear mass conflict:** "3.1 kg" clarified as "~2.2 kg base; ~3.1 kg with SMA + EDS" to reconcile with the 2.2 kg tables.

**Not changed (judgment calls left to author):** flexible-perovskite and HDPE/boron-PE liner claims remain framed as known/licensed components (not asserted as BioArmor-patentable white space); STL 6.7 kg vs 8.9 kg summary discrepancy flagged but not force-equalized.

*Deep dive v3 conducted Aug 2026. Prior: RESEARCH_DEEPDIVE_Aug2026.md (v1), RESEARCH_DEEPDIVE_Aug2026_v2.md (v2).*
