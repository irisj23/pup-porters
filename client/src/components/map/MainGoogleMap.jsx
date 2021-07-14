/*global google */
import React, { useState, useEffect } from 'react';
import CaregiverMap from './caregiverMap/CaregiverMap.jsx';
import RemoverMap from './removerMap/RemoverMap.jsx';
import DropOffMap from './dropoffMap/DropOffMap.jsx';
import SearchBar from './SearchBar.jsx';

const MainGoogleMap = () => {

  return (
    <div className="App" style={{ width: '200%', marginLeft: 50}}>
      <br /><br />
      <SearchBar/>
      {/* <CaregiverMap/> */}
      <RemoverMap/>
      {/* <DropOffMap/> */}

    </div>
  );
};

export default MainGoogleMap;
