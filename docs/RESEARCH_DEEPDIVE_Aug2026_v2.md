# BioArmor Deep-Dive Analysis — v2 (Aug 2026)

> Second pass after the author's review edits to `BIOARMOR_CONCEPT.md` (now 2068 lines). Compares against the v1 deep dive. Confirms fixes, flags remaining + newly-introduced errors. Inputs: full re-read of concept doc + technical-validation + patent-landscape agents (Aug 2026).

---

## Status of the 7 Prior Errors

| # | Prior error | v2 status | Note |
|---|-------------|-----------|------|
| 1 | CNT 63 GPa / 150× steel | ✅ **FIXED** | Now "1–2 GPa (Galvorn-class), ~10–50× vs steel, 1.3 g/cm³." Realistic (top of range optimistic). Frame as vendor-spec. |
| 2 | Surlyn 240 °C / "works in vacuum" | ✅ **FIXED** | 95 °C melt; residual *seal* (not structural) recovery; vacuum + radiation risks explicitly flagged as open. Well handled. |
| 3 | Algae 2,500 mL/pod, 20–33% | 🟡 **PARTIAL** | Main body now realistic (3 L/hr = 10–20%, "tens of mL/hr" pods, "optimistic — validate"). **But L1883–1885 reintroduces impossible numbers** (see New Issue A). |
| 4 | Silica aerogel −200→1200 °C | 🔴 **STILL OVERSTATED** | 1200 °C is the sintering/destruction threshold, not an operating range (~650–800 °C continuous). Unchanged. |
| 5 | Perovskite vs GaAs | 🔴 **STILL INCONSISTENT** | Blueprint + Architecture overview say GaAs; ExoArmor stack + thermal model + 2026 update say perovskite. Unresolved. |
| 6 | LithaLox HP 500, 430 MPa, 1650 °C | ✅ **CONFIRMED** | Exact match to Lithoz datasheet. Accurate. |
| 7 | Two joint systems + two power #s | 🟡 **MOSTLY FIXED** | Joint systems now scoped (SMA baseline vs optional motors). 35.5 mW vs 285 mW reconciled (avg vs peak). **But a new ~1000× power-scale contradiction exists** (see New Issue C). |

---

## New Issues Found in the Edited Doc

### A. LIFE SUPPORT ANALYSIS block contradicts the whole doc (L1883–1885) — CRITICAL
```
"O₂ production: 17,341 mL/hr (need 1,500 mL/hr at rest) → 1156% coverage"
```
- Directly contradicts the edited main body (3 L/hr, 10–20%).
- "need 1,500 mL/hr at rest" is **wrong by 10×** — resting demand is **15,000 mL/hr** (15 L/hr). A zero was dropped.
- 17,341 mL/hr (~17 L/hr) is the same impossible order of magnitude the edits were meant to remove.
- **Fix:** Delete/rewrite this block to match 3 L/hr (10–20%) and use 15 L/hr resting need. This looks like an un-updated copy of the old claims.

### B. PV material inconsistency (GaAs vs perovskite) — UNRESOLVED
- Tile Blueprint LAYER 1 (L777): "Thin-film **Gallium Arsenide (GaAs)** … 28–30%."
- Architecture overview (L916): "THIN-FILM **GaAs** PV COATING … 285 mW."
- ExoArmor stack (L663): "**Perovskite** thin film."
- Thermal model (L1608): "**PV (flexible perovskite)** ~200 W/m²."
- 2026 update (L1759): "**Perovskite PV: 27.5%**."
- Both materials are individually real; the doc just never settles. **Standardize on perovskite** (consistent with the 2026 update + flexible-fabric claim) and delete GaAs references (or explicitly state GaAs baseline + perovskite variant).

### C. Power-scale contradiction (~1000×) — CRITICAL
- **Energy Budget / Refined Power Budget (L1142, L1861):** PV = 150 mW peak / 50 mW avg; total harvest **35.5 mW avg**; algae LEDs **100–750 mW** (load total **38 mW**).
- **Thermal model (L1608, L1606):** PV = **~400 W peak** (200 W/m² × 2 m²); algae LEDs **~20–35 W** (Geiman ~2 W/L × 18 L).
- These are **different unit regimes** (mW vs hundreds of W). Realistically, driving 18 L of dense algae at ~3 L/hr O₂ needs **tens of watts** of LED input (Geiman ~2 W/L), so the thermal model's ~25 W is the physically correct order; the mW-scale energy budget understates LED load by ~50–250×.
- **Fix:** Pick ONE power universe. Either (a) keep mW framing and state the algae are a *tiny* supplemental culture (not 18 L at 3 L/hr), or (b) adopt the thermal model's hundreds-of-watts PV / tens-of-watts LED scale consistently and discard the mW budget. As written, the two halves cannot both be true.

### D. Minor fixes
- **FTO expiry:** US 11,192,667 issued Dec 2021 → term ≈ **2039**, not "~2035" (L2052, L156). Update.
- **CNT "150×" removed** — good. "50× vs steel" top end is vs stainless; acceptable but note.
- **"Galvorn-class"** is a single vendor's marketing class for a woven fabric — frame as vendor-spec, not flight data.

---

## Patent / FTO (v2) — No material change from v1
- The concept's **FTO section (L2048–2060) is already updated** and accurate: flags US 11,192,667 (license or design-around via expired WO2008154107A1 / US 7,612,152), notes free foundations (US 7,354,877 expired 2023; US 7,834,527 expired 2026), and names the defensible white space (wearable algae + integrated architecture).
- No new blocking patents surfaced for 2025–2026 beyond what v1 found. Recommendation unchanged: license or design-around the Surlyn patent before building; file on the white space.
- Caveat carried forward: confirm exact patent status (PTA, maintenance fees) with counsel before filing.

---

## Top Fixes Before Review (priority)

1. **🔴 A — L1883–1885:** Delete "17,341 mL/hr / 1156% / need 1,500 mL/hr." Replace with the doc's own 3 L/hr (10–20%) figure and 15 L/hr resting need.
2. **🔴 C — Power scale:** Reconcile the mW energy budget vs the 400 W / ~25 W thermal model. Make algae-O₂ claim consistent with the LED power it implies.
3. **🔴 B — GaAs vs perovskite:** Standardize on perovskite across Blueprint, ExoArmor stack, Architecture overview, and thermal model.
4. **🟠 Aerogel (Issue 4):** Change "−200 °C to 1200 °C" to "stable to ~600–800 °C continuous; survives transient excursion toward 1200 °C (sintering threshold)." Or switch the insulation layer to knittable aramid aerogel fiber (Xiao 2026, ~22 mW/m·K, washable, flexible) for a wearable.
5. **🟡 FTO expiry (D):** "~2035" → "~2039" for US 11,192,667.

After these 5, the document is internally consistent and review-ready on the quantitative claims.

---

## What's Genuinely Strong Now
- Realistic CNT, Surlyn (with honest risk flags), ceramic specs.
- Honest "algae is supplemental, validate at bench scale" framing in the main body.
- Excellent new thermal model with first-order radiative balance + variable-emissivity radiator (VO₂ references are real and correctly nuanced).
- Strong subsystem-coverage gap analysis (dust, helmet, avionics, redundancy, prebreathe) — shows engineering maturity.
- Accurate FTO section.

*Deep dive v2 conducted Aug 2026. No files in the concept doc were modified by this analysis — fixes above are recommended for the author to apply. Prior v1: RESEARCH_DEEPDIVE_Aug2026.md.*
