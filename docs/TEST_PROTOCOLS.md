# BIOARMOR Test Protocols

## Purpose

This document defines the four hardware tests (plus one sub-test) required to retire the highest-risk technical claims in the BioArmor architecture. No performance claim on the daily-wear or ExoArmor stack may be asserted until the corresponding test passes. These protocols are written to be executable by a lab technician with no prior project context.

**Source:** Killer Review 2026-09-05 applied to BIOARMOR_CONCEPT.md. Tests derived from the "4 TESTS THAT ACTUALLY RETIRE RISK" section and the reconfigured layer stack.

**Reference layer stack (inside to outside):**
1. Comfort liner (0.5 mm) — Lyocell / silicone gel
2. Ceramic nanofiber aerogel + algae (4 mm) — BC-PVSQ / SiC@SiO2
3. Self-healing pressure bladder (1 mm) — sPUU disulfide vitrimer + Surlyn ionomer (sacrificial outer)
4. BNNT radiation liner (0.2 mm) — BNNT-HDPE 50wt%
5. CNT-Aramid electrodynamic weave (0.5 mm) — Aramid + CNT + ATSP/MWCNT/PTFE spiral EDS
6. SMA wires + hydrogel/TE cooling (0.2 mm)

---

## Test #1 — Hoop-Stress Cylinder

### Objective

Verify that a 1 mm sPUU/Surlyn bladder bonded to a UHMWPE/aramid restraint tube can contain 4.3 psi (29.6 kPa) internal pressure for 24 hours without excessive diametral growth or creep. This test gates the 2.0 kg daily-wear mass target; if the bladder-restraint system cannot carry hoop stress at this pressure, the mass claim is invalid.

### What Does PASS Govern

PASS validates the pressure-containment structural claim: "1 mm sPUU bladder + UHMWPE/aramid restraint carries 4.3 psi hoop stress at <5% diametral growth in 24 h." This retires the #1 Killer Review risk on the daily-wear suit and unblocks the 2.0 kg mass target. FAIL invalidates the daily-wear mass budget and requires a thicker bladder or additional restraint layers.

### Test Article Description

A cylindrical test article (not a flat swatch) fabricated from:
- **Inner bladder:** sPUU disulfide vitrimer film, ~1 mm thick, solvent-cast or compression-molded into a cylinder. Optional outer Surlyn ionomer layer (0.2-0.5 mm) if licensing permits.
- **Outer restraint:** UHMWPE/aramid biaxial weave (e.g., Dyneema SB31 or equivalent), heat-laminated or bonded to the outer surface of the bladder.
- **Cylinder geometry:** 150 mm inner diameter, 200 mm length (aspect ratio ~1.33:1 to approximate a limb segment). Sealed at both ends with aluminum end-caps bolted through the restraint with O-ring seals.

### Equipment and Materials BOM

| Item | Specification | Qty | Approx. Cost |
|------|---------------|-----|--------------|
| sPUU vitrimer film (1 mm) | Laboratory-synthesized or vendor (e.g., those based on ATSP disulfide chemistry) | 0.1 m² | $200-500 |
| Surlyn 8940 ionomer film (optional, 0.3 mm) | DuPont Surlyn, off-the-shelf | 0.1 m² | $50 |
| UHMWPE/aramid biaxial fabric | Dyneema SB31 or Spectra/Nextel hybrid, 200 g/m² | 0.15 m² | $100-300 |
| Aluminum end-caps (machined) | 6061-T6, 150 mm ID, O-ring groove, bolt holes | 2 | $150 (machine shop) |
| Viton O-rings | 150 mm ID, -3 mm cross-section | 4 | $20 |
| Stainless steel bolts | M6 x 40 mm, 12.9 grade | 16 | $15 |
| Pressure source | Regulated nitrogen or compressed-air tank with precision regulator (0-100 kPa, 0.1 kPa resolution) | 1 | $300 (lab stock) |
| Digital pressure gauge | 0-100 kPa, 0.05 kPa resolution | 1 | $200 (lab stock) |
| Digital calipers | 0-200 mm, 0.01 mm resolution | 1 | $50 (lab stock) |
| Dial indicator + stand | 0-25 mm, 0.001 mm resolution | 1 | $150 (lab stock) |
| Data logger | 4-20 mA or voltage input, 1 Hz minimum sample rate | 1 | $300 (lab stock) |
| Pressure transducer | 0-100 kPa, 0.1% FS accuracy, 4-20 mA output | 1 | $250 (lab stock) |
| Temperature sensor | K-type thermocouple + reader | 1 | $50 (lab stock) |
| Leak-down test fluid | Soapy water or commercial leak detect | 500 mL | $15 |
| Environmental chamber (optional) | 20-40 deg C, for thermal conditioning | 1 | (lab stock) |
| **Total estimated cost** | | | **$1,500-2,100** |

### Step-by-Step Procedure

1. **Fabricate bladder cylinder.** Cast or mold sPUU vitrimer into a 1 mm thick sheet. Thermoform or wrap around a 150 mm mandrel to form a cylinder. Cure per sPUU protocol (RT, 12-24 hr for disulfide bond formation). Optionally laminate Surlyn to outer surface.
2. **Apply restraint.** Wrap UHMWPE/aramid fabric around the bladder cylinder. Bond at seam with heat-seal or adhesive compatible with both materials (e.g., polyurethane hot-melt, 160 deg C, 30 s press). Ensure uniform overlap at seam (minimum 20 mm).
3. **Install end-caps.** Seat Viton O-rings in end-cap grooves. Clamp end-caps onto cylinder ends with M6 bolts torqued to 10 Nm in star pattern. Verify O-ring compression visually.
4. **Leak-check at 10 kPa.** Pressurize to 10 kPa with nitrogen. Apply soapy water to all seams and end-cap interfaces. Hold 5 minutes. Any bubble formation = leak. Repair and retest before proceeding.
5. **Record initial dimensions.** Measure and record cylinder diameter at 3 axial positions (top, middle, bottom) and 2 circumferential orientations (0 deg, 90 deg) using digital calipers. Record as d_0. Install dial indicator at mid-height for continuous diametral monitoring.
6. **Pressurize to 29.6 kPa.** Increase pressure at 1 kPa/min to 29.6 kPa (4.3 psi). Log pressure vs. time. Record any audible or visible leak indicators.
7. **Hold for 24 hours.** Maintain 29.6 +/- 0.5 kPa continuously. Log pressure and diametral displacement at 1-minute intervals via data logger. Monitor temperature (ambient 20-25 deg C).
8. **Post-hold measurements.** At 24 hours, record final diameter at the same 6 measurement points. Calculate diametral growth: (d_final - d_0) / d_0 x 100%.
9. **Visual inspection.** Depressurize. Remove end-caps. Inspect bladder for cracks, delamination, creep folds, or permanent deformation. Photograph all surfaces.

### Instrumentation

| Instrument | What It Measures | Placement | Sample Rate |
|------------|-----------------|-----------|-------------|
| Pressure transducer | Internal pressure | End-cap port | 1 Hz (logged) |
| Dial indicator | Diametral displacement | Mid-height, external surface | 1 Hz (logged) |
| Digital calipers | Static diameter | 6 points on cylinder | Manual, pre/post |
| K-type thermocouple | Ambient and surface temperature | 1x ambient, 1x cylinder surface | 1 Hz (logged) |
| Digital pressure gauge | Redundant pressure read | End-cap port | Manual spot-check |

### Data to Record

- Cylinder diameter at 6 points, t=0 and t=24h
- Continuous diametral displacement vs. time (dial indicator)
- Internal pressure vs. time (transducer, 1 Hz)
- Temperature vs. time
- Any leak events (time, location, severity)
- Visual/photos of bladder post-test

### Pass/Fail Criteria

| Criterion | Requirement |
|-----------|-------------|
| Diametral growth at 24 h | < 5% at any measurement point |
| Creep | No accelerating creep (diametral rate < 0.1%/hr in final 4 hr) |
| Leakage | No visible or measurable leak at 29.6 kPa |
| Structural integrity | No cracks, delamination, or permanent folds in bladder |

### Failure Modes and Disposition

- **>5% growth:** Increase restraint areal density or add circumferential overwrap. Re-test.
- **Creep acceleration:** sPUU vitrimer may need higher cross-link density. Reformulate.
- **Leak at end-cap interface:** Re-machine O-ring groove. This is fixture-related, not material-related.

---

## Test #2 — Tile Flex Cycle

### Objective

Demonstrate that a 60 mm alumina ceramic tile mounted on CNT mesh via snap-fit clips survives 1,000 flex cycles at knee-joint geometry without clip failure or loss of electrical contact. This validates the tile attachment and mesh continuity claim for ExoArmor.

### What Does PASS Governs

PASS validates: "ExoArmor tiles survive 1,000 flex cycles at joint geometry with 0 popped clips and <10% contact resistance rise." This retires the mesh-continuity risk and confirms the snap-fit attachment is viable for articulated joints.

### Test Article Description

- **Ceramic tile:** 60 mm hexagonal alumina (Al2O3, LithaLox HP 500 or equivalent), 2.0 mm thick.
- **CNT mesh substrate:** Woven CNT fabric (e.g., OCSiAl or similar, 5e6 S/m target), 200 mm x 100 mm strip.
- **Snap-fit clips:** 3 polymer clips (PEEK or Ultem) in triangular pattern on tile back, engaging CNT mesh through corresponding holes or pockets.
- **CNT underlayer on tile back:** 0.5 mm CNT sheet bonded to tile back for electrical contact to mesh.

### Equipment and Materials BOM

| Item | Specification | Qty | Approx. Cost |
|------|---------------|-----|--------------|
| Alumina hex tile (60 mm) | Al2O3, 2.0 mm thick, flat | 1 | $50-100 |
| CNT woven fabric strip | 200 x 100 mm, ~0.3 mm thick | 1 | $100-300 |
| Snap-fit polymer clips | PEEK or Ultem, custom 3D printed or machined | 3 | $30-60 |
| CNT underlayer sheet | 0.5 mm, bonded to tile back | 1 | $20 |
| Flex test fixture (knee geometry) | Rotating bend fixture, 30-60 mm radius, motorized | 1 | $500-1,000 (lab stock or build) |
| DC resistance meter (4-wire) | 0.1 mOhm resolution | 1 | $400 (lab stock) |
| Clip retention force gauge | Spring scale or load cell, 0-50 N | 1 | $100 (lab stock) |
| Digital calipers | 0-200 mm | 1 | $50 (lab stock) |
| Camera / microscope | For visual clip and contact inspection | 1 | (lab stock) |
| Electrical contact probes | Spring-loaded pogo pins | 4 | $20 |
| Data logger | For resistance logging | 1 | (lab stock) |
| **Total estimated cost** | | | **$1,270-2,030** |

### Step-by-Step Procedure

1. **Prepare tile.** Bond CNT underlayer to back of alumina tile with conductive adhesive (silver epoxy or CNT paste). Verify contact resistance < 10 mOhm across tile-back to mesh.
2. **Mount clips.** Install 3 snap-fit clips onto tile back in triangular pattern (120 deg spacing). Press-fit or screw-mount through pre-drilled tile holes.
3. **Attach to CNT mesh.** Snap tile onto CNT mesh strip at center. Verify mechanical engagement (audible click, visual confirmation). Measure and record initial contact resistance between tile CNT underlayer and mesh at 2 attachment points using 4-wire method.
4. **Install in flex fixture.** Clamp mesh strip ends in flex fixture. Set bend radius to 40 mm (approximating knee joint curvature). Set cycle count target to 1,000.
5. **Record baseline.** Measure and log: (a) contact resistance at both attachment points, (b) clip engagement force if measurable, (c) tile position relative to mesh reference marks.
6. **Run 1,000 flex cycles.** Cycle at 1 Hz (or as fixture allows). If possible, log contact resistance continuously or at 100-cycle intervals. If continuous logging is not feasible, pause at cycles 100, 250, 500, 750, and 1000 to measure resistance.
7. **Inspect at 500 cycles (midpoint).** Pause. Visually inspect all 3 clips for cracks, displacement, or partial pop-out. Photograph. Measure contact resistance.
8. **Complete 1,000 cycles.** Continue to end count.
9. **Post-test inspection.** Remove tile from fixture. Inspect all 3 clips for pop-out, fracture, or permanent deformation. Measure final contact resistance. Measure any clip displacement from original position. Photograph all surfaces.

### Instrumentation

| Instrument | What It Measures | Placement | Sample Rate |
|------------|-----------------|-----------|-------------|
| 4-wire resistance meter | Electrical contact resistance | Tile CNT-to-mesh junction | At 0, 100, 250, 500, 750, 1000 cycles (or continuous) |
| Flex test fixture | Cycle count and bend radius | Mesh strip ends | Continuous (fixture counter) |
| Digital calipers | Clip displacement | Clip-to-tile reference | Manual, pre/post |
| Camera/microscope | Visual inspection of clips and contacts | Tile back, clips | Manual, at midpoint and end |

### Data to Record

- Contact resistance at each measurement interval (mOhm)
- Cycle count at failure (if clip pops before 1,000)
- Visual condition of each clip at midpoint and end
- Any audible crack or snap events during cycling
- Final clip position vs. baseline

### Pass/Fail Criteria

| Criterion | Requirement |
|-----------|-------------|
| Popped clips | 0 (none) at 1,000 cycles |
| Contact resistance rise | < 10% from baseline at 1,000 cycles |
| Clip displacement | < 0.5 mm from original position |

### Failure Modes and Disposition

- **Clip pop-out:** Redesign clip geometry (deeper undercut, wider flange). Re-test with new clips.
- **Resistance rise >10%:** CNT underlayer contact may need higher compression force or conductive adhesive refresh. Re-bond and re-test.
- **Tile crack:** Tile quality issue; replace tile and re-test. Not a design failure unless repeatable.

---

## Test #3 — EDS + Perchlorate at Seal Geometry

### Objective

Demonstrate that an ATSP/MWCNT/PTFE spiral electrodynamic dust shield (EDS) operating at 100-500V traveling wave removes Mars regolith simulant spiked with 0.5 wt% perchlorate from a wrist-seal labyrinth geometry in 6 mbar CO2 atmosphere, achieving <1% residual contamination by mass with no arcing at 500V. This validates the dust-mitigation subsystem at the critical seal interface.

### What Does PASS Govern

PASS validates: "ATSP spiral EDS at seal geometry achieves <1% perchlorate-spiked dust residual in Mars-like CO2 atmosphere without electrical arcing." This retires the Dust + Perchlorate risk (Killer Review: "5-15% residual kills seals/thyroid once in airlock"). A flat swatch alone is insufficient; this test proves performance at the actual seal labyrinth geometry.

### Test Article Description

- **EDS coupon:** ATSP/MWCNT/PTFE composite spiral electrode pattern deposited on a CNT-aramid fabric substrate, 100 mm x 100 mm active area. Interdigitated electrode pitch ~2 mm, ATSP coating thickness ~10 um.
- **Seal labyrinth fixture:** A machined aluminum or PEEK fixture replicating a wrist-seal labyrinth geometry (two overlapping ridges creating a 1-2 mm gap通道, representative of a rotary wrist bearing seal). The EDS coupon is mounted on one surface of the labyrinth.
- **Power supply:** AC traveling-wave driver, variable 100-500V, 1-100 Hz, 3-phase pulsating square wave, current-limited to 10 mA.

### Equipment and Materials BOM

| Item | Specification | Qty | Approx. Cost |
|------|---------------|-----|--------------|
| ATSP/MWCNT/PTFE spiral EDS coupon | 100 x 100 mm, interdigitated CNT electrodes on CNT-aramid | 1 | $500-1,000 (lab fabrication) |
| Seal labyrinth fixture | Machined PEEK or aluminum, wrist-seal geometry (1-2 mm gap) | 1 | $300-500 (machine shop) |
| Mars regolith simulant (JSC Mars-1A or MGS-1) | 1 kg bag | 1 | $100 |
| Sodium perchlorate (NaClO4) | ACS grade, 10 g | 1 | $30 |
| Analytical balance | 0.001 g resolution | 1 | $500 (lab stock) |
| Vacuum chamber | >10 L volume, CO2 inlet, capable of 6 mbar | 1 | $1,000-2,000 (lab stock) |
| CO2 gas supply | Industrial grade, compressed cylinder with regulator | 1 | $100 |
| Vacuum gauge | Pirani or capacitance manometer, 0.1-1000 mbar | 1 | $500 (lab stock) |
| AC high-voltage power supply | 0-500V, 1-100 Hz, 3-phase, current-limited 10 mA | 1 | $800-1,500 (specialty) |
| Oscilloscope | 2-channel, 100 MHz, for voltage waveform verification | 1 | (lab stock) |
| High-voltage probe | 1000V, 100 MHz | 1 | $200 (lab stock) |
| UV-Vis spectrometer or XRF | For perchlorate residue quantification | 1 | (lab stock) |
| Optical microscope + camera | For surface inspection | 1 | (lab stock) |
| Particulate mass collection wipes | Lint-free, pre-weighed | 20 | $10 |
| Compressed nitrogen (for cleaning) | UHP grade | 1 cylinder | $50 |
| **Total estimated cost** | | | **$3,790-5,590** |

### Step-by-Step Procedure

1. **Prepare perchlorate-spiked simulant.** Weigh 5.0 g Mars simulant (JSC Mars-1A). Weigh 0.025 g NaClO4 (0.5 wt%). Mix thoroughly in a mortar. Verify mixture homogeneity by taking 3 x 0.5 g sub-samples and analyzing perchlorate content (ion chromatography or colorimetric if available). Record mean and standard deviation.
2. **Prepare EDS coupon.** Verify electrode continuity with multimeter (continuity between adjacent electrode pairs). Measure resistance between bus bars (target < 1 kOhm). Apply AC signal at 200V, 10 Hz in ambient air; verify traveling wave visually using lightweight tracer particles (e.g., glass microspheres) on flat surface.
3. **Install in vacuum chamber.** Mount seal labyrinth fixture with EDS coupon inside vacuum chamber. Wire EDS coupon through chamber feedthrough to AC power supply. Install vacuum gauge and CO2 inlet.
3. **Assemble seal labyrinth.** Place EDS coupon on one face of labyrinth. Apply 0.5 g perchlorate-spiked simulant into the labyrinth gap using a micro-spatula. Distribute evenly across the 100 mm length of the gap. Weigh and record total mass of simulant applied (m_initial).
5. **Evacuate to 6 mbar CO2.** Close chamber. Evacuate to <1 mbar with vacuum pump. Backfill with CO2 to 6 mbar. Repeat 3x (pump-purge cycle) to ensure CO2 atmosphere. Record final chamber pressure.
6. **Activate EDS.** Apply AC traveling wave starting at 100V, 10 Hz. Increase voltage in 50V steps to 500V, holding 30 seconds at each step. Monitor for arcing via oscilloscope (voltage collapse or current spike = arc). Record voltage and current at each step.
7. **Run EDS at 500V for 5 minutes.** Hold at 500V, 10 Hz (or optimized frequency). Record current draw continuously. Monitor for arcing on oscilloscope.
8. **Stop EDS. Evacuate and recover.** Turn off power. Evacuate chamber to <1 mbar to remove loose particles. Vent to ambient CO2 or nitrogen. Open chamber.
9. **Collect residual.** Using pre-weighed lint-free wipes, carefully wipe the labyrinth surfaces and EDS coupon surface. Collect all particulate. Weigh each wipe (m_wipe). Total residual mass = sum of m_wipe - tare mass.
10. **Quantify perchlorate residual.** Dissolve wipe-collected residue in deionized water. Analyze perchlorate concentration by ion chromatography or colorimetric method. Calculate total perchlorate residual mass. Calculate residual percentage: (m_perchlorate_residual / m_perchlorate_initial) x 100%.
11. **Inspect for arcing damage.** Examine EDS coupon and labyrinth surfaces under optical microscope. Look for carbon tracks, melted spots, or dielectric breakdown marks. Photograph any damage.

### Instrumentation

| Instrument | What It Measures | Placement | Sample Rate |
|------------|-----------------|-----------|-------------|
| Vacuum gauge (Pirani/capacitance) | Chamber pressure | Chamber port | Continuous |
| AC power supply + oscilloscope | Applied voltage/current waveform | EDS coupon feedthrough | Continuous (scope capture at each voltage step) |
| High-voltage probe | Voltage at coupon | EDS bus bar | Per step + continuous at 500V |
| Analytical balance | Mass of simulant, wipes, residue | Bench | Manual, per step |
| Optical microscope | Surface inspection, arcing marks | Post-test | Manual |
| Ion chromatography or colorimetric | Perchlorate quantification | Post-test, dissolved wipes | Manual (batch) |

### Data to Record

- Initial simulant mass and perchlorate content
- Voltage, current, and frequency at each step (100-500V)
- Any arc events (voltage, time, duration, location)
- Final current draw at 500V
- Mass of each collection wipe (tare and post-collection)
- Total residual mass and percentage
- Perchlorate concentration in dissolved residue
- Microscope photos of EDS coupon and labyrinth surfaces

### Pass/Fail Criteria

| Criterion | Requirement |
|-----------|-------------|
| Perchlorate residual by mass | < 1% of initial perchlorate applied |
| Arcing at 500V | No arcing events (no voltage collapse or current spike > 2x steady-state) |
| EDS coupon integrity | No dielectric breakdown, carbon tracking, or melted spots |

### Failure Modes and Disposition

- **>1% residual:** Increase voltage (if no arcing), increase cycle time, or add mechanical agitation (vibration) as second stage. Re-test.
- **Arcing at 500V:** Increase electrode insulation thickness (ATSP coating). Reduce voltage to highest non-arcing level and document limit.
- **Electrode damage:** ATSP spiral may need higher MWCNT loading for conductivity or thicker PTFE for insulation.

---

## Test #3b — Perchlorate Residual at Rotary Seals and Gloves

### Objective

Extend Test #3 results to the specific geometry of rotary wrist seals and glove interfaces, confirming that perchlorate-spiked Mars dust can be cleared to <1% residual at these critical wear surfaces. This sub-test validates the 2-stage dust mitigation (EDS + mechanical wash + seal labyrinth) at the actual seal interface geometry.

### What Does PASS Govern

PASS validates: "Perchlorate residual at rotary seals and glove interfaces is <1% by mass after EDS treatment." This complements Test #3 by proving the claim at the specific geometry where dust infiltration causes the most damage (seal seizure, skin contact with toxic perchlorates).

### Test Article Description

Same as Test #3, but with modified labyrinth fixture:
- **Rotary seal fixture:** A machined fixture with a rotating cylindrical surface (simulating wrist rotary bearing) and a stationary EDS-equipped face, with a 0.5-1.0 mm gap.
- **Glove interface fixture:** A curved EDS coupon mounted on a concave surface (simulating glove back-of-hand), with a straight mating surface to create a simulated seal line.

### Equipment and Materials BOM

| Item | Specification | Qty | Approx. Cost |
|------|---------------|-----|--------------|
| Rotary seal labyrinth fixture | Machined PEEK, rotating cylinder + EDS face | 1 | $400-600 |
| Glove interface fixture | Machined PEEK, curved EDS + mating surface | 1 | $300-500 |
| All other items | Same as Test #3 | — | (see Test #3) |
| **Additional estimated cost** | | | **$700-1,100** |

### Step-by-Step Procedure

1. Follow Steps 1-6 of Test #3 using the rotary seal fixture.
2. **Rotate seal during EDS activation.** While EDS is active at 500V, manually rotate the seal cylinder at ~1 RPM (simulating slow wrist rotation). This tests EDS performance under dynamic conditions.
3. Repeat Steps 8-11 of Test #3 for residue collection and perchlorate analysis.
4. **Repeat for glove interface fixture.** Perform the full sequence again with the glove interface fixture (Steps 1-3 of Test #3, then deposit simulant, evacuate, activate EDS, collect residue).
5. **Compare results.** Verify <1% residual at both fixture geometries.

### Instrumentation

Same as Test #3, plus:
| Instrument | What It Measures | Placement | Sample Rate |
|------------|-----------------|-----------|-------------|
| Rotation stage or manual handle | Seal rotation speed | Rotary fixture | ~1 RPM (visual or encoder) |

### Data to Record

Same as Test #3, plus:
- Seal rotation speed and duration during EDS activation
- Separate residual measurements for rotary seal and glove fixtures
- Any seizure or increased friction observed in rotary fixture post-test

### Pass/Fail Criteria

| Criterion | Requirement |
|-----------|-------------|
| Perchlorate residual (rotary seal) | < 1% by mass |
| Perchlorate residual (glove interface) | < 1% by mass |
| Arcing | No arcing at 500V |
| Seal function | Rotary seal rotates freely post-test (no seizure) |

---

## Test #4 — Power Board (EDS + Heaters Only)

### Objective

Verify that a 500 mAh LiPo battery (1.85 Wh) can sustain 2 hours of EDS duty-cycled operation plus 30 minutes of fingertip/foot heater operation with algae LEDs OFF. This validates the energy budget for the non-algae EVA subsystems and proves the power deficit can be managed without the 25W algae LED load.

### What Does PASS Govern

PASS validates: "500 mAh LiPo (1.85 Wh) provides 2 hr EDS duty + 30 min fingertip/foot heaters with algae LEDs OFF." This retires the power-budget risk by proving the bus is viable for the critical non-algae loads. It also confirms that algae LEDs must remain OFF EVA (habitat loop only), as the power budget cannot sustain them.

### Test Article Description

- **Battery:** 500 mAh single-cell LiPo (3.7V nominal, 1.85 Wh), commercial off-the-shelf (e.g., Turnigy 500mAh 1S or equivalent).
- **EDS load:** Resistive load simulating EDS pulsed draw (1.5W peak, pulsed at 100 ms every 5 s = ~0.3W average). Can use a programmable electronic load or resistor network.
- **Heater loads:** 2x resistive heaters simulating fingertip heaters (0.5W each) and 2x simulating foot heaters (1.0W each), total 3.0W. Wire in parallel with individual switches.
- **Power monitoring:** Voltage and current logging throughout test.

### Equipment and Materials BOM

| Item | Specification | Qty | Approx. Cost |
|------|---------------|-----|--------------|
| LiPo battery | 500 mAh, 3.7V, 1S | 1 | $10-20 |
| Programmable electronic load | 0-5A, 0-30V, pulsed mode capable | 1 | $300-500 (lab stock) |
| DC power supply (for charging) | 4.2V, 0.5A, LiPo charger | 1 | $30 (lab stock) |
| Precision power analyzer | Voltage (0.01V) and current (1mA) logging, 1 Hz | 1 | $400 (lab stock) |
| Resistive loads (EDS sim) | 9.1 Ohm (0.5W) x 3 in parallel for 1.5W peak | 3 | $5 |
| Resistive loads (finger heaters) | 6.8 Ohm (0.5W) x 2 | 2 | $3 |
| Resistive loads (foot heaters) | 3.4 Ohm (1.0W) x 2 | 2 | $3 |
| Toggle switches | SPST, rated 1A | 4 | $4 |
| Thermocouple + reader | For monitoring load resistor temperature | 1 | $50 (lab stock) |
| Stopwatch or data logger timer | For event timing | 1 | (lab stock) |
| Multimeter | For spot-check voltage | 1 | (lab stock) |
| **Total estimated cost** | | | **$800-1,015** |

### Step-by-Step Procedure

1. **Charge battery.** Charge LiPo to 4.2V (100% SOC) per manufacturer specifications. Record initial voltage: V_0.
2. **Connect loads.** Wire EDS load (3x 9.1 Ohm resistors in parallel = 3.03 Ohm, drawing ~1.2W at 3.7V) through a switch. Wire 2x finger heater loads (6.8 Ohm each) in parallel through a switch. Wire 2x foot heater loads (3.4 Ohm each) in parallel through a switch. Connect power analyzer in series with battery.
3. **Verify no LED load.** Confirm algae LED circuit is disconnected or switched OFF. This is the key condition: LEDs are OFF.
4. **Start data logging.** Begin logging battery voltage and current draw at 1 Hz.
5. **Activate EDS load.** Switch on EDS load. If using pulsed mode: 100 ms on, 4.9 s off (5 s period, 20% duty). If using continuous approximation: run at 0.3W average. Start timer.
6. **Run EDS for 2 hours.** Monitor voltage continuously. Log any voltage drops below 3.3V (low-voltage cutoff threshold for most electronics). If voltage drops below 3.3V before 2 hours, record the time and stop EDS portion.
7. **After 2 hours EDS, switch to heater loads.** Turn off EDS load. Turn on finger heater loads (2x 0.5W = 1.0W). After 15 minutes, also turn on foot heater loads (2x 1.0W = 2.0W). Total heater load = 3.0W.
8. **Run heaters for 30 minutes.** Monitor voltage continuously. If voltage drops below 3.3V before 30 minutes, record the time and stop.
9. **Record end-of-test data.** Log final battery voltage (V_final), total run time, and any low-voltage events.
10. **Calculate energy consumed.** Integrate power (V x I) over time from data log. Report total energy in Wh.

### Instrumentation

| Instrument | What It Measures | Placement | Sample Rate |
|------------|-----------------|-----------|-------------|
| Power analyzer | Battery voltage and current | In series with battery | 1 Hz (continuous) |
| Multimeter | Spot-check voltage | Across battery terminals | Manual, at 0, 1, 2, 2.5 hr |
| Thermocouple | Load resistor temperature | On 1 load resistor | 1 Hz (spot-check) |
| Stopwatch / timer | Event timing | — | Manual |

### Data to Record

- Battery voltage vs. time (continuous log)
- Current draw vs. time (continuous log)
- Timestamp of EDS start, EDS end, finger heaters on, foot heaters on, test end
- Any low-voltage cutoff events
- Final battery voltage
- Total energy consumed (Wh, from integrated log)

### Pass/Fail Criteria

| Criterion | Requirement |
|-----------|-------------|
| EDS run time | >= 2.0 hours at 0.3W average (or pulsed equivalent) |
| Heater run time | >= 30 minutes at 3.0W total |
| Battery voltage at end of test | >= 3.3V (no low-voltage cutoff during test) |
| Algae LEDs | OFF throughout (verified by circuit inspection) |

### Failure Modes and Disposition

- **Battery dies before 2 hours EDS:** Battery capacity may be degraded or EDS average draw exceeds 0.3W. Verify actual current draw. Consider 600-800 mAh battery if load is genuinely higher.
- **Voltage sags under heater load:** Foot heater resistance too low; increase resistance or reduce duty. Re-test.
- **LED accidentally ON:** Verify circuit isolation. This is a procedural error, not a design failure.

---

## Run Order and Dependencies

| Phase | Tests | Dependencies | Notes |
|-------|-------|-------------|-------|
| **Phase 1** | Test #1 (Hoop-stress cylinder) | None | **Gates the daily-wear mass claim (2.0 kg).** Must pass before any mass-comparison or system-level claim is published. Run first. |
| **Phase 2 (parallel)** | Test #2 (Tile flex) + Test #3 (EDS + perchlorate at seal) | None (independent of #1) | Can run in parallel with each other and in parallel with #1 if resources allow. |
| **Phase 2b** | Test #3b (Perchlorate residual at rotary seals/gloves) | Test #3 (same EDS coupon and simulant prep) | Run immediately after #3 using same vacuum chamber setup. Shares BOM with #3. |
| **Phase 3** | Test #4 (Power board) | None (independent) | Run last or in parallel with Phase 2. Confirms power budget for the non-algae EVA subsystem. |

**Critical path:** Test #1 is the gate. If #1 fails, the project must redesign the bladder-restraint before proceeding with system-level claims. Tests #2, #3/#3b, and #4 can proceed in parallel regardless of #1 outcome (they validate different subsystems).

---

## Required Purchases — Consolidated BOM

### Materials (Consumable / Fabrication)

| Item | Qty | Est. Cost | Tests Used |
|------|-----|-----------|------------|
| sPUU vitrimer film (1 mm, 0.1 m2) | 1 | $200-500 | #1 |
| Surlyn 8940 ionomer film (0.3 mm, 0.1 m2) | 1 | $50 | #1 (optional) |
| UHMWPE/aramid biaxial fabric (0.15 m2) | 1 | $100-300 | #1 |
| Aluminum end-caps (machined, 150 mm) | 2 | $150 | #1 |
| Viton O-rings (150 mm ID) | 4 | $20 | #1 |
| SS bolts M6x40 (12.9 grade) | 16 | $15 | #1 |
| Alumina hex tile (60 mm, 2 mm) | 1 | $50-100 | #2 |
| CNT woven fabric strip (200x100 mm) | 1 | $100-300 | #2 |
| Snap-fit polymer clips (PEEK/Ultem) | 3 | $30-60 | #2 |
| CNT underlayer sheet (0.5 mm) | 1 | $20 | #2 |
| ATSP/MWCNT/PTFE spiral EDS coupon | 1 | $500-1,000 | #3, #3b |
| Seal labyrinth fixture (PEEK) | 1 | $300-500 | #3 |
| Rotary seal labyrinth fixture (PEEK) | 1 | $400-600 | #3b |
| Glove interface fixture (PEEK) | 1 | $300-500 | #3b |
| Mars regolith simulant (JSC Mars-1A, 1 kg) | 1 | $100 | #3, #3b |
| Sodium perchlorate (NaClO4, 10 g) | 1 | $30 | #3, #3b |
| Lint-free wipes (pre-weighed) | 20 | $10 | #3, #3b |
| LiPo battery (500 mAh, 3.7V 1S) | 1 | $10-20 | #4 |
| Resistive loads (various) | 7 | $11 | #4 |
| Toggle switches (SPST) | 4 | $4 | #4 |
| CO2 gas (industrial, cylinder) | 1 | $100 | #3, #3b |
| Nitrogen (UHP, cylinder) | 1 | $50 | #1, #3, #3b |
| **Subtotal (consumables)** | | **$2,440-4,025** | |

### Equipment (Reusable / Lab Stock)

| Item | Est. Cost | Tests Used |
|------|-----------|------------|
| Digital pressure gauge (0-100 kPa) | $200 | #1 |
| Pressure transducer (0-100 kPa) | $250 | #1 |
| Digital calipers (0-200 mm) | $50 | #1, #2 |
| Dial indicator + stand | $150 | #1 |
| Data logger (4-20 mA) | $300 | #1, #4 |
| K-type thermocouple + reader | $50 | #1, #4 |
| Leak-down test fluid | $15 | #1 |
| Flex test fixture (knee geometry) | $500-1,000 | #2 |
| DC resistance meter (4-wire) | $400 | #2 |
| Clip retention force gauge | $100 | #2 |
| Camera / microscope | (lab stock) | #2, #3, #3b |
| Electrical contact probes (pogo) | $20 | #2 |
| Vacuum chamber (>10 L) | $1,000-2,000 | #3, #3b |
| Vacuum gauge (Pirani) | $500 | #3, #3b |
| AC HV power supply (0-500V) | $800-1,500 | #3, #3b |
| Oscilloscope (100 MHz) | (lab stock) | #3, #3b |
| HV probe (1000V) | $200 | #3, #3b |
| UV-Vis spectrometer or XRF | (lab stock) | #3, #3b |
| Analytical balance (0.001 g) | $500 | #3, #3b |
| Programmable electronic load | $300-500 | #4 |
| DC power supply (LiPo charger) | $30 | #4 |
| Precision power analyzer | $400 | #4 |
| Multimeter | (lab stock) | #4 |
| **Subtotal (equipment, new purchases)** | **$5,215-8,035** | |

### Total Estimated Budget

| Category | Cost Range |
|----------|------------|
| Consumable materials | $2,440-4,025 |
| Equipment (new purchases) | $5,215-8,035 |
| **Grand total** | **$7,655-12,060** |

Note: Many items are available from lab stock (data loggers, oscilloscopes, multimeters, vacuum chambers, environmental chambers, spectrometers). Actual out-of-pocket cost depends on existing lab inventory. The largest single costs are the AC HV power supply ($800-1,500) and the vacuum chamber ($1,000-2,000), both of which may be available in a materials characterization lab.
