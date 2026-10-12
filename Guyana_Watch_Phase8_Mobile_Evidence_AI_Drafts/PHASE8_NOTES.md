# Guyana Watch Phase 8 — navigation and accountability workspace

This update starts from the uploaded Phase 7.9 ZIP. The original project is a front-end prototype with demonstration data; it does not include a working authenticated admin backend or a production data persistence API.

Implemented:
- Responsive collapsible navigation with all tabs; logo returns to Dashboard.
- Evidence and Briefings views open and allow issue selection.
- AI Analysis button calls a server-side API using OPENAI_API_KEY. No simulated AI response if missing key. AI receives only explicitly labeled demonstration issue fields; it recommends neutral lawful parliamentary oversight steps, not electoral persuasion.
- Generate Brief exports a text file. PDF/Word export is not implemented.
- Contracts and promises manual draft entry and editing, stored in this browser only, explicitly labeled NOT published. **Do not use for sensitive records**. Production deployment requires auth, RLS, audit, and server persistence.
- Dashboard metric cards, section cards, priority section, and issue links are interactive.

Environment variable for AI: OPENAI_API_KEY (server-only); optional OPENAI_MODEL. Configure on Vercel and redeploy.

Important: This build does NOT claim live government records, factual AI conclusions about demo issues, a secure production admin write API, or automatically saved public contracts/promises. These require a real backend and verified evidence ingestion.
