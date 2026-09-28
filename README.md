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
