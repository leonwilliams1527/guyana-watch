"use client";
import {useState} from "react"; import {MapPin,Move} from "lucide-react";
export default function LocationPinPicker(){
 const [pin,setPin]=useState(null);
 function place(e){const r=e.currentTarget.getBoundingClientRect();setPin({x:(e.clientX-r.left)/r.width*100,y:(e.clientY-r.top)/r.height*100})}
 return <div className="pinPicker"><div className="pinHeader"><div><MapPin size={17}/><strong>Drop a pin at the exact location</strong></div><span>Click the map to position the issue</span></div>
 <button type="button" className="pinMap" onClick={place}><div className="pinRoad r1"/><div className="pinRoad r2"/><div className="pinRoad r3"/>{pin?<MapPin className="droppedPin" size={30} style={{left:`${pin.x}%`,top:`${pin.y}%`}}/>:<div className="pinInstruction"><Move size={18}/><strong>Click anywhere to drop pin</strong><span>Real coordinates will be generated when the street basemap is connected.</span></div>}</button>
 <div className="pinFooter"><span>{pin?"Pin selected":"No pin selected yet"}</span><small>Latitude/longitude can also be entered manually.</small></div></div>
}