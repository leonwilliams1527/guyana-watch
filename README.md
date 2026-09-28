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
