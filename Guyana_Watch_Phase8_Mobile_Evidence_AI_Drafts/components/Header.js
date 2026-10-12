"use client";
import {useState} from 'react';
import {LayoutDashboard,Map,FileWarning,Landmark,Database,FileText,ShieldCheck,BrainCircuit,CheckCircle2,BarChart3,Menu,X,PlusCircle} from 'lucide-react';
export default function Header({active='Dashboard',onNavigate}){
 const [open,setOpen]=useState(false);
 const items=[['Dashboard',LayoutDashboard],['Executive',BrainCircuit],['Outcomes',CheckCircle2],['Map',Map],['Contractors',Database],['Reports',FileWarning],['Verification',ShieldCheck],['Projects & Promises',Landmark],['Intelligence',BrainCircuit],['Coverage',BarChart3],['Evidence',Database],['Briefings',FileText],['Manual Entry',PlusCircle]];
 const go=label=>{onNavigate?.(label);setOpen(false)};
 return <header className="header gwHeader"><button className="brand gwBrand" onClick={()=>go('Dashboard')} aria-label="Guyana Watch home"><span className="brandMark">GW</span><span><strong>GUYANA WATCH</strong><small>National Accountability Monitor</small></span></button><button className="gwMenuToggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav className={open?'gwNav gwNavOpen':'gwNav'} aria-label="Main navigation">{items.map(([label,Icon])=><button key={label} className={active===label?'navItem active':'navItem'} onClick={()=>go(label)}><Icon size={17}/>{label}</button>)}<button className="navItem" onClick={()=>go('Reports')}>Report an Issue</button></nav></header>
}
