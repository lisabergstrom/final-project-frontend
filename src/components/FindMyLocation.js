 import React, { useState } from "react";

 const getLocation = () => {
  if (!navigator.geolocation) {
     setStatus("Geolocation is not supported by your browser");
   } else {
     setStatus("Locating...");
     navigator.geolocation.getCurrentPosition(
       (position) => {
         setStatus(null);
         setLat(position.coords.latitude);
         setLng(position.coords.longitude);
         return[position.coords.latitude, position.coords.longitude]
       },
       () => {
         setStatus("Unable to retrieve your location");
         return[0, 0]
       }
     );
   }
 };


 const FindMyLocation = () => {
  const [lat, setLat] = useState(null);
   const [lng, setLng] = useState(null);
   const [status, setStatus] = useState(null);

// import "ol/ol.css";
// import { Map, View } from "ol";
// import TileLayer from "ol/layer/Tile";
// import OSM from "ol/source/OSM";

// const Location = new Map({
//   target: "map",
//   layers: [
//     new TileLayer({
//       source: new OSM(),
//     }),
//   ],
//   view: new View({
//     center: [0, 0],
//     zoom: 0,
//   }),


 return (
    <div className="App">
      <button onClick={getLocation}>Where on Earth am I?</button>
     <h1>Coordinates</h1>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
       {lng && <p>Longitude: {lng}</p>}
     </div>
  );
 };
 
// });

export default FindMyLocation;

export {getLocation};

// // Heading: Where on Earth am I?