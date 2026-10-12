-- Phase 7 reference schema (PostgreSQL)
create table sources (
  id text primary key, name text not null, source_type text not null,
  base_url text, is_active boolean default true, created_at timestamptz default now()
);
create table agencies (
  id text primary key, canonical_name text not null, aliases jsonb default '[]'::jsonb
);
create table contractors (
  id text primary key, canonical_name text not null, aliases jsonb default '[]'::jsonb,
  registration_id text, created_at timestamptz default now()
);
create table promises (
  id text primary key, title text not null, agency_id text references agencies(id),
  promised_at date, deadline date, status text, source_id text references sources(id)
);
create table budgets (
  id text primary key, fiscal_year int, agency_id text references agencies(id),
  programme text, amount numeric, currency text default 'GYD', source_id text references sources(id)
);
create table projects (
  id text primary key, title text not null, agency_id text references agencies(id),
  promise_id text references promises(id), budget_id text references budgets(id),
  region int, locality text, street text, latitude numeric, longitude numeric,
  deadline date, status text, progress numeric
);
create table contracts (
  id text primary key, project_id text references projects(id),
  contractor_id text references contractors(id), agency_id text references agencies(id),
  description text, value numeric, currency text default 'GYD', award_date date,
  procurement_method text, status text, source_id text references sources(id)
);
create table source_evidence (
  id text primary key, source_id text references sources(id), source_url text,
  retrieved_at timestamptz, document_date date, title text, raw_reference text
);
create table field_provenance (
  id bigserial primary key, entity_type text not null, entity_id text not null,
  field_name text not null, evidence_id text references source_evidence(id),
  extracted_value text, confidence numeric, verification_status text,
  verified_by text, verified_at timestamptz
);
create index contractors_name_idx on contractors(canonical_name);
create index contracts_contractor_idx on contracts(contractor_id);
create index contracts_project_idx on contracts(project_id);
create index projects_region_idx on projects(region);
