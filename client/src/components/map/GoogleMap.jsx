/*global google */
import React, { useState, useEffect } from 'react';
import Map from './Map.jsx';
import config from '../../../../config.js';


const GoogleMap = () => {


  return (
    <div className="App">
      <br /><br />
      <Map/>
    </div>
  );
}

export default GoogleMap;
