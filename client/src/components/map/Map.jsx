/*global google */
import React, { useState, useEffec, useRef, useCallback } from 'react';
import config from '../../../../config.js';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { ScriptLoaded } from '@react-google-maps/api';
import InfoItemWindow from '../map/InfoItemWindow.jsx';

// const ScriptLoaded = require("@react-google-maps/api/dist/docs/ScriptLoaded").default;


const containerStyle = {
  width: '100%',
  height: '100%',
  margin: 0,
  padding: 0,
};

const centerSample = [{
  lat: 37.773972,
  lng: -122.431297
}];


// const Background = styled.div`
//   background-color: blue;
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   margin: 0;
//   padding: 0;
// `


function Map(props) {

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: config.token
  });

  const [selected, setSelected] = useState({});
  const [markers, setMarkers] = useState([]);


  const onMapClick = React.useCallback((event) => {
    setMarkers(() => markers.concat([{
      coordinates: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      }
    }]));
 }, [markers]);


 const onSelect = (item) => {
  setSelected(item);
};

const handleRemoveWindow = (location) => {
  for (let name in selected) {
    if (selected.name === location) {
      delete selected.coordinates;
    };
    return selected;

  }
  setSelected(selected);
}

console.log('select')
console.log(selected)

  const renderMap = () => {

    return (

      <div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat: 37.773972,
            lng: -122.431297
          }}
          // center={props.center}
          zoom={13.5}
          onClick={onMapClick}

        >


          {markers.map((marker, i) => (
            <Marker
              key={i}
              position={{lat: marker.coordinates.lat, lng: marker.coordinates.lng}}
              onClick={() => onSelect(marker)}
              // icon={FaMapMarkerAlt}
              animation={window.google.maps.Animation.DROP}
            />
            ))}

        {selected.coordinates &&
        (
          <InfoWindow
            position={selected.coordinates}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <>
            <InfoItemWindow
              coordinates={selected.coordinates}
            />
            </>
          </InfoWindow>
        )}
        </GoogleMap>
      </div>
    )
  }

  if (loadError) {
    return <div>Error loading Map</div>
  }

  return isLoaded ? renderMap() : <div>noooo</div>

}

export default Map;
