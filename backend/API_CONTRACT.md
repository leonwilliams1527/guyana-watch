# Phase 7 API Contract

## Ingestion
POST /api/ingestion/run
POST /api/ingestion/candidates/:id/approve
POST /api/ingestion/candidates/:id/reject

Approval resolves or creates canonical entities, writes field provenance, and updates relationships.

## Projects
GET /api/projects
GET /api/projects/:id
Returns promise, budget, contracts, contractor(s), deadlines, source provenance and issue/outcome relationships.

## Contractors
GET /api/contractors/search?q=
GET /api/contractors/:id
GET /api/contractors/:id/contracts

Search must use normalized aliases + typo-tolerant matching. Search similarity never merges entities automatically.

## Public / Executive permissions
Public endpoints return verified published fields and public source provenance.
Executive endpoints may additionally return authorized internal analysis, research signals and staff notes.

## Missing values
Never infer a factual value merely to fill a field. Return null + provenance state when unavailable.
