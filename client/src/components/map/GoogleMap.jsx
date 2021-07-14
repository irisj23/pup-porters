/*global google */
import React, { useState, useEffect } from 'react';
import CaregiverMap from '../caregiverMap/CaregiverMap.jsx';
import RemoverMap from '../removerMap/RemoverMap.jsx';
import DropOffMap from '../dropoffMap/DropOffMap.jsx';

const GoogleMap = () => {

  return (
    <div className="App">
      <br /><br />
      {/* <CaregiverMap/> */}
      {/* <RemoverMap/> */}
      <DropOffMap/>
    </div>
  );
};

export default GoogleMap;
