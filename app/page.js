"use client";
import {useState} from "react";
import Header from "@/components/Header";
import MetricCard from "@/components/MetricCard";
import IssueCategories from "@/components/IssueCategories";
import RegionalTable from "@/components/RegionalTable";
import RecentReports from "@/components/RecentReports";
import PromiseTracker from "@/components/PromiseTracker";
import PriorityWatch from "@/components/PriorityWatch";
import MapExplorer from "@/components/MapExplorer";

export default function Home(){
 const [view,setView]=useState("Dashboard");
 return <><Header active={view} onNavigate={label=>{if(label==="Dashboard"||label==="Map") setView(label)}}/><main>
 {view==="Map"?<MapExplorer/>:<>
 <section className="hero"><div><span className="eyebrow green">NATIONAL ACCOUNTABILITY DASHBOARD</span><h2>Guyana Watch</h2><p>Document. Verify. Track. Resolve.</p></div><button className="mapLaunch" onClick={()=>setView("Map")}>Explore National Map →</button></section>
 <div className="demoBanner"><strong>Prototype Environment</strong><span>All statistics and reports displayed are demonstration data and should not be interpreted as factual government performance information.</span></div>
 <section className="metrics"><MetricCard title="Verified Issues" value="1,284" description="Across all categories"/><MetricCard title="Critical Issues" value="126" description="Require priority review" type="critical"/><MetricCard title="Outstanding >90 Days" value="317" description="Long-standing issues" type="warning"/><MetricCard title="Resolved Issues" value="146" description="Documented resolutions" type="success"/></section>
 <PriorityWatch/><section className="dashboardGrid"><IssueCategories/><RegionalTable/></section><section className="dashboardGrid bottomGrid"><RecentReports/><PromiseTracker/></section>
 </>}
 </main></>
}