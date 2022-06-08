import React, {useState} from "react";
// import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import '../app.css';

// import FindMyLocation from './FindMyLocation';

// import useSwr from "swr";

// const fetcher = (...args) => fetch(...args).then(response => response.json());
const LocationMarker = ()=> {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}


  const Location = () => {
// const [currentPosition, setCurrentPosition] = useState([0, 0])    
//  const getLocation = () => {
//     if (!navigator.geolocation) {
//      } else {
//        await navigator.geolocation.getCurrentPosition(
//          (position) => {
//           const currentLoaction = [position.coords.latitude, position.coords.longitude]
//           console.log(currentLoaction);
//           setCurrentPosition(currentLoaction)
//            return currentLoaction
//          },
//          () => {
//            return[0, 0]
//          }
//        );
//      }
//    };
//     // const position = getLocation()
//     // getLocation();
//     const position = [32.213, 54.567];
    
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
      
    // </MapContainer>

    <MapContainer
    center={{ lat: 51.505, lng: -0.09 }}
    zoom={13}
    scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker />
  </MapContainer>
//    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
//    <TileLayer
//      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//    />
//       <Marker position={currentPosition}>
//      <Popup>
//       A pretty CSS3 popup. <br /> Easily customizable.
//   </Popup>
//   </Marker>
//  </MapContainer>
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


// import React, { useEffect, useRef } from 'react';
// import L from 'leaflet';
// import { Map, TileLayer } from 'react-leaflet';
// import '../app.css';
// import 'leaflet/dist/leaflet.css';

// const defaultCenter = [0, 0];
// const defaultZoom = 4;

// function Location() {
//   const mapRef = useRef();

//   useEffect(() => {
//     const { current = {} } = mapRef;
//     const { leafletElement: map } = current;

//     // Commenting this out to avoid blocked location requests
//     // when embedded on the Egghead lesson page. To give this
//     // a try, simply uncomment out the function call below

//     map.locate({
//       setView: true,
//     });

//     map.on('locationfound', handleOnLocationFound);

//     // Additional event handler for listening for
//     // errors in finding someone's location

//     map.on('locationerror', handleOnLocationError);

//     return () => {
//       map.off('locationfound', handleOnLocationFound);
//       map.off('locationerror', handleOnLocationError);
//     }
//   }, []);

//   /**
//    * handleOnLocationFound
//    * @param {object} event Leaflet LocationEvent object
//    */

//   function handleOnLocationFound(event) {
//     const { current = {} } = mapRef;
//     const { leafletElement: map } = current;

//     const latlng = event.latlng;
//     const radius = event.accuracy;
//     const circle = L.circle(latlng, radius);

//     circle.addTo(map);
//   }

//   /**
//    * handleOnLocationError
//    * @param {object} error Leaflet ErrorEvent object
//    */

//   function handleOnLocationError(error) {
//     alert(`Unable to determine location: ${error.message}`);
//   }

//   return (
//     <div className="App">
//       <Map ref={mapRef} center={defaultCenter} zoom={defaultZoom}>
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
//       </Map>
//     </div>
//   );
// }

// export default Location;


// import React, { Component } from "react";
// import { Map, TileLayer } from "react-leaflet";
// import L from "leaflet";
// import "leaflet-control-geocoder/dist/Control.Geocoder.js";
// import '../app.css';
// import Map from "./Map";

// const height = { height: "100vh" };
// const center = { lat: 51.5, lng: 0.12 };

// class Location extends Component {
//   componentDidMount() {
//     const map = this.leafletMap.leafletElement;
//     const geocoder = L.Control.Geocoder.nominatim();
//     let marker;

//     map.on("click", e => {
//       geocoder.reverse(
//         e.latlng,
//         map.options.crs.scale(map.getZoom()),
//         results => {
//           var r = results[0];
//           if (r) {
//             if (marker) {
//               marker
//                 .setLatLng(r.center)
//                 .setPopupContent(r.html || r.name)
//                 .openPopup();
//             } else {
//               marker = L.marker(r.center)
//                 .bindPopup(r.name)
//                 .addTo(map)
//                 .openPopup();
//             }
//           }
//         }
//       );
//     });
//   }

//   render() {
//     return (
//       <Map
//         style={height}
//         center={center}
//         zoom={18}
//         ref={m => {
//           this.leafletMap = m;
//         }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         />
//       </Map>
//     );
//   }
// }

// export default Location;


