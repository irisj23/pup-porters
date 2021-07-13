/*global google */
import React, { useState, useEffect } from 'react';
import Map from './Map.jsx';
import config from '../../../../config.js';

const GOOGLE_MAP_API_KEY = config.token;

// load google map script
const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
}

const GoogleMap = () => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);

  return (
    <div className="App">
      <br /><br />
      {!loadMap ? <div>Loading...</div> : <Map />}
    </div>
  );
}

export default GoogleMap;
