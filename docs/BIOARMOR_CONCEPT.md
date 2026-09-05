# BIOARMOR: Two-System Architecture

## Overview

BIOARMOR is a **two-system architecture** that separates daily wear life support from modular EVA protection:

**System 1: Daily Wear Suit (Bio-Layer)** — The soft suit astronauts wear inside the station. Handles life support, comfort, thermal regulation, and basic radiation shielding.

**System 2: ExoArmor (Modular Shell)** — Hard armor tiles that snap on top of the daily wear suit for EVA missions. Handles impact protection, energy harvesting, and heavy radiation shielding.

This modular approach is **buildable with current technology** — the daily wear suit uses existing soft-goods manufacturing, while ExoArmor tiles can be iterated and upgraded independently.

---

## SYSTEM 1: DAILY WEAR SUIT

### Purpose
- Life support (algae supplemental O2 + CO2 scrubbing, complementing primary O2)
- Pressure containment (airtight bladder)
- Thermal regulation
- Comfort + moisture management
- Basic radiation shielding (algae water content)
- Passive (no external power required)

### Layer Stack (inside to outside) — Reconfigured 2026-09 (Polar-Jet Hardened)

```
┌─────────────────────────────────────────┐
│  COMFORT LINER (0.5mm)                  │
│  Material: Lyocell / silicone gel       │
│  Function: Skin contact, moisture wick  │
├─────────────────────────────────────────┤
│  CERAMIC NANOFIBER AEROGEL + ALGAE (4mm)│
│  Material: BC-PVSQ / SiC@SiO2 NF aerogel + Chlorella │
│  Function: Thermal insulation (14 mW/mK radial, -196 to 1200C), CO2 scrub + supplemental O2 │
│  Exchange, radiation shielding          │
│  Key: 33% thinner than silica (6→4mm), >99% compressibility, 10k shear cycles, no dusting │
│  Wicks sweat to feed algae; encapsulated by liner to contain fibers │
├─────────────────────────────────────────┤
│  SELF-HEALING PRESSURE BLADDER (1mm)    │
│  Material: sPUU disulfide vitrimer (primary) + Surlyn ionomer (outer sacrificial) │
│  Function: Airtight seal, puncture repair. sPUU heals intrinsic at RT, no O2/heat/light │
│  needed; 77% strength @24hr, infinite cycles. Surlyn kept as licensed outer if available │
├─────────────────────────────────────────┤
│  BNNT RADIATION LINER (0.2mm)           │
│  Material: BNNT-HDPE 50wt% (aligned) / BNNT film (KIST 2025) │
│  Function: Neutron + SPE shielding (990% linear abs vs HDPE, 15% > Al same mass), thermal spread │
│  Density 1.3 g/cm³, 18 GPa modulus, flexible, also abrasion lubricant │
├─────────────────────────────────────────┤
│  CNT-ARAMID ELECTRODYNAMIC WEAVE (0.5mm) │
│  Material: Aramid + CNT + ATSP/MWCNT/PTFE spiral EDS coating (10µm) │
│  Function: Structural, cut-resistant, heat/UV resistant, AND low-voltage EDS (0.3kV) │
│  Spiral geometry repels 0.1m particles, TPFS reduces residual size 50%, in-situ repairable 40C/30min │
├─────────────────────────────────────────┤
│  SMA WIRES + HYDROGEL/TE COOLING (0.2mm)│
│  Material: Nitinol (NiTi) + agar/PAAm hydrogel + thermoelectric module │
│  Function: Joint assistance + active cooling (9.6C drop/4s, 71deg bend) for 5Hz movement │
└─────────────────────────────────────────┘
```
> **Reconfig 2026-09:** Incorporates KIST BNNT film (Nov 2025), Langley BNNT-HDPE 50wt%, BC-PVSQ/SiC@SiO2 ceramic NF aerogel, sPUU vitrimer (ATSP), ATSP/MWCNT/PTFE spiral EDS (Mar 2026), hydrogel+TE SMA boost, and perovskite/Si tandem 29.88-33.6% PV. Net: 23.39kg, 8.81mm, $10.16M (test calc 2026-09-05).

### Life Support Cycle (Closed Loop)
```
Astronaut sweats → Hydrophilic aerogel wicks moisture →
Algae receive water + CO2 + light (LEDs) →
Algae produce supplemental O2 (~10-20% of need — optimistic, validate at bench scale) → O2 diffuses through aerogel →
Astronaut breathes O2
```

### Daily Wear Suit Specs (Reconfigured 2026-09 + Killer Review 2026-09-05)

> **Killer review applied:** 2.2kg bladder alone cannot carry hoop stress; EMU is 127-145kg because restraint/bearings/PLSS carry load. Figures below are **bladder+restraint tube mass only**, not suited system.

- **Total thickness:** ~6.5mm daily-wear (4mm ceramic NF aerogel + 1mm sPUU + 0.2mm BNNT + 0.5mm CNT-Aramid+ATSP + 0.5mm liner + 0.2mm SMA/hydrogel); ExoArmor 2.6mm → total 8.81mm
- **Mass (tube only):** ~2.0 kg bladder+restraint tube; ~2.9 kg with SMA/hydrogel+TE + BNNT + EDS; Full V2 tube 23.39kg — **DOES NOT INCLUDE PLSS** (see Mass Split below). Add PLSS for 8hr EVA or down-scope to 500g/3hr emergency IVA.
- **Pressure:** 4.3 psi (29.6 kPa) **sPUU bladder + UHMWPE/aramid restraint** must carry hoop stress. **Test #1 required: Surlyn/sPUU + UHMWPE/aramid cylinder at 4.3 psi, <5% diametral growth at 24h.** Until then, 2.2kg target invalid. Drop “Surlyn healing in vacuum” until vacuum-chamber data.
- **Life support:** **Helmet + closed fan loop + LiOH/amine scrubber required.** Passive aerogel pores do NOT deliver O2 to alveoli. Kill “breathe through aerogel.” Algae = **habitat loop, OFF EVA power bus** (harvest 44.2mW vs 25W lighting deficit). Keep 10mW UV + LiOH primary.
- **Thermal:** **Ranked 1) low-e outer (VO2 0.1) 2) LCHG + fingertip/foot heaters only 3) no whole-suit Peltier.** 500mW cannot move 100-300W metabolic heat. Spec 35-40°C passive invalid for Mars thin-gas convection + dust. Require Mars-chamber manikin test.
- **Dust:** ATSP spiral 0.3kV 90-97% **flat swatch only** — residual 3-10% kills rotary seals. Require 2-stage: EDS + mechanical wash + seal labyrinth (Test #3b at seal geometry, perchlorate-spiked 0.5wt%, <1% residual, no arcing at 500V/6mbar CO2).
- **Radiation:** **Admit GCR PARTIAL = unmitigated** — 300g wet /1.8m² = 0.02 g/cm², need 10-1000x for GCR. BNNT 0.2mm helps SPE 2/5 only; Al2O3 tiles increase secondaries. Storm shelter stays in habitat. Don't mass-compare to wearable HDPE research garments.
- **Polar geysers:** **Operational control only — stay off caps during spring** (Ls180-250). Tiles 2/5 for debris only, not jet impingement. Impingement test required to claim otherwise.
- **Manufacturing:** Same + add helmet/fan qualification + restraint seam qualification

### SMA Joint Assistance

**Shape Memory Alloy (Nitinol) wires run along each joint axis to assist movement.**

```
SMA WIRE PLACEMENT (arm example):

SHOULDER          ELBOW           WRIST
   │                │                │
   ├── SMA wires ───┼── SMA wires ───┤
   │   (4-6 wires)  │   (4-6 wires)  │
   │                │                │
   ▼                ▼                ▼
Assist flexion   Assist extension  Stabilize
```

**How SMA assists movement:**
1. Astronaut bends joint → SMA wires stretch (cool, flexible)
2. Astronaut extends joint → electrical pulse heats wires
3. Wires contract to pre-set length → assists extension
4. Joint returns to neutral position with less effort

**SMA Specs (per joint):**

| Parameter | Value |
|-----------|-------|
| Wire material | Nitinol (NiTi) |
| Wire diameter | 0.5mm |
| Wire length | ~15cm per wire |
| Wires per joint | 4-6 |
| Force per wire | ~5N |
| Total force per joint | ~20-30N |
| Power per joint | ~100mW (pulsed heating) |
| Total SMA power | ~500mW (6 joints) |

**Joints with SMA assist:**
- Shoulders (2) — assist lifting arms overhead
- Elbows (2) — assist extending arms
- Knees (2) — assist standing/walking
- Wrists (optional) — stabilization during tool use

**Benefits (SMA baseline — recalculated):**

| Benefit | Value | Basis |
|---------|-------|-------|
| Joint torque reduction | ~24% (weighted avg) | Shoulders ~14%, elbows/knees ~40%; EVA usage-weighted |
| Fatigue reduction | ~25-30% | Pulsed micro-rest effect improves endurance nonlinearly |
| Metabolic / O₂ savings | ~10-15% | Proportional to reduced mechanical work |
| Active assistance | Yes | Without heavy motors (~50 g total vs 850 g motors) |
| Flexible when not powered | Yes | Nitinol is superelastic at body temperature |

> **Calculation assumptions:** 4.3 psi suit pressure, ~25N per joint SMA force, 15 cm lever arm. Shoulder joint diameter ~150 mm (dominant EVA load); elbow/knee ~100 mm. Pulled from literature on pressurized-suit joint mechanics (EMU-class). Pulsed assist creates micro-rests that compound fatigue reduction beyond simple torque ratio.

### Electrodynamic Dust Shield (ATSP/MWCNT/PTFE Spiral — 2026 Reconfig)

**CNT fibers + ATSP/MWCNT/PTFE spiral EDS woven into Aramid — low-voltage, repairable, lunar-proven.**

Based on NASA SPIcDER (85-95%), Firefly Blue Ghost Mission 1 lunar demo Mar 2025 (97% glass, 82% radiator), and 2026 low-voltage breakthrough (ATSP/MWCNT/PTFE spray, 0.3kV).

```
CNT-ARAMID EDS LAYER (cross-section):

  ─── CNT fiber (+) ──── insulated gap ──── CNT fiber (−) ────
  │                                                              │
  │  Aramid matrix (structural, abrasion-resistant)              │
  │                                                              │
  ─── CNT fiber (−) ──── insulated gap ──── CNT fiber (+) ────

  AC signal (100-500V, 1-100 Hz) → traveling electric wave
  Wave repels charged dust particles (both + and − polarity)
```

**How it works:**
- Interdigitated CNT fiber electrodes woven into Aramid fabric
- Parylene/polyimide coating insulates fibers (except at bus bars)
- AC voltage creates traveling electric wave across suit surface
- Wave exerts Coulomb + image-charge force on dust particles
- Particles levitated away from surface before contact
- Bipolar: handles both positive (sunlit) and negative (shadow) dust

**Specifications (Updated 2026-09 — spiral ATSP):**

| Parameter | Value |
|-----------|-------|
| Electrode material | CNT fiber (0.1 mm) + ATSP/MWCNT/PTFE composite (spiral) |
| Substrate | Aramid weave (Kevlar/Nextel) + TPFS fluorosilane topcoat |
| Insulation | Parylene-C/polyimide + ATSP (intrinsic) — repairable spray 40°C/30min N2 |
| AC voltage | **300V (0.3kV) spiral** — down from 0.8-1kV legacy; 1.8-3kV optimized Cu baseline still >90% |
| Frequency | 1-100 Hz 3-phase pulsating square wave |
| Power (peak) | ~1.5-3 W per m² (was 5-10W) — 70% saving |
| Power (average, pulsed) | ~0.5-1.5 W (100ms pulses every 1-10s) |
| Dust removal efficiency | 90-97% dynamic ( >90% at 1.8kV CMrGO, 97% lunar glass) — TPFS limits loss to 10% vs 30% PS |
| Friction reduction | 56% vs bare Kevlar (LMS-D1 simulant) |
| Mass added | ~50-100g CNT + ~22g ATSP 10µm coating (spiral) |
| Flex durability | >10,000 cycles; curvature minimal impact |

**Operating modes:**
| Mode | When | Power |
|------|------|-------|
| Standby | Clean environment, inside habitat | 0 W |
| Active pulse | Walking near regolith, dust storm, EVA | ~5 W (100ms pulses) |
| Continuous | Heavy dust exposure (landing, excavation) | ~10 W |

**Why CNT-Aramid co-weave (not separate EDS layer):**
- Single layer does two jobs → saves mass and volume
- CNT reinforces Aramid (CNT-aramid composites show improved tensile strength)
- No extra electronics layer to maintain or protect
- Dust shield is structural — can't be damaged separately from suit
- CNT fibers are conductive → serve as wiring for EDS + power distribution

**Validation status:**
- NASA SPIcDER: CNT electrodes on spacesuit fabric → 85-95% dust removal ✓
- NASA EDS on Moon: rigid EDS demonstrated on lunar surface (March 2025) ✓
- Flexible EDS: copper-on-polyimide and graphene oxide on polymer → 90% removal ✓
- CNT sheet dust shielding: lunar dust does NOT adhere to CNT ✓
- **Gap:** CNT-Aramid co-weave with structural integration → not yet demonstrated (novel contribution)

### How Self-Healing Actually Works — Reconfigured to sPUU Vitrimer (O2-Independent)

**Important:** sPUU does NOT require heat, light, catalyst, or O2. Surlyn needs impact heat + O2.

**sPUU Healing mechanism (primary, 2026-09):**
1. Cut/puncture exposes aromatic disulfide bonds (251 kJ/mol) + urea H-bonds (8 kJ/mol)
2. Associative covalent network (CAN) — cleavage and reformation concerted at RT
3. Intrinsic: heals infinite times; 1cm x 2mm cut → ~100% in 12hr RT, scratch → 1hr; 52% @1hr / 65% @6hr / 77% @24hr 4.5MPa 14x strain (NASA NIAC SmartSuit)
4. Works in vacuum/CO2 jet — no O2 monomer needed (unlike Surlyn thiol-ene)
5. Also forms optical waveguide sensor — recovers signal after knife cut (embedded PDMS)

**Surlyn mechanism (outer sacrificial, if licensed):**
1. Micrometeorite 300 m/s to 5 km/s → friction 95°C melt → elastic memory snaps (µs) at 24°C — NASA LAR-TOPS-122
2. Needs impact heat + O2; fails in hard vacuum/CO2 without O2-bearing interface layer
3. Seal recovery ~80-90%, structural unverified; gamma reduces efficiency (mitigated by BNNT liner below)

**Why aerogel doesn't block healing:** heat is inside Surlyn layer; aerogel insulates rest of suit. sPUU needs no heat at all.

**Key properties (verified):**
- sPUU: RT intrinsic, infinite cycles, 77% @24hr; survives vacuum/CO2
- Surlyn: passive at 24°C, µs, NASA-validated but O2-dependent
- Vitrimer ATSP: no chemistry change after 50yr LEO proton+ATOX (Meyer) — candidate for permanent bond

**Open risks (address before flight):**
- **sPUU:** Validate 100Gy gamma dose doesn't degrade disulfide kinetics (Polimi: PUUs fail @100Gy, vitrimers OK)
- **Surlyn:** Keep only as licensed outer if US 11,192,667 (2037) licensed; else remove after 2026-12-17 when US 7,612,152 expires
- **Radiation:** BNNT 0.2mm liner now mitigates gamma for both heal chemistries

---

## MODULAR ALGAE PODS (Snap-On Life Support Extensions)

### Purpose
- Extend O2 reserves for long-duration EVAs
- Provide redundant life support
- Scale capacity for different mission profiles
- Breed algae for replenishment

### Pod Design

```
ALGAE POD CROSS-SECTION:

┌─────────────────────────────────────┐
│  ┌─────────────────────────────┐   │
│  │  ALGAE CULTURE (500mL)      │   │  ← Chlorella/Spirulina
│  │  Suspended in nutrient      │   │    in liquid medium
│  │  solution with LED arrays   │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │  CNT MESH CONTACT POINTS    │   │  ← Power from mesh
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │  QUICK-CONNECT FLUID PORTS  │   │  ← Water/nutrient in/out
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │  SNAP-FIT CLIPS             │   │  ← Attaches to CNT mesh
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

### Pod Specs

| Parameter | Value |
|-----------|-------|
| **Volume** | 500 mL per pod |
| **Mass (empty)** | 300g |
| **Mass (filled)** | 500g |
| **O2 production** | tens of mL O₂/hr per pod (peak, literature-scale — not a primary source) |
| **Power draw** | ~50mW (internal LEDs) |
| **Connection** | Snap-fit to CNT mesh + fluid quick-connect |
| **Lifespan** | 2-4 weeks (algae need nutrients) |

### Mission Configurations

| Mission Duration | Pods | Supplemental O2 Added | Mass Added |
|------------------|------|----------------------|------------|
| Short EVA (2-4 hrs) | 0 | Baseline suit only | 0g |
| Standard EVA (6-8 hrs) | 1 | +~40 mL/hr (tens of mL/hr per pod, peak) | 500g |
| Extended EVA (12-24 hrs) | 2 | +~80 mL/hr | 1,000g |
| Multi-day mission | 4 | +~160 mL/hr | 2,000g |

*Algae is a **low-rate supplemental/redundant** O2 source; primary O2 is compressed/chemical reserves. Per-pod output is literature-scale (tens of mL O₂/hr) — scale with pod count, not mission O2 demand.*

### Pod Placement

Pods snap onto the CNT mesh at designated mounting points:
- **Chest (2 pods)** — primary mounting, balanced center of gravity
- **Back (2 pods)** — secondary mounting, higher capacity
- **Shoulders (optional)** — emergency reserve

### Pod Features

1. **Self-contained** — each pod has algae, nutrients, LEDs, fluid ports
2. **Swappable** — disconnect fluid quick-connect, snap off old pod, snap on new
3. **Transparent panels** — visible algae health (green = healthy, yellow = needs nutrients)
4. **Sensor integration** — O2/CO2 sensors in each pod, data to HUD
5. **Nutrient reservoir** — 2-week supply of nutrients in each pod

---

## HYBRID JOINT ASSISTANCE SYSTEM

> **Scope — resolves the dual joint-system description:** This is the **active (motorized) joint-assistance option** for EVA-heavy configurations. It is distinct from the passive **SMA-wire** assist described under System 1. Baseline daily-wear uses the lightweight SMA wires (~50 g, pulsed ~500 mW); the active tendon-motor system below is an *optional add-on* (≈850–900 g, ≈2 W) for demanding EVAs. Pick the architecture per mission profile — do not apply both as baseline.

### Purpose
- Reduce astronaut fatigue during long EVAs (6-8 hours)
- Assist overhead work, tool manipulation, and walking
- Extend EVA duration by 2-3 hours
- Reduce task errors by ~30-40%

### Architecture: Tendon-Driven + Passive Springs

```
TORSO (Motor Housing):
┌─────────────────────────────────────┐
│  Motor 1 (Shoulders) ← 400g, 1W   │
│  Motor 2 (Elbows) ← 200g, 500mW   │
│  Motor 3 (Knees) ← 200g, 500mW    │
│  Controller + LiPo battery ← 200g  │
│  Cables route to joints            │
└─────────────────────────────────────┘
         │ cables │
    ┌────┴────┬────┴────┐
    ▼         ▼         ▼
Shoulders   Elbows    Knees
(cables)    (cables)  (cables)
    │         │         │
    ▼         ▼         ▼
┌───────┐ ┌───────┐ ┌───────┐
│Motor  │ │Motor  │ │Motor  │
│pulley │ │pulley │ │pulley │
└───────┘ └───────┘ └───────┘

WRISTS (passive):
┌───────┐ ┌───────┐
│Spring │ │Spring │
│assist │ │assist │
└───────┘ └───────┘
```

### Joint Actuation Specifications

| Joint | Actuator | Mass | Power | Force | Purpose |
|-------|----------|------|-------|-------|---------|
| Shoulders (2) | Tendon-driven motor | 400g | 1W | 200N each | Overhead work, lifting |
| Elbows (2) | Tendon-driven motor | 200g | 500mW | 100N each | Tool manipulation |
| Knees (2) | Tendon-driven motor | 200g | 500mW | 150N each | Walking/standing |
| Wrists (2) | Passive spring | 50g | 0 | 50N each | Fine motor support |
| **Total** | — | **850g** | **2W** | — | — |

### Power Management

- **Problem:** Joint motors need 2W, but we only harvest 35.5mW
- **Solution:** LiPo battery buffer (50g, 500mAh)
- **Duty cycle:** Motors only activate during movement (50%)
- **Average power:** 1W
- **Battery provides:** 30 minutes of continuous motor use
- **Recharges from:** PV during rest periods

### Benefits

| Benefit | Value | Basis |
|---------|-------|-------|
| Joint torque reduction | ~100%+ (motors fully overcome suit pressure) | 200N shoulders, 100N elbows, 150N knees vs ~26 Nm / ~9 Nm pressure resistance |
| Arm fatigue reduction | ~40-50% less effort | Near-complete pressure compensation + continuous micro-rest |
| EVA duration extension | +2-3 hours | Lower metabolic rate → slower O₂ depletion |
| Task error reduction | ~30-40% fewer errors | Reduced fatigue → better dexterity in later EVA hours |
| Oxygen savings | ~20-30% less consumption | Proportional to metabolic reduction |
| Safety improvement | Fewer accidents | Less fatigue → fewer mistakes |

### How It Works

**Tendon-Driven System:**
1. Motor at torso pulls cable
2. Cable runs along suit to joint pulley
3. Pulley converts linear pull to rotational movement
4. Joint moves with reduced astronaut effort
5. Spring provides return force when motor releases

**Passive Spring System:**
1. Elastic element stores energy during flexion
2. Releases energy during extension
3. No power required
4. Reduces wrist fatigue during repetitive tasks

---

## DUST PROTECTION SYSTEM (Electrodynamic Dust Shield)

### Purpose
- Repel lunar/Mars dust from suit surface, helmet, gloves, boots
- Prevent dust infiltration into seals and joints
- Protect equipment from abrasive glass-like particles

### Implementation

**Primary: CNT-Aramid EDS (body suit)**
- CNT fiber electrodes woven into Aramid outer layer (see *Electrodynamic Dust Shield* section above)
- Covers torso, arms, legs — all Aramid surfaces
- 85-95% dust removal (validated by NASA SPIcDER)
- Dual function: structural + dust shield

**Secondary: Transparent EDS (helmet, gloves, boots)**
- Helmet visor needs transparency → ITO or graphene oxide electrodes on polycarbonate
- Gloves/boots → CNT-Aramid EDS extends to these areas
- Same AC traveling-wave principle

```
ELECTRODYNAMIC DUST SHIELD (EDS):
┌─────────────────────────────────┐
│  CNT fiber electrodes woven     │
│  into Aramid (body) or          │
│  transparent electrodes         │
│  on helmet visor                │
│  ┌───┬───┬───┬───┬───┬───┐    │
│  │ + │ - │ + │ - │ + │ - │    │
│  ├───┼───┼───┼───┼───┼───┤    │
│  │ - │ + │ - │ + │ - │ + │    │
│  └───┴───┴───┴───┴───┴───┘    │
│  AC voltage creates traveling  │
│  wave that repels dust         │
└─────────────────────────────────┘
```

### Components

| Location | Electrode Material | Size | Mass | Power |
|----------|-------------------|------|------|-------|
| Body suit (torso, arms, legs) | CNT fiber in Aramid | ~1.5 m² | ~100g | ~5W (pulsed) |
| Helmet visor | ITO / graphene oxide | 100cm² | 50g | 5mW |
| Gloves | CNT fiber in Aramid | 200cm² | 30g | 2mW |
| Boots | CNT fiber in Aramid | 300cm² | 40g | 3mW |
| **Total** | | **~1.8 m²** | **~220g** | **~5W peak** |

### Features
- Bipolar: handles both positive (sunlit) and negative (shadow) dust
- Body suit: CNT-Aramid co-weave (structural + dust shield in one layer)
- Helmet: transparent electrodes (invisible on visor)
- AC voltage (100-500V, low current <1mA)
- Traveling wave repels dust particles
- Validated by NASA SPIcDER (85-95% removal) and Firefly Blue Ghost EDS demo (March 2025)
- Power from LiPo buffer + PV recharge

---

## GLOVES AND BOOTS

### Gloves

**Layer Structure:**
```
┌─────────────────────────────────┐
│  OUTER: Kevlar + ceramic        │
│  Cut/abrasion resistance        │
├─────────────────────────────────┤
│  MIDDLE: CNT mesh               │
│  Structural + heating elements  │
├─────────────────────────────────┤
│  INNER: Surlyn bladder          │
│  Pressure retention             │
├─────────────────────────────────┤
│  PALM: Silicone grip pads       │
│  Tool handling                  │
├─────────────────────────────────┤
│  FINGERTIPS: Piezo sensors      │
│  Tactile feedback               │
└─────────────────────────────────┘
```

**Features:**
- Heated fingertips (prevent cold injuries)
- Force feedback sensors (feel through gloves)
- Quick-change system (swap damaged gloves)
- EDS dust protection on back of hand
- **Mass:** 200g per pair

### Boots

**Layer Structure:**
```
┌─────────────────────────────────┐
│  SOLE: Rubber + ceramic         │
│  Grip + puncture resistance     │
├─────────────────────────────────┤
│  MIDSOLE: Aerogel               │
│  Thermal insulation             │
├─────────────────────────────────┤
│  UPPER: Kevlar + UHMWPE         │
│  Protection + radiation shield  │
├─────────────────────────────────┤
│  INSOLE: Piezoelectric          │
│  Energy harvesting from walking │
└─────────────────────────────────┘
```

**Features:**
- Vibram sole for lunar/Mars terrain
- Piezoelectric harvesting (walking generates power)
- Magnetic boots option (for station surfaces)
- EDS dust protection on lower leg
- **Mass:** 300g per pair

---

## ACTIVE THERMAL CONTROL

### Purpose
- Heat astronaut in cold environments (lunar shadow: -173°C)
- Cool astronaut in hot environments (lunar sun: 127°C)
- Remove body heat during activity

### How It Works

```
LIQUID COOLING + HEATING GARMENT (LCHG):
┌─────────────────────────────────┐
│  Micro-tubes woven into liner   │
│  ┌─────────────────────────────┐│
│  │ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~││
│  │ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~││
│  │ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~││
│  └─────────────────────────────┘│
│  Water circulates through tubes │
│  Peltier modules heat/cool water│
│  Temp sensors regulate flow     │
└─────────────────────────────────┘
```

### Components

| Component | Function | Mass |
|-----------|----------|------|
| Micro-tubes (3mm) | Water circulation | 100g |
| Micro-pump | Circulate water | 50g |
| Peltier modules | Heat/cool water | 100g |
| Temp sensors | Monitor temperature | 10g |
| Controller | Regulate system | 40g |
| **Total** | — | **300g** |

### Features
- Adjustable temperature (60-100°F range)
- 500mW peak power, 100mW average
- Automatic regulation via suit sensors
- Works with aerogel insulation layer
- Power from CNT mesh + battery buffer

---

## COMMUNICATION SYSTEM

### Purpose
- Voice communication (astronaut to ground/crew)
- Data telemetry (suit status to ground)
- Mesh networking (suit-to-suit)
- HD video streaming

### Components

```
HELMET:
┌─────────────────────────────────┐
│  UHF radio (primary)            │
│  S-band (backup)                │
│  Mesh antenna (integrated)      │
│  Bone conduction speakers       │
│  Microphone array               │
└─────────────────────────────────┘

TORSO:
┌─────────────────────────────────┐
│  Transceiver unit               │
│  Signal processor               │
│  Encryption module              │
│  Data bus connection to CNT     │
└─────────────────────────────────┘
```

### Specifications

| Parameter | Value |
|-----------|-------|
| Frequency | UHF (400-470 MHz) + S-band (2 GHz) |
| Range | 5 km (surface), 50 km (orbit) |
| Data rate | 10 Mbps (HD video) |
| Encryption | AES-256 |
| Power | 200mW (transmit), 50mW (receive) |
| **Mass** | **150g** |

### Features
- Bone conduction speakers (hear through helmet)
- Noise-canceling microphone array
- Mesh networking (suit-to-suit communication)
- HD video streaming to ground
- Emergency beacon (automatic SOS)

---

## HUD (HEADS-UP DISPLAY)

### Purpose
- Visual display of suit status
- Environmental warnings
- Navigation assistance
- Task guidance

### How It Works

```
RETINAL PROJECTION HUD:
┌─────────────────────────────────┐
│  Helmet visor:                  │
│  ┌─────────────────────────────┐│
│  │   ╔═══════════════════╗     ││
│  │   ║  O2: 98%  BAT: 85%║     ││
│  │   ║  TEMP: 72°F  TIME: ║     ││
│  │   ║  04:32:15          ║     ││
│  │   ╚═══════════════════╝     ││
│  └─────────────────────────────┘│
│  Projector in helmet rim        │
│  Reflects off visor coating     │
│  Astronaut sees overlay         │
└─────────────────────────────────┘
```

### Display Information

| Category | Data Shown |
|----------|------------|
| **Life Support** | O2 levels, CO2 levels, humidity |
| **Power** | Battery %, solar generation |
| **Thermal** | Body temp, suit temp, cooling status |
| **Radiation** | Current dose, cumulative dose, warnings |
| **Navigation** | Waypoints, distance to habitat |
| **Communication** | Signal strength, crew status |
| **Alerts** | Warnings, cautions, advisories |

### Specifications

| Parameter | Value |
|-----------|-------|
| Display | Retinal projection (laser) |
| Resolution | 1080p (per eye) |
| Brightness | Adjustable (0.1-1000 nits) |
| FOV | 30° (adjustable position) |
| Power | 50mW |
| **Mass** | **50g** |

---

## BACKUP LIFE SUPPORT

### Purpose
- Redundancy if primary algae system fails
- Emergency O2 supply
- Backup CO2 removal

### Triple Redundancy

```
LIFE SUPPORT HIERARCHY:
┌─────────────────────────────────┐
│  1. ALGAE (supplemental)        │
│     - Supplemental O2 from CO2     │
│     - Continuous operation      │
│     - tens of mL/hr supplemental O2 (literature-scale)           │
├─────────────────────────────────┤
│  2. CHEMICAL O2 GENERATOR       │
│     - Lithium perchlorate       │
│     - Emergency backup          │
│     - 2-hour supply             │
├─────────────────────────────────┤
│  3. COMPRESSED O2 TANK          │
│     - High-pressure (3000 psi)  │
│     - 1-hour supply             │
│     - Immediate emergencies     │
└─────────────────────────────────┘
```

### Components

| Component | Supply | Mass | Purpose |
|-----------|--------|------|---------|
| Chemical O2 candles | 2 hours | 200g | Backup O2 |
| Compressed O2 tank | 1 hour | 300g | Emergency O2 |
| **Total backup** | **3 hours** | **500g** | — |

### Features
- Automatic switchover if algae fails
- Manual override available
- CO2 scrubber (lithium hydroxide canister)
- **Total backup mass:** 500g

---

## WATER RECYCLING SYSTEM

### Purpose
- Recover sweat for reuse
- Reduce water consumption
- Supply algae hydration

### How It Works

```
CLOSED-LOOP WATER RECOVERY:
┌─────────────────────────────────┐
│  Sweat → Collection channels    │
│       → Filters (remove salts)  │
│       → UV sterilization       │
│       → Storage tank           │
│       → Algae hydration        │
│       → Drinking water         │
└─────────────────────────────────┘
```

### Components

| Component | Function | Mass |
|-----------|----------|------|
| Collection channels | Wicking fabric | 30g |
| Salt filters | Remove contaminants | 20g |
| UV sterilizer | Kill bacteria | 30g |
| Storage tank | 500mL capacity | 20g |
| **Total** | — | **100g** |

### Features
- Recovers 90% of sweat
- UV sterilization prevents contamination
- Can be used for drinking or algae
- Power: 10mW (UV LED)
- **Mass:** 100g

---

## SYSTEM 2: EXOARMOR (Modular Shell)

### Purpose
- Impact protection (micrometeorites, debris)
- Energy harvesting (PV, piezo, TEG)
- Heavy radiation shielding
- Thermal protection (extreme temps)
- Communication + sensors
- **Snaps on top of daily wear suit for EVA**

### Layer Stack (outside to inside) — Reconfigured 2026-09

```
┌─────────────────────────────────────────┐
│  PV COATING (0.1mm)                     │
│  Material: Flexible perovskite/Si tandem (33.6% cert, ICO:H/IZO) │
│  Function: Solar — 29.88% cert flex (Nature Comms Jul 2025), air-process ambient, 2000 bends @2.25cm │
├─────────────────────────────────────────┤
│  CERAMIC TILES (2mm)                    │
│  Material: Al2O3 (LithaLox) / SiC@SiO2 nanowire option │
│  Function: Impact + thermal (14 mW/mK radial, 24.7 kN·m/kg) + VO2 variable emissivity (0.1 cold/0.9 hot) │
│  + CNT underlayer for mesh contact      │
├─────────────────────────────────────────┤
│  CNT MESH SKELETON (0.3mm)             │
│  Material: Woven CNT fabric + CNT/Gr supercap yarns │
│  Function: Structure + bus (5e6 S/m) + EMI shield + tiles snap on │
├─────────────────────────────────────────┤
│  FLUID TUBES (0.2mm)                   │
│  Material: PEEK micro-channels          │
│  Function: Water/nutrient transport     │
│  alongside mesh (waste out)             │
├─────────────────────────────────────────┤
│  DEA PASSIVE PRESSURE CUFF (optional)  │
│  Material: Dielectric elastomer + CNT/carbon black hybrid electrodes │
│  Function: Passive MCP 29.6kPa at 2.42 prestretch, 5.42kPa delta in 0.7s (13x SMA), kHz BW │
├─────────────────────────────────────────┤
│  ATTACHMENT TO DAILY WEAR SUIT          │
│  Mechanism: Mesh edges attach to suit   │
│  Material: Flexible polymer interface   │
└─────────────────────────────────────────┘
```

### ExoArmor Specs (Reconfigured 2026-09)
- **Tile size:** 60mm hexagonal (20-30mm at joints — SiC@SiO2 toughness allows tighter bend)
- **Total thickness:** ~2.6mm (tiles 2.0 + CNT 0.3 + fluid 0.2 + DEA 0.1 optional)
- **Mass per tile:** ~125g (ceramic) + 0.01g PV; Full armor ~17.1 kg (+0.1kg DEA)
- **CNT mesh:** Continuous woven, 5e6 S/m, tiles snap on; now also supercap bus
- **Fluid tubes:** PEEK alongside mesh
- **Chest plate:** 42 tiles = 5.3 kg (ceramic) — total chest with mesh/frame 6.66kg
- **Power harvesting:** ~44.2 mW avg (+24% via 33.6% tandem, was 35.5); PV peak ~355 mW (was 285); retains 97.2% after 10k bends, 230W/m² air-process theanine variant
- **DEA (optional):** Passive MCP cuff 29.6kPa (2.42 prestretch), 5.42kPa active delta 0.7s, kHz BW, 0.7s vs SMA 9-49s
- **Variable emissivity:** VO2/Fabry-Perot outer cuts heating 46W→0W in shadow (thermal model)
- **Manufacturing:** Weave CNT, print fluid+DEA, snap ceramic, deposit ICO:H/IZO perovskite tandem

---

## COMBINED SYSTEM

```
EVA CONFIGURATION:
┌──────────────────────────────────┐
│  EXOARMOR (removable)            │
│  PV + Ceramic + CNT mesh         │
├──────────────────────────────────┤
│  DAILY WEAR SUIT (permanent)     │
│  UHMWPE + Aramid (Kevlar) + Surlyn + Algae │
├──────────────────────────────────┤
│  JOINT ASSISTANCE                │
│  SMA wires (baseline) + opt. motors (EVA) │
├──────────────────────────────────┤
│  ASTRONAUT                       │
└──────────────────────────────────┘

IN-STATION CONFIGURATION:
┌──────────────────────────────────┐
│  DAILY WEAR SUIT ONLY            │
│  UHMWPE + Aramid (Kevlar) + Surlyn + Algae │
├──────────────────────────────────┤
│  JOINT ASSISTANCE                │
│  SMA wires (baseline) + opt. motors (EVA) │
├──────────────────────────────────┤
│  ASTRONAUT                       │
└──────────────────────────────────┘
```

### Mass Comparison (Reconfigured 2026-09 Test — TUBE ONLY, PLSS EXCLUDED)
| Configuration | Mass (tube only) | vs EMU tube | Notes |
|---------------|------------------|-------------|-------|
| Daily wear suit (bladder+restraint) | 2.0 kg | — | Gating on Test #1 hoop |
| + BNNT + ATSP + hydrogel/TE | 2.9 kg | — | +0.7kg |
| + Gloves + Boots | 3.4 kg | — | — |
| + Chest armor | 9.4 kg | — | — |
| + Full ExoArmor (+DEA) | 21.8 kg | 17% tube | +0.4kg vs Aug |
| + Algae pods (4) | 24.0 kg | — | Habitat only now |
| **Reconfigured V2 tube (4 pods)** | **23.39 kg (8.81mm, $10.16M tube)** | **18.4% tube** | **+0.39kg +$0.16M vs 23.0kg $10.0M** |
| EMU **with PLSS** | 127 kg (45kg PLSS + 82kg suit) | 100% system | BioArmor system = add PLSS 8-12kg for 8hr or down-scope to 500g/3hr emergency IVA |
| **Killer note:** Do not compare 21-25kg tube to 127kg system. Valid comps: tube vs tube (82kg) or system vs system (add PLSS). | | | |

*Test calc 2026-09-05: BNNT 0.468kg + ATSP 0.022kg - aerogel 0.101kg = +0.389kg. Cost BNNT $0.144M + aerogel $0.015M + vitrimer $0.005M = +$0.164M. Thickness 10.6→8.81mm. **PLSS not included — see split above.** Patent US 11,192,667 blocks woven EDS until 2037; ATSP spiral on top is design-around.*

---

## DESIGN PHILOSOPHY

**Mimic mitochondria** — create gradients, harvest them, store the energy, protect the source.

**The suit is a synthetic organism.** It breathes (algae), feeds (sweat), repairs itself (self-healing), and protects (armor).

**Key insight:** Don't integrate everything into one system. Separate concerns:
- Life support = soft, passive, always on
- Protection = hard, modular, mission-specific
- Pathways = printed on tile backs (no separate chain mail layer)

**This is buildable today.** Every component exists. The innovation is the integration.

---

## TILE BLUEPRINT

```
═══════════════════════════════════════════════════════════════════════
                    BIOARMOR TILE BLUEPRINT
              Cross-Section of Single Hexagonal Tile
═══════════════════════════════════════════════════════════════════════

TILE DIMENSIONS:
• Shape: Truncated icosahedron (soccer ball pattern)
• Width: ~15cm (hexagonal face)
• Total Thickness: ~8.81mm EVA stack (daily 6.5 + Exo 2.31 excl. DEA; was 10mm)

═══════════════════════════════════════════════════════════════════════
LAYER 1: PV COATING (0.1mm) — 33.6% TANDEM UPDATE
═══════════════════════════════════════════════════════════════════════
Material:     Flexible perovskite/Si tandem (ICO:H + IZO, Soochow/KAUST 33.6% cert 2.015V) / air-process theanine 25.21%
Function:     Solar energy collection
Output:       355 mW peak (was 285), 44.2 mW avg (was 35.5) — +24%; retains 97.2% after 10k bends / 90% after 230W/m² module 10k bends
Thickness:    0.1mm (100 micrometers)
Properties:   Flexible, lightweight, 29.88% cert flex (Nature Comms Jul 2025), 33.6% cert (Nature 2026), ambient air R2R

═══════════════════════════════════════════════════════════════════════
LAYER 2: CERAMIC + CNT STRUCTURE + PRINTED PATHWAYS (2.5mm)
═══════════════════════════════════════════════════════════════════════
2A: CERAMIC ARMOR (2.0mm)
Material:     Alumina (Al₂O₃) - LithaLox HP 500
Function:     Impact protection, thermal resistance
Properties:   430 MPa bending strength, 1650°C max temp
Attachment:   Snap-fit pin (SpaceX Starship style)

2B: CNT UNDERLAYER (0.5mm)
Material:     Carbon nanotube sheet
Function:     Energy transfer + structural reinforcement
Properties:   High electrical conductivity, flexible

2C: PRINTED PATHWAYS (on tile back face)
Material:     Multi-material direct-write (polymer + CNT)
Function:     Routes all distribution pathways from tile to tile
Properties:   Micro-channel resolution (~100μm), flexible polymer

PRINTED PATHWAYS ON TILE BACK:
┌─────────────────────────────────────────────────────────────────┐
│ PATHWAY           │ FUNCTION                    │ MATERIAL      │
├───────────────────┼─────────────────────────────┼───────────────┤
│ Fluid Channels    │ Water/nutrients → algae     │ Polymer       │
│ CNT Wiring        │ Power distribution          │ Carbon nanotube│
│ Graphene Mesh     │ High-current bus            │ Graphene      │
│ Sensors           │ Biometric monitoring        │ Various       │
└─────────────────────────────────────────────────────────────────┘

Note: Pathways are PRINTED directly onto each tile's back face during
manufacturing. Tiles connect via flexible bridge segments at edges,
creating continuous pathways across the full armor surface.

═══════════════════════════════════════════════════════════════════════
LAYER 3: AEROGEL + ALGAE MATRIX (8mm) — MOVED TO DAILY WEAR SUIT
═══════════════════════════════════════════════════════════════════════

Note: In the two-system architecture, the aerogel + algae layer is part
of the DAILY WEAR SUIT, not the ExoArmor. The ExoArmor tiles snap ON
TOP of the daily wear suit. This means:

- Daily wear suit = UHMWPE + Aramid (Kevlar) + Surlyn + Aerogel/Algae + Liner (8.2mm)
- ExoArmor = PV + Ceramic (printed paths) + CNT + Clips (3mm)

The ExoArmor tiles are thin, hard shells that protect the soft suit
underneath. Pathways on tile backs connect to fluid ports
in the daily wear suit.

═══════════════════════════════════════════════════════════════════════
LAYER 4: AEROGEL + ALGAE MATRIX (8mm)
═══════════════════════════════════════════════════════════════════════
4A: AEROGEL SCAFFOLD (4mm daily — was 8mm)
Material:     Ceramic nanofiber aerogel BC-PVSQ (16.1 mg/cm³, 27 mW/mK, >99% compress, 10k shears) / SiC@SiO2 (14 mW/mK, 24.7 kN·m/kg, 1200C)
Function:     Thermal insulation + gas exchange
Properties:   Nanopores allow passive O2/CO2 diffusion; no dusting when encapsulated by comfort liner
Temperature:  -196 to 533C (gradient PINF@CNT dual), stable 1200C SiC@SiO2; continuous ~600-800C

4B: ALGAE SUSPENSION (within aerogel)
Material:     Chlorella or Spirulina
Function:     supplemental O2 + CO2 removal + radiation shielding
Properties:   Water content blocks cosmic rays
Light Source:  LEDs in daily wear suit (powered by PV electricity)
Cycle:        4-6 hours/day (intermittent)

4C: ENERGY STORAGE (within aerogel + CNT mesh)
Materials:    CNT supercapacitors + graphene fibers (MXene option)
Function:     Store harvested energy
Capacity:     355 mW peak harvesting (44.2 mW avg, +24% via 33.6% tandem) — buffers 25W algae LED via LiPo hybrid

4D: O2 STORAGE (within aerogel)
Materials:    MOF beds + chemical generators
Function:     Backup oxygen supply
Duration:     Emergency reserve

═══════════════════════════════════════════════════════════════════════
CROSS-SECTION DIAGRAM
═══════════════════════════════════════════════════════════════════════

    SUNLIGHT
        ↓
┌───────────────────────────────────────────────┐
│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│ ← PV COATING (0.1mm)
├───────────────────────────────────────────────┤
│███████████████████████████████████████████████│ ← CERAMIC (2.0mm)
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│ ← CNT UNDERLAYER (0.5mm)
│ ┌──FC──┐ ┌──CNT──┐ ┌──GM──┐             │ ← PRINTED PATHWAYS
│ └──────┘ └───────┘ └──────┘             │    (on tile back)
├───────────────────────────────────────────────┤    FC = Fluid Channel
│                                              │    CNT = Power wiring
│  DAILY WEAR SUIT:                            │    GM = Graphene mesh
│  UHMWPE + Aramid (Kevlar) + Surlyn + Aerogel/Algae + Liner   │
│  (soft, passive life support)                │
│  + LEDs for algae lighting                   │
└───────────────────────────────────────────────┘
        ↓
    BODY (O2 out, CO2 in)

═══════════════════════════════════════════════════════════════════════
PERCHANCE AI RENDERING PROMPT
═══════════════════════════════════════════════════════════════════════

Use this prompt at: https://perchance.org/ai-text-to-image-generator

"Technical cross-section blueprint of a futuristic spacesuit armor tile,
hexagonal shape, 3 labeled layers: top is thin shimmering gold solar
panel coating, middle layer is white ceramic armor with black carbon
nanotube mesh underneath and printed micro-channels on the back face
showing fluid channels, bottom is the soft daily wear suit layer with
translucent aerogel containing green algae and small LED light arrays,
clean white background, scientific illustration style, detailed
engineering diagram, 4K, high resolution"

═══════════════════════════════════════════════════════════════════════
```

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                    MODULAR ALGAE PODS (Optional)                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  SNAP-ON ALGAE CULTURE TANKS                                │   │
│  │  • 500mL per pod, tens of mL/hr O2 (supplemental, literature-scale)        │   │
│  │  • Snap onto CNT mesh at chest/back/shoulders               │   │
│  │  • Self-contained: algae + nutrients + LEDs                  │   │
│  │  • Swappable: disconnect fluid quick-connect, snap off/on    │   │
│  │  • Scalable: 0-4 pods depending on mission duration         │   │
│  └─────────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────────┤
│                         OUTER LAYER (ExoArmor)                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  THIN-FILM PEROVSKITE PV COATING                           │   │
│  │  • Solar energy collection (perovskite, 285 mW peak, sunlit) │   │
│  │  • Thin-film on ceramic surface                               │   │
│  │  • Converts sunlight → electricity                            │   │
│  └─────────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────────┤
│                    CERAMIC + CNT STRUCTURE LAYER                    │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  TESSELLATED CERAMIC ARMOR TILES                             │   │
│  │  • Truncated icosahedron pattern (soccer ball)               │   │
│  │  • SiC or Alumina (LithaLox HP 500)                         │   │
│  │  • Snap-fit pin attachment (Starship-style)                  │   │
│  │  • Individually replaceable when damaged                     │   │
│  │                                                              │   │
│  │  CNT UNDERLAYER                                              │   │
│  │  • Energy transfer from PV to storage                        │   │
│  │  • Structural reinforcement                                  │   │
│  │  • Electrical conductivity                                   │   │
│  └─────────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────────┤
│                 CNT MESH SKELETON + FLUID TUBES                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  CNT MESH (Continuous woven fabric)                          │   │
│  │                                                              │   │
│  │  STRUCTURAL FRAMEWORK                                        │   │
│  │  • CNT fiber woven into flexible mesh                        │   │
│  │  • ~6–12× specific strength vs high-strength steel (~30× vs mild steel; vendor top-spec — woven-fabric macroscale is lower)    │   │
│  │  • Tiles snap onto mesh surface                              │   │
│  │  • Mesh articulates naturally at joints                      │   │
│  │                                                              │   │
│  │  ELECTRICAL CONNECTIVITY                                     │   │
│  │  • CNT is conductive — mesh IS the wiring                    │   │
│  │  • Power distribution (PV → storage → loads)                 │   │
│  │  • Signal routing (sensors → comms)                          │   │
│  │  • EMI shielding (mesh blocks interference)                  │   │
│  │                                                              │   │
│  │  FLUID TUBES (Alongside mesh)                                │   │
│  │                                                              │   │
│  │  WATER/NUTRIENT TRANSPORT                                    │   │
│  │  • PEEK micro-channels for water/nutrient flow               │   │
│  │  • Waste removal from algae                                  │   │
│  │  • Connected to daily wear suit ports                        │   │
│  │  • Quick-connect for algae pods                              │   │
│  └─────────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────────┤
│                    DAILY WEAR SUIT LAYER                             │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  CNT-ARAMID ELECTRODYNAMIC WEAVE                             │   │
│  │  • Kevlar: 450°C rated, no creep, UV resistant               │   │
│  │  • UHMWPE inner: H-rich for radiation shielding              │   │
│  │  • CNT fiber electrodes woven into Aramid (interdigitated)   │   │
│  │  • AC traveling wave repels dust (bipolar, + and −)          │   │
│  │  • Dual function: structural + dust shield in one layer      │   │
│  │                                                              │   │
│  │  SMA WIRES                                                   │   │
│  │  • Nitinol wires along joint axes                            │   │
│  │  • Assist movement: contract when heated                     │   │
│  │  • Reduce astronaut fatigue                                  │   │
│  │                                                              │   │
│  │  SELF-HEALING BLADDER                                        │   │
│  │  • Surlyn ionomer: 95°C melting, self-heals from impact     │   │
│  │  • Airtight pressure containment                             │   │
│  │                                                              │   │
│  │  AEROGEL + ALGAE                                             │   │
│  │  • Thermal insulation, O2/CO2 exchange                       │   │
│  │  • Radiation shielding (water content)                       │   │
│  │                                                              │   │
│  │  LEDs                                                        │   │
│  │  • Micro-LED arrays for algae lighting                       │   │
│  │  • Red (660nm) + Blue (450nm)                                │   │
│  │                                                              │   │
│  │  COMFORT LINER                                               │   │
│  │  • Lyocell / silicone gel                                    │   │
│  │  • Skin contact, moisture wicking                            │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

---

## CNT MESH SKELETON: The Integrated Framework

**The CNT mesh IS the skeleton — structural support + electrical connectivity in one continuous fabric.**

Tiles snap onto the mesh. Fluid tubes alongside the mesh carry water/nutrients to algae.

### Mesh Properties

| Property | Value | Why It Matters |
|----------|-------|----------------|
| **Tensile strength** | 1–2 GPa (up to 3 GPa premium) | ~6–12× specific strength vs high-strength steel (~30× vs mild steel; vendor top-spec — woven-fabric macroscale is lower) |
| **Electrical conductivity** | 5×10⁶ S/m | Conductive — mesh IS the wiring |
| **Density** | 1.3 g/cm³ | 6x lighter than steel |
| **Flexibility** | Woven textile | Articulates at joints naturally |

### Mesh Design

```
CNT MESH CROSS-SECTION:

┌─────────────────────────────────────────────┐
│  ╔═══╗   ╔═══╗   ╔═══╗   ╔═══╗            │ ← Ceramic tiles
│  ║ T ║   ║ T ║   ║ T ║   ║ T ║            │   snap onto mesh
│  ╚═══╝   ╚═══╝   ╚═══╝   ╚═══╝            │
│─────────────────────────────────────────────│ ← CNT mesh
│  ·····  ·····  ·····  ·····               │   (woven fabric)
│─────────────────────────────────────────────│
│  ┌──FC──┐ ┌──FC──┐ ┌──FC──┐ ┌──FC──┐       │ ← Fluid tubes
│  └──────┘ └──────┘ └──────┘ └──────┘       │   (water/nutrients)
└─────────────────────────────────────────────┘

T = Ceramic tile
FC = Fluid channel tube
```

### Why This Works

| Feature | Benefit |
|---------|---------|
| **Continuous mesh** | No breaks in electrical connectivity |
| **Woven structure** | Natural flexibility at joints |
| **Snap-on tiles** | Individual replacement possible |
| **Fluid tubes** | Water/nutrient transport alongside mesh |
| **Lightweight** | 6x lighter than steel skeleton |

### Biomimetic Parallel

| Biological | CNT Mesh Equivalent |
|------------|---------------------|
| Skeleton | CNT mesh (structural framework) |
| Nervous system | CNT mesh (electrical signals) |
| Circulatory system | Fluid tubes (water/nutrient transport) |
| Skin | Ceramic tiles (outer protection) |

**The mesh IS the skeleton.** Tiles are the skin. Fluid tubes are the blood vessels.

### Algae Lighting: LEDs in Daily Wear Suit

**No fiber optics needed.** PV tiles generate electricity → stored in supercapacitors → powers LEDs in daily wear suit → algae receive light.

```
PV TILES (outer surface)
       ↓
ELECTRICITY generated
       ↓
STORED in CNT supercapacitors
       ↓
POWERS micro-LEDs in daily wear suit
       ↓
ALGAE in aerogel receive light
       ↓
PHOTOSYNTHESIS occurs (CO2 → O2)
```

**LED specs:**
- Type: Red (660nm) + Blue (450nm) — optimal for algae
- Power: 10-50 mW each
- Number: 10-15 distributed across suit
- Total lighting power: 100-750 mW
- Schedule: 4-6 hours on, 8-10 hours off (algae grow better with dark periods)

### Manufacturing Approach

1. **Weave CNT mesh** — continuous fabric, custom shape for each body region
2. **Print fluid tubes** onto mesh — water/nutrient channels
3. **Snap ceramic tiles onto mesh** — tiles have CNT underlayer that contacts mesh
4. **Connect mesh edges to daily wear suit** — flexible polymer interface

### Mesh-to-Tile Contact

Each tile has a CNT underlayer on its back face. When snapped onto the mesh:
- CNT underlayer presses against CNT mesh
- Electrical contact made by pressure (no solder/adhesive)
- Multiple contact points per tile (redundancy)

### Joint Articulation

At joints (elbows, knees, shoulders):
- **Smaller tiles** (20-30mm) instead of 60mm
- **Mesh flexes naturally** between smaller tiles
- **Fluid tubes flex** with the mesh
- **No rigid bridges** — mesh provides continuity

---

## AEROGEL: The Connective Tissue

### What Is Aerogel?

Aerogel is **99.8% air** by volume — the lightest solid material known. It's a nanostructured network of interconnected particles with open pores.

### Aerogel Properties

| Property | Value | Why It Matters |
|----------|-------|----------------|
| Density | 0.001-0.5 g/cm³ | Lightest solid known |
| Porosity | 90-99.8% | Room for everything |
| Surface area | 500-1000 m²/g | Massive reaction space |
| Thermal conductivity | 0.004-0.02 W/m·K | Best insulator known |
| Structure | Open nanopores | Fluids flow through |

### What Does Aerogel Feel Like Against Skin?

**Textile-grade aerogel is safe for direct skin contact.** Here's the reality:

| Form | Feel | Application |
|------|------|-------------|
| **Aerogel-infused fibers** | Soft, like regular fabric | Base layers, socks |
| **Aerogel laminate** | Thin, flexible membrane | Insulation layers |
| **3D fluffy nanofiber aerogel** | "Skin-like" texture | Wearable sensors |
| **Cellulose aerogel fiber** | 481% elongation, flexible | Textile integration |

**Key facts:**
- Commercial aerogel textiles (Outlast, etc.) are already worn against skin
- Aerogel-infused viscose fibers feel like regular clothing
- Aerogel blocks heat BEFORE it reaches skin
- Breathable — doesn't trap moisture
- NASA uses aerogel in spacesuit comfort layers

**The aerogel layer would feel like:** A very light, soft, slightly spongy fabric that stays cool. Think premium athletic wear, not rigid armor.

---

## Energy Budget

### Harvesting Sources (Full Body Suit ~1.5m²)

| Source | Mechanism | Power (mW) | Continuous? |
|--------|-----------|------------|-------------|
| Solar PV (outer tiles) | Photovoltaic | 150 | Daylight only |
| Thermoelectric (TEG) | Body heat gradient | 60 | Yes |
| Piezoelectric | Bending/deformation | 30 | Movement only |
| Triboelectric | Link friction | 25 | Movement only |
| RF harvesting | Ambient radio waves | 5 | Yes |
| Electromagnetic | Vibration | 15 | Movement only |
| **Total** | | **285 mW (combined peak)** | |

### Energy Storage Options

#### Tier 1: Supercapacitors (Fast Charge/Discharge)

| Technology | Density | Form Factor | Cycle Life |
|------------|---------|-------------|------------|
| CNT fiber supercapacitors | 1-10 Wh/kg | Woven into links | >100,000 |
| Graphene fiber capacitors | 5-15 Wh/kg | Aerogel matrix | >50,000 |
| MXene textile capacitors | 1-5 Wh/kg | Inner layer coating | >10,000 |

#### Tier 2: Batteries (High Energy Density)

| Technology | Density | Form Factor | Status |
|------------|---------|-------------|--------|
| Fiber zinc-ion batteries | 10-50 Wh/kg | Knittable fibers | Research |
| Solid-state thin-film | 100-400 Wh/kg | Laminated patches | Commercial |
| Graphene batteries | 50-200 Wh/kg | Flexible sheets | Research |

#### Tier 3: Hybrid Approach (Recommended)

```
SUPERCAPACITORS → Handle peak loads (sensors, comms bursts)
     ↓
BATTERIES → Store bulk energy for long-duration needs
     ↓
DIRECT HARVESTING → Power continuous low-draw systems
```

### Accumulation Over Time

| Duration | Energy Stored (Wh) | Sufficient For |
|----------|-------------------|----------------|
| 8 hours EVA | ~2.4 | Sensors + GPS |
| 24 hours | ~6.8 | Sensors + GPS + comms beacon |
| 1 week | ~48 | Full sensor suite + O2 lighting |
| 1 month | ~192 | Significant reserve |

### Power Budget with Algae Lighting

| System | Power Needed | Notes |
|--------|--------------|-------|
| Gas circulation | **0 mW** | Passive diffusion (like lungs) |
| Algae lighting | 100-750 mW | Intermittent (4-6 hrs/day) |
| Sensors | 10-50 mW | Low-power MEMS |
| Communication | 5-50 mW | Burst mode only |
| **Total** | **115-850 mW** | |

**Note (power reconciliation):** The ExoArmor PV canopy yields ~285 mW peak (~35.5 mW duty-cycle average). Driving the full ~18 L algae culture at the ~3 L/hr O₂ target would need ~25 W of LED input (≈2 W/L, Geiman 2021) — far exceeding harvested power. So in-suit algae O₂ is **power-limited** to a few-percent supplemental contribution, buffered by the LiPo and/or external power. The 10–20% figure is a bench-scale optimum with ample illumination, not the self-powered in-suit rate.

---

## Life Support System

### Passive Gas Exchange (No Pumps Required)

**Key Insight:** Biology solved this — your lungs don't use pumps. Gas exchange happens via **passive diffusion** through concentration gradients.

| Biological System | BIOARMOR Equivalent |
|-------------------|---------------------|
| Alveolar membrane (0.5 μm thin) | Aerogel nanopores |
| 70 m² lung surface area | 500-1000 m²/g aerogel |
| CO2 diffuses down gradient | CO2 flows from exhalation into aerogel |
| O2 diffuses down gradient | O2 flows from algae zone to breathing mask |
| Diaphragm movement drives flow | Body movement creates pressure differentials |

**Result:** Zero power required for gas circulation. The aerogel's nanoporous structure provides passive diffusion pathways — exactly like lungs.

### Photosynthetic O2 Production

```
ASTONAUT EXHALES
       ↓
CO2 collected via inner layer channels
       ↓
CO2 diffuses into aerogel matrix (passive — no pump)
       ↓
ALGAE/SYNTHETIC CHLOROPLASTS in aerogel pores
       ↓ (light from micro-LEDs + ambient)
CO2 + H2O → O2 + biomass
       ↓
O2 diffuses back through aerogel (passive)
       ↓
ASTONAUT INHALES
```

### O2/CO2 Balance Analysis

**Human Metabolic Rates:**

| State | O2 Consumption | CO2 Production | RQ (CO2/O2) |
|-------|----------------|----------------|-------------|
| At rest | 250 mL/min = **15 L/hour** | 200 mL/min = **12 L/hour** | 0.80 |
| Light EVA | 500 mL/min = **30 L/hour** | 400 mL/min = **24 L/hour** | 0.80 |
| Heavy EVA | 1000 mL/min = **60 L/hour** | 850 mL/min = **51 L/hour** | 0.85 |

**Algae O2 Production (1 cm aerogel lining, ~18 L volume):**

| Parameter | Value |
|-----------|-------|
| Body surface area (excl. head) | ~1.8 m² |
| Aerogel volume at 1 cm thickness | 18 L |
| O2 production rate (Chlorella) | 10-15 mmol/L/hour |
| **Total O2 produced** | **225 mmol/hour = 5 L/hour** |
| Effective illumination (50-70%) | 10.8 L |
| **Adjusted O2 production** | **3 L/hour** |

**Coverage at Rest:**

```
HUMAN NEEDS:     15-30 L O2/hour (resting)
ALGAE PRODUCES:   3-5 L/hour (depending on illumination, optimistic)
COVERS:           10-20% of O2 needs (optimistic — validate at bench scale)
```

### Revised Life Support Architecture

| System | Role | Coverage |
|--------|------|----------|
| **Algae photosynthesis** | Supplemental O2 + CO2 removal | 10-20% (optimistic) |
| **MOF O2 storage** | Primary O2 reserve | 2-4 hours |
| **Chemical O2 generator** | Emergency backup | 1-2 hours |
| **CO2 scrubber** | Primary CO2 removal | LiOH or amine system |

**The algae buy time, not replace the system.** They extend O2 duration, reduce scrubber load, provide emergency food, and add psychological benefit of a living system.

### Algae Lighting Strategy

**Key Finding:** Algae grow BETTER with alternating light/dark periods — just like nature.

| Parameter | Value |
|-----------|-------|
| LED type | Red (660nm) + Blue (450nm) |
| LED power | 10-50 mW each |
| Number needed | 10-15 distributed across suit |
| **Total lighting power** | **100-750 mW** |
| Lighting schedule | 4-6 hours on, 8-10 hours off |
| Daily consumption | 400-4500 mWh |

**Power budget impact:** Lighting is the largest single consumer, but intermittent operation keeps it within the ~285 mW combined peak (≈35.5 mW duty-cycle average).

### Biomass Byproduct

The algae produce edible biomass as a bonus:
- Protein-rich (60-70% protein by dry weight)
- Can be harvested and eaten
- Provides emergency nutrition
- Self-replenishing food source

---

## O2 STORAGE: The Missing Layer

### Why Storage Matters

Photosynthesis is **light-dependent**. In darkness (shadow, night, storm), O2 production stops. You need reserves.

### Storage Options

| Method | Capacity | Weight | Status |
|--------|----------|--------|--------|
| **Chemical O2 generators** | 1-2 hours | ~500g | Commercial (aircraft, submarines) |
| **MOF (Metal-Organic Framework)** | Variable | Light | Research |
| **Solid-state cryogenic** | High | Heavy | NASA research |
| **Aerogel-trapped O2** | Low-moderate | Very light | Conceptual |
| **Hemoglobin-inspired** | High | Moderate | Research |

### Recommended: Hybrid O2 System

```
PRIMARY: Algae photosynthesis (continuous when lit)
     ↓
SECONDARY: Aerogel O2 reserves (buffer storage)
     ↓
BACKUP: Chemical O2 generator (emergency)
```

**Aerogel O2 storage concept:**
- MOF (Metal-Organic Framework) nanoparticles in aerogel pores
- MOFs can adsorb/release O2 based on temperature/pressure
- Body heat triggers O2 release when needed
- Lightweight, passive, no moving parts

---

## Protection Specifications

### Armor Tiles

| Property | Value |
|----------|-------|
| Material | SiC or Al2O3 (LithaLox HP 500) |
| Pattern | Truncated icosahedron (20 hex + 12 pent) |
| Max temperature | 1,650°C (Al2O3) / 1,600°C (SiC) |
| Bending strength | 430 MPa (Al2O3) |
| Hardness | 1550 HV10 |
| Surface roughness | 0.4 μm |
| Attachment | Pin/snap-fit (individually replaceable) |

### Coverage Pattern

The truncated icosahedron provides:
- Continuous spherical coverage (no gap heating)
- 5-fold symmetry at 12 vertices (pentagons)
- Hexagonal fill for remaining surface
- Optimal strength-to-weight ratio
- Articulation at tile boundaries

### Flexible Tile Underside

Each tile has a flexible metal or polymer underside:
- Allows tile to bend during movement
- Creates more kinetic energy harvesting
- Acts as spring/dampening for impact absorption
- Increases thermoelectric coupling to body

---

## The Suit as a Living System

**The suit is a synthetic organism that needs light cycles, just like the human inside it.**

### Biological Rhythm

| System | Light Period | Dark Period |
|--------|--------------|-------------|
| **Human** | Awake, active, consuming O2 | Sleeping, resting, recovering |
| **Algae** | Photosynthesis (CO2 → O2) | Respiration (O2 → energy for growth) |
| **Suit** | Algae produce O2, charge batteries | Algae consume stored O2, rest |

**Key Insight:** The algae and the astronaut have complementary metabolic cycles. When the astronaut sleeps, the algae can rest and grow. When the astronaut is active, the algae produce more O2.

### Self-Sustaining Features

1. **Algae reproduce** — No spare parts needed for life support
2. **Biomass provides food** — Emergency nutrition from photosynthesis
3. **Passive gas exchange** — No pumps, no power for circulation
4. **Self-healing bladder** — Surlyn reforms after puncture
5. **Printed pathways** — Integrated distribution on tile backs
6. **LED illumination** — Light reaches algae everywhere
7. **Hydrophilic aerogel** — Prevents drying, maintains moisture
8. **Algae radiation shielding** — Water content blocks cosmic rays
9. **Living system** — Algae adapt to conditions over time

### Multi-Purpose Integration

Every component serves multiple functions:

| Component | Primary | Secondary | Tertiary | Quaternary |
|-----------|---------|-----------|----------|------------|
| **Printed pathways** | Distribution routing | Structural (CNT) | EMI shielding (graphene) | — |
| **LEDs** | Algae lighting | Status indicators | — | — |
| **CNT wiring** | Power distribution | Signal routing | Structural reinforcement | — |
| **Graphene mesh** | High-current bus | EMI shielding | Thermal management | — |
| **Sweat** | Electrolyte harvesting | Water for algae | Cooling | — |
| **Algae** | O2 production | CO2 removal | Radiation shielding | Moisture management |
| **Surlyn bladder** | Pressure containment | Self-healing | Moisture barrier | — |

---

## Biomimetic Design Principles

### Layer Structure (Like Human Body)

| Layer | Biological Equivalent | Engineering Equivalent |
|-------|----------------------|----------------------|
| **PV coating** | Skin (outermost protection) | Solar collection |
| **Ceramic + CNT + pathways** | Epidermis (protective layer) | Impact protection + energy transfer + distribution |
| **Snap-fit attachment** | Joints (connective tissue) | Modular connection to daily wear suit |
| **Hybrid UHMWPE + Aramid (Kevlar), CNT co-woven** | Fascia (structural + EDS layer) | Cut resistance + radiation shielding + heat/UV resistance + electrodynamic dust shield (EDS) |
| **sPUU/Surlyn bladder + UHMWPE/aramid restraint** | Peritoneum (membrane) + fascia restraint | Pressure containment + self-healing + hoop load |
| **Aerogel + algae** | Tissue/organs (functional tissue) | Thermal + gas exchange + radiation |
| **Comfort liner** | Dermis (innermost interface) | Comfort + moisture wicking |

> **Material rationale:** UHMWPE (Spectra/Dyneema-class) is the higher-performance face of the hybrid — best strength-to-weight of any technical fiber and H-rich, so it also serves as radiation shielding for its mass. Aramid (Kevlar) supplies the high-temperature/UV heritage resistance that UHMWPE lacks. CNT is co-woven into the aramid to form the electrodynamic dust shield (EDS), so a single layer performs structural + dust-repulsion roles.

### Printed Pathways as Capillary System

| Capillary Function | Printed Pathway Equivalent |
|-------------------|--------------------------|
| Structural support | CNT underlayer holds aerogel in place |
| Nutrient delivery | Fluid channels carry water/nutrients to algae |
| Waste removal | Fluid channels carry waste away from algae |
| Connection | Snap-fit clips connect ceramic armor to daily wear suit |
| **Dual purpose** | **Support + delivery (like capillaries)** |

### Printed Pathways as Neurovascular Bundle

| Biological | Engineering Equivalent |
|------------|----------------------|
| Nerve bundle | CNT wiring in printed channels (power + signal distribution) |
| Arterial network | Graphene mesh in printed channels (high-current power bus) |
| Visual system | LEDs in daily wear suit (light to algae) |
| Venous return | Fluid channels in printed channels (water/nutrient transport) |
| **Bundle structure** | **Printed pathways on tile backs = integrated distribution** |

### Mitochondria Parallel

| Biological | Engineering Equivalent |
|------------|----------------------|
| Inner membrane | Aerogel matrix with gradient zones |
| Electron transport chain | CNT proton channels |
| Proton gradient | Ion concentration gradient across aerogel |
| ATP synthase | Nanofluidic diode / proton rectifier |
| ATP production | Electrical current stored in supercapacitors |
| Matrix | Aerogel scaffold holding all components |

### Photosynthesis Parallel

| Biological | Engineering Equivalent |
|------------|----------------------|
| Chloroplast | Algae/synthetic chloroplasts in aerogel |
| Thylakoid membrane | CNT-based proton-selective membrane |
| Light harvesting | PV tiles + light-guiding aerogel |
| CO2 fixation | Algae metabolic conversion |
| O2 release | Distributed breathing channels |

### Respiratory System Parallel

| Biological | Engineering Equivalent |
|------------|----------------------|
| Lungs | Aerogel gas exchange zones (passive diffusion) |
| Trachea | Fluid channels in printed pathways (passive flow) |
| Diaphragm | Pressure-driven flow (body movement) |
| Blood vessels | CNT conductive network |
| Hemoglobin | MOF O2 storage beds |
| **Alveolar membrane** | **Aerogel nanopores (0.5 μm equivalent)** |
| **Gas exchange** | **Passive diffusion (no pumps needed)** |

### Immune System Parallel

| Biological | Engineering Equivalent |
|------------|----------------------|
| Skin | Ceramic armor tiles |
| Fat layer | Aerogel insulation |
| White blood cells | Algae (radiation shielding + O2 production) |
| **Radiation protection** | **Water in algae = hydrogen blocks cosmic rays** |
| **Self-healing** | **Surlyn bladder reforms after puncture** |

---

## RADIATION PROTECTION: Algae + Aerogel

**The insight:** Algae contain water (H2O). Water has hydrogen atoms. Hydrogen atoms block cosmic rays.

**Therefore:** Algae in aerogel provide radiation shielding automatically.

### Why This Works

| Property | How It Shields Radiation |
|----------|------------------------|
| **Water in algae** | Hydrogen atoms interact with incoming particles |
| **Density** | Aerogel + algae = effective barrier |
| **Availability** | Algae are already present for O2 production |

### Multi-Purpose Algae

The algae serve FOUR functions:

1. **O2 production** — Photosynthesis converts CO2 to O2
2. **Radiation shielding** — Water content blocks cosmic rays
3. **Moisture management** — Algae transpire water, maintaining humidity
4. **Emergency food** — Biomass provides nutrition if needed

### The Layer Simplification

Instead of separate layers:
- ~~Ceramic armor~~ → Ceramic armor (with printed pathways on back)
- ~~Aerogel~~ → Aerogel + algae (thermal + gas exchange + radiation + moisture)
- ~~Hydrogel~~ → **REMOVED** (algae provide this function)
- ~~Chain mail~~ → **REMOVED** (pathways printed on tile backs)
- ~~Inner layer~~ → Inner layer (comfort + sensors)

**Result:** ExoArmor is now just PV + Ceramic (printed paths) + CNT + Clips. Simpler, lighter, more efficient.

### Research Status

| Source | Status |
|--------|--------|
| Algae radiation resistance | Some species survive space vacuum |
| Water radiation shielding | ESA confirms hydrogen blocks cosmic rays |
| Aerogel + algae integration | Research ongoing (photosynthetic aerogel) |

---

### Thermal Regulation

Aerogel insulates — but sometimes you need to shed heat.

| Condition | Solution |
|-----------|----------|
| Cold environment | Aerogel retains body heat |
| Hot environment | Phase-change materials in aerogel absorb heat |
| Reentry heating | Outer tiles reject heat, aerogel insulates |
| Exercise/heavy work | Active cooling channels (liquid circulation) |

### Thermal Envelope

Estimated operating envelope (design target, TRL 2-3 - NOT flight-qualified):

| Parameter | Value |
|-----------|-------|
| Crew (internal) target | 18-24 degC (active control required) |
| Passive internal equilibrium (no active cooling) | ~35-40 degC (aerogel + algae metabolic heat) - too warm for crew |
| External environment (est.) | ~-170 degC (lunar night / LEO shadow) to +130 degC (lunar day / LEO sun) |
| Internal hard limit | Surlyn bladder melts ~95 degC (never reached; deep behind insulation) |

Mechanism: passive silica-aerogel insulation + active CNT heater grid (cold) + liquid-cooling/comfort layer + PCM in the aerogel (hot). No water sublimator - cooling is non-consumable (radiator + liquid loop), the main differentiator vs EMU/AxEMU.

Comparison vs reference suits:

| Aspect | EMU / AxEMU (flight) | BioArmor (target) |
|--------|----------------------|-------------------|
| Crew temp | ~18-24 degC | ~18-24 degC |
| External envelope | ~-150 to +120 degC (LEO) | ~-170 to +130 degC (est.) |
| Insulation | MLI | Aerogel (lighter) |
| Heating | Electric LCVG heaters | CNT grid in tile |
| Cooling | Water sublimator (consumable) | Liquid loop + PCM + radiator (non-consumable) |
| Maturity | Flight-proven | TRL 2-3, unverified |

Proposed thermal enhancements (beyond aerogel + CNT-in-ceramic):
- Variable-emissivity outer coating (VO2 / electrochromic) - radiate heat when hot, retain when cold.
- Dedicated radiative surface (backpack / shaded panel) - in vacuum, heat is rejected by radiation only.
- Circulating coolant loop through the CNT mesh to a radiator; pump-driven active cooling.
- Microencapsulated PCM for transient buffering during sun/shade transitions.
- Localized heaters at extremities (hands/feet) from the CNT power bus.
- Algae/water thermal mass + modulated LED lighting to tune metabolic heat.
- Sensor-driven thermal control (vary emissivity, pump, heaters) - "smart" integration.

> Caveat: external reference figures (EMU/AxEMU sublimator cooling, temp ranges) are general published knowledge and must be verified before inclusion in the deck.

### Energy-Prioritized Thermal Strategy

Principle: the cheapest watt is the one you never lose. For warmth and comfort, cut heat loss before generating heat. Ranked by warmth + comfort delivered per watt:

| Rank | Intervention | Why it is efficient | Energy benefit |
|------|--------------|--------------------|----------------|
| 1 | Low / variable-emissivity outer (cold mode) | ~Zero steady power; cuts radiative loss ~5-10x and shrinks delta-T across the aerogel | Can cut required heating from hundreds of W to tens of W |
| 2 | Seal thermal bridges + tune aerogel thickness | Conduction through the shell is the dominant leak; seams/joints/visor are worst spots; cheap (mass, not power) | Large reduction in steady heating load |
| 3 | Localized extremity heaters (hands/feet) | Resistive heating is ~100% efficient; only heat zones that drive "cold" sensation | Comfort at tens of W, not hundreds |
| 4 | Algae metabolic heat + thermal-mass buffering | Already present (O2 function); zero marginal power; store heat when PV is plentiful | Free/low-cost load leveling |
| 5 | Whole-suit CNT heater grid | 100% efficient but fights the leak across the entire body | Highest W cost; use as trim/backup only |

### Quantified Model (first-order, cold/shadow case)

Steady state in vacuum: heat conducts through the aerogel shell (k, d) to the outer surface, then radiates to space. Coupled balance (per unit area, total A):

    k * (T_in - T_out) / d  =  epsilon * sigma * (T_out^4 - T_space^4)     sigma = 5.67e-8

Assumptions:

| Parameter | Value | Source / note |
|-----------|-------|---------------|
| Aerogel thickness d | 4 mm | Reconfigured ceramic NF (was 6mm silica) |
| Aerogel conductivity k | 0.014 W/m-K | SiC@SiO2 radial 14 mW/mK (was 0.015 mid) |
| Suit area A | 2.0 m2 | Estimate (typical suited area) |
| Inner shell T_in | 305 K (32 degC) | Crew-comfort target |
| Emissivity epsilon | 0.9 (bare) / 0.1 (cold-coat) | VO2 smart radiator validated: Kim et al. Sci. Rep. 9, 11329 (2019); Benkahoul et al. Sol. Energy Mater. Sol. Cells 95, 3504 (2011); Delta-epsilon up to 0.79 (PMC11357278). Native VO2 switches opposite sign - use engineered Fabry-Perot stack for low-e-when-cold |
| Metabolic heat | 120 W | Physiology estimate (resting-suited) |
| Algae LED load | ~20-35 W | Geiman 2021: 40 L Chlorella PBR LED ~83 W (~2 W/L); AlgaeResearchSupply ~1 W/L. Suit aerogel volume ~18 L (BIOARMOR_CONCEPT.md) -> ~20-35 W. Cut via pulsed LEDs (Springer 2013: -10% power, 2.9x productivity) + active irradiance control (Geiman 2021: -57% lighting energy) |
| SMA actuation | 0.5 W | BIOARMOR_CONCEPT.md (~500 mW, 6 joints) |
| PV (flexible perovskite/Si tandem) | ~200 W/m2 -> ~400 W peak sun (reconfigured PV canopy 355mW peak 44.2mW avg; 2 m2/canopy not on suit, so algae LEDs ~25W still need buffer/external) | 33.6% cert Soochow/KAUST (Nature 2026) + 29.88% cert flex (Nature Comms Jul 2025) + 25.21% theanine ambient air (Adv Funct Mat Sep 2026) |

Results (shadow, no PV):

| Case | T_out | Shell loss Q_loss | Net heat to add (Q_loss - 120 W metabolic) |
|------|-------|-------------------|--------------------------------------------|
| High-emissivity outer (0.9) | ~239 K (-34 degC) | ~166 W | ~46 W |
| Low-emissivity outer (0.1) | ~289 K (16 degC) | ~40 W | ~0 W (metabolic covers it; cooling path needed) |

Interpretation: switching the outer to low emissivity in cold mode cuts the heating power from ~46 W to ~0 W in shadow - the crew's own metabolism keeps them warm. That is the dominant energy win.

Power budget (W):

| Mode | Heating | Algae LEDs | SMA | Total load | PV available | Battery role |
|------|---------|------------|-----|------------|--------------|--------------|
| Sunlight | ~0 | ~25 | 0.5 | ~25.5 | ~400 | Charges (surplus) |
| Shadow (low-emissivity) | ~0 | ~25 | 0.5 | ~25.5 | 0 | Supplies ~25.5 W |
| Shadow (high-emissivity) | ~46 | ~25 | 0.5 | ~71.5 | 0 | Supplies ~71.5 W |

Note: the dominant parasitic load is the algae LEDs (~25 W), not heating - so optimizing LED drive (pulsed + active irradiance control) is itself a major energy win, independent of the emissivity choice.

Over an 8 hr EVA (~half in shadow), a low-emissivity outer saves roughly (71.5 - 25.5) x 4 h ~ 184 Wh of battery - before any thicker aerogel or sealed bridges, which push the load even lower.

![BioArmor thermal control loop](../images/BIOARMOR_THERMAL_LOOP.svg)
*Figure: thermal control loop - insulation + variable emissivity + active heating/cooling, with feedback control.*

Conclusion: invest first in (1) variable-emissivity outer + insulation continuity, then (2) free/cheap heat (algae, thermal-mass buffering), and use whole-suit resistive heating only as backup trim. All draw from the shared CNT/PV bus - track every path in the energy budget alongside the algae LEDs.

> Caveat: model ignores joint/seam thermal bridges, solar input, and transient PCM - directionally correct. Estimates flagged earlier (suit area, PV areal density, algae-LED load, emissivity) are now sourced via literature (2026 web review); suit area A and exact PV areal density remain design assumptions. Validate with a full lumped thermal + energy simulation before quoting hard numbers in the deck.

#### References
- Kim H. et al., VO2-based switchable radiator for spacecraft thermal control, Sci. Rep. 9, 11329 (2019).
- Benkahoul M. et al., Thermochromic VO2 film on Al with tunable emissivity for space applications, Sol. Energy Mater. Sol. Cells 95, 3504-3508 (2011).
- VO2 smart radiator with high emissivity tunability (Delta-epsilon up to 0.79), PMCID 11357278 (2015/2024).
- Geiman C.B., Improving algae photobioreactor energy efficiency via active irradiance control, 2021 (LED ~75% of PBR load; -57% lighting energy).
- Springer 2013, flashing-LED PBR: -9.6% power, 2.86x productivity.
- NREL 2025 / Sun Y. et al. Nat Commun 16, 5733 (2025) / GreenFuel 2026 - flexible perovskite 27-34% efficiency.

### Radiation Protection

| Source | Shielding |
|--------|-----------|
| Solar particle events | Ceramic tiles (Al2O3) |
| Galactic cosmic rays | **Algae water content** (hydrogen atoms slow particles) |
| Secondary radiation | Aerogel + inner layers |

**Algae advantage:** Water content provides radiation shielding automatically. No separate hydrogel layer needed.

**Bonus:** The algae themselves are somewhat radiation-resistant (some species survive space vacuum).

### Waste Recycling

```
SWEAT → Electrolyte harvesting → Water purification → Reuse
     ↓
URINE → (future) Water recovery → Nutrient recycling → Algae feed
     ↓
CO2 → Algae conversion → O2 + biomass
     ↓
BIOMASS → Emergency nutrition
```

### Communication

| System | Power Need | Range |
|--------|------------|-------|
| Low-power beacon | 1 mW | Local (100m) |
| Body area network | 5 mW | Intra-suit |
| RF tag (passive) | 0 mW | Reader-dependent |
| Full radio | 100+ mW | Mission-dependent |

### Health Monitoring

Self-powered sensors track:
- Heart rate, SpO2, temperature
- Hydration level (sweat analysis)
- Radiation exposure
- Suit integrity (pressure, temperature)
- O2/CO2 levels in suit atmosphere

---

## Manufacturing Approach

### 3D Printing / Additive Manufacturing

1. **Armor tiles** — Ceramic 3D printing (LCM for alumina, SLM for SiC)
2. **Aerogel matrix** — Freeze-drying with embedded functional particles
3. **CNT mesh** — Weave carbon nanotube fiber into flexible fabric
4. **PV coating** — Thin-film deposition on tile surfaces
5. **Fluid tubes** — Direct-write printing onto CNT mesh
6. **Supercapacitor fibers** — Wet-spinning of CNT/graphene fibers

### Assembly

- Weave CNT mesh for each body region
- Print fluid tubes onto mesh (water/nutrient channels)
- Snap ceramic tiles onto mesh (CNT underlayer contacts mesh)
- Attach mesh edges to daily wear suit
- Install LEDs in daily wear suit (algae lighting)
- Introduce algae/chloroplasts into aerogel
- Load MOF O2 storage beds into aerogel pores

---

## Replacement Protocol

When a tile is damaged:
1. Unsnap damaged tile from CNT mesh
2. Clean mesh contact points
3. Snap in replacement tile (pre-printed)
4. CNT underlayer contacts mesh automatically
5. Aerogel matrix self-seals around new tile (hydrogel component)
6. Fluid channels reconnect via polymer tubes

---

## Current State of Art (2026)

| Component | Status | Source |
|-----------|--------|--------|
| Ceramic armor tiles | Flying | SpaceX Starship |
| Aerogel O2 generator | Published | Nature Comms May 2026 |
| Algae bioreactor | Flying | ISS DLR Photobioreactor |
| Flexible PV on fabric | Commercial | Multiple suppliers |
| CNT fiber supercapacitors | Research | Multiple labs |
| Piezo/tribo textiles | Commercial | Multiple suppliers |
| TEG body heat harvesting | Commercial | Multiple suppliers |
| Artificial chloroplasts | Lab | Festo PhotoBionicCell |
| Aerogel textiles (skin-safe) | Commercial | Outlast, Graphene-X |
| Chemical O2 generators | Commercial | Aircraft, submarines |
| Fiber zinc-ion batteries | Research | Multiple labs |
| MOF gas storage | Research | Multiple labs |
| **Passive gas exchange via aerogel** | **SOLVED** | **Biological principle (diffusion)** |
| **Micro-LED algae lighting** | **Commercial** | **Agricultural/horticultural LEDs** |
| **Fiber optic photobioreactors** | **Commercial** | **Multiple studies (2013-2026)** |
| **Side-emitting optical fibers** | **Research** | **PLOS ONE, Frontiers** |
| **Moisture-wicking Janus textiles** | **Commercial** | **Nature Comms 2026** |
| **Printed micro-channel pathways** | **Feasible** | **Direct-write 3D printing** |
| **CNT fibers in textiles** | **Commercial** | **Toray, Hexcel, multiple suppliers** |
| **Graphene textile conductors** | **Commercial** | **11.9 Ω/sq, washable** |
| **Printed micro-channel pathways** | **Feasible** | **Direct-write 3D printing** |
| **Algae radiation resistance** | **Proven** | **Some species survive space vacuum** |

**What doesn't exist:** The integrated system combining all components.

### 2026 Research Updates (Reconfigured September 2026 — Incorporates Deep Dive)

| Finding | Impact | Source |
|---------|--------|--------|
| **CNT fiber costs now <$50/kg** | Affordable structural mesh | OCSiAl Serbia 60t/yr; Canatu+DENSO tripled |
| **Perovskite PV: 33.6% cert flexible tandem** | +24% vs 27.5% — PV peak 285→355mW, avg 35.5→44.2mW | Nature 2026 Soochow/KAUST (ICO:H/IZO); Nature Comms Jul 2025 29.88% cert flex; Adv Funct Mat Sep 2026 theanine 25.21% ambient |
| **Self-healing sPUU vitrimer RT 77%** | Replaces Surlyn O2-dependence — vacuum/CO2 heal | NASA NIAC SmartSuit (disulfide 251kJ/mol, infinite cycles) |
| **ATSP vitrimer 50yr LEO stable** | Permanent adhesive, no gamma change | Meyer et al. ATSP proton+ATOX |
| **BNNT film 3.7x shielding, 15% > Al** | 0.2mm liner doubles EVA time, 18GPa flex | KIST/KAIST Adv Funct Mater Nov 2025 (surfactant LC); VCU PDMS 10µm ISS demo Mar-Aug 2025 |
| **BNNT-HDPE 50wt% 990% abs** | Bulk shielding without voids | NASA Langley neutron lab Jan 2025 |
| **Ceramic NF aerogel 14 mW/mK, 1200C** | 4mm replaces 6mm silica, -33% mass, 10k cycles | SiC@SiO2 Sci Adv + BC-PVSQ Adv Mater May 2026 + PINF@CNT dual-gradient Nature Comms Jan 2026 (-196 to 533C) |
| **ATSP/MWCNT/PTFE spiral EDS 0.3kV** | 70% power cut 5W→1.5W, 56% friction cut, 40C/30min repair | Aero Conf Mar 2026 spiral + Acta Astronautica Feb 2026 + Firefly Blue Ghost lunar 97% Mar 2025 |
| **Ceramic nanofiber aerogel SBIR** | Mars-rated insulation beyond Mylar | NASA 80NSSC24PB369 MMI Aug 2024-Feb 2025 |
| **DEA passive MCP 29.6kPa 0.7s** | 13x faster than SMA, kHz BW, passive-safe | IOP Feb 2025 CNT/carbon black hybrid cuff |
| **Hydrogel+TE SMA 9.6C/4s** | Enables 5Hz movement | SMU 2025 agar/PAAm + TE |
| **Soft PAM 897N / Bristol exosuit trousers** | Joint assist options | npj Flex Electronics Feb 2026 / Bristol Nov 2025 CRATER |
| **Radiation degrades Surlyn healing** | Kept as sacrificial outer only behind BNNT | Polimi |
| **WHO CNT fiber release** | Contain with encapsulation + comfort liner | MDPI Nanomaterials Aug 2025 |

---

## Open Questions

1. **Algae survival** — How to keep algae alive in aerogel long-term?
2. ~~**Fluid management**~~ — **SOLVED:** Passive diffusion via aerogel nanopores (no pumps needed)
3. ~~**Power management**~~ — **SOLVED:** CNT mesh carries all electrical distribution
4. ~~**Thermal management**~~ — **PARTIALLY SOLVED:** Aerogel insulates + moisture wicking provides cooling
5. **Mass budget** — Total suit weight target?
6. **EVA compatibility** — Integration with existing spacesuit interfaces?
7. ~~**Radiation protection**~~ — **SOLVED:** Algae water content blocks cosmic rays (hydrogen atoms)
8. **O2 storage duration** — How long can MOF beds hold O2?
9. ~~**Algae maintenance**~~ — **SOLVED:** Nutrient supply via fluid channels + sweat harvesting
10. **Pressure management** — Suit pressure vs. vacuum outside?
11. ~~**LED light penetration**~~ — **SOLVED:** LEDs in daily wear suit illuminate algae directly
12. ~~**Algae density optimization**~~ — **SOLVED:** Side-emitting fibers illuminate throughout aerogel
13. ~~**Energy distribution**~~ — **SOLVED:** CNT mesh skeleton carries all electrical distribution
14. ~~**Moisture management**~~ — **SOLVED:** Algae transpire water + hydrophilic aerogel + Janus textiles
15. ~~**LED light penetration**~~ — **SOLVED:** LEDs in daily wear suit illuminate algae directly
16. **CNT mesh contact reliability** — How does electrical contact hold up under flexing and thermal cycling?
17. **Fluid tube durability** — How do micro-channels survive repeated flexing at joints?
18. **Mesh tensioning** — How to keep mesh taut under tiles but flexible at joints?
19. **Algae density** — How much algae is needed for adequate radiation shielding?
20. **Algae distribution** — How to ensure even algae distribution for uniform protection?

---

## Mass Budget (Refined from STL Analysis)

### Daily Wear Suit
| Component | Weight | Notes |
|-----------|--------|-------|
| UHMWPE + Aramid (Kevlar), CNT co-woven | 600g | 0.5mm layer, structural + radiation + electrodynamic dust shield (EDS) |
| Surlyn bladder | 200g | 1mm layer, pressure + self-healing |
| Aerogel + algae | 300g | 6mm layer, thermal + O2/CO2 |
| LEDs | 50g | 10-15 micro-LEDs for algae lighting |
| Joint assistance — active motors (OPTIONAL add-on; baseline = SMA wires) | 900g | 3 motors + controller + springs |
| Comfort liner | 100g | 0.5mm layer, skin contact |
| **TOTAL DAILY WEAR** | **2,150g (2.2kg)** | |

### ExoArmor (Chest Plate Only - 42 tiles)
| Component | Weight | Notes |
|-----------|--------|-------|
| PV coating | 189g | 4.5g × 42 tiles |
| Ceramic armor | 4,977g | 118.5g × 42 tiles |
| CNT mesh skeleton | 630g | 15g per tile share |
| Fluid tubes | 168g | 4g × 42 tiles |
| Frame + supports | 700g | Attachment to daily wear suit |
| **TOTAL EXOARMOR (Chest)** | **6,664g (6.7kg)** | |

### Algae Pods (Optional)
| Component | Weight | Notes |
|-----------|--------|-------|
| Empty pod | 300g | Casing + LEDs + sensors |
| Filled pod | 500g | + algae culture + nutrients |
| Quick-connect | 50g | Fluid ports + snap-fit clips |
| **TOTAL PER POD** | **550g** | |

### Full Suit Extrapolation
| Configuration | Mass | vs EMU (127 kg) |
|---------------|------|-----------------|
| Daily wear suit only | 2.2 kg | 2% |
| + Chest armor | 8.9 kg | 7% |
| + Full ExoArmor | 19.9 kg | 16% |
| + 4 algae pods | 22.1 kg | 17% |
| EMU (current) | 127 kg | 100% |

---

## REFINED MASS BUDGET (from STL Analysis)

### Single Tile (60mm diameter, 2.4mm thick — with CNT mesh)
| Layer | Volume (cm³) | Density (g/cm³) | Mass (g) |
|-------|--------------|-----------------|----------|
| PV coating | 1.7 | 2.65 | 4.5 |
| Ceramic (Al₂O₃) | 30.0 | 3.95 | 118.5 |
| CNT mesh share | 3.5 | 1.3 | 4.5 |
| Fluid tubes share | 1.0 | 1.4 | 1.4 |
| **TOTAL (ExoArmor tile)** | | | **128.9 g** |

### Chest Plate (42 tiles, 375×426mm)
- ExoArmor mass: 5,414 g (5.4 kg)
- Support systems: 700 g
- **Total: 6,664 g (6.7 kg)**
- **vs EMU (127 kg): 7.3%**

---

## REFINED POWER BUDGET

### Energy Harvesting
| Source | Power (mW) | Duty | Average (mW) |
|--------|------------|------|--------------|
| PV tiles | 50 | 30% | 15.0 |
| Piezo (motion) | 5 | 50% | 2.5 |
| Tribo (flex) | 10 | 30% | 3.0 |
| TEG (body heat) | 15 | 100% | 15.0 |
| **TOTAL** | | | **35.5 mW (duty-cycle average)** |

### Energy Loads
| System | Power (mW) | Duty | Average (mW) |
|--------|------------|------|--------------|
| Micro-LED (algae lighting) | 200 | 5% | 10.0 |
| Sensors | 10 | 100% | 10.0 |
| Comm (BLE) | 30 | 10% | 3.0 |
| Pumps (capillary) | 50 | 10% | 5.0 |
| Heater (backup) | 500 | 2% | 10.0 |
| **TOTAL** | | | **38.0 mW** |

**Balance: -2.5 mW** (small deficit; LiPo buffer covers intermittency)

*Reconciliation:* the mW-scale budget above describes the **sensor + lightly-lit algae standby** configuration. A fully-lit dense culture (the ~3 L/hr O₂ target) needs the ~25 W LED load from the thermal model and cannot be sustained from the 285 mW PV canopy alone — it requires the LiPo buffer and/or external power. The two sections describe different operating points, not a single simultaneous state.

**EVA-mode loads (not in standby budget above):**
| System | Power | Source | Notes |
|--------|-------|--------|-------|
| Electrodynamic dust shield (EDS) | 1-10 W (pulsed) | LiPo buffer + PV recharge | Active only during dust exposure; standby = 0 W |
| Joint motors (optional) | 2 W | LiPo buffer | Only when ExoArmor attached |
| Total EVA peak | ~12 W | LiPo buffer (500 mAh = 1.85 Wh) | ~9 min continuous; extended by PV + duty cycling |

The EDS pulsed at ~100 ms every 1-10 s during dust events → average ~0.5-1 W, sustainable from PV recharging during rest pauses.

---

## LIFE SUPPORT ANALYSIS (Killer Review 2026-09-05 Applied)

- **O₂ production (algae, supplemental):** ~3 L/hr bench max with 25W LEDs — **OFF EVA bus, habitat loop only.** In-suit PV 44mW cannot drive it. Keep as CO2 scrubber + redundancy in habitat, not EVA life support. EVA primary = compressed O2 + chemical.
- **CO₂ removal (EVA):** **Helmet + closed fan loop + LiOH/amine scrubber mandatory.** Kill “aerogel passive diffusion to alveoli” — need forced washout. Test fan power + CO2 pCO2 <7.6mmHg.
- **Radiation shielding:** **GCR 1/5 unmitigated — admit PARTIAL.** 0.02 g/cm² wet layer vs 10-20 g/cm² needed. BNNT 0.2mm = SPE 2/5 only. Tiles = abrasion/thermal, increase secondaries. Keep habitat storm shelter.
- **Thermal regulation:** **Ranked: 1) low-e outer to kill leak, 2) LCHG + fingertip/foot heaters only, 3) no whole-suit 500mW Peltier** (cannot move 100-300W). Mars chamber manikin required, not 35-40°C passive spec.

---

## WHAT TO KEEP / WHAT TO SPLIT (Killer Review)

**Keep:** Two-system architecture — soft IVA emergency layer (4.3 psi bladder + UHMWPE/aramid restraint at 2-3kg, helmet+fan+LiOH) + snap-on ExoArmor (thermal/tiles/EDS 23.39kg tube) for EVA. Matches real IVA/EVA split. Keep EDS coupon as first hardware (TRL 4/5 best subsystem).

**Kill / Split:**
- Kill mass comparison 21-25kg vs 127kg EMU without PLSS. Add PLSS mass (O2 storage, scrubber, fan, battery, radiators) for 8-hr EVA or explicitly down-scope to 500g/3-hr emergency IVA only. Current table is tube-only.
- Kill “breathe through aerogel” and whole-suit Peltier. Rank thermal as above.
- Patent US 11,192,667 blocks CNT-Aramid EDS weave until 2037 — must design-around (spiral ATSP on top of weave, not woven electrodes) or license.
- Algae OFF EVA: habitat loop, not suit.

### 4 TESTS THAT ACTUALLY RETIRE RISK (in order)

| # | Test | Setup | Pass criteria | Retires |
|---|------|-------|---------------|---------|
| **1** | **Hoop-stress cylinder** | Surlyn/sPUU bladder + UHMWPE/aramid restraint tube at 4.3 psi, 24h | <5% diametral growth, no creep | 1mm bladder cannot carry hoop — invalidates 2.2kg target if fails |
| **2** | **Tile flex** | 1x 60mm alumina tile on CNT mesh, 1000 flex cycles at knee geometry | 0 popped clips, <10% contact resistance rise | Mesh continuity after flex |
| **3** | **EDS + perchlorate (seal)** | ATSP spiral 100-500V traveling wave, Mars simulant + 0.5wt% perchlorate at wrist-seal labyrinth, 6mbar CO2 | <1% residual by mass, no arcing at 500V | Dust+perchlorate kills seals/thyroid; flat swatch insufficient |
| **3b** | **Perchlorate residual** | Same as #3, measure at rotary seals/gloves | <1% at seals | — |
| **4** | **Power board** | 500mAh LiPo running EDS pulses + fingertip/foot heaters only (algae LEDs OFF) | 2hr EDS duty + 30min heaters | 2.5mW deficit proven; algae off bus |

Run #1 before claiming daily-wear mass. Run #2/#3 in parallel.

## RESEARCH GAPS (Re-ranked Post-Review)

### HIGH Priority (Risk-Retiring)
1. **Hoop-stress cylinder (Test #1)** — 4.3 psi restraint — **GATING**
2. **Tile flex 1000 cycles (Test #2)** — pop-off / contact
3. **EDS + perchlorate at seal 6mbar CO2 (Test #3)** — arcing, 85-95% insufficient, need 99% at seals
4. **Power board EDS+heaters only (Test #4)** — proves bus without algae
5. **Mars-chamber thermal manikin** — thin-gas convection + dust, not passive spec

### MEDIUM Priority
4. **Ceramic-aerogel thermal expansion mismatch** — Different CTEs may cause delamination
5. **Capillary flow at varying orientations** — Gravity-dependent; may need micro-pump backup
6. **PV perovskite stability in space UV** — Radiation degradation; needs encapsulation
7. **Biofilm buildup in algae cultures** — Long missions need sterilization protocol
8. **Tile replacement with EVA gloves** — Snap-fit must work with pressurized gloves
9. **CNT mesh-to-tile contact reliability** — Electrical contact must survive flexing and thermal cycling
10. **Polymer tube durability** — Micro-channels must survive repeated flexing at joints

### LOW Priority
9. **Algae-aerogel biocompatibility** — No known toxins but untested long-term
10. **EMI from CNT layer vs electronics** — May need shielding layer between CNT and sensors

---

## 3D PRINT FILES

### STL Files Generated
- `BIOARMOR_TILE_V2.stl` — Single hexagonal tile (ceramic + CNT)
- `BIOARMOR_CHEST_V2.stl` — Full chest plate (42 tiles, 375×426mm)
- `LAYER_1_PV_Coating.stl` — PV coating layer
- `LAYER_2A_Ceramic.stl` — Ceramic armor layer
- `LAYER_2B_CNT_Underlayer.stl` — CNT underlayer
- `LAYER_4_Aerogel_Algae.stl` — Aerogel + algae layer (daily wear suit)
- `LAYER_5_Inner_Comfort.stl` — Inner comfort layer (daily wear suit)

### Snap-Fit Design
- 3 pegs per interface in triangular pattern
- Print each layer separately and press together
- Total thickness: ~10mm per ExoArmor tile

---

## Next Steps

1. ~~Create detailed CAD model of tile geometry~~ — **DONE:** STL files generated
2. ~~Calculate exact mass budget for full suit~~ — **DONE:** 6.7 kg chest plate (5.3% of EMU)
3. ~~Design fluid flow channels for CO2/O2 exchange~~ — **SOLVED:** Passive diffusion via aerogel nanopores
4. Prototype single tile with PV coating + CNT mesh contact
5. Test algae survival in aerogel matrix conditions
6. ~~Design power management circuit for multi-source harvesting~~ — **SOLVED:** CNT mesh carries all electrical distribution
7. Create CNT mesh weaving process for each body region
8. Research MOF O2 storage capacity per kg
9. ~~Design aerogel thermal regulation system~~ — **PARTIALLY SOLVED:** Aerogel insulates + moisture wicking provides cooling
10. ~~Create fluid dynamics model for gas exchange~~ — **SOLVED:** No active fluid dynamics needed (passive diffusion)
11. ~~Test LED light penetration depth in algae-filled aerogel~~ — **SOLVED:** LEDs in daily wear suit illuminate algae directly
12. ~~Optimize algae density per liter for maximum O2 without light blocking~~ — **SOLVED:** LEDs provide direct illumination
13. ~~Design micro-LED array with smart cycling controller~~ — **SOLVED:** LEDs in daily wear suit with intermittent cycling
14. Test CNT mesh-to-tile electrical contact under flexing
15. Design fluid tube routing alongside CNT mesh
16. Prototype single tile snap-fit onto CNT mesh
17. Test tile articulation at joints with smaller tiles
18. Calculate algae density needed for radiation shielding
19. Test algae distribution uniformity in aerogel
20. ~~Create blueprint/rendering of suit architecture~~ — **DONE:** STL files + preview images
21. **NEW:** Scale chest plate to full suit (arms, legs, helmet)
22. **NEW:** Test snap-fit mechanism with 3D printed prototype
23. **NEW:** Research algae strains for space radiation resistance
24. **NEW:** Prototype CNT-Aramid co-weave EDS — validate 85-95% dust removal on flexible fabric (build on NASA SPIcDER results)
25. **NEW:** Test CNT-Aramid flex durability (>10,000 cycles) and insulation degradation under UV/radiation

---

## Related Technologies to Watch

| Technology | Potential Impact | Timeline |
|------------|------------------|----------|
| Artificial chloroplasts (Festo) | 10x O2 production | 5-10 years |
| UHTC ceramics | 3,000°C+ armor | 10+ years |
| Self-healing aerogel | Autonomous repair | 5-10 years |
| Synthetic biology CO2 fixation | Programmable algae | 5-15 years |
| Quantum dot PV | Higher efficiency solar | 5-10 years |
| Solid-state batteries | Higher density storage | 3-5 years |
| CRISPR algae | Radiation-resistant | 10+ years |

---

## Subsystem Coverage & Open Gaps

The BioArmor concept has solved the *passive material stack* (pressure, O2/CO2, thermal, MMOD) but is missing the *active system layer* - avionics/data, dust, helmet, radiation hardening, and failure survival. This section tracks coverage and proposes design responses. All are concept-level (TRL 2-4); none are flight-qualified. See `docs/assets/BIOARMOR_SYSTEM_ARCHITECTURE.svg` for the avionics/data-flow map.

### Subsystem Coverage Matrix

| Function | Status | Notes |
|----------|--------|-------|
| Pressure containment | DONE | Surlyn self-healing bladder, 4.3 psi |
| O2 supply + CO2 removal | DONE (partial) | Compressed/chemical O2 + algae scrub (supplemental) |
| Thermal (hot/cold) | DONE | Aerogel + variable-e + CNT heat + coolant (modeled) |
| MMOD / impact (body) | DONE | Ceramic tiles |
| Radiation - SPE | DONE | Ceramic (Al2O3) |
| Radiation - GCR | PARTIAL | Algae water content (hydrogen) |
| Radiation - gamma on Surlyn healing | MISSING | Flagged risk, no mitigation |
| Lunar dust | MISSING | Not in design |
| Helmet / visor subsystem | MISSING | Imagery only |
| Mobility / joint torque | PARTIAL | SMA assist named, no budget |
| Avionics / data collection | MISSING | Sensors listed, no architecture |
| Closed-loop control | MISSING | "Smart" claimed, not specified |
| Power | DONE | PV + snap-on batteries (modeled) |
| Water / waste | PARTIAL | Liquid cooling + sweat recycling thin |
| Redundancy / SPOF | MISSING | Not analyzed |
| Prebreathe / decompression | MISSING | Not addressed |

### Design Response 1 - Avionics, Data Collection & Closed-Loop Control (priority)

The suit needs a "brain." Proposed architecture:

- **Sensor layer (distributed):** pressure, skin/shell temp, O2/CO2 (cascade/MLS), humidity, radiation dosimeter, IMU (pose/joint angle), crew health (HR/SpO2), suit-integrity (mic). Formalize as a sensor bus on the CNT mesh.
- **Edge fusion + controller ("Avionics Core"):** low-power MCU/SoC samples at 1-10 Hz and runs:
  - *Thermal loop* - reads crew/shell temp + sun/shade, sets variable-emissivity coating state, CNT heater PWM, coolant-pump speed.
  - *Life-support loop* - tracks O2/CO2, modulates algae-LED duty (active irradiance control) and backup scrubber.
  - *Mobility loop* - drives SMA actuation per joint angle.
- **Science data collection:** same bus logs environmental/sample/crew data to onboard flash and streams via comms using a simple schema (timestamp, sensor_id, value) - so EVA *science* is captured, not just life support.
- **Comms:** BAN (intra-suit, ~5 mW) + selectable radio (100 mW-2 W) to rover/station.
- **Power add:** core ~1-2 W + sensors ~0.5 W + radio avg ~1-2 W -> adds ~3-5 W to the ~39 W load (still trivial battery mass).

Caveat: functional architecture, not flight software.

### Design Response 2 - Lunar Dust Mitigation

Dust is the top real-world EVA risk (Apollo joint seizing; Artemis concern). Responses:
- **Electrostatic Dust Shields (EDS):** AC-driven transparent electrodes on suit exterior/visor repel charged regolith (in AxEMU research).
- **Lotus-effect / oleophobic coatings** on fabric and low-adhesion ceramic tile surfaces.
- **Sealed, dust-tolerant joints:** bellows + positive-pressure purge at bearings; sacrificial dust seals.
- **Interface discipline:** snap-on modules sealed; suit pressure kept positive vs regolith.

### Design Response 3 - Helmet / Visor Subsystem

Treat the head as its own protected module:
- **Visor:** polycarbonate / ortho-carbonated polycarbonate, impact-rated; UV/IR/anti-glare coating; **active anti-fog** (transparent conductive heater film).
- **HUD:** low-power visor display showing O2, battery, dosimeter, checklist (deck already shows HUD).
- **Comms:** bone-conduction audio + boom mic in helmet ring.
- **Dust:** EDS ring at visor seal; quick-attach dust cover.
- **Thermal:** head is high surface-area - include in the thermal loop (small heater; variable-e outer still applies).

### Design Response 4 - Radiation Hardening of Self-Healing & Redundancy

- **Gamma on Surlyn healing:** known risk is gamma reducing healing efficiency. Mitigation: add a thin **radiation-shielding liner** (HDPE or boron-PE, ~2-5 mm) between outer ceramic and the Surlyn bladder to attenuate gamma/neutrons; algae water content already helps neutrons. Alternative: keep Surlyn thin and add a *second* redundant bladder so healing loss is not single-point.
- **Redundancy / SPOF:** (a) dual bladder (primary + backup), (b) dual O2 path (primary tank + secondary O2 pack), (c) snap-on modules let a failed battery/life-support be field-swapped, (d) avionics core with watchdog + manual override for thermal/heating. Document a failure tree.

### Design Response 5 - Mobility & Prebreathe (notes)

- **Mobility:** at 4.3 psi suit pressure is comparable to EMU; advantage is lower mass + flexible CNT mesh. Quantify a joint-torque budget (pressure x seal area moment) and target EMU-class or better; SMA assist reduces actuator torque. Needs a mobility test (already in roadmap).
- **Prebreathe:** 4.3 psi pure-O2 matches EMU protocol; standard prebreathe / in-suit denitrogenation is still required before EVA to avoid decompression sickness. State explicitly - low pressure does not eliminate it.

### Open Items to Engineer Next
1. Avionics Core hardware/software spec + sensor-fusion algorithms.
2. Dust EDS power/area trade study.
3. Helmet impact + anti-fog test plan.
4. Radiation liner mass vs shielding trade (add to mass budget).
5. Redundancy / failure-mode tree.

---

## Freedom-to-Operate & IP Notes

The BioArmor architecture sits in a mixed patent landscape. Key points for any grant submission or patent filing:

**Surlyn self-healing bladder — active NASA patent (FTO warning).** US **11,192,667** (LAR-TOPS-122, expires **2037-02-17**) covers the exact Surlyn 8940 + Barex + thiol-ene triad as a "space suit wall" between atmosphere and vacuum. BioArmor cannot practice that triad freely. Options: (a) **license from NASA** (also consider US 11,001,684, expires 2037-05-06), or (b) **design around** using expired capsule-healing chemistry. ⚠ **Correction:** US **7,612,152** (Univ. of Illinois) is **still active until 2026-12-17** — *not* free yet; the design-around via this patent is unavailable until then. **WO2008154107A1** (Estée Lauder) is *ceased* but in the cosmetics field (weak basis). Until Dec 2026 the practical route is a NASA license or a different genuinely-expired capsule/microvascular healing patent.

**Free foundations to build on:**
- **US 7,354,877** — Lockheed CNT-fiber garment fabric (incl. spacesuit fabrics). **Expired Oct 2023.**
- **US 7,834,527** — DEA fiber/joint transducers. **Expired May 2026 (free now).**
- **US 11,192,667 workaround:** ATSP spiral EDS deposited *on top of* CNT-Aramid weave (not interwoven electrodes) is design-around pending license — weave integration still blocked until 2037.

**Defensible white space.** The combination of **wearable algae life support** and the **integrated modular architecture** (CNT mesh bus + snap-on pods + closed-loop control) is essentially unpatented — this is the strongest IP to claim.

> Caveat: FTO positions above are based on the Aug-2026 deep-dive (see `docs/RESEARCH_DEEPDIVE_Aug2026.md`). Confirm current status with counsel before filing.

## Killer Review Scorecard (2026-09-05) — Honest TRL

| Killer | BIOARMOR claim | Score / TRL | Why it fails | Fix that makes it testable (done in this reconfig) |
|---|---|---|---|---|
| Near-vacuum / ebullism | 4.3 psi (29.6 kPa) sPUU/Surlyn bladder | 4/5 pressure right, 2/5 garment | 1mm bladder at 2.2kg can't carry hoop stress. EMU 127-145kg because restraint/bearings/PLSS carry load. | **Test #1: Surlyn/sPUU + UHMWPE/aramid restraint cylinder at 4.3 psi. Measure ballooning/creep <5% @24h. If fails, daily-wear mass invalid. Drop “healing in vacuum” until vacuum chamber.** |
| 95% CO2 | Helmet+fan+LiOH/amine, algae habitat loop | 3/5 closed loop, 1/5 if “breathe through aerogel” | O2 in 6mm aerogel doesn't diffuse to alveoli. Need helmet + fan + washout. | **Kill passive-pore breathing. Require helmet, closed fan loop, LiOH/amine. Algae OFF EVA bus (44mW vs 25W).** |
| Cold -63 to -125°C | 4mm ceramic NF + VO2 low-e + LCHG fingertip | 3/5 insul, 1/5 500mW Peltier | Thin-gas convection + dust on Mars. 500mW can't move 100-300W. | **Rank: 1) low-e outer 2) LCHG + fingertip/foot heaters only 3) no whole-suit Peltier. Mars-chamber manikin test.** |
| Radiation | UHMWPE + 0.2mm BNNT + 4mm wet | 2/5 SPE, 1/5 GCR | 300g wet/1.8m²=0.02 g/cm². Need 10-1000x for GCR. Tiles increase secondaries. | **Admit GCR PARTIAL = unmitigated. BNNT = SPE 2/5 only. Keep habitat storm shelter. No wearable HDPE mass comp.** |
| Polar CO2 geysers | Ceramic tiles + boots | 2/5 | Survives debris, not jet. | **Ops control: stay off caps during spring. Impingement test to claim jet.** |
| Dust devils / charge | ATSP spiral 0.3kV | 4/5 best subsystem | Real hardware (Blue Ghost Mar 2025). Open: arcing at 6mbar CO2, tile pop breaks continuity. | **Test #3: EDS coupon at seal geometry, 1kV isolation, grounding.** |
| Dust + perchlorates | ATSP 90-97% flat | 2/5 | 5-15% residual kills seals/thyroid once in airlock. | **2-stage: EDS + wash + labyrinth. Test #3b perchlorate-spiked <1% at seals.** |

**What to keep / what to split:** Keep two-system (IVA emergency 4.3psi bladder+restraint + ExoArmor snap-on). Kill tube-vs-system mass comp; add PLSS 8-12kg for 8hr or 500g/3hr emergency only. Patent US 11,192,667 until 2037 — spiral on top is workaround.

## Conclusion (Revised Post-Review)

BioArmor demonstrates that a modular, two-system spacesuit — IVA emergency layer (4.3 psi bladder + restraint + helmet/fan/LiOH) plus snap-on ExoArmor (thermal/tiles/EDS) — can cut **tube mass** ~75% vs EMU **system** when PLSS is added (31-35kg vs 127kg), or be a valid 3.5kg emergency IVA vs EMU. The passive material stack is not solved until Tests #1-4 pass. Honest TRL: **EDS 4/5, pressure 2/5, thermal 2/5, radiation 1/5 GCR**. Integration is still the innovation, but integration now means **helmet+fan+restraint+PLSS**, not aerogel breathing.

*Concept developed through collaborative brainstorming + killer review 2026-09-05.*
*All individual technologies exist; integration + honest test gates is the innovation.*
