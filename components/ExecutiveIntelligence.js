"use client";
import {useMemo,useState} from "react";
import {BrainCircuit,MapPin,AlertTriangle,ArrowUpRight,Filter,FileText,CheckCircle2,Sparkles,Clock3,ShieldCheck} from "lucide-react";
import RealGuyanaMap from "@/components/RealMapClient";
import {executivePriorities,executiveRegions,briefingItems} from "@/data/executive";
import CompleteExecutiveIssue from "@/components/CompleteExecutiveIssue";
import ExecutiveContractors from "@/components/ExecutiveContractors";

export default function ExecutiveIntelligence(){
 const [region,setRegion]=useState("All"),[selected,setSelected]=useState(executivePriorities[0]);
 const [completeOpen,setCompleteOpen]=useState(false);
 const [execMode,setExecMode]=useState("Priorities");
 const priorities=useMemo(()=>executivePriorities.filter(x=>region==="All"||x.region===region),[region]);
 const markers=priorities.map(x=>({id:x.id,title:x.title,place:x.place,lat:x.lat,lng:x.lng,issue:x.priority==="Critical"||x.priority==="High"}));
 return <section>
  <div className="execIntro"><div><span className="eyebrow green">PHASE 6 · EXECUTIVE INTELLIGENCE</span><h2>Executive Command Center</h2><p>A national decision view combining verified citizen evidence, tracked projects and reviewed government intelligence.</p></div><div className="execControls"><label><Filter size={13}/><select value={region} onChange={e=>setRegion(e.target.value)}><option>All</option>{["Region 4","Region 6","Region 3","Region 10"].map(x=><option key={x}>{x}</option>)}</select></label><button><FileText size={14}/> Generate briefing</button></div></div>
  <div className="execModeTabs"><button className={execMode==="Priorities"?"active":""} onClick={()=>setExecMode("Priorities")}>Priority Intelligence</button><button className={execMode==="Contractors"?"active":""} onClick={()=>setExecMode("Contractors")}>Contractor Intelligence</button></div>
  {execMode==="Contractors"?<ExecutiveContractors/>:<>
  <div className="aiGuardrail"><ShieldCheck size={18}/><div><strong>Decision support, not autonomous political claims</strong><span>AI recommendations are generated from reviewed platform records. Staff should verify sources and context before public use or escalation.</span></div></div>
  <div className="execMetrics">{[["4","Priority situations"],["38","Verified reports linked"],["3","Projects implicated"],["2","Immediate reviews"]].map(x=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</div>
  <div className="execGrid">
   <div className="panel execPriorityList"><div className="execTitle"><AlertTriangle size={16}/><strong>AI Priority Queue</strong><span>Evidence-weighted</span></div>{priorities.map(x=><button key={x.id} onClick={()=>setSelected(x)} className={selected.id===x.id?"execPriority selected":"execPriority"}><div className="execPriorityTop"><span>{x.id}</span><b className={`execPill ${x.priority.toLowerCase()}`}>{x.priority}</b></div><strong>{x.title}</strong><small><MapPin size={11}/>{x.place}</small><div className="scoreRow"><span>Priority score</span><b>{x.score}/100</b></div><div className="scoreTrack"><i style={{width:`${x.score}%`}}/></div><div className="execMeta"><span>{x.verified} verified</span><span>{x.trend}</span></div></button>)}</div>
   <div className="execCenter">
    <div className="panel execRecommendation"><div className="recommendHead"><div><span className="eyebrow">{selected.id} · {selected.category}</span><h3>{selected.title}</h3><p><MapPin size={12}/>{selected.place}</p></div><div className="aiBadge"><BrainCircuit size={16}/> AI ANALYSIS</div></div><div className="whyBox"><Sparkles size={17}/><div><span>WHY THIS IS PRIORITIZED</span><p>{selected.reason}</p></div></div><div className="linkedProject"><span>LINKED PROJECT / COMMITMENT</span><strong>{selected.project}</strong></div><h4>Recommended leadership actions</h4><div className="actionList">{selected.actions.map((a,i)=><div key={a}><b>{i+1}</b><span>{a}</span><button>Assign <ArrowUpRight size={12}/></button></div>)}</div><div className="completeExecBar"><div><CheckCircle2 size={17}/><span><strong>Leadership action completed?</strong><small>Record what was done and where the underlying issue goes next.</small></span></div><button onClick={()=>setCompleteOpen(true)}>Complete & record outcome</button></div>
    <div className="execEvidence"><div><strong>{selected.verified}</strong><span>Verified citizen reports</span></div><div><strong>{selected.score}</strong><span>Priority score</span></div><div><strong>{selected.trend}</strong><span>Recent trend</span></div></div></div>
    <div className="panel execMap"><RealGuyanaMap center={[selected.lat,selected.lng]} zoom={selected.region==="Region 4"?13:11} markers={markers} height={340}/></div>
   </div>
   <aside className="panel execBrief"><div className="execTitle"><Clock3 size={16}/><strong>Morning intelligence</strong></div>{briefingItems.map((x,i)=><div className="briefEvent" key={i}><b>{x.time}</b><strong>{x.title}</strong><span>{x.type}</span></div>)}<div className="regionalPulse"><span>REGIONAL PRIORITY PULSE</span>{executiveRegions.map(x=><div key={x.region}><strong>{x.region}</strong><i><em style={{width:`${x.score}%`}}/></i><b>{x.score}</b></div>)}</div><button className="briefingBtn"><FileText size={14}/> Open full executive briefing</button></aside>
  </div>
 </>}
  <CompleteExecutiveIssue issue={selected} open={completeOpen} onClose={()=>setCompleteOpen(false)}/></section>
}