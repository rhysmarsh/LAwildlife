# Continuation Prompt — Fauna Guide Updates (v3.004)

## REPLACEMENT: Guide 4 Section

## Guide 4: LA County Wildlife Field Guide (lawildlife.org)

**Status**: v3.004 — deploy-ready, 53/53 pre-publish checks passed
**Species**: 255 across 9 taxa groups (247 unique binomials + 9 subspecies/cross-refs)
**Architecture**: Two-file (index.html 69 KB + species-data.json 293 KB + sw.js 1 KB)
**IDB name**: `vertGuidePhotos`
**SW cache**: `la-fauna-guide-v3.004`
**GitHub**: https://github.com/rhysmarsh/LA-vertebrates
**License**: GPL v3 + disclaimer
**iNat taxon IDs**: 26036 (Reptilia), 20978 (Amphibia), 40151 (Mammalia), 47178 (Actinopterygii) | place_id: 962

### Taxa Groups (9 tabs — taxonomic class order)
```
REPTILIA:   🦎 Lizards (41) | 🐍 Snakes (36) | 🐢 Turtles (16)
AMPHIBIA:   🐸 Frogs & Toads (16) | 🔥 Salamanders (7)
MAMMALIA:   🐾 Mammals (57) | 🦇 Bats (20) | 🦭 Marine Mammals (19)
FISH:       🐟 Freshwater & Estuarine Fish (44)
```

### Key Metrics
- **252 species** across 9 tabs, 78 unique families
- **Establishment**: 182 native, 71 introduced, 3 invasive — per-species `est` field
- **100% unique hp ecological notes** across all 252 species (0 duplicates)
- **fm.vs**: 255/255 (100%), fm.Habitat: 255/255 (100%), fm.Urban: 127/255 (50%)
- **fm fields**: min 4, mean 6.3; desc: min 123 chars, mean 199; hp: min 83 chars
- **Cross-links**: 34 terms (28 PLANT_LINKS → la-flora.org, 6 FUNGI_LINKS → lafungi.org)
- **14 frog/toad call descriptions** with CaliforniaHerps audio links
- **6 venomous species** flagged with emergency warnings
- **30 conservation entries** (ESA/CESA/SSC)
- **14 NAME_ALIASES** for reclassified taxa
- **Frog call audio**: rCall() renderer with purple-styled ▶ Listen links
- **Gap finder**: gap-finder-fauna.html with 247 embedded binomials (v3.004)

### v3.004 Migration History (March 2026)

**v3.001 — Structural migration** (from v2.004 single-file 289 KB):
- Two-file architecture (index.html + species-data.json)
- Async loader with CacheStorage fallback + branded 🦎 overlay
- `est` field replaced INTRO_SET constant
- Cross-guide deep links (findAndOpenSpecies + checkDeepLink + NAME_ALIASES)
- Cross-guide footer nav (Flora / Fungi / Bugs / Wildlife)
- tbar PWA notch fix (Build Lesson #22)
- switchTaxonKeepSearch (Build Lesson #23)
- Cross-link linkText() with placeholder system (Build Lesson #29)

**v3.002 — Content enrichment + tab restructure:**
- Merged introduced_herps into native tabs (10 species moved, 3 cross-ref duplicates removed)
- Merged large_mammals + small_mammals → single "mammals" tab (🐾, 18 families)
- 11 → 9 tabs, sorted by taxonomic class order
- 52 fm.Urban notes added (26% → 51% coverage)
- 11 thin species enriched (fm min raised 2→4, desc min raised 55→123)
- Gap finder rebuilt with 194 embedded binomials (no fetch dependency)

**v3.004 — Species expansion + quality pass:**
- 49 new species added from gap finder audit results
- 9 taxonomic synonyms updated to current iNat binomials
- 14 frog/toad call descriptions + CaliforniaHerps audio links
- 4 new CONSERVATION entries (Rana muscosa FE, Xantusia riversiana FT, Xerospermophilus mohavensis ST, Crotalus scutulatus SSC)
- 8 new families added to TAXA config and APG_ORDER
- Gap finder updated with 247 embedded binomials
- 53/53 pre-publish checks passed

### Species Added in v3.004

**Critical additions (venomous/endangered):**
- Mojave Rattlesnake (*Crotalus scutulatus*, 316 obs, VENOMOUS neurotoxic+hemotoxic)
- Southern Mountain Yellow-legged Frog (*Rana muscosa*, 20 obs, FEDERALLY ENDANGERED, SGM endemic)

**Native lizards (7):**
- Southern Sagebrush Lizard (*S. vandenburgianus*, 471 obs, SGM high-elevation)
- San Diegan Legless Lizard (*A. stebbinsi*, 308 obs, species split)
- Island Night Lizard (*X. riversiana*, 243 obs, FT Channel Islands endemic)
- Long-nosed Leopard Lizard (*G. wislizenii*, 89 obs, desert predator)
- Desert Collared Lizard (*C. bicinctores*, 21 obs)
- Desert Horned Lizard (*P. platyrhinos*, 16 obs)
- Northern Legless Lizard (*A. pulchra*, 30 obs, species split)

**Introduced herps (6 + 5 snakes/lizards):**
- Brahminy Blindsnake (*I. braminus*, 174 obs, parthenogenetic)
- Green Anole (*A. carolinensis*, 20 obs, NHM RASCals tracked)
- African Five-lined Skink (*T. quinquetaeniata*, 9 obs, NHM tracked)
- Indo-Pacific House Gecko (*H. garnotii*, 15 obs, parthenogenetic)
- Ornate Tree Lizard (*U. ornatus*, 18 obs)
- Banded Watersnake (*N. fasciata*, 17 obs)

**Pet-release turtles (11):**
- Florida Softshell (117), False Map Turtle (42), Ouachita Map Turtle (35), Florida Red-bellied Cooter (27), River Cooter (14), Peninsular Cooter (12), Common Snapping Turtle (13), Three-toed Box Turtle (4), Eastern Musk Turtle (3), Diamondback Terrapin (3), African Spurred Tortoise (3)

**Frogs (2):** Common Coquí (*E. coqui*, 6 obs), Cuban Tree Frog (*O. septentrionalis*, 5 obs)

**Mammals (5):**
- European Rabbit (*O. cuniculus*, 128 obs), Pronghorn (*A. americana*, 12 obs), Eastern Gray Squirrel (*S. carolinensis*, 10 obs), Kit Fox (*V. macrotis*, 6 obs), Mohave Ground Squirrel (*X. mohavensis*, 5 obs, STATE THREATENED)

**Estuarine/freshwater fish (14):**
- Topsmelt Silverside (196), California Grunion (148), Jack Silverside (57), Mississippi Silverside (47), Convict Cichlid (44), California Killifish (34), Oriental Weatherfish (29), Pacific Staghorn Sculpin (26), Guppy (19), Nile Tilapia (16), Striped Bass (13), Amur Carp (10), Blue Tilapia (7), Variable Platyfish (5)

**Snakes (3):** Western Black-headed Snake (71), Desert Nightsnake (8), plus Brahminy Blindsnake above

### Taxonomic Synonym Updates (v3.004)

| Old binomial (in v3.002) | New binomial (current iNat) | Type |
|---|---|---|
| Thomomys bottae | Megascapheus bottae | Genus reclassification |
| Micropterus salmoides | Micropterus nigricans | Species split |
| Catostomus santaanae | Pantosteus santaanae | Genus reclassification |
| Chionactis occipitalis | Sonora occipitalis | Genus reclassification |
| Lagenorhynchus obliquidens | Aethalodelphis obliquidens | Genus reclassification |
| Lasiurus blossevillii | Lasiurus frantzii | Species split |
| Rhinichthys osculus | Rhinichthys gabrielino | Species split (LA endemic) |
| Peromyscus maniculatus | Peromyscus gambelii | Species split |
| Scapanus latimanus | Scapanus occultus | Species split |
All old binomials added to NAME_ALIASES for backward-compatible deep links.

### Gap Finder Audit Results (v3.004)

Executed gap-finder-fauna.html against live iNat API. Results: 158 raw gaps triaged to:
- 84 marine fish (out of scope — pending marine guide)
- 3 domestic animals (Felis catus, Canis familiaris, Capra hircus — excluded)
- 10 taxonomic synonyms (updated, see above)
- 49 genuine gaps (all added)
- 8 T3 species skipped (one-off pet escapes with ≤3 obs, no established populations)

### Scope Decisions

**Fish section expanded to estuarine/nearshore:**
- California Grunion, Topsmelt, Jack Silverside, California Killifish, Pacific Staghorn Sculpin are estuarine species now included
- Marine-only families (Scombridae, Pomacentridae, Sciaenidae, etc.) excluded — pending marine guide
- Line drawn at: species that use estuarine/lagoon/coastal creek habitat (IN) vs. species that are exclusively pelagic/reef (OUT)

**T3 species excluded (one-off pet escapes):**
- Central Bearded Dragon, Gold Dust Day Gecko, Green Iguana, Sonoran Spotted Whiptail (lizards)
- Northern Red-bellied Cooter, Chinese Softshell Turtle, Nicaraguan Slider (turtles)
- Ticul's desert shrew (questionable ID)

### Cross-Link Ecosystem

**Outbound (wildlife → flora)**: 28 PLANT_LINKS terms → la-flora.org
**Outbound (wildlife → fungi)**: 6 FUNGI_LINKS terms → lafungi.org
**linkText() architecture**: Placeholder system (Build Lesson #29). Longest-match-first. Applied to rHP(), openDS() desc, rFM() Habitat/Diet/Urban/Conservation.

**Inbound**: findAndOpenSpecies() + checkDeepLink() with 14 NAME_ALIASES
**Cross-guide footer nav**: Flora / Fungi / Bugs / Wildlife with active state

### Frog Call Audio (v3.004)

14 species with `call` field (description) and `callUrl` (CaliforniaHerps.com link):
- Baja California Treefrog (RIBBIT — the Hollywood frog), California Treefrog (duck quacking), Arroyo Toad, Red-spotted Toad, Western Toad, Western Spadefoot, American Bullfrog (JUG-O-RUM), African Clawed Frog (underwater), Common Coquí (ko-KEE!), Rio Grande Leopard Frog
- Plus 4 species from original guide with existing call data

Rendered by `rCall(sp)` function with purple styling (`.ds-call`) and ▶ Listen external link.

### Fauna-Specific Schema
```javascript
{
  dur: 'diurnal',         // diurnal|nocturnal|crepuscular|cathemeral
  est: 'native',          // native|introduced|invasive
  venomous: true,         // boolean, rattlesnakes only (6 species)
  conservation: 'FE',     // FE|FT|SE|ST|SSC (also in CONSERVATION constant)
  end: 'CA',              // CA|SoCal endemic (optional)
  elev: 'coast,low,foot', // elevation bands
  mo: [3,4,5,...],        // active months
  pk: [5,6,7,8],          // peak months
  call: 'description',    // frog/toad vocalization description
  callUrl: 'https://...',  // external audio recording link
  fm: { Size, Color, Habitat, Behavior, Diet, vs, Venom, Urban, Conservation, Call }
}
```

### Production Icons
- icon-16.png, icon-32.png, icon-180.png, icon-192.png, icon-512.png
- apple-touch-icon.png, favicon.ico
- Source: icon-source.svg — gold lizard silhouette on forest green gradient


### v3.004 — Subspecies folding + quality fixes

**Subspecies handling (Plants guide pattern):**
- `ssp=true` entries filtered from card grid — no separate cards for subspecies
- `rSSP(sp)` function renders subspecies inside parent species detail sheet
- Gold-bordered expandable section with subspecies name, description, and hp note
- CSS: `.ds-ssp-section` with gold left border on cream background

**Removed redundant entries (255→252):**
- Pacific Chorus Frog (P. regilla) — taxonomic synonym, not a subspecies. Added to NAME_ALIASES → P. hypochondriaca
- Blainville's Horned Lizard — same binomial as Coast Horned Lizard, merged content into parent
- Southern California Rattlesnake (C. oreganus nominal) — parent is C. o. helleri, merged
- Anniella spp. aggregate — resolved to A. stebbinsi (removed in v3.003)

**Bug fixes:**
- All 53 new species assigned `id` fields (vert_0210–vert_0262) — cards now clickable
- Venomous warning now dynamic per species (reads sp.cn + sp.fm.Venom)
- Chaparral/sage scrub removed from PLANT_LINKS (habitat types, not species); replaced with chamise/California sagebrush
- Unarmored Threespine Stickleback flagged as ssp=true (G. a. williamsoni)
- P. regilla added to NAME_ALIASES for backward-compatible deep links

**Remaining ssp entries (7):**
- San Diego Banded Gecko (C. v. abbotti) → Western Banded Gecko
- Coastal Western Whiptail (A. t. multiscutata) → Western Whiptail
- Coastal Whiptail (A. t. stejnegeri) → Western Whiptail
- San Diego Desert Woodrat (N. l. intermedia) → Desert Woodrat
- Island Spotted Skunk (S. g. amphiala) → Spotted Skunk
- Unarmored Threespine Stickleback (G. a. williamsoni) → Threespine Stickleback
- Southern Steelhead (O. m. irideus) → Rainbow Trout

### Build Lesson #34: Subspecies Folding (v3.004)
Plants guide pattern for subspecies handling:
1. `ssp=true` entries are stored in species-data.json but filtered from card grid: `list.filter(s=>!s.ssp)`
2. `rSSP(sp)` function queries SPECIES_DATA for ssp entries sharing the parent's binomial prefix
3. Subspecies render as expandable sections inside the parent's detail sheet
4. Counts exclude ssp: `sC()` and `lC()` already filtered `!sp.ssp`
5. Taxonomic synonyms (same genus, different epithet) should be NAME_ALIASES, not ssp entries
6. Every ssp entry MUST have a parent with matching binomial prefix in the same taxa group

### Build Lesson #35: Cross-Link Scope (v3.004)
PLANT_LINKS should only contain actual plant species names, not habitat-type descriptors:
- ✅ 'chamise' → Adenostoma fasciculatum (specific plant)
- ✅ 'coast live oak' → Quercus agrifolia (specific plant)
- ❌ 'chaparral' → Adenostoma fasciculatum (habitat with dozens of species)
- ❌ 'sage scrub' → Artemisia californica (habitat with dozens of species)
Habitat types link misleadingly to a single species card. Remove them or use the dominant species name instead.

### Remaining Work
1. **Reciprocal WILDLIFE_LINKS in flora/fungi guides** — needs those source files
2. **Build Lesson #23 backport** to labugs.org, la-flora.org, lafungi.org
3. **Marine guide** — 84+ marine fish species identified by gap finder, ready for separate guide
4. **ID key / "What did I see?" wizard** — top competitor feature gap (no free digital tool offers this for LA County)
5. **Multiple photos per species** — second major competitor feature gap (SoCalHerps has 2,300+)

---

## ADDITIONAL BUILD LESSONS

### Build Lesson #29: linkText() Placeholder System (Fauna v3.001)
Cross-guide link rendering must handle overlapping match terms. Uses:
1. Longest-match-first sorting
2. Null-byte placeholder substitution (\x00PH0\x00, etc.)
3. Restoration pass after all replacements

### Build Lesson #30: Fauna Establishment Classification (v3.001)
`est` field migration: `intro:true` → `'introduced'`, INTRO_SET → `'introduced'`, known ecosystem destroyers → `'invasive'`, default → `'native'`.

### Build Lesson #31: Gap Finder Embedded Species (v3.002)
Gap finder must work standalone without co-located species-data.json. Solution: embed guide species binomials as `GUIDE_LOOKUP_DEFAULT` constant (~6 KB for 247 binomials). Optional upload button overrides embedded data for freshness.

### Build Lesson #32: Taxonomic Synonym Management (v3.004)
iNat taxonomy updates continuously. Pattern for keeping guide current:
1. Run gap finder — synonyms appear as "gaps" because iNat uses new binomial, guide uses old
2. Update `sn` field in species-data.json to new binomial
3. Add old binomial → new binomial entry to NAME_ALIASES (preserves inbound deep links)
4. For species SPLITS: update existing entry to the LA-relevant taxon; note the split in hp field

### Build Lesson #33: Estuarine Fish Scope (v3.004)
Drawing the line between freshwater/estuarine (IN) and marine (OUT):
- IN: Species that regularly use estuarine, lagoon, or coastal creek habitat (Grunion, Topsmelt, Killifish, Staghorn Sculpin)
- IN: True freshwater species including introduced aquarium fish (Cichlids, Livebearers, Weatherfish)
- OUT: Species exclusively found in open ocean, kelp forest, or rocky reef habitat (Garibaldi, Opaleye, blennies, croakers, barracuda)
- Gap finder FAMILY_GROUP mapping must include estuarine families (Atherinopsidae already present, added Fundulidae, Cobitidae, Moronidae)
- EXCLUDE_FAMILIES set needs periodic review as guide scope evolves
