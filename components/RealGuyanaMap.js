"use client";
import {MapContainer,TileLayer,Marker,Popup,useMap,useMapEvents} from "react-leaflet";
import L from "leaflet";
import {useEffect} from "react";

const pinIcon=L.divIcon({className:"gwMapPin",html:'<span></span>',iconSize:[24,32],iconAnchor:[12,30]});
const issueIcon=L.divIcon({className:"gwIssuePin",html:'<span></span>',iconSize:[20,28],iconAnchor:[10,26]});


function FlyTo({center,zoom=13}){const map=useMap();useEffect(()=>{if(center)map.flyTo(center,zoom,{duration:1.1})},[center?.[0],center?.[1],zoom]);return null}
function ClickHandler({onPick}){useMapEvents({click(e){onPick?.({lat:e.latlng.lat,lng:e.latlng.lng})}});return null}

export default function RealGuyanaMap({center=[5.2,-59.0],zoom=7,pickable=false,pin=null,onPick=null,markers=[],height=600}){
 return <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{height,width:"100%"}}>
   <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
   <FlyTo center={center} zoom={zoom}/>
   {pickable&&<ClickHandler onPick={onPick}/>}
   {pin&&<Marker position={[pin.lat,pin.lng]} icon={pinIcon}><Popup>Selected issue location<br/>{pin.lat.toFixed(6)}, {pin.lng.toFixed(6)}</Popup></Marker>}
   {markers.map((x,i)=><Marker key={x.id||x.name||i} position={[x.lat,x.lng]} icon={x.issue?issueIcon:pinIcon}><Popup><strong>{x.title||x.name}</strong>{x.place&&<><br/>{x.place}</>}</Popup></Marker>)}
 </MapContainer>
}