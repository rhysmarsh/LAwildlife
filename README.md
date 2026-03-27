# LA County Non-Avian Vertebrates Field Guide

**206 species** of reptiles, amphibians, mammals, and freshwater fish in Los Angeles County, California.

🦎 **19 lizards** · 🐍 **28 snakes** · 🐢 **5 turtles** · 🐸 **11 frogs & toads** · 🔥 **7 salamanders** · 🦁 **16 large mammals** · 🐿️ **34 small mammals** · 🦇 **19 bats** · 🦭 **16 marine mammals** · 🐟 **29 freshwater fish** · 🐊 **10 introduced herps** + 12 subspecies

**Live at [lawildlife.org](https://la-fauna.org)**

## Features

- **Single-file PWA** — works offline after first load
- **iNaturalist integration** — photos, observation maps, life list tracking
- **Venomous species warnings** — clear rattlesnake identification with emergency procedures
- **Conservation status** — FE, FT, SSC badges for 27 listed species
- **Satellite observation maps** — ESRI imagery + iNaturalist occurrence overlay
- **Activity period badges** — diurnal/nocturnal/crepuscular/cathemeral
- **Family-level browsing** — collapsible family chips with species counts
- **Cross-taxa search** — find species across all 11 groups
- **100% ecological association (hp) coverage** — every species has ecology notes
- **100% look-alike (vs) notes** for all venomous species

## Architecture

Single `index.html` with all CSS, JS, and species data inlined. No build step, no framework, no dependencies (except Leaflet for maps and Google Fonts).

- **Photos**: fetched from iNat `/taxa/autocomplete`, cached in IndexedDB
- **Life list**: iNat `species_counts` API with `place_id=962` (LA County)
- **Maps**: ESRI satellite tiles + iNat observation overlay
- **Fonts**: EB Garamond (serif) + DM Sans (sans-serif)
- **Branding**: dark forest green `#1A3C35`, muted gold `#BFA46E`, warm cream `#FAF8F4`

## Key Species

| Category | Notable Species |
|---|---|
| **Venomous** | Southern Pacific Rattlesnake, Red Diamond Rattlesnake, Sidewinder, Speckled Rattlesnake |
| **Endangered (FE)** | Arroyo Toad, Unarmored Threespine Stickleback, Southern Steelhead, Desert Tortoise (FT) |
| **Iconic LA** | Mountain Lion (P-22 legacy), Coyote, Island Fox, California Newt |
| **Conservation** | Western Pond Turtle, Coast Horned Lizard, Two-striped Gartersnake, Pallid Bat |
| **Invasive threats** | American Bullfrog, Red-eared Slider, Brown Anole, Largemouth Bass |
| **Marine** | Gray Whale, Blue Whale, Humpback, Orca, Sea Otter |

## Sources

- **CaliforniaHerps.com** (Gary Nafis) — definitive CA herps resource
- **Stebbins & McGinnis**, *Field Guide to Western Reptiles and Amphibians* (4th ed., 2018)
- **Jameson & Peeters**, *Mammals of California* (revised ed., 2004)
- **Moyle**, *Inland Fishes of California* (revised ed., 2002)
- **CDFW** Species of Special Concern lists
- **RASCals** / NHMLAC community science project
- **SCAS Bulletin** — Annotated Checklist of Terrestrial Mammals of LA County (2022)
- **NPS** Santa Monica Mountains NRA wildlife monitoring
- **iNaturalist** (inaturalist.org) — photos and occurrence data

## Deploy

Netlify drag-and-drop: zip `index.html`, `sw.js`, `manifest.json`, `_headers`, `_redirects`, and `icons/` directory.

## Part of the LA County Field Guide Suite

- 🦋 [LA County Invertebrate Guide](https://labugs.org) — 1,016 species
- 🌿 [LA County Plant Guide](https://la-flora.org) — 730 species
- 🍄 [LA County Fungi Guide](https://la-fungi.org) — 567 species
- 🦎 **LA County Wildlife Guide** (this guide) — 206 species

## License

GPL v3 — see [LICENSE](LICENSE)

⚠️ **DISCLAIMER**: For informational purposes only. Not a substitute for expert wildlife identification. If bitten by a rattlesnake, call 911 immediately. Never handle wild animals.

---
*Field guide by Rhys Marsh*
