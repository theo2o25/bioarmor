# BioArmor Concept Renders

This folder holds the visual concept art for BioArmor.

## ⚠️ Re-render pending (honesty alignment)

The four renders below were generated with the **original** Perchance prompts,
which depicted the algae layer as a primary / glowing O₂ source
("O₂ diffuses from algae to skin", "O₂ OUT"). That framing **overstates**
the technology. Per `docs/RESEARCH_BRIEF_2026.md` and the grant deck, algae is a
**supplemental O₂ source + CO₂ scrubber / redundancy layer** (≈20–33% of resting
O₂ need); primary O₂ comes from compressed/chemical reserves.

These renders are therefore **visually inconsistent** with the honest framing used
in `index.html` (grant deck), `README.md`, and `docs/BIOARMOR_CONCEPT.md`, and
**should be regenerated before any public grant submission**.

| File | Depicts | Status | Re-render with |
|------|---------|--------|----------------|
| `BIOARMOR_FULL_SUIT_CONCEPT.png` | Full V1/V2 suit hero | Pending re-render | V1/V2 Hero + Full Body prompts |
| `Bioarmor concept.jpg` | V1 integrated daily-wear suit | Pending re-render | V1 Daily Wear / In-Station prompts |
| `Bioarmor concept2.jpg` | V2 modular exo-layer | Pending re-render | V2 Full Body / ExoArmor prompts |
| `BIOARMOR_TILE_BLUEPRINT.png` | Tile layer stack / blueprint | Mostly OK (layers), verify labels | V2 Tile Exploded View prompt |

## How to regenerate (honest framing)

1. Open **`archive/PERCHANCE_PROMPTS.md`** — the **Honest-Framing Edition**.
   It contains an explicit honesty guard: never show algae as the sole/primary O₂
   source; always pair it with the primary compressed/chemical O₂ system.
2. Run each prompt through your image generator (Perchance / Midjourney / etc.).
3. Replace the matching file above with the new render.
4. Update this table: change the Status column to **Done** and note the date.

## Layer-stack reference

The authoritative, spec-accurate 3D layer models live in `models/layers/`
(PV 0.1 mm, Ceramic 2 mm, CNT 0.3 mm, Surlyn 1 mm, Aerogel+Algae 6 mm,
Aramid+UHMWPE 0.5 mm, SMA 0.2 mm, Comfort 0.5 mm). Concept art should match
these thicknesses and the supplemental-algae framing.
