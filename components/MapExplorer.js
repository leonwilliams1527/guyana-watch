"use client";
import {useMemo,useState} from "react";
import {Search,MapPin,Layers3,Navigation} from "lucide-react";
import RealGuyanaMap from "@/components/RealMapClient";
import {knownPlaces} from "@/components/RealGuyanaMap";
import {regions,locationHierarchy} from "@/data/regions";

const regionCenters={1:[7.65,-59.75],2:[7.10,-58.55],3:[6.75,-58.35],4:[6.80,-58.15],5:[6.50,-57.85],6:[6.25,-57.52],7:[6.15,-59.20],8:[5.35,-59.35],9:[3.65,-59.55],10:[5.95,-58.30]};
const issues=[
 {id:"GW-1042",title:"Flooding report",place:"Georgetown",lat:6.7931,lng:-58.1588,issue:true},
 {id:"GW-1041",title:"Road failure",place:"New Amsterdam",lat:6.2500,lng:-57.5167,issue:true},
 {id:"GW-1039",title:"Water interruption",place:"Linden",lat:6.0081,lng:-58.3071,issue:true},
 {id:"GW-1037",title:"Streetlight report",place:"Campbellville",lat:6.8192,lng:-58.1410,issue:true}
];

export default function MapExplorer(){
 const [regionId,setRegionId]=useState(4),[query,setQuery]=useState("");
 const region=regions.find(r=>r.id===regionId), hierarchy=locationHierarchy[regionId]||[];
 const results=useMemo(()=>knownPlaces.filter(p=>p.name.toLowerCase().includes(query.toLowerCase())),[query]);
 const [focus,setFocus]=useState(regionCenters[4]);
 function chooseRegion(id){setRegionId(id);setFocus(regionCenters[id]||[5.2,-59])}
 function findPlace(e){e.preventDefault();const hit=results[0];if(hit){setRegionId(hit.region);setFocus([hit.lat,hit.lng])}}
 const visible=[...knownPlaces.filter(p=>p.region===regionId),...issues.filter(x=>{const near=regionCenters[regionId];return near&&Math.abs(x.lat-near[0])<1&&Math.abs(x.lng-near[1])<1})];
 return <section className="mapPage">
  <div className="mapToolbar"><div><span className="eyebrow green">REAL GEOGRAPHIC INTELLIGENCE · PHASE 4.1</span><h2>National Issue Map</h2><p>Actual street basemap with pan, zoom, place markers and issue coordinates across Guyana.</p></div>
  <div className="mapControls"><label>Region<select value={regionId} onChange={e=>chooseRegion(Number(e.target.value))}>{regions.map(r=><option key={r.id} value={r.id}>Region {r.id} — {r.name}</option>)}</select></label>
  <form onSubmit={findPlace}><label>Find place<div className="searchBox"><Search size={15}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="e.g. Linden"/></div></label></form></div></div>
  <div className="liveMapNotice"><Navigation size={17}/><div><strong>Live street map</strong><span>Roads, settlements and map labels are loaded from OpenStreetMap. Zoom in to inspect actual local geography.</span></div></div>
  <div className="mapLayout"><div className="panel liveMapPanel"><RealGuyanaMap center={focus} zoom={regionId===4?12:9} markers={visible} height={690}/></div>
  <aside className="panel regionDetail"><div className="regionHero"><span className="regionBadge">REGION {region.id}</span><h3>{region.name}</h3><p><MapPin size={14}/> {region.capital}</p></div><div className="miniMetrics"><div><strong>{region.issues}</strong><span>Open issues</span></div><div><strong>{region.critical}</strong><span>Critical</span></div></div>
  <div className="detailHeading"><Layers3 size={16}/><strong>Geographic drill-down</strong></div>{hierarchy.length?<div className="hierarchyList">{hierarchy.map(a=><div className="hierarchyCard" key={a.city}><strong>{a.city}</strong>{a.communities.map(c=><span key={c.name}>{c.name} · {c.villages.join(", ")}</span>)}</div>)}</div>:<div className="emptyState"><strong>Structured gazetteer expansion pending</strong><span>The live map already shows mapped locations; structured filters will expand from authoritative datasets.</span></div>}
  <div className="executivePrep"><span>EXECUTIVE MAP FOUNDATION</span><p>Verified issue coordinates can now be plotted on real geography and later analyzed by region, settlement, road and proximity.</p></div></aside></div>
 </section>
}