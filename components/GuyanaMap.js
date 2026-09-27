"use client";
import { regions } from "@/data/regions";
export default function GuyanaMap({selected,onSelect}){
 return <div className="mapStage">
   <svg className="guyanaMap" viewBox="0 0 520 700" role="img" aria-label="Stylized interactive map of Guyana">
     <path className="countryShape" d="M176 30 L330 54 L382 126 L365 197 L417 272 L393 350 L431 428 L374 515 L340 650 L252 672 L184 610 L138 528 L112 431 L83 335 L112 248 L91 170 L126 88 Z"/>
     <path className="riverLine" d="M145 175 C230 210 245 315 345 350 C290 405 270 520 325 610"/>
     {regions.map(r=>{
       const cx=r.x*4.0+55, cy=r.y*6.1+15;
       return <g key={r.id} className={selected===r.id?"mapPoint selected":"mapPoint"} onClick={()=>onSelect(r.id)} tabIndex="0" role="button">
         <circle cx={cx} cy={cy} r={selected===r.id?18:14}/>
         <text x={cx} y={cy+4} textAnchor="middle">{r.id}</text>
       </g>
     })}
   </svg>
   <div className="mapLegend"><span><i className="dot criticalDot"/>High priority</span><span><i className="dot standardDot"/>Region marker</span></div>
   <div className="mapDisclaimer">Interactive geographic prototype — marker placement is approximate for Phase 2 and is not a survey/GIS boundary map.</div>
 </div>
}