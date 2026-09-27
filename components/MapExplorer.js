"use client";
import {useMemo,useState} from "react";
import {Search,MapPin,AlertTriangle,Layers3} from "lucide-react";
import GuyanaMap from "./GuyanaMap";
import {regions,places} from "@/data/regions";

export default function MapExplorer(){
 const [regionId,setRegionId]=useState(4);
 const [query,setQuery]=useState("");
 const region=regions.find(r=>r.id===regionId);
 const local=useMemo(()=>places.filter(p=>p.region===regionId && p.name.toLowerCase().includes(query.toLowerCase())),[regionId,query]);
 return <section className="mapPage">
   <div className="mapToolbar">
    <div><span className="eyebrow green">PHASE 2 · GEOGRAPHIC INTELLIGENCE</span><h2>National Issue Map</h2><p>Explore verified issues by region, city or town. Community-level drill-down is prepared for the reporting database in Phase 3.</p></div>
    <div className="mapControls">
      <label>Region<select value={regionId} onChange={e=>setRegionId(Number(e.target.value))}>{regions.map(r=><option key={r.id} value={r.id}>Region {r.id} — {r.name}</option>)}</select></label>
      <label>City / Town<div className="searchBox"><Search size={15}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search selected region"/></div></label>
    </div>
   </div>
   <div className="mapLayout">
    <div className="panel mapPanel"><GuyanaMap selected={regionId} onSelect={setRegionId}/></div>
    <aside className="panel regionDetail">
      <div className="regionHero"><span className="regionBadge">REGION {region.id}</span><h3>{region.name}</h3><p><MapPin size={14}/> Regional center: {region.capital}</p></div>
      <div className="miniMetrics"><div><strong>{region.issues}</strong><span>Open issues</span></div><div><strong>{region.critical}</strong><span>Critical</span></div></div>
      <div className="detailHeading"><Layers3 size={16}/><strong>City / Town drill-down</strong></div>
      {local.length ? <div className="placeList">{local.map(p=><button key={p.name} className="placeRow"><div><strong>{p.name}</strong><span>{p.type}</span></div><div><b>{p.issues}</b><small>{p.critical} critical</small></div></button>)}</div>:
      <div className="emptyState"><AlertTriangle size={18}/><strong>No prototype town data yet</strong><span>Phase 3 reports will populate communities and locations here.</span></div>}
      <div className="executivePrep"><span>EXECUTIVE VIEW READY</span><p>This geography model is structured so future Executive Intelligence can filter national insights by region, city/town and community.</p></div>
    </aside>
   </div>
 </section>
}