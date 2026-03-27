# LA County Wildlife Field Guide

**lawildlife.org** — Free, offline-capable field guide to 252 species of reptiles, amphibians, mammals, and freshwater/estuarine fish in Los Angeles County, California.

## Features

- **252 species** across 9 taxa groups (245 full entries + 7 subspecies)
- **Live iNaturalist integration** — observation heatmaps, personal life list tracking
- **Offline PWA** — works without internet after first load
- **Cross-guide ecosystem** — linked to [la-flora.org](https://la-flora.org), [lafungi.org](https://lafungi.org), [labugs.org](https://labugs.org)
- **Venomous species warnings** — 6 rattlesnake species with emergency protocols
- **Conservation status badges** — ESA/CESA/SSC listings for 30 species
- **Frog call audio** — 14 species with call descriptions and CaliforniaHerps.com recording links
- **Establishment filter** — native (178), introduced (71), invasive (3)
- **Smart search** — cross-group search across all taxa with preserved query

## Taxa Groups

| Tab | Emoji | Species | Coverage |
|-----|-------|---------|----------|
| Lizards | 🦎 | 37+3 ssp | Native + introduced (Green Anole, Five-lined Skink, etc.) |
| Snakes | 🐍 | 35 | Including Mojave Rattlesnake (neurotoxic) |
| Turtles | 🐢 | 15 | 2 native + 13 pet-release species |
| Frogs & Toads | 🐸 | 14 | Including Rana muscosa (FE), Coquí, Cuban Tree Frog |
| Salamanders | 🔥 | 7 | All native |
| Mammals | 🐾 | 55+2 ssp | Land mammals (18 families merged) |
| Bats | 🦇 | 19+1 ssp | All native |
| Marine Mammals | 🦭 | 19 | Whales, dolphins, pinnipeds |
| Fish | 🐟 | 43+1 ssp | Freshwater + estuarine (Grunion, Topsmelt, Killifish) |

## Architecture

Two-file PWA with service worker caching:

```
index.html          69 KB   App shell (UI, rendering, iNat API integration)
species-data.json  293 KB   Species data (all 252 entries)
sw.js                1 KB   Network-first service worker
manifest.json      586 B    PWA manifest
```

### Key Technical Patterns

- **Async data loader** with CacheStorage fallback and branded loading overlay
- **IndexedDB photo cache** (`vertGuidePhotos`) — persists iNat taxon photos offline
- **Cross-guide deep links** — `?species=Scientific+name` URLs with NAME_ALIASES for reclassified taxa
- **linkText() placeholder system** — prevents double-linking when cross-referencing flora/fungi guides
- **Subspecies folding** — ssp entries render inside parent detail sheets, not as separate cards
- **Frog call renderer** — `rCall(sp)` with external audio links
- **Dynamic venomous warnings** — per-species venom description from fm.Venom field

### Species Data Schema

```javascript
{
  id: "vert_0001",        // Unique card ID
  cn: "Common Name",
  sn: "Genus species",    // Binomial or trinomial
  fam: "Family",
  st: "common",           // common|uncommon|rare|endangered
  desc: "Description...", // 123+ chars
  hp: "Ecology note...",  // 83+ chars, unique per species
  elev: "coast,low,foot", // Elevation bands
  mo: [3,4,5,...],        // Active months
  pk: [5,6,7,8],          // Peak months
  dur: "diurnal",         // diurnal|nocturnal|crepuscular|cathemeral
  est: "native",          // native|introduced|invasive
  fm: {                   // Field marks (min 4 entries)
    Size, Color, Habitat, Behavior, Diet, vs, Urban, Conservation, Venom
  },
  // Optional:
  ssp: true,              // Subspecies — renders inside parent card, not as own card
  venomous: true,         // Rattlesnakes only
  conservation: "FE",     // FE|FT|SE|ST|SSC
  call: "description",    // Frog vocalization
  callUrl: "https://...", // External audio link
}
```

## Deployment

Drag-and-drop to Netlify:
1. Upload `index.html`, `species-data.json`, `sw.js`, `manifest.json`, and all icon files
2. Set custom domain to `lawildlife.org`
3. Enable HTTPS

## Data Sources

CaliforniaHerps.com (Gary Nafis); Stebbins & McGinnis *Western Reptiles & Amphibians*; Hansen & Shedd *California Amphibians and Reptiles* (Princeton); Jameson & Peeters *Mammals of California*; Moyle *Inland Fishes of California*; CDFW Species of Special Concern Lists; NHM RASCals project; NPS Santa Monica Mountains; iNaturalist; USFWS ESA Recovery Plans; Bat Conservation International.

## Related Guides

- [labugs.org](https://labugs.org) — LA County Invertebrate Guide (3,438 species)
- [la-flora.org](https://la-flora.org) — LA County Plant Guide
- [lafungi.org](https://lafungi.org) — LA County Fungi Guide (578 species)

## Tools

- `gap-finder-fauna.html` — iNaturalist audit tool with embedded species lookup. Queries Reptilia, Amphibia, Mammalia, and Actinopterygii to find species with RG observations in LA County not yet in the guide.

## License

GPL v3. Species data compiled from public sources. iNaturalist photos are CC-licensed and attributed per-image. For informational purposes only — always maintain safe distance from wildlife.

## Version History

| Version | Species | Changes |
|---------|---------|---------|
| v2.004 | 206 | Single-file architecture, 11 taxa groups |
| v3.001 | 203 | Two-file split, cross-links, tab merge, est field |
| v3.002 | 203 | Content enrichment, Urban notes, gap finder |
| v3.003 | 255→252 | +49 species from gap audit, 9 synonym updates, frog calls, id fix |
| v3.004 | 252 | Subspecies folding (plants-guide pattern), removed synonyms/redundant entries, fixed chaparral link, dynamic venomous warnings |
