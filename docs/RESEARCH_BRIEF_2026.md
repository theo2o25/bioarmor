# BioArmor Research Brief — August 2026

> Compiled from 4 parallel research agents covering spacesuit tech, algae bioreactors, materials, and grants.

---

## Executive Summary

| Domain | Key Finding | Impact on BioArmor |
|--------|-------------|-------------------|
| **Spacesuit Tech** | AxEMU 1.5+ years behind schedule; sole provider risk | Opportunity for alternative approach |
| **Algae Bioreactor** | Wearable algae O₂ demonstrated (TAPED); scale challenge remains | Concept validated, sizing needs work |
| **Materials** | CNT <$50/kg, perovskite 27.5% efficient, Surlyn self-healing proven | Key components becoming affordable |
| **Grants** | NSF SBIR open Nov 4, 2026; NASA SBIR BAA active | Immediate funding path available |

---

## 1. Spacesuit Technology Landscape

### AxEMU Status (NASA/Axiom)

| Item | Status |
|------|--------|
| Schedule | **1.5+ years behind** original plan |
| Current target | LEO demo **2027**, lunar landing **2028** (Artemis IV) |
| OIG estimate | Realistic slip to **2031** if 8.7-year avg holds |
| Provider risk | Axiom is **sole active provider** (Collins withdrew June 2024) |
| Contract value | xEVAS ceiling: **$3.1B** |
| Recent progress | 850+ hours pressurized testing; NBL crewed runs; LCVG unveiled June 2026 |
| Funding | Axiom raised **$350M** (Feb 2026) |

### SpaceX EVA Suit

| Item | Status |
|------|--------|
| Architecture | Umbilical-based (no PLSS backpack) |
| Operating pressure | ~5.3 psi |
| Performance | Independent analysis shows **limited mobility** (45-75° shoulder range) |
| Gen 2 plans | No public announcement of second-generation EVA suit |
| NASA competition | **Not competing** for government EVA contracts |

### New Competitors

| Company | Focus | Stage |
|---------|-------|-------|
| **REA Space** (Italy) | European EVA suit | Prototype (2025) |
| **Metakosmos** (Sydney) | "Kosmosuit" platform | Pre-seed ($2M) |
| **ILC Dover** | Tex-PLSS modular life support | $4.49M Texas grant |
| **ADAM** (Texas A&M) | Mechanical counterpressure suit | University phase |

### BioArmor Positioning

> NASA is locked to a single suit vendor with documented schedule risk. The OIG identified "several companies that could compete." SpaceX has documented mobility limitations. **There is a clear market opening for a lighter, cheaper, more capable alternative.**

---

## 2. Algae Bioreactor & Life Support

### Key Research Findings

| System | Status | Notes |
|--------|--------|-------|
| **PBR@LSR** (DLR/ESA) | Failed after ~2 weeks | Power supply issue, not biology |
| **Ground PBR** (membrane raceway) | 188-day run | 12.24 g/L max biomass |
| **TAPED** (wearable algae O₂) | Lab prototype | **Self-powered, body-worn** — proof of concept |
| **Lunar Palace 365** (China) | 370-day, 4-person | **98.2% closure** — world record |
| **NuCLEUS** (Interstellar Lab) | TRL-5 analog demo | Flying on Haven-1 (2027) |

### Sizing Reality Check

| Requirement | Data Source | Value |
|-------------|-------------|-------|
| Full O₂ for 1 person | BIOS-3 historical | ~8 m² illuminated surface |
| 10-30% O₂ contribution | Detrell 2021 | **50-100 L culture volume** |
| Full O₂ via PBR | Helisch 2020 | **482 L minimum** |
| Economic break-even | Detrell 2021 | **4-7.3 year missions** |

### Implications for BioArmor

**The scale mismatch is real.** A small wearable algae system cannot provide full respiratory O₂. However:
- **Supplemental O₂** (10-30% contribution) is feasible at ~50-100L
- **CO₂ scrubbing** (removing exhaled CO₂) is more achievable than O₂ production
- **TAPED proves** wearable-scale algae O₂ works for medical applications
- **Best framing:** Algae as **supplement + redundancy**, not primary life support

### Recommendation

> **Reframe algae as CO₂ scrubber + supplemental O₂, not primary life support.** This is more technically credible and aligns with DLR/ESA positioning. Keep chemical/compressed O₂ as primary.

---

## 3. Materials Developments

### Carbon Nanotube Fabric

| Finding | Source | Impact |
|---------|--------|--------|
| OCSiAl opened 60 t/yr plant (Serbia) | TextileWorld | Supply scaling |
| Canatu + DENSO tripled throughput | Canatu | Cost reduction |
| MWCNT fiber <$50/kg | Dataintelo | **Affordable** |
| CNT-silicone/Kevlar hybrid (90x25cm) | MDPI | Scalable production |
| WHO concern: fiber release on washing | MDPI | **Safety flag** |

### Self-Healing Polymers (Surlyn)

| Finding | Source | Impact |
|---------|--------|--------|
| NASA SHIELD project active | TechPort | Validates concept |
| Seals at ~2 km/s impacts | Polimi/ESA | **Proven for micrometeorites** |
| CNT doping (4-5 wt%) boosts healing to 80% | MDPI | **Enhanced performance** |
| 3D-printable Surlyn retains self-healing | CSIC | **Manufacturable** |
| **Gamma radiation degrades healing** | Polimi | **Risk: must shield from radiation** |

### 3D Printed Ceramic Armor

| Finding | Source | Impact |
|---------|--------|--------|
| DLP-printed alumina matches commercial grade | MDPI | **97.5% density, 19.4 GPa** |
| 90% less time than traditional | Army Research Lab | **Faster production** |
| AM ballistic efficiency still ~2x lower | PMC review | **Ballistic gap remains** |
| Functionally graded architecture proposed | Preprint | Weight reduction potential |

### Perovskite Solar Cells

| Finding | Source | Impact |
|---------|--------|--------|
| **27.5% efficient** flexible all-perovskite | Nature Photonics | **World record** |
| Certified 23% on 20cm² module | Nature | **Scalable** |
| 97.2% retained after 10,000 bends | Nature | **Durable** |
| 150 MW production line running | PV Magazine | **Commercially available** |
| 1.77 W/g power-to-weight | Nature | **Ultra-lightweight** |

### Hydrophilic Aerogel

| Finding | Source | Impact |
|---------|--------|--------|
| Superhydrophilic flexible silica exists | CEJ 2024 | **Matches requirement** |
| Ambient-pressure drying (no supercritical) | DLR patent | **Cheaper production** |
| λ as low as 14.8 mW/m·K | MDPI | **Best insulation** |
| Polyimide: -196°C to +300°C range | JMCA | **Temperature proof** |

### Electroactive Polymers

| Finding | Source | Impact |
|---------|--------|--------|
| Soft PAM: 897 N force, 87mm displacement | npj Flex Electronics | **Useful force levels** |
| STAMAS project: astronaut muscle suit | MDPI | **Direct space precedent** |
| Rolled DEA drives cables remotely | npj Robotics | **Decouples actuator from joint** |
| Variable-stiffness rope clutch exo | Biomimetics | **7 stiffness states** |

### Materials Verdict

> **All key BioArmor materials are becoming commercially viable.** CNT costs dropping, perovskite at record efficiency, Surlyn self-healing proven, ceramic printing mature. **Two risks flagged:** CNT fiber release (WHO concern) and radiation degradation of Surlyn healing.

---

## 4. Grant Opportunities

### Immediately Actionable

| Program | Amount | Deadline | Fit |
|---------|--------|----------|-----|
| ✅ **NSF SBIR** | $305K Phase I | **Nov 4, 2026** | High |
| ✅ **NASA SBIR Phase II Sequential** | Up to $225K | **Sept 11, 2026** | High (if Phase I awardee) |
| ✅ **DOE SBIR Genesis/AI** | Phase I | **Sept 10, 2026** | Medium |
| ✅ **NASA CCRPP** | Varies | **~Aug 29, 2026** | Medium |

### Upcoming (Monitor)

| Program | Amount | Expected | Notes |
|---------|--------|----------|-------|
| NASA SBIR new appendix | $225K Phase I | TBD | BAA valid through Sept 2027 |
| NASA Tipping Point | $10-50M | Irregular | Last round 2022; ≤500 employees = 10% cost share |
| DARPA office-wide BAA | Variable | Annual refresh | Requires revolutionary framing |
| Seraphim Space Accelerator | Equity-based | ~Annual | TRL 5-9, $1.1B+ alumni raised |
| CDL Space | No equity | ~Annual | Mentor-focused |

### Recommended Application Sequence

1. **Now:** Register in ProSAMS (NASA) and SAM.gov
2. **Sept 10:** DOE SBIR Genesis/AI (if materials-AI fit)
3. **Sept 11:** NASA SBIR Phase II Sequential (if eligible)
4. **Nov 4:** NSF SBIR Phase I ($305K, topic-agnostic)
5. **Watch:** NASA SBIR next appendix release
6. **Watch:** NASA Tipping Point reopening

### Application Tips

- **NSF:** Mandatory Project Pitch before proposal (3-8 week lead time)
- **NASA:** Register in ProSAMS immediately; watch for new appendix releases
- **DARPA:** Contact program manager before submitting; must be revolutionary
- **Tipping Point:** Need demo-mature technology; 10% cost share for small companies

---

## 5. Strategic Recommendations

### Immediate Actions (Next 30 Days)

1. **Register in ProSAMS** (NASA SBIR portal)
2. **Register on SAM.gov** (federal grant eligibility)
3. **Submit NSF Project Pitch** for Nov 4 deadline
4. **File provisional patent** for algae bioreactor concept
5. **Update concept** based on algae scale research (reframe as supplemental)

### Medium-Term (3-6 Months)

1. **Build algae bioreactor prototype** (proof of concept)
2. **Test Surlyn + CNT composite** (self-healing + strain sensing)
3. **Apply to Seraphim/CDL accelerators** (when applications open)
4. **Partner with university** (Drexel, Georgia Tech, MIT for materials)
5. **Publish white paper** on BioArmor concept

### Positioning Adjustments

Based on research, consider:

1. **Reframe algae** as CO₂ scrubber + supplemental O₂ (not primary)
2. **Emphasize CNT mesh** as key differentiator (structural + electrical)
3. **Highlight perovskite PV** integration (record efficiency, lightweight)
4. **Address radiation concern** for Surlyn healing (add shielding layer)
5. **Position as alternative** to AxEMU schedule risk (NASA needs backup)

---

## Sources

### Spacesuit Tech
- NASA OIG IG-26-006 (April 2026)
- Axiom Space press releases (2024-2026)
- SpaceNews, Aerospace America reporting
- Polaris Dawn mission data

### Algae Bioreactor
- Detrell et al., ICES-2020-25
- Helisch et al., Life Sci Space Res 24 (2020)
- TAPED, ACS Nano (April 2025)
- Lunar Palace 365, Innovation (2024)

### Materials
- Nature Photonics (August 2025) — perovskite
- MDPI Nanomaterials — CNT-Surlyn composite
- MDPI Materials — DLP-printed alumina
- npj Flex Electronics — soft PAM

### Grants
- NASA SBIR/STTR BAA 80NSSC26R0003
- NSF 26-510/26-511 solicitations
- DOE ConnectWerx AMP portal

---

*Last updated: August 23, 2026*
*Research conducted by 4 parallel retrieval agents*
