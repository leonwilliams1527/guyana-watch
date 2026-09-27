"use client";
import { useMemo, useState } from "react";
import { Search, MapPin, Layers3, Navigation, ExternalLink } from "lucide-react";
import { regions, places, locationHierarchy } from "@/data/regions";

export default function MapExplorer(){
  const [regionId,setRegionId]=useState(4);
  const [query,setQuery]=useState("");
  const region=regions.find(r=>r.id===regionId);
  const local=useMemo(()=>places.filter(p=>p.region===regionId && p.name.toLowerCase().includes(query.toLowerCase())),[regionId,query]);
  const hierarchy=locationHierarchy[regionId] || [];

  return <section className="mapPage">
    <div className="mapToolbar">
      <div>
        <span className="eyebrow green">GEOGRAPHIC INTELLIGENCE</span>
        <h2>National Issue Map</h2>
        <p>Designed for national → region → city/town → community → village/settlement → street → exact-coordinate analysis.</p>
      </div>
      <div className="mapControls">
        <label>Region<select value={regionId} onChange={e=>setRegionId(Number(e.target.value))}>{regions.map(r=><option key={r.id} value={r.id}>Region {r.id} — {r.name}</option>)}</select></label>
        <label>Find place<div className="searchBox"><Search size={15}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Town, village, street"/></div></label>
      </div>
    </div>

    <div className="officialMapNotice">
      <Navigation size={18}/>
      <div><strong>Real geographic map upgrade</strong><span>The hand-drawn Phase 2 country shape has been retired from the main experience. This panel is reserved for a street-level basemap and authoritative Guyana boundary/place layers.</span></div>
    </div>

    <div className="mapLayout">
      <div className="panel realMapPlaceholder">
        <div className="mapGrid"/>
        <div className="mapCountryLabel">GUYANA</div>
        <div className="mapPins"><i/><i/><i/><i/><i/></div>
        <div className="mapZoom"><button>+</button><button>−</button></div>
        <div className="mapBuildLabel"><Layers3 size={18}/><strong>Street-level GIS map container</strong><span>Prepared for real basemap tiles, regional boundaries, villages, roads and issue coordinates.</span></div>
      </div>

      <aside className="panel regionDetail">
        <div className="regionHero"><span className="regionBadge">REGION {region.id}</span><h3>{region.name}</h3><p><MapPin size={14}/> Regional center: {region.capital}</p></div>
        <div className="miniMetrics"><div><strong>{region.issues}</strong><span>Open issues</span></div><div><strong>{region.critical}</strong><span>Critical</span></div></div>
        <div className="detailHeading"><Layers3 size={16}/><strong>Geographic drill-down</strong></div>
        {hierarchy.length ? <div className="hierarchyList">{hierarchy.map(area=><div className="hierarchyCard" key={area.city}><strong>{area.city}</strong>{area.communities.map(c=><span key={c.name}>{c.name} · {c.villages.join(", ")}</span>)}</div>)}</div>:
          <div className="emptyState"><strong>Gazetteer expansion pending</strong><span>This region will be populated from national place-name and village datasets rather than invented entries.</span></div>}
        <div className="executivePrep"><span>EXECUTIVE FILTER MODEL</span><p>Future Executive Intelligence can filter issues and AI recommendations down to exact communities, villages, roads and coordinates.</p></div>
      </aside>
    </div>
  </section>
}