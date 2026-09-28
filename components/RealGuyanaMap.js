"use client";
import {MapContainer,TileLayer,Marker,Popup,useMap,useMapEvents} from "react-leaflet";
import L from "leaflet";
import {useEffect} from "react";

const pinIcon=L.divIcon({className:"gwMapPin",html:'<span></span>',iconSize:[24,32],iconAnchor:[12,30]});
const issueIcon=L.divIcon({className:"gwIssuePin",html:'<span></span>',iconSize:[20,28],iconAnchor:[10,26]});

export const knownPlaces=[
 {name:"Georgetown",region:4,lat:6.8013,lng:-58.1551},
 {name:"Linden",region:10,lat:6.0081,lng:-58.3071},
 {name:"New Amsterdam",region:6,lat:6.2426,lng:-57.5168},
 {name:"Corriverton",region:6,lat:5.8953,lng:-57.1348},
 {name:"Anna Regina",region:2,lat:7.2644,lng:-58.4800},
 {name:"Bartica",region:7,lat:6.4070,lng:-58.6219},
 {name:"Mabaruma",region:1,lat:8.1990,lng:-59.7830},
 {name:"Mahdia",region:8,lat:5.2667,lng:-59.1500},
 {name:"Lethem",region:9,lat:3.3833,lng:-59.8000}
];

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