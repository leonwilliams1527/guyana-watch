"use client";
import {useMemo,useState} from "react";
import {Search,Landmark,MapPin,CalendarDays,WalletCards,AlertTriangle,CheckCircle2,Link2,FileText,Clock3,TrendingUp} from "lucide-react";
import RealGuyanaMap from "@/components/RealMapClient";
import {projects,projectActivity} from "@/data/projects";
import {linksForProject} from "@/data/connectedRecords";
import RecordConnections from "@/components/RecordConnections";
import {regions} from "@/data/regions";

export default function ProjectsTracker(){
 const [region,setRegion]=useState("All"),[status,setStatus]=useState("All"),[query,setQuery]=useState(""),[selected,setSelected]=useState(projects[0]);
 const filtered=useMemo(()=>projects.filter(p=>(region==="All"||p.region===Number(region))&&(status==="All"||p.status===status)&&(p.title.toLowerCase().includes(query.toLowerCase())||p.location.toLowerCase().includes(query.toLowerCase()))),[region,status,query]);
 const markers=filtered.map(p=>({id:p.id,title:p.title,place:`${p.location} · ${p.status}`,lat:p.lat,lng:p.lng,issue:p.status==="Delayed"||p.status==="At Risk"}));
 return <section>
  <div className="projectsIntro"><div><span className="eyebrow green">PHASE 5 · PROJECTS & PROMISES</span><h2>Government Project & Promise Tracker</h2><p>Connect public commitments, delivery milestones and verified citizen evidence in one accountability record.</p></div><div className="demoFlag">DEMONSTRATION DATA</div></div>
  <div className="projectMetrics">{[["5","Tracked projects"],["2","At risk / delayed"],["57","Linked issues"],["1","Completed"]].map(x=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</div>
  <div className="projectFilters"><div className="projectSearch"><Search size={15}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search project or location"/></div><select value={region} onChange={e=>setRegion(e.target.value)}><option>All</option>{regions.map(r=><option key={r.id} value={r.id}>Region {r.id}</option>)}</select><select value={status} onChange={e=>setStatus(e.target.value)}><option>All</option><option>Not Started</option><option>In Progress</option><option>At Risk</option><option>Delayed</option><option>Completed</option></select></div>
  <div className="projectLayout">
   <div className="panel projectList"><div className="sectionTitle"><Landmark size={16}/><strong>Projects & commitments</strong></div>{filtered.map(p=><button key={p.id} onClick={()=>setSelected(p)} className={selected.id===p.id?"projectCard selected":"projectCard"}><div className="projectCardTop"><span>{p.id}</span><b className={`projectStatus ${p.status.replaceAll(" ","").toLowerCase()}`}>{p.status}</b></div><strong>{p.title}</strong><small><MapPin size={11}/>{p.location}</small><div className="progressBar"><i style={{width:`${p.progress}%`}}/></div><div className="projectBottom"><span>{p.progress}% progress</span><span>{p.verifiedIssues} verified issues</span></div></button>)}</div>
   <div className="projectMain">
    <div className="panel projectDetail"><div className="projectDetailTop"><div><span className="eyebrow">{selected.id} · {selected.type}</span><h3>{selected.title}</h3><p>{selected.agency}</p></div><b className={`projectStatus ${selected.status.replaceAll(" ","").toLowerCase()}`}>{selected.status}</b></div>
     <div className="projectFacts"><div><WalletCards/><span>Published budget</span><strong>{selected.budget}</strong></div><div><CalendarDays/><span>Announced</span><strong>{selected.announced}</strong></div><div><Clock3/><span>Target</span><strong>{selected.target}</strong></div><div><TrendingUp/><span>Progress</span><strong>{selected.progress}%</strong></div></div>
     <div className="promiseBox"><FileText size={18}/><div><span>PUBLIC COMMITMENT / SCOPE</span><p>{selected.promise}</p></div></div>
     <h4>Promise · Budget · Contract · Contractor</h4>
     <RecordConnections record={linksForProject(selected.id)[0]}/>
     <h4>Delivery milestones</h4><div className="milestones"><div className="done"><CheckCircle2/><span>Announcement captured</span></div><div className={selected.progress>0?"done":""}><CheckCircle2/><span>Work commenced</span></div><div className={selected.progress>=75?"done":""}><CheckCircle2/><span>Major works substantially complete</span></div><div className={selected.progress===100?"done":""}><CheckCircle2/><span>Completion independently checked</span></div></div>
     <h4>Citizen evidence connection</h4><div className="issueConnection"><Link2 size={20}/><div><strong>{selected.verifiedIssues} verified issues linked</strong><span>{selected.issues} total reports overlap this project's location/category. Staff should review causation before attributing any report to the project.</span></div><button>Review linked issues</button></div>
    </div>
    <div className="panel projectMap"><RealGuyanaMap center={[selected.lat,selected.lng]} zoom={12} markers={markers} height={330}/></div>
   </div>
   <aside className="panel projectAudit"><div className="sectionTitle"><Clock3 size={16}/><strong>Project activity</strong></div>{projectActivity.map((a,i)=><div className="projectActivity" key={i}><b>{a[0]}</b><span>{a[2]}</span><small>{a[1]}</small></div>)}<div className="projectWarning"><AlertTriangle size={16}/><p>Project status, budgets and delivery claims must be source-backed before publication. Demo records shown here are not factual claims about current Guyana projects.</p></div></aside>
  </div>
 </section>
}