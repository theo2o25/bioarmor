# DECISION MEMO — LICENSE vs DESIGN-AROUND for US 11,192,667

**To:** BioArmor Engineering & Executive Team
**From:** IP / Technology Strategy
**Date:** September 5, 2026
**Re:** Recommended course on US 11,192,667 (NASA LAR-TOPS-122) and surrounding patent landscape

---

> **CAVEAT.** Positions in this memo are based on the **August 2026 deep dive** (see `docs/RESEARCH_DEEPDIVE_Aug2026.md` and the Freedom-to-Operate notes in `docs/BIOARMOR_CONCEPT.md`). Patent status can change. **Confirm current status, expiry dates, assignment, and claim scope with the USPTO and qualified counsel before filing or entering any license.**

---

## 1. Executive Summary

US 11,192,667 (NASA, LAR-TOPS-122) claims the **Surlyn 8940 + Barex + thiol-ene self-healing triad** as a spacesuit wall between atmosphere and vacuum. It expires **17 February 2037**.

BioArmor does **not** need that triad. Our primary pressure membrane uses **sPUU disulfide vitrimer** (an associative covalent network that heals at room temperature without oxygen) — a materially different chemistry. Our electrodynamic dust shield is now implemented as a **spiral-deposited ATSP/MWCNT/PTFE coating on top of**, and **not interwoven with**, the structural `CNT-Aramid` weave, which specifically avoids the interwoven-electrode structure entangled with the licensed triad.

**Recommendation: Design around, do not license at this time.** Preserve the option to license Surlyn as an optional sacrificial outer layer later, but do not make the license a gating dependency. Provisional filing should proceed on the design-around construction (30-day target).

---

## 2. License vs Design-Around Comparison

| Criterion | License NASA US 11,192,667 | Design-Around (Spiral-on-Weave + Vitrimer) |
|-----------|----------------------------|---------------------------------------------|
| **Cost** | NASA license fees, royalty share, administrative and negotiation overhead; unknown but non-trivial; recurring royalty | R&D cost of qualifying the vitrimer bladder and spiral EDS deposition; largely internal, one-time, no recurring royalty |
| **Timeline** | Negotiation + drafting + NASA review; uncertain, can span quarters | Immediate — qualification tests (Test #1 hoop, Test #3 EDS) run in parallel and are already in the roadmap |
| **Technical risk** | Low (proven NASA triad) but constrained to NASA IP; ties architecture to a single chemistry | Moderate — requires qualification of the disulfide vitrimer hoop and the spiral EDS; both are already prioritized (Tests #1, #3) |
| **Freedom-to-operate** | Clean under 667, but bound by license terms and NASA's control | Clean under 667 because the triad is not practiced; spiral-on-top avoids interwoven-electrode entanglement |
| **Value retained** | License is reusable if we later want Surlyn; gives credibility | Full ownership of IP in the design-around; stronger patentable white space for the modular system |
| **Expiry** | 2037-02-17 — long runway; license locks us in for a decade+ | Not relevant — we never depend on 667 |

**Bottom line.** The license buys a chemistry we do not need as a primary system. The design-around costs engineering time we are already spending (Tests #1 and #3) and yields unrestricted, owned IP. Therefore **design around**.

---

## 3. Claim Chart — US 11,192,667 vs BioArmor

The table maps the claimed wall structure of US 11,192,667 to BioArmor's position (avoid vs license).

| US 11,192,667 claim element (representative) | BioArmor position | Action |
|----------------------------------------------|-------------------|--------|
| Surlyn 8940 ionomer as pressure-wall material | Not used as primary membrane; sPUU disulfide vitrimer used instead | **Avoid** |
| Barex barrier layer | Not used in primary wall | **Avoid** |
| Thiol-ene self-healing chemistry | Not used; using urea-H-bond / disulfide associative covalent network | **Avoid** |
| Wall between atmosphere and vacuum | BioArmor wall exists but with different chemistry stack | **Avoid** (no element dependency) |
| Self-healing upon impact | Achieved differently (RT intrinsic vitrimer, O2-independent) | **Avoid** |
| Interwoven EDS within the triadic wall (if claimed scope reaches it) | Spiral EDS deposited **on top of** the weave, **not interwoven** | **Avoid** — structural/functional decoupling |
| Optional Surlyn use | Retained only as outer sacrificial layer | **License** (optional, contingent) |

> The central strategy is that **no single element of the triadic claim is practiced**. Where Surlyn is desired at all, it is kept as a non-essential sacrificial outer and gated behind a (future, optional) NASA license.

---

## 4. Free-to-Use Expired Patents (Prior Art to Cite)

These expired patents are free to build on and should be cited as prior art / design freedom references:

| Patent | Subject | Status |
|--------|---------|--------|
| **US 7,354,877** (Lockheed) | Carbon-nanotube-fiber garment / spacesuit fabrics | **Expired Oct 2023** — free |
| **US 7,834,527** | DEA fiber / joint transducers | **Expired May 2026** — free |

Also relevant (not free):
- **US 11,192,667** (NASA) — active to 2037-02-17 — design around or license.
- **US 7,612,152** (Univ. Illinois capsule healing) — active to **2026-12-17** — not a viable design-around until then; do not depend on it.

---

## 5. Recommended 5-Step Action Plan

1. **Confirm prior-art search.** Run a fresh USPTO/patent-database search on the **spiral-on-weave EDS** and the **disulfide vitrimer gas-impermeable bladder** to confirm the design-around is not itself anticipated. Confirm current status/expiry of US 11,192,667, US 7,612,152, US 7,354,877, and US 7,834,527.

2. **File provisional in 30 days.** Draft and file a provisional application on the **modular two-system architecture** with the **spiral-on-top EDS** and **vitrimer bladder** as the core claims (see `docs/PROVISIONAL_PATENT_DRAFT.md` for the preliminary draft). Preserve a filing date before further public disclosure.

3. **Confirm FTO with counsel.** Have patent counsel independently confirm that the vitrimer + spiral-on-top construction clears US 11,192,667 and that the expired patents are indeed expired and free.

4. **Run qualification tests in parallel.** Execute the gating engineering tests that also de-risk the design-around: **Test #1** (hoop-stress cylinder for the vitrimer + UHMWPE/aramid restraint) and **Test #3** (spiral EDS at seal geometry, perchlorate-spiked, <1% residual, no arcing at 500 V / 6 mbar CO2).

5. **Keep the license as an option.** Do not execute a Surlyn license now. Revisit only if (a) qualification of the vitrimer hoop fails, or (b) a flight customer contractually requires the NASA-proven Surlyn chemistry — in which case negotiate a narrow license for the sacrificial outer layer only.

---

## 6. Timing Rationale

- US 7,612,152 (capsule healing) expires **2026-12-17** — under four months away. Even if the vitrimer path stumbled, a fallback capsule-healing design-around becomes free early next year. This strengthens the case for waiting rather than paying for a license now.
- Filing a provisional with the **spiral-on-top** and **vitrimer** claims inside 30 days preserves priority while the test program (Test #1 hoop, Test #3 EDS) matures independently.

---

*This memo is an engineering/planning assessment. It is informational and not legal advice. Confirm all positions with counsel and the USPTO before filing.*
