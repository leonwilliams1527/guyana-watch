# Guyana Watch — Phase 4.1 Real Map Build

Complete replacement package containing Phases 1–4 plus the real-map upgrade.

## Real map upgrade
- OpenStreetMap street basemap
- Actual roads, settlements and geographic labels
- Pan and zoom
- Region fly-to
- Place search for seeded Guyana towns
- Verified issue markers plotted by coordinates
- Report form uses the same real map
- Click anywhere on the report map to drop an exact pin
- Dropping the pin automatically fills latitude and longitude
- Manual latitude/longitude still supported
- Browser current-location option still supported

The current place search is deliberately limited to seeded Guyana locations. It does not use public Nominatim autocomplete. A production geocoder can be added behind a provider abstraction/caching layer.

Map data © OpenStreetMap contributors.

## Vercel prerender fix
The Leaflet-dependent module is now loaded only through a client-only dynamic import.
Plain Guyana place data was moved to `data/mapPlaces.js`, preventing Leaflet from being
evaluated during Next.js server prerendering (`window is not defined`).

# Phase 5 — Government Projects & Promise Tracker

Adds:
- Projects & Promises dashboard
- Region/status/search filtering
- Project status and progress
- Published budget, announcement date and target date fields
- Commitment/scope record
- Delivery milestones
- Citizen issue linkage
- Real-map project plotting
- Project activity trail
- Explicit source-verification guardrail

IMPORTANT: Phase 5 sample projects, budgets, dates and metrics are demonstration data only. Production records must be linked to source documents before publication.

# Phase 5.1 — Automated Government Intelligence
Adds a Source & Extraction Center, monitored official/media source registry, AI candidate extraction queue, confidence scores, project matching review, human approval controls, and automation workflow.

Manual entry remains fully available via the `Manual entry` button for projects, promises, budget allocations, contract awards and progress updates.

The ingestion screen is an operational prototype: it demonstrates the workflow and source registry. It does not yet run a backend crawler or autonomous publisher. Production ingestion should use server-side scheduled jobs, source-specific adapters, storage, deduplication, and staff authorization. AI-extracted records must remain reviewable and source-linked.

## Navigation correction
This replacement package explicitly exposes `Intelligence` in the primary navigation between
Projects & Promises and Evidence, includes it in the page view routing whitelist, and routes it
to `IntelligenceCenter`. The Phase 5.1 Intelligence Center and Manual Entry functionality are included.

# Phase 6 — Executive Intelligence
Adds an Executive Command Center for leadership and authorized staff:
- National / region filtering
- Evidence-weighted AI priority queue
- Explainable prioritization rationale
- Recommended leadership actions
- Linked project / commitment context
- Verified citizen evidence counts and trends
- Real-map priority visualization
- Morning intelligence feed
- Regional priority pulse
- Executive briefing entry point
- Explicit AI decision-support guardrail

All current figures and recommendations are demonstration data. Production recommendations must be derived from verified records and preserve source provenance.

# Phase 6.1 — Resolution & Outcomes Center
Closes the Executive workflow loop.

- Executive priorities now have `Complete & record outcome`
- Completion distinguishes leadership action from actual service resolution
- Outcome choices: Resolved, Monitoring, Referred to Agency, Awaiting Government Response, No Further Action, Closed — Insufficient Evidence
- Dedicated Outcomes navigation and Resolution & Outcomes Center
- Full action/outcome record
- Accountability timeline
- Follow-up for unresolved cases
- Reopen workflow for recurring issues
- Outcome analytics and time-to-action
- Original issue/evidence/project history remains preserved

Current figures and records are demonstration data.

# Phase 6.2 — Contractor Intelligence
Public and Executive contractor search, typo-tolerant fuzzy matching, contractor contract histories, source-coverage disclosure, automated Contractor/Awardee extraction highlighting, and manual contractor/contract ID entry.

All contractor names, values and histories included in this prototype are demonstration data. Production records must be source-backed.

# Phase 6.3 — Connected Intelligence Data Model
Connects Projects & Promises, contracts, contractors, budgets/promises, Extraction Center and Executive Intelligence around canonical relationship records.

Key behavior represented in this prototype:
- Approved extraction data propagates to connected views rather than requiring re-entry.
- Manual verified records use the same propagation path.
- Projects show connected promise, budget, contract, contractor, agency, deadline and source.
- Contractor profiles show connected Projects & Promises.
- Intelligence Center includes a Connected Records view.
- Missing source fields remain explicitly unpopulated instead of being invented.
- Relationships require verification before publication.

This remains a front-end/data-model prototype. Persistent live propagation requires the production database/API and ingestion workers.

# Phase 7 — Live Data Foundation

Moves the prototype toward production architecture.

Included:
- Data Pipeline tab inside Intelligence
- Source adapter registry for procurement, fiscal, government announcement and media sources
- Ingestion run monitoring
- Canonical data-model viewer
- PostgreSQL reference schema under `backend/schema.sql`
- API contract under `backend/API_CONTRACT.md`
- Field-level provenance and verification design
- Explicit separation between public verified data and authorized Executive research

Important: this package does NOT falsely claim to be fetching live records. Actual live ingestion requires deployment of a persistent database, server-side source adapters/scrapers or feeds, scheduled jobs, credentials where required, and API routes.

# Phase 7.1 — NPTA Ingestion + Historical Backfill
Adds an NPTA-specific server adapter, 6-hour incremental monitoring design, hourly override, contractor normalization, deduplication, verification-first propagation, and a controlled 2012-to-current backfill with per-year coverage reporting. See `/backend/npta_adapter.mjs`, `/backend/BACKFILL_PLAN.md`, and the NPTA Ingestion tab.

# Phase 7.2 — Real 2012 Historical Repository
The Historical Repository now contains a first batch of real, source-backed 2012 government budget/project records. The UI clearly distinguishes budget/project evidence from contract-award evidence and leaves contractor fields unpopulated until a procurement source supports them. 2012 is correctly marked Partial / Expanding.

# Phase 7.3 — Unified Real Project & Promise Repository
Projects & Promises now renders the real historical repository instead of the five demonstration projects. It supports year, agency, type and keyword filtering; source provenance; explicit missing relationships; and a Promise → Budget → Project → Contract → Contractor chain that never infers missing facts.

# Phase 7.4 — Real Contractor & Contract Repository
Removes the fictional contractor dataset from the public contractor experience and introduces a source-backed NPTA contractor repository. Contractor profiles are generated from actual identified awards, including contract ID, agency, description, value, procurement method, tender/proposal count, award date, upload date and explicit region where present. Fuzzy search tolerates minor misspellings. Historical 2012 budget projects remain unlinked to contractors unless a verified procurement/project match is found.

# Phase 7.5 — Historical Contract Backfill
The contractor repository now spans 2025 and 2026 instead of showing only 2026. This build adds 22 source-backed 2025 NPTA award rows to the existing repository and introduces an explicit year filter. Records remain source-backed and do not imply completeness for years not yet ingested.

Historical ingestion remains incremental: 2025 is now represented; earlier years (2012–2024) should be added only as verifiable award records are located and normalized.

# Phase 7.6 — Multi-Year Project & Budget Repository
Projects & Promises is no longer 2012-only. This build adds official source-backed capital-project records from 2024, 2025 and 2026 and makes the project-year filter data-driven. The repository now visibly spans 2012, 2024, 2025 and 2026. Missing years are not presented as populated until verified records are ingested. Contract/contractor relationships remain blank unless independently verified.

# Phase 7.6.1 — Record Classification, Source Links & Currency QA
Fixes the filtered selection-state bug; explicitly distinguishes BUDGET / PROJECT from CONTRACT AWARD; adds original-source links to loaded project and contract records; and standardizes G$ presentation so, for example, G$1,500M is displayed as G$1.5 billion. Exact values remain available on detailed records.

# Phase 7.7 — Historical Coverage & Ingestion Center
Adds a dedicated Coverage view for the 2012–2026 target. It separates 'official source located' from 'records actually ingested', exposes project and contract counts by year, and makes historical gaps visible rather than implying completeness. It also documents the five-stage ingestion workflow and links to the Ministry of Finance Budget Estimates archive and NPTA awarded-contract repository.

# Phase 7.8 — Historical Backfill: 2022–2023
Adds the first explicit source-level historical backfill queue. The official Ministry of Finance 2022 and 2023 Volume 3 Capital Project Profile documents are registered with direct source links and marked ready for extraction. This phase deliberately does not fabricate project rows from source availability: records count as loaded only after record-level extraction. Budget/project records remain distinct from contract awards and contractors.
