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
