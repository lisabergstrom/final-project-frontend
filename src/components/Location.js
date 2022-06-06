import React, {useState, useMapEvents} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../app.css';
// import useSwr from "swr";

// const fetcher = (...args) => fetch(...args).then(response => response.json());

  function Location() {
    const position = [59.858131, 17.644621]
//   const url =
//     "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
//   const { data, error } = useSwr(url, { fetcher });
//   const crimes = data && !error ? data.slice(0, 50) : [];

return (
//     // <MapContainer center={[51.507351, -0.127758]} zoom={12} scrollWheelZoom={false}>
//     //   <TileLayer
//     //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//     //   />

//     //   {crimes.map(crime => (
//     //     <Marker
//     //       key={crime.id}
//     //       position={[crime.location.latitude, crime.location.longitude]}
//     //     />
//     //   ))}
      
//     // </MapContainer>
   <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
   <TileLayer
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />
      <Marker position={position}>
     <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
  </Popup>
  </Marker>
 </MapContainer>
 );
}


export default Location;


 

//     function LocationMarker() {
//         const [position, setPosition] = useState(null)
//         const map = useMapEvents({
//           click() {
//             map.locate()
//           },
//           locationfound(e) {
//             setPosition(e.latlng)
//             map.flyTo(e.latlng, map.getZoom())
//           },
//         })
        
//         return position === null ? null : (
//           <Marker position={position}>
//             <Popup>You are here</Popup>
//           </Marker>
//         )
//       }
  
//   render(
//     <MapContainer
//       center={{ lat: 51.505, lng: -0.09 }}
//       zoom={13}
//       scrollWheelZoom={false}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <LocationMarker />
//     </MapContainer>
//   )
  

//   export default LocationMarker;