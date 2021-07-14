/*global google */
import React, { useState, useEffect } from 'react';
import Map from './Map.jsx';
import RemoverMap from '../removerMap/RemoverMap.jsx';
import config from '../../../../config.js';

const GoogleMap = () => {

  return (
    <div className="App">
      <br /><br />
      <Map/>
      {/* <RemoverMap/> */}
    </div>
  );
}

export default GoogleMap;
