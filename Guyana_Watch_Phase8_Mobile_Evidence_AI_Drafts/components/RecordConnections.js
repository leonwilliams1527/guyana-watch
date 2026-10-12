"use client";
import {Landmark,WalletCards,Building2,FileText,ArrowRight,Link2,ShieldCheck} from "lucide-react";
export default function RecordConnections({record,onOpenContractor}){
 if(!record)return <div className="noConnections">No verified connected records yet.</div>;
 return <div className="recordConnections">
  <div className="connectionHead"><Link2 size={15}/><strong>Connected accountability record</strong><span>{record.verified?"Verified links":"Needs review"}</span></div>
  <div className="connectionChain">
   <div><Landmark/><span>Promise</span><strong>{record.promise}</strong><small>{record.promiseId}</small></div><ArrowRight className="chainArrow"/>
   <div><WalletCards/><span>Budget</span><strong>{record.budget}</strong><small>{record.budgetId}</small></div><ArrowRight className="chainArrow"/>
   <div><FileText/><span>Contract</span><strong>{record.value}</strong><small>{record.contractId}</small></div><ArrowRight className="chainArrow"/>
   <button onClick={onOpenContractor}><Building2/><span>Contractor / Awardee</span><strong>{record.contractor}</strong><small>{record.agency}</small></button>
  </div>
  <div className="connectionMeta"><span><b>Status:</b> {record.status}</span><span><b>Deadline:</b> {record.deadline}</span><span><b>Location:</b> {record.location}</span><span><b>Source:</b> {record.source}</span></div>
  <div className="connectionIntegrity"><ShieldCheck size={13}/> A relationship is published only after the underlying source/match is verified.</div>
 </div>
}