'use client';
import {useState} from 'react';
import Header from '@/components/Header';
import MetricCard from '@/components/MetricCard';
import IssueCategories from '@/components/IssueCategories';
import RegionalTable from '@/components/RegionalTable';
import RecentReports from '@/components/RecentReports';
import PromiseTracker from '@/components/PromiseTracker';
import PriorityWatch from '@/components/PriorityWatch';
import MapExplorer from '@/components/MapExplorer';
import ReportIssue from '@/components/ReportIssue';
import VerificationCenter from '@/components/VerificationCenter';
import UnifiedProjectsTracker from '@/components/UnifiedProjectsTracker';
import IntelligenceCenter from '@/components/IntelligenceCenter';
import ExecutiveIntelligence from '@/components/ExecutiveIntelligence';
import ResolutionCenter from '@/components/ResolutionCenter';
import PublicContractors from '@/components/PublicContractors';
import DataCoverageCenter from '@/components/DataCoverageCenter';
import EvidenceBriefings from '@/components/EvidenceBriefings';
import IssueAnalysis from '@/components/IssueAnalysis';
import ManualRecords from '@/components/ManualRecords';
import {reports} from '@/data/reviewIssues';
export default function Home(){
 const [view,setView]=useState('Dashboard');const [issue,setIssue]=useState(null);
 function navigate(label){setIssue(null);setView(label)}
 return <><Header active={view} onNavigate={navigate}/><main>{issue?<IssueAnalysis issue={issue} onClose={()=>setIssue(null)}/>:view==='Map'?<MapExplorer/>:view==='Executive'?<ExecutiveIntelligence/>:view==='Outcomes'?<ResolutionCenter/>:view==='Contractors'?<PublicContractors/>:view==='Reports'?<ReportIssue/>:view==='Verification'?<VerificationCenter/>:view==='Projects & Promises'?<UnifiedProjectsTracker/>:view==='Intelligence'?<IntelligenceCenter/>:view==='Coverage'?<DataCoverageCenter/>:view==='Evidence'||view==='Briefings'?<EvidenceBriefings mode={view} onOpenIssue={setIssue}/>:view==='Manual Entry'?<ManualRecords/>:<><section className="hero"><div><span className="eyebrow green">NATIONAL ACCOUNTABILITY DASHBOARD</span><h2>Guyana Watch</h2><p>Document. Verify. Track. Resolve.</p></div><button className="mapLaunch" onClick={()=>navigate('Map')}>Explore National Map →</button></section><div className="demoBanner"><strong>Prototype Environment</strong><span>All statistics and reports displayed are demonstration data and should not be interpreted as factual government performance information.</span></div><section className="metrics"><MetricCard title="Verified Issues" value="1,284" description="Across all categories" onClick={()=>navigate('Evidence')}/><MetricCard title="Critical Issues" value="126" description="Require priority review" type="critical" onClick={()=>navigate('Verification')}/><MetricCard title="Outstanding >90 Days" value="317" description="Long-standing issues" type="warning" onClick={()=>navigate('Outcomes')}/><MetricCard title="Resolved Issues" value="146" description="Documented resolutions" type="success" onClick={()=>navigate('Outcomes')}/></section><div onClick={()=>navigate('Verification')} className="gwClickPanel" role="button" tabIndex={0} onKeyDown={e=>{if(e.key==='Enter')navigate('Verification')}}><PriorityWatch/></div><section className="dashboardGrid"><div className="gwClickPanel" role="button" tabIndex={0} onClick={()=>navigate('Evidence')} onKeyDown={e=>{if(e.key==='Enter')navigate('Evidence')}}><IssueCategories/></div><div className="gwClickPanel" role="button" tabIndex={0} onClick={()=>navigate('Map')} onKeyDown={e=>{if(e.key==='Enter')navigate('Map')}}><RegionalTable/></div></section><section className="dashboardGrid bottomGrid"><div className="gwClickPanel" role="button" tabIndex={0} onClick={()=>navigate('Evidence')} onKeyDown={e=>{if(e.key==='Enter')navigate('Evidence')}}><RecentReports/></div><div className="gwClickPanel" role="button" tabIndex={0} onClick={()=>navigate('Projects & Promises')} onKeyDown={e=>{if(e.key==='Enter')navigate('Projects & Promises')}}><PromiseTracker/></div></section><section className="gwFormPanel"><h3>Review a demonstration issue</h3>{reports.map(r=><button className="gwIssueLink" key={r.id} onClick={()=>setIssue(r)}>{r.id} — {r.title} → AI Analysis</button>)}</section></>}</main></>
}
