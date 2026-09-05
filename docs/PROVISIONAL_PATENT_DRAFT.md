# PROVISIONAL PATENT APPLICATION DRAFT

## Modular Two-System Spacesuit with Spiral-Deposited Electrodynamic Dust Shield

---

> **PENDING DISCLAIMER — NOT LEGAL ADVICE.**
>
> This document is an **informational engineering draft** prepared for internal planning and prior-art documentation only. It is **not** a filed patent application, does **not** itself establish a filing date, and is **not** legal advice. A provisional patent application must be filed with the USPTO by or before the public disclosure of the invention, and its content must satisfy the applicable disclosure requirements. **You must engage competent patent counsel to review, correct, and file any actual application.** Nothing herein creates an attorney-client relationship, and no claim of patent protection is made by the existence of this draft. Figures and drawings referenced herein are engineering concept renders, not formal patent drawings.

---

## 1. Title of Invention

MODULAR TWO-SYSTEM PRESSURIZED GARMENT AND ELECTRODYNAMIC DUST SHIELD WITH SPIRAL-DEPOSITED ELECTRODE COATING

## 2. Field of the Invention

The present invention relates generally to pressurized garments for extravehicular activity (EVA) in space and on planetary surfaces, and more particularly to a modular two-system architecture combining an intravehicular-activity (IVA) emergency pressure garment with a snap-on external armor shell (ExoArmor), and to an electrodynamic dust shield (EDS) formed by a spiral-deposited conductive composite coating applied on top of, rather than interwoven with, a structural fiber weave.

## 3. Background of the Invention

### 3.1 Prior Art

Spacesuits are among the heaviest and most operationally constrained items of crew equipment. The legacy NASA Extravehicular Mobility Unit (EMU) weighs on the order of 127 kg including its portable life support system (PLSS), and its scheduled successor (the AxEMU) is heavier still (~180 kg system) and has experienced significant schedule risk. Existing suits do not cleanly separate daily-wear (IVA) protection from mission-specific EVA protection, forcing crews to carry the full weight of planetary armor during routine in-station operations.

Several relevant patents and publications define the prior-art landscape:

- **US 11,192,667** (NASA Langley Research Center, "LAR-TOPS-122"), covering a spacesuit wall comprising a Surlyn 8940 ionomer, a Barex barrier layer, and a thiol-ene self-healing triad. This patent is **active and blocks practice of that exact triad until expiration on 17 February 2037**. To the extent the present invention uses a self-healing pressure membrane, it does so with an **associative covalent network (vitrimer) chemistry** that is materially different from the Surlyn/Barex/thiol-ene triad, and is **disclaimed and designed around** as described below.
- **US 7,612,152** (University of Illinois), covering capsule-based self-healing material systems. This patent is **still active until 17 December 2026** and is not relied upon as a free foundation.
- **US 7,354,877** (Lockheed Martin), covering carbon-nanotube-fiber garment and spacesuit fabrics. **Expired October 2023 — free prior art to build upon.**
- **US 7,834,527** (DEA fiber/joint transducers). **Expired May 2026 — free prior art to build upon.**

### 3.2 The Problem of Interwoven EDS Electrodes

Electrodynamic dust shields (EDS) have been demonstrated to remove charged regolith from surfaces using traveling AC electric fields. Prior flexible EDS implementations have **interwoven conductive electrodes into a structural fabric weave** so that the conductive elements form part of the interlaced textile itself. In the context of the pressure garment described in US 11,192,667, an EDS whose electrodes are woven into / interwoven with the structural `CNT-Aramid` weave implicates that patent's claim scope, creating a freedom-to-operate obstacle until 2037.

There is therefore a need for an electrodynamic dust shield that achieves effective dust removal **without interweaving electrodes into the structural weave**, so that the structural weave and the EDS electrode structure remain functionally and structurally decoupled and can be practiced freely without the licensed triad.

### 3.3 Summary of the Need

A modular, low-mass pressurized garment that (a) separates IVA emergency protection from EVA armor, (b) provides a self-healing, vacuum-compatible pressure membrane, (c) provides a flexible EDS that is deposited **on top of**, not interwoven with, the structural weave, and (d) integrates a modular power/data bus and life-support loop, has not been disclosed in the prior art and represents patentable white space.

## 4. Summary of the Invention

The present invention provides a **modular two-system pressurized garment** comprising:

**(A) An IVA emergency layer**, configured to be worn as a standalone, low-mass pressurized garment inside a habitat, comprising:
- a pressure bladder formed of a self-healing associative covalent network (sPUU disulfide vitrimer) material;
- a fiber restraint layer (UHMWPE/aramid) surrounding the bladder to carry hoop stress at an internal operating pressure of about 4.3 psi (29.6 kPa);
- a helmet, a fan loop, and a chemical carbon-dioxide scrubber (LiOH/amine) in fluid communication with the bladder interior; and
- a comfort liner in contact with the wearer.

**(B) A snap-on ExoArmor shell**, configured to be removably attached over the IVA emergency layer for EVA, comprising:
- a carbon-nanotube (CNT) mesh skeleton forming both a structural framework and an electrical power/data bus;
- a plurality of ceramic armor tiles releasably snapped onto the CNT mesh;
- an electrodynamic dust shield (EDS) comprising an ATSP/MWCNT/PTFE composite **spiral-deposited on top of** the structural `CNT-Aramid` weave, such that the EDS electrode structure is **not interwoven with** the weave; and
- optional fluid tubes and transducers.

**(C) A closed-loop life-support system**, comprising a wearable algae habitat loop that scrubs carbon dioxide and provides supplemental oxygen, supplied with water/nutrients through the modular bus and pods snap-fit onto the CNT mesh.

Optional features include a boron-nitride-nanotube (BNNT-HDPE) radiation liner, a ceramic nanofiber aerogel thermal/insulation layer, a dielectric-elastomer-actuator (DEA) passive mechanical-counterpressure cuff, and a tube-versus-system mass split between the IVA layer and the ExoArmor shell.

## 5. Brief Description of the Drawings

The drawings are engineering concept renders and are incorporated by reference. Corresponding figures exist in the BioArmor project image assets:

- **Fig. 1** — Full-suit conceptual render showing the two-system architecture (IVA emergency layer + snap-on ExoArmor shell). Reference: `images/BIOARMOR_FULL_SUIT_CONCEPT.png`.
- **Fig. 2** — Exploded layer-stack diagram of the daily-wear / IVA layer and the ExoArmor shell. Reference: `images/BIOARMOR_TILE_EXPLODED.svg`.
- **Fig. 3** — Single-tile blueprint showing PV coating, ceramic armor, CNT underlayer, and printed pathways. Reference: `images/BIOARMOR_TILE_BLUEPRINT.svg` / `.png`.
- **Fig. 4** — Layer-stack diagram of the full two-system configuration. Reference: `images/BIOARMOR_LAYERSTACK.svg`.
- **Fig. 5** — Thermal control loop diagram (variable-emissivity outer + aerogel insulation + active heating/cooling). Reference: `images/BIOARMOR_THERMAL_LOOP.svg`.
- **Fig. 6** — System/subsystem architecture diagram. Reference: `images/BIOARMOR_SUBSYSTEMS.svg`.
- **Fig. 7** — Avionics and data-flow / system-architecture map including the closed-loop control scheme. Reference: `docs/assets/BIOARMOR_SYSTEM_ARCHITECTURE.svg`.

It is understood that for a formal filing, non-text drawings will be prepared in compliance with USPTO drawing standards under 37 CFR 1.84.

## 6. Detailed Description

### 6.1 Overview of the Two-System Architecture

The present invention splits the functions of a spacesuit into two independently deployable systems:

1. **System 1 — IVA Emergency Layer (the "Bio-Layer").** A soft, low-mass pressure garment worn inside the habitat. It handles pressure containment, basic thermal regulation, carbon-dioxide scrubbing, and comfort. In one implementation it has a mass of roughly 3.5 kg including a 500 g PLSS, sufficient for a 3-hour emergency IVA response.

2. **System 2 — ExoArmor (Modular Shell).** A set of hard armor tiles that snap on top of the daily-wear suit for EVA. It handles impact protection, energy harvesting, heavy abrasion resistance, and the electrodynamic dust shield.

Because System 1 and System 2 are mechanically and electrically coupled only through a releasable snap-fit interface (the CNT mesh bus and quick-connect fluid ports), ExoArmor can be iterated and upgraded independently of the pressure garment, and vice versa.

### 6.2 System 1: IVA Emergency Layer

From inside to outside, a representative IVA layer stack comprises:

- **Comfort liner (~0.5 mm)** — Lyocell / silicone gel; skin contact and moisture management.
- **Ceramic nanofiber aerogel + algae (~4 mm)** — BC-PVSQ / SiC@SiO2 ceramic nanofiber aerogel providing thermal insulation (about 14 mW/mK radial, usable to about 1200 C) and housing a Chlorella culture for supplemental O2 and CO2 scrubbing. The aerogel wicks sweat to feed the algae and is encapsulated by the comfort liner to contain fibers.
- **Self-healing pressure bladder (~1 mm)** — formed of an sPUU disulfide vitrimer, an associative covalent network that heals intrinsically at room temperature without oxygen, heat, or light (about 77% strength recovery at 24 hours, infinite cycles), thereby remaining functional in vacuum and CO2 atmospheres. This is a **design-around** of the Surlyn/Barex/thiol-ene triad of US 11,192,667, which is disclaimed. Optionally, a Surlyn ionomer may be retained as an outer sacrificial layer if a license to US 11,192,667 is secured.
- **BNNT radiation liner (~0.2 mm)** — boron-nitride-nanotube / HDPE composite (about 50 wt%), providing neutron and solar-particle-event shielding and thermal spreading.
- **CNT-Aramid structural weave plus spiral EDS (~0.5 mm + 10 um)** — a structural aramid weave co-reinforced with carbon nanotubes, onto the **top** of which an ATSP/MWCNT/PTFE composite EDS is spiral-deposited (see Section 6.4). This layer provides structural, cut-resistant, heat/UV-resistant function and low-voltage (about 0.3 kV) EDS dust rejection.
- **Joint-assist and thermal elements (~0.2 mm)** — SMA (Nitinol) wires along joint axes for flexion assistance and a hydrogel/thermoelectric element for local cooling.

The IVA layer operates at about 4.3 psi (29.6 kPa) internal pressure, with the **bladder + UHMWPE/aramid restraint** carrying the hoop stress. A helmet, a closed fan loop, and a LiOH/amine scrubber provide primary atmospheric control; the algae loop is supplementary and off the EVA power bus.

### 6.3 System 2: ExoArmor (Modular Shell)

From outside to inside:

- **PV coating (~0.1 mm)** — flexible perovskite/ Si tandem solar cell (about 33.6% certified efficiency class) for energy harvesting, incorporated on the ceramic tile exterior.
- **Ceramic armor tiles (~2 mm)** — Al2O3 (LithaLox) or SiC@SiO2 ceramic tiles, in a tessellated pattern, providing impact/abrasion protection and thermal resistance. Tiles snap onto the CNT mesh via snap-fit pins and are individually replaceable.
- **CNT mesh skeleton (~0.3 mm)** — woven CNT fabric forming the structural framework and concurrently serving as an electrical power/data bus (about 5x10^6 S/m), an EMI shield, and the mounting substrate for tiles.
- **Fluid tubes (~0.2 mm)** — PEEK micro-channels alongside the mesh for water/nutrient transport to the algae pods.
- **DEA passive pressure cuff (optional, ~0.1 mm)** — a dielectric-elastomer-actuator cuff providing passive mechanical counterpressure (about 29.6 kPa at 2.42 prestretch) with a high-control-bandwidth active delta.

### 6.4 The Spiral-Deposited Electrodynamic Dust Shield (Design-Around)

A principal improvement of the present invention is the **spiral-on-weave EDS**, which avoids interweaving conductive electrodes into the structural fabric.

Prior flexible EDS designs interweave conductive electrode fibers into the structural weave. In the context of the parked/blocked NASA triad, such interwoven electrode structure is problematic. The present invention instead:

1. Provides a **structural CNT-Aramid weave** that is electrically and dielectrically functional on its own;
2. **Spiral-deposits** an ATSP/MWCNT/PTFE composite coating **on top of** the surface of the weave, creating a patterned, spiral-electrode EDS with low-voltage (about 0.3 kV) operation;
3. Leaves the structural weave's interlacing and fiber architecture **undisturbed** — the electrodes are a surface-adjacent coating, not interwoven: the EDS structure is functional but mechanically decoupled from the weave interlacing.

This arrangement provides a traveling-wave dust-repulsion field while avoiding the interwoven-electrode structure that would otherwise be entangled with the licensed triad.

In one implementation the EDS removes about 90-97% of charged regolith in dynamic operation, is repairable in situ at about 40 C in 30 minutes in a nitrogen environment, and reduces power draw by about 70% relative to legacy 0.8-1 kV designs.

### 6.5 Closed-Loop Life-Support: The Wearable Algae Habitat Loop

A wearable algae loop is integrated as a habitat loop (off the EVA power bus). Sweat is wicked by the hydrophilic aerogel, supplying water; algae receive CO2 and light from LEDs; algae produce supplemental O2 and scrub CO2. In one implementation the algae loop contributes on the order of 10-20% of O2 need (bench-scale optimum) and is hardware-flexible via snap-on algae pods. Primary life support remains the helmet fan loop with a chemical/compressed O2 reserve.

### 6.6 Integrated Modular Architecture and Closed-Loop Control

The CNT mesh forms a continuous power/data bus across the ExoArmor. Snap-on pods (life support, sensors, algae) connect to the bus at designated mounting points (chest, back, shoulders) via quick-connect fluid and electrical ports. A closed-loop controller samples sensor data (pressure, temperature, O2/CO2, radiation dose, pose) and drives the thermal, life-support, and mobility loops accordingly.

### 6.7 Tube-versus-System Mass Split

An explicit engineering understanding of the invention is the split between **tube mass** and **system mass**:

| Configuration | Tube mass | System mass (incl. PLSS) |
|---------------|-----------|--------------------------|
| IVA emergency layer | about 2.0-2.9 kg | about 3.5 kg (with 500 g PLSS, 3 hr) |
| IVA + full ExoArmor | about 21.8-23.39 kg | about 31-35 kg (with 8-12 kg PLSS, 8 hr) |

This split clarifies that the lightweight IVA layer is a valid emergency configuration while the armored ExoArmor, when mated with a PLSS, provides full EVA capability.

## 7. Claims

The following claims are a preliminary draft for discussion with counsel. They are **not** prosecuted claims and are subject to amendment.

### What Is Claimed Is:

**1. (Independent — apparatus).** A modular two-system pressurized garment for extravehicular activity, comprising:

(a) an intravehicular-emergency (IVA) pressure layer wearable as a standalone pressurized garment, the IVA layer including:
   - a flexible pressure bladder formed of a self-healing associative covalent network material operative to self-heal at room temperature without external oxygen;
   - a fiber restraint layer disposed about the pressure bladder and configured to carry hoop stress at an internal operating pressure;
   - a helmet in fluid communication with an interior of the pressure bladder;
   - a fan loop in fluid communication with the interior of the pressure bladder; and
   - a carbon-dioxide scrubber in fluid communication with the interior of the pressure bladder; and

(b) an ExoArmor shell configured to be removably attached over the IVA pressure layer, the ExoArmor shell including:
   - a carbon-nanotube (CNT) mesh forming a structural framework and concurrently an electrical power/data bus;
   - a plurality of ceramic armor tiles releasably attached to the CNT mesh; and
   - an electrodynamic dust shield (EDS) comprising a conductive composite coating spiral-deposited on top of, and not interwoven with, a structural fiber weave of the garment.

**2. (Dependent.)** The garment of claim 1, wherein the self-healing pressure bladder comprises an sPUU disulfide vitrimer forming an associative covalent network.

**3. (Dependent.)** The garment of claim 1, further comprising a boron-nitride-nanotube (BNNT) / HDPE radiation liner disposed adjacent to the pressure bladder and configured to attenuate neutrons and solar-particle-event radiation.

**4. (Dependent.)** The garment of claim 1, further comprising a ceramic nanofiber aerogel layer disposed adjacent to the pressure bladder and configured to provide thermal insulation.

**5. (Dependent.)** The garment of claim 1, further comprising a dielectric-elastomer-actuator (DEA) cuff configured to provide passive mechanical counterpressure at a limb region of the garment.

**6. (Dependent.)** The garment of claim 1, further comprising a wearable algae habitat loop in fluid communication with the interior of the pressure bladder and configured to scrub carbon dioxide and provide supplemental oxygen, the algae loop comprising at least one snap-on pod attached to the CNT mesh.

**7. (Dependent.)** The garment of claim 1, further comprising a tube-versus-system mass split whereby the IVA pressure layer has a tube mass of less than or equal to about 3.5 kg including a portable life support system, and the combined IVA pressure layer and ExoArmor shell have a tube mass of less than or equal to about 23.5 kg.

**8. (Dependent.)** The garment of claim 1, further comprising at least one snap-on module carrying a closed-loop controller configured to sample sensor data from a sensor bus on the CNT mesh and to drive a thermal loop, a life-support loop, or a mobility loop in response to the sensor data.

**9. (Dependent.)** The garment of claim 1, wherein the conductive composite coating of the electrodynamic dust shield comprises an ATSP/MWCNT/PTFE composite deposited in a spiral pattern at an operating voltage of about 0.3 kV.

**10. (Dependent.)** The garment of claim 1, wherein the structural fiber weave is a CNT-Aramid weave and the electrodynamic dust shield is repaired in situ at a temperature of about 40 C for about 30 minutes in a nitrogen environment.

**11. (Independent — method).** A method of manufacturing an electrodynamic dust shield on a pressurized garment for extravehicular activity, comprising:

(a) providing a structural CNT-Aramid fiber weave;
(b) spiral-depositing, on top of a surface of the structural weave, a conductive composite coating to form an electrode pattern, without interweaving the electrode pattern into the interlacing of the structural weave;
(c) insulating gaps between portions of the electrode pattern; and
(d) coupling the electrode pattern to a power source configured to apply a time-varying voltage to generate a traveling electrostatic wave operative to repel charged particles from the surface.

**12. (Dependent.)** The method of claim 11, wherein the conductive composite coating comprises an ATSP/MWCNT/PTFE composite.

**13. (Dependent.)** The method of claim 11, wherein the time-varying voltage is an alternating voltage of about 0.3 kV at a frequency from about 1 Hz to 100 Hz.

**14. (Dependent.)** The method of claim 11, further comprising applying a fluorosilane topcoat over the conductive composite coating.

**15. (Dependent.)** The method of claim 11, further comprising configuring the electrodynamic dust shield to remove at least 90% by mass of charged regolith in dynamic operation.

---

## 8. Design-Around / Disclaimer Note Regarding US 11,192,667

The present disclosure expressly **disclaims and designs around** US 11,192,667 (NASA LAR-TOPS-122, expires 17 February 2037), which covers the Surlyn 8940 + Barex + thiol-ene triad as a spacesuit wall between atmosphere and vacuum. The present invention:

- uses a **disulfide vitrimer** self-healing chemistry (associative covalent network), not the Surlyn/Barex/thiol-ene triad, for the pressure membrane; and
- forms the electrodynamic dust shield as a **spiral-deposited coating on top of**, and **not interwoven with**, the structural `CNT-Aramid` weave.

Any use of the licensed Surlyn ionomer is expressly contingent on a separate license from NASA. This section is a planning statement and must be reviewed by counsel.

## 9. Freedom-to-Operate Reference Notes

- **US 11,192,667** (NASA) — active until 2037-02-17; designed around / license required.
- **US 7,612,152** (Univ. Illinois capsule healing) — active until 2026-12-17; not relied upon.
- **US 7,354,877** (Lockheed CNT-fiber garment / spacesuit fabric) — **expired** October 2023; free prior art.
- **US 7,834,527** (DEA fiber/joint transducers) — **expired** May 2026; free prior art.

FTO positions are based on the August 2026 deep dive and must be confirmed with the USPTO and counsel before filing.

---

*Preliminary draft prepared for internal planning. This is information, not legal advice. Confirm with patent counsel before filing. Do not publicize the invention before filing a provisional application.*
