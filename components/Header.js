"use client";
import { LayoutDashboard, Map, FileWarning, Landmark, Database, FileText, ShieldCheck, BrainCircuit, CheckCircle2, BarChart3 } from "lucide-react";
export default function Header({ active="Dashboard", onNavigate }) {
 const items=[["Dashboard",LayoutDashboard],["Executive",BrainCircuit],["Outcomes",CheckCircle2],["Map",Map],["Contractors",Database],["Reports",FileWarning],["Verification",ShieldCheck],["Projects & Promises",Landmark],["Intelligence",Database],["Coverage",BarChart3],["Evidence",Database],["Briefings",FileText]];
 return <header className="header"><div className="brand"><div className="brandMark">GW</div><div><h1>GUYANA WATCH</h1><span>National Accountability Monitor</span></div></div>
 <nav>{items.map(([label,Icon])=><button key={label} className={active===label?"navItem active":"navItem"} onClick={()=>onNavigate?.(label)}><Icon size={17}/>{label}</button>)}</nav>
 <button className="reportButton">Report an Issue</button></header>
}
