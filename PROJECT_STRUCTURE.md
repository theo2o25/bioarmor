# BioArmor Project Structure

```
bioarmor/
├── README.md                    # Main project documentation
├── CONTRIBUTING.md              # Contribution guidelines
├── LICENSE                      # MIT License
├── FUNDING.md                   # Grant and investor guide
├── .gitignore                   # Git ignore rules
│
├── docs/                        # Documentation
│   ├── BIOARMOR_CONCEPT.md      # Full technical specification
│   ├── PERCHANCE_PROMPTS.md     # AI image generation prompts
│   └── images/                  # Concept images
│       ├── BIOARMOR_FULL_SUIT_CONCEPT.png
│       ├── Bioarmor concept.jpg
│       ├── Bioarmor concept2.jpg
│       └── BIOARMOR_TILE_BLUEPRINT.png
│
├── models/                      # 3D models
│   ├── BIOARMOR_CHEST_V2.stl
│   ├── BIOARMOR_SINGLE_TILE_v2.stl
│   └── layers/
│       ├── LAYER_1_PV_Coating.stl
│       ├── LAYER_2A_Ceramic.stl
│       ├── LAYER_2B_CNT_Underlayer.stl
│       ├── LAYER_3_Chain_Mail_v2.stl
│       ├── LAYER_4_Aerogel_Algae.stl
│       └── LAYER_5_Inner_Comfort.stl
│
├── src/                         # Source code (future)
│   ├── algae_bioreactor/        # Life support system
│   ├── joint_assistance/        # Tendon-driven motors
│   ├── dust_protection/         # Electrodynamic shield
│   ├── thermal_control/         # Active cooling/heating
│   └── communication/           # Radio and mesh network
│
├── tests/                       # Test suites (future)
│   ├── unit_tests/
│   ├── integration_tests/
│   └── acceptance_tests/
│
├── research/                    # Research papers (future)
│   ├── algae_optimization/
│   ├── materials_testing/
│   └── safety_analysis/
│
├── business/                    # Business documents
│   ├── pitch_deck/
│   ├── financial_projections/
│   └── market_research/
│
└── .github/                     # GitHub workflows
    ├── ISSUE_TEMPLATE/
    └── workflows/
```

## File Descriptions

### Core Documentation

| File | Description |
|------|-------------|
| `README.md` | Main project overview, technical specs, funding strategy |
| `CONTRIBUTING.md` | Guidelines for contributors |
| `FUNDING.md` | Detailed grant and investor information |
| `LICENSE` | MIT License |

### Technical Files

| File | Description |
|------|-------------|
| `BIOARMOR_CONCEPT.md` | Complete technical specification (1800+ lines) |
| `PERCHANCE_PROMPTS.md` | AI image generation prompts for concept art |

### 3D Models

| File | Description |
|------|-------------|
| `BIOARMOR_CHEST_V2.stl` | Chest armor model |
| `BIOARMOR_SINGLE_TILE_v2.stl` | Individual ceramic tile |
| `LAYER_*.stl` | Individual suit layers |

### Images

| File | Description |
|------|-------------|
| `BIOARMOR_FULL_SUIT_CONCEPT.png` | Full suit concept render |
| `Bioarmor concept.jpg` | Chest armor concept |
| `Bioarmor concept2.jpg` | Alternative view |
| `BIOARMOR_TILE_BLUEPRINT.png` | Tile technical drawing |
