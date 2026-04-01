# LA County Wildlife Field Guide

**[lawildlife.org](https://lawildlife.org)** · Free, offline-capable field guide to 252 species of reptiles, amphibians, mammals, and freshwater fish in Los Angeles County, California.

Part of the LA County field guide suite: [la-flora.org](https://la-flora.org) · [lafungi.org](https://lafungi.org) · [labugs.org](https://labugs.org) · **lawildlife.org**

## Features

- **252 species** across 9 taxa groups (245 full + 7 subspecies rendered inside parents)
- **iNaturalist integration** — observation heatmaps, personal life list with pagination
- **Offline PWA** — three-tier fallback: network → CacheStorage → IndexedDB
- **Cross-guide ecosystem** — 34 cross-link terms to la-flora.org and lafungi.org
- **Venomous species warnings** — 5 rattlesnakes with per-species emergency protocols
- **Conservation badges** — ESA/CESA/SSC listings for 30 species
- **Frog call audio** — 14 species with descriptions + CaliforniaHerps recording links
- **Establishment filter** — native (178) · introduced (71) · invasive (3)
- **Deep links** — `?species=` (detail sheet) · `?search=` (filtered grid)
- **Subspecies folding** — ssp entries render inside parent detail sheets, not as cards

## Taxa

| Tab | Species | Notes |
|-----|---------|-------|
| 🦎 Lizards | 36+3 ssp | Includes 7 introduced (Green Anole, Five-lined Skink, geckos) |
| 🐍 Snakes | 35 | Mojave Rattlesnake (neurotoxic), Brahminy Blindsnake |
| 🐢 Turtles | 16 | 2 native + 14 pet-release species |
| 🐸 Frogs & Toads | 15 | Rana muscosa (FE), Coquí, Cuban Tree Frog |
| 🔥 Salamanders | 7 | All native, California Newt SSC |
| 🐾 Mammals | 55+2 ssp | 19 families merged; Pronghorn, Kit Fox, Mohave GS (ST) |
| 🦇 Bats | 20 | All native, 6 SSC species |
| 🦭 Marine Mammals | 19 | Whales, dolphins, pinnipeds, Southern Sea Otter (FT) |
| 🐟 Fish | 42+2 ssp | Freshwater + estuarine; Grunion, Killifish, 3 tilapia species |

## Architecture

```
index.html           72 KB    App shell
species-data.json   289 KB    Species data (252 entries)
sw.js                 1 KB    Network-first service worker
manifest.json       586 B     PWA manifest
_headers            237 B     Netlify headers (cache, security)
_redirects           20 B     Netlify redirects
favicon.ico         2.2 KB    Classic favicon (16+32px)
icon-16.png         624 B     Browser tab
icon-32.png         1.5 KB    Browser tab @2x
icon-180.png         17 KB    iOS home screen
icon-192.png         18 KB    Android PWA
icon-512.png         55 KB    PWA install / splash
apple-touch-icon     17 KB    iOS Safari
```

### Synced Features (la-flora.org v3.015+ patterns)

| Feature | Build Lesson |
|---------|-------------|
| Subspecies folding | Plants pattern |
| Badge-col card layout | #19 |
| iOS notch fix | #22 |
| Cross-group search preserves query | #23 |
| est field (no INTRO_SET) | #26 |
| IDB offline three-tier fallback | #30 |
| fetchLL pagination + quality_grade | #32 |
| linkText() placeholder cross-links | #33 |
| NAME_ALIASES in isO() | #32 |
| ?search= grid / ?species= detail | #18 |

## Deployment

**Netlify**: Drag-and-drop the deployment zip. Set custom domain `lawildlife.org`. HTTPS auto-enabled.

**Manual**: Upload all files to web root. Ensure `sw.js` is served from root with `Cache-Control: no-cache`.

## Data Quality

| Metric | Value |
|--------|-------|
| fm.vs (look-alike notes) | 252/252 (100%) |
| fm.Habitat | 252/252 (100%) |
| fm.Size + fm.Color | 252/252 (100%) |
| fm.Urban (LA-specific locations) | 127/252 (50%) |
| Unique hp ecological notes | 252/252 (100%) |
| Description length | min 123, mean 199 chars |
| hp length | min 83 chars |
| Missing required fields | 0 |
| Duplicate hp notes | 0 |
| Species without id | 0 |

## Data Sources

CaliforniaHerps.com (Gary Nafis) · Stebbins & McGinnis *Western Reptiles & Amphibians* · Hansen & Shedd *California Amphibians and Reptiles* (Princeton) · Jameson & Peeters *Mammals of California* · Moyle *Inland Fishes of California* · CDFW SSC Lists · NHM RASCals · NPS Santa Monica Mountains · iNaturalist · USFWS Recovery Plans · Bat Conservation International

## Related Guides

| Guide | URL | Species |
|-------|-----|---------|
| Plants, Mosses & Lichens | [la-flora.org](https://la-flora.org) | 1,476 |
| Fungi | [lafungi.org](https://lafungi.org) | 567 |
| Invertebrates | [labugs.org](https://labugs.org) | 3,439 |
| **Wildlife** | **[lawildlife.org](https://lawildlife.org)** | **252** |

## Tools

`gap-finder-fauna.html` — Standalone iNaturalist audit tool with 245 embedded binomials. Queries four taxon classes against place_id=962. Upload species-data.json for freshness.

## Version History

| Version | Species | Changes |
|---------|---------|---------|
| v2.004 | 206 | Single-file, 11 taxa groups |
| v3.001 | 203 | Two-file split, cross-links, est field, deep links |
| v3.002 | 203 | Content enrichment (52 Urban notes), gap finder |
| v3.003 | 252 | +49 species, 9 synonym updates, frog calls, 14 NAME_ALIASES |
| v3.004 | 252 | Subspecies folding, dynamic venomous warnings, chaparral fix |
| v3.005 | 252 | Backport: badge-col, IDB offline, fetchLL pagination, ?search= |

## License

GPL v3. iNaturalist photos CC-licensed, attributed per-image. For informational purposes only — always maintain safe distance from wildlife.
