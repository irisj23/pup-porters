/*global google */
import React, { useEffect, useRef } from 'react';

const sampleData = [
  {lat: 47.49855629475769, lng: -122.14184416996333},
  {lat: 47.359423, lng: -122.021071},
  {lat: 47.2052192687988, lng: -121.988426208496},
  {lat: 47.6307081, lng: -122.1434325},
  {lat: 47.5524695, lng: -122.0425407}
];

const initialCenter =   {lat: 47.3084488, lng: -122.2140121};



const Map = () => {
  const googleMapRef = useRef(null);
  let googleMap = null;

  useEffect(() => {
    googleMap = initGoogleMap();
    createMarker(initialCenter);

  }, []);


  // initialize the google map
  const initGoogleMap = () => {
    let newMap = new window.google.maps.Map(googleMapRef.current, {
      center: initialCenter,
      zoom: 8
    });

    console.log(newMap)
    google.maps.event.addListener(newMap, 'click', (event) => {
      addMarker({lat: event.latLng.lat(), lng: event.latLng.lng()});
    });

    return newMap;
  }


  // create marker on google map
  const createMarker = (latLng) => new google.maps.Marker({
    position: latLng,
    map: googleMap
  });

  const addMarker = (coords) => {
    createMarker(coords);
  };

  addMarker({lat: 47.5524695, lng: -122.0425407});


  return <div
    ref={googleMapRef}
    style={{ width: 600, height: 500 }}
  />
}

export default Map;
