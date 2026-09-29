import ContractorSearch from "@/components/ContractorSearch";
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
import ReportIssue from "@/components/ReportIssue";
import VerificationCenter from "@/components/VerificationCenter";
import ProjectsTracker from "@/components/ProjectsTracker";
import UnifiedProjectsTracker from "@/components/UnifiedProjectsTracker";
import IntelligenceCenter from "@/components/IntelligenceCenter";
import ExecutiveIntelligence from "@/components/ExecutiveIntelligence";
import ResolutionCenter from "@/components/ResolutionCenter";
import PublicContractors from "@/components/PublicContractors";

export default function Home(){
 const [view,setView]=useState("Dashboard");
 return <><Header active={view} onNavigate={label=>{if(["Dashboard","Executive","Outcomes","Map","Contractors","Reports","Verification","Projects & Promises","Intelligence"].includes(label)) setView(label)}}/><main>
 {view==="Map"?<MapExplorer/>:view==="Executive"?<ExecutiveIntelligence/>:view==="Outcomes"?<ResolutionCenter/>:view==="Contractors"?<PublicContractors/>:view==="Reports"?<ReportIssue/>:view==="Verification"?<VerificationCenter/>:view==="Projects & Promises"?<UnifiedProjectsTracker/>:view==="Intelligence"?<IntelligenceCenter/>:<>
 <section className="hero"><div><span className="eyebrow green">NATIONAL ACCOUNTABILITY DASHBOARD</span><h2>Guyana Watch</h2><p>Document. Verify. Track. Resolve.</p></div><button className="mapLaunch" onClick={()=>setView("Map")}>Explore National Map →</button></section>
 <div className="demoBanner"><strong>Prototype Environment</strong><span>All statistics and reports displayed are demonstration data and should not be interpreted as factual government performance information.</span></div>
 <section className="metrics"><MetricCard title="Verified Issues" value="1,284" description="Across all categories"/><MetricCard title="Critical Issues" value="126" description="Require priority review" type="critical"/><MetricCard title="Outstanding >90 Days" value="317" description="Long-standing issues" type="warning"/><MetricCard title="Resolved Issues" value="146" description="Documented resolutions" type="success"/></section>
 <PriorityWatch/><section className="dashboardGrid"><IssueCategories/><RegionalTable/></section><section className="dashboardGrid bottomGrid"><RecentReports/><PromiseTracker/></section>
 </>}
 </main></>
}