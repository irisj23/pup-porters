// /*global google */
// import React, { useEffect, useRef, useState } from 'react';
// import { GoogleMap, useLoadScript, Marker, InfoWindow, DirectionsRenderer } from '@react-google-maps/api';

// const sampleData = [
//   {lat: 47.49855629475769, lng: -122.14184416996333},
//   {lat: 47.359423, lng: -122.021071},
//   {lat: 47.2052192687988, lng: -121.988426208496},
//   {lat: 47.6307081, lng: -122.1434325},
//   {lat: 47.5524695, lng: -122.0425407}
// ];

// const initialCenter =   {lat: 47.3084488, lng: -122.2140121};



// const Map = () => {

//   const [markers, setMarkers] = useState([]);
//   const [newMarker, setNewMarker] = useState([]);
//   const [selected, setSelected] = useState(false);


//   const googleMapRef = useRef(null);
//   let googleMap = null;

//   useEffect(() => {
//     googleMap = initGoogleMap();
//     addMarker(initialCenter);
//   }, []);

//   useEffect(() => {
//     setMarkers(markers.concat(newMarker))
//   }, [newMarker]);


//   // initialize the google map
//   const initGoogleMap = () => {
//     let newMap = new window.google.maps.Map(googleMapRef.current, {
//       center: initialCenter,
//       zoom: 8
//     });

//     console.log(newMap)
//     google.maps.event.addListener(newMap, 'click', (event) => {
//       console.log({lat: event.latLng.lat(), lng: event.latLng.lng()})
//       addMarker({lat: event.latLng.lat(), lng: event.latLng.lng()});
//       let newMarker = {lat: event.latLng.lat(), lng: event.latLng.lng()};
//       let updatedMarkers = [...markers];
//       console.log(updatedMarkers);
//       updatedMarkers.push(newMarker)
//       setNewMarker(updatedMarkers)

//     });

//     return newMap;
//   }


//   console.log('markers')
//   console.log(markers);
//   // create marker on google map
//   const addMarker = (latLng) => new google.maps.Marker({
//     position: latLng,
//     map: googleMap
//   });

//   const marker = addMarker({lat: 47.3084488, lng: -122.2140121}).addListener('click', () => {
//     console.log('clicked')
//     infowindow.open({
//       anchor: marker,
//       googleMap,
//       shouldFocus: false,
//     })
//   })

//   // const addMarker = (coords) => {
//   //   createMarker(coords);
//   // };

//   return <div
//     ref={googleMapRef}
//     style={{ width: 600, height: 500 }}
//   />
// }

// export default Map;
