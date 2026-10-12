"use client";
import {MapPin,Navigation} from "lucide-react";
import RealGuyanaMap from "@/components/RealMapClient";
export default function LocationPinPicker({pin,onPick,onUseCurrent}){
 const center=pin?[pin.lat,pin.lng]:[6.8013,-58.1551];
 return <div className="pinPicker real">
   <div className="pinHeader"><div><MapPin size={17}/><strong>Drop a pin at the exact location</strong></div><span>Zoom to the street, then click the exact point</span></div>
   <div className="realPinMap"><RealGuyanaMap center={center} zoom={pin?17:13} pickable pin={pin} onPick={onPick} height={330}/></div>
   <div className="pinFooter"><div><span>{pin?"Exact pin selected":"Click the map to select a location"}</span>{pin&&<small>{pin.lat.toFixed(6)}, {pin.lng.toFixed(6)}</small>}</div><button type="button" onClick={onUseCurrent}><Navigation size={13}/> Use my current location</button></div>
 </div>
}