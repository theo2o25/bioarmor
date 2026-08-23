# BioArmor Project Structure

```
bioarmor/
├── README.md                          # Main project documentation
├── LICENSE                            # MIT License
├── .gitignore                         # Git ignore rules
│
├── docs/                              # Documentation
│   ├── BIOARMOR_CONCEPT.md            # Full technical specification (1800+ lines)
│   ├── PERCHANCE_PROMPTS.md           # AI image generation prompts (V1 + V2)
│   ├── FUNDING.md                     # Grant and investor strategy
│   ├── CONTRIBUTING.md                # Contribution guidelines
│   └── PROJECT_STRUCTURE.md           # This file
│
├── images/                            # Concept images
│   ├── BIOARMOR_FULL_SUIT_CONCEPT.png # Full suit concept render
│   ├── Bioarmor concept.jpg           # V1 integrated concept
│   ├── Bioarmor concept2.jpg          # V2 modular concept
│   └── BIOARMOR_TILE_BLUEPRINT.png    # Tile technical drawing
│
└── models/                            # 3D models
    ├── BIOARMOR_CHEST_V2.stl          # Chest armor model
    ├── BIOARMOR_SINGLE_TILE_v2.stl    # Individual ceramic tile
    ├── BIOARMOR_TILE_V2.stl           # Tile variant
    └── layers/                        # Individual suit layers
        ├── LAYER_1_PV_Coating.stl     # Perovskite solar coating
        ├── LAYER_2A_Ceramic.stl       # Al2O3 ceramic tile
        ├── LAYER_2B_CNT_Underlayer.stl# Carbon nanotube underlayer
        ├── LAYER_3_Chain_Mail_v2.stl  # Chain mail protection
        ├── LAYER_4_Aerogel_Algae.stl  # Aerogel + algae layer
        └── LAYER_5_Inner_Comfort.stl  # Comfort liner
```

## File Descriptions

### Root Files

| File | Description |
|------|-------------|
| `README.md` | Main project overview, technical specs, funding strategy |
| `LICENSE` | MIT License |
| `.gitignore` | Git ignore rules for OS, editor, and build files |

### Documentation (`docs/`)

| File | Description | Lines |
|------|-------------|-------|
| `BIOARMOR_CONCEPT.md` | Complete technical specification | 1800+ |
| `PERCHANCE_PROMPTS.md` | AI image generation prompts for V1 and V2 | 200+ |
| `FUNDING.md` | Detailed grant and investor information | 400+ |
| `CONTRIBUTING.md` | Guidelines for contributors | 50+ |
| `PROJECT_STRUCTURE.md` | This file | — |

### Images (`images/`)

| File | Description | Use |
|------|-------------|-----|
| `BIOARMOR_FULL_SUIT_CONCEPT.png` | Full suit concept render | README header |
| `Bioarmor concept.jpg` | V1 integrated concept | V1 section |
| `Bioarmor concept2.jpg` | V2 modular concept | V2 section |
| `BIOARMOR_TILE_BLUEPRINT.png` | Tile technical drawing | V2 section |

### 3D Models (`models/`)

| File | Description | Print Settings |
|------|-------------|----------------|
| `BIOARMOR_CHEST_V2.stl` | Chest armor | 0.2mm layer, 20% infill |
| `BIOARMOR_SINGLE_TILE_v2.stl` | Individual tile | 0.1mm layer, 100% infill |
| `BIOARMOR_TILE_V2.stl` | Tile variant | 0.1mm layer, 100% infill |

### Layer Models (`models/layers/`)

| File | Description | Material |
|------|-------------|----------|
| `LAYER_1_PV_Coating.stl` | Perovskite solar coating | Transparent |
| `LAYER_2A_Ceramic.stl` | Al2O3 ceramic tile | White ceramic |
| `LAYER_2B_CNT_Underlayer.stl` | Carbon nanotube underlayer | Black |
| `LAYER_3_Chain_Mail_v2.stl` | Chain mail protection | Silver metal |
| `LAYER_4_Aerogel_Algae.stl` | Aerogel + algae layer | Green transparent |
| `LAYER_5_Inner_Comfort.stl` | Comfort liner | Purple fabric |

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Aug 2024 | Initial release |
| 1.1 | Aug 2024 | Added V1/V2 distinction, reorganized structure |
