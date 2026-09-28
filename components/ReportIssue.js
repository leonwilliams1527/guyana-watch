"use client";
import { useState } from "react";
import { Camera, MapPin, Upload, CheckCircle2, ShieldCheck } from "lucide-react";
import { regions, locationHierarchy } from "@/data/regions";
import LocationPinPicker from "@/components/LocationPinPicker";

const categories = [
  "Roads & Bridges","Drainage & Flooding","Electricity","Water","Healthcare",
  "Education","Waste Management","Government Services","Public Safety","Other"
];

export default function ReportIssue() {
  const [region,setRegion]=useState(4);
  const [city,setCity]=useState("Georgetown");
  const [community,setCommunity]=useState("Albouystown");
  const [village,setVillage]=useState("Albouystown");
  const [street,setStreet]=useState("");
  const [submitted,setSubmitted]=useState(false);
  const [lat,setLat]=useState(""); const [lng,setLng]=useState("");
  const pin=(lat!==""&&lng!==""&&!Number.isNaN(Number(lat))&&!Number.isNaN(Number(lng)))?{lat:Number(lat),lng:Number(lng)}:null;
  function pickPin(p){setLat(p.lat.toFixed(6));setLng(p.lng.toFixed(6));}
  function useCurrent(){if(!navigator.geolocation){alert("Location is not supported by this browser.");return;} navigator.geolocation.getCurrentPosition(pos=>pickPin({lat:pos.coords.latitude,lng:pos.coords.longitude}),()=>alert("Location permission was not available."));}

  const cities=locationHierarchy[region] || [];
  const cityObj=cities.find(x=>x.city===city) || cities[0];
  const communities=cityObj?.communities || [];
  const communityObj=communities.find(x=>x.name===community) || communities[0];
  const villages=communityObj?.villages || [];
  const streets=communityObj?.streets || [];

  function changeRegion(value){
    const n=Number(value); setRegion(n);
    const c=locationHierarchy[n]?.[0];
    setCity(c?.city || ""); setCommunity(c?.communities?.[0]?.name || "");
    setVillage(c?.communities?.[0]?.villages?.[0] || ""); setStreet("");
  }
  function changeCity(value){
    setCity(value); const c=cities.find(x=>x.city===value);
    setCommunity(c?.communities?.[0]?.name || "");
    setVillage(c?.communities?.[0]?.villages?.[0] || ""); setStreet("");
  }
  function changeCommunity(value){
    setCommunity(value); const c=communities.find(x=>x.name===value);
    setVillage(c?.villages?.[0] || ""); setStreet("");
  }

  if(submitted) return (
    <section className="submitSuccess">
      <CheckCircle2 size={44}/>
      <h2>Report captured for review</h2>
      <p>This prototype does not yet save reports to a production database. In production, the submission will enter the Verification Center before it can become public.</p>
      <button onClick={()=>setSubmitted(false)}>Create another report</button>
    </section>
  );

  return (
    <section>
      <div className="reportIntro">
        <span className="eyebrow green">PHASE 3 · CITIZEN REPORTING & EVIDENCE</span>
        <h2>Report a Public-Service Issue</h2>
        <p>Capture the exact place, problem and supporting evidence. Reports remain unverified until reviewed.</p>
      </div>

      <div className="reportGrid">
        <form className="panel reportForm" onSubmit={e=>{e.preventDefault();setSubmitted(true)}}>
          <h3>1. Exact location</h3>
          <div className="formGrid">
            <label>Region
              <select value={region} onChange={e=>changeRegion(e.target.value)}>
                {regions.map(r=><option key={r.id} value={r.id}>Region {r.id} — {r.name}</option>)}
              </select>
            </label>
            <label>City / Town / Area
              <select value={city} onChange={e=>changeCity(e.target.value)} disabled={!cities.length}>
                {cities.length ? cities.map(x=><option key={x.city}>{x.city}</option>) : <option>National gazetteer data pending</option>}
              </select>
            </label>
            <label>Community
              <select value={community} onChange={e=>changeCommunity(e.target.value)} disabled={!communities.length}>
                {communities.length ? communities.map(x=><option key={x.name}>{x.name}</option>) : <option>Community data pending</option>}
              </select>
            </label>
            <label>Village / Settlement
              <select value={village} onChange={e=>setVillage(e.target.value)} disabled={!villages.length}>
                {villages.length ? villages.map(x=><option key={x}>{x}</option>) : <option>Village data pending</option>}
              </select>
            </label>
            <label className="wide">Street / Road / Landmark
              <input list="streetOptions" value={street} onChange={e=>setStreet(e.target.value)} placeholder="Type exact street, road, bridge or landmark"/>
              <datalist id="streetOptions">{streets.map(x=><option key={x} value={x}/>)}</datalist>
            </label>
            <label>Latitude<input value={lat} onChange={e=>setLat(e.target.value)} placeholder="GPS latitude" inputMode="decimal"/></label>
            <label>Longitude<input value={lng} onChange={e=>setLng(e.target.value)} placeholder="GPS longitude" inputMode="decimal"/></label>
          </div>
          <button type="button" className="locationBtn" onClick={useCurrent}><MapPin size={15}/> Use current location</button>
          <LocationPinPicker pin={pin} onPick={pickPin} onUseCurrent={useCurrent}/>

          <h3>2. Issue details</h3>
          <div className="formGrid">
            <label>Category<select>{categories.map(x=><option key={x}>{x}</option>)}</select></label>
            <label>Severity<select><option>Normal</option><option>High</option><option>Critical / immediate risk</option></select></label>
            <label className="wide">Issue title<input required placeholder="Short description of the problem"/></label>
            <label className="wide">What is happening?<textarea required rows="5" placeholder="Describe what you observed, how long it has existed and who is affected."/></label>
          </div>

          <h3>3. Evidence</h3>
          <div className="uploadBox">
            <Upload size={25}/><strong>Add photos or video</strong>
            <span>Files will attach to the case when production storage is connected.</span>
            <input type="file" multiple accept="image/*,video/*"/>
          </div>
          <button className="submitReport" type="submit">Submit for verification</button>
        </form>

        <aside className="panel evidenceGuide">
          <ShieldCheck size={23}/><h3>Verification-first</h3>
          <p>Citizen submissions do not automatically become public claims. Staff review location, evidence, duplication and sensitivity first.</p>
          <Camera size={21}/><h3>Evidence standard</h3>
          <ol>
            <li>Capture the problem itself.</li><li>Include a wider image of the location.</li>
            <li>Provide the exact street, road or landmark.</li><li>Avoid unrelated personal information.</li>
            <li>Serious allegations about individuals require enhanced review.</li>
          </ol>
          <div className="locationPath">
            <span>LOCATION MODEL</span>
            {["Guyana","Region","City / Town / Area","Community","Village / Settlement","Street / Road / Landmark","GPS coordinate"].map((x,i)=>
              <div key={x}><strong>{x}</strong>{i<6 && <i> ↓</i>}</div>)}
          </div>
        </aside>
      </div>
    </section>
  );
}