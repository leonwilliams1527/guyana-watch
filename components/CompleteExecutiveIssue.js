"use client";
import {useState} from "react";
import {X,CheckCircle2,Upload,Clock3} from "lucide-react";
import {outcomeTypes} from "@/data/resolutions";

export default function CompleteExecutiveIssue({issue,open,onClose}){
 const [saved,setSaved]=useState(false);
 if(!open)return null;
 return <div className="modalShade"><div className="resolutionModal">
  <div className="modalTop"><div><span className="eyebrow green">EXECUTIVE OUTCOME</span><h3>Complete leadership action</h3><p>{issue?.id} · {issue?.title}</p></div><button onClick={onClose}><X/></button></div>
  {saved?<div className="outcomeSaved"><CheckCircle2 size={38}/><h3>Outcome recorded</h3><p>The priority would now leave the active Executive queue and appear in Resolution & Outcomes with its full history preserved.</p><button onClick={()=>{setSaved(false);onClose()}}>Return to Executive</button></div>:
  <form onSubmit={e=>{e.preventDefault();setSaved(true)}}>
   <div className="resolutionForm">
    <div className="completionWarning"><Clock3 size={16}/><p><strong>Completing leadership action does not automatically mean the public-service problem is resolved.</strong> Select the outcome that describes the underlying issue.</p></div>
    <label>Outcome status<select required defaultValue=""><option value="" disabled>Select outcome</option>{outcomeTypes.map(x=><option key={x}>{x}</option>)}</select></label>
    <label>Action owner / team<input required placeholder="Person, desk or team responsible"/></label>
    <label className="wide">Action taken<textarea required rows="4" placeholder="What did leadership or staff actually do?"/></label>
    <label className="wide">Current outcome<textarea required rows="4" placeholder="What is the current state of the underlying issue?"/></label>
    <label>Action date<input type="date" required/></label><label>Follow-up date<input type="date"/></label>
    <label className="wide">Government / agency response<textarea rows="3" placeholder="Record response, reference number or statement if available."/></label>
    <label className="wide">Supporting evidence / document reference<input placeholder="Document, letter, image or source reference"/></label>
   </div>
   <div className="resolutionActions"><button type="button" onClick={onClose}>Cancel</button><button className="completeAction"><CheckCircle2 size={14}/> Record outcome</button></div>
  </form>}
 </div></div>
}