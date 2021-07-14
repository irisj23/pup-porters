/*global google */
import React, { useState, useEffec, useRef, useCallback } from 'react';
import config from '../../../../config.js';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { ScriptLoaded } from '@react-google-maps/api';
import InfoWindowItem from './InfoWindowItem.jsx';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Slide } from '@material-ui/core';

// const ScriptLoaded = require("@react-google-maps/api/dist/docs/ScriptLoaded").default;

const useStyles = makeStyles({
  button: {
    height: 50,
    width: 250,
    borderRadius: 50,
    boxShadow: '0 5px 10px 5px rgba(128,128,128, .3)',
    fontSize: 15,
  }
});

const containerStyle = {
  width: '70%',
  height: '70%',
  margin: 0,
  padding: 0,
};

const centerSample = [{
  lat: 37.773972,
  lng: -122.431297
}];


function CaregiverMap(props) {
  const classes = useStyles();

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: config.token
  });

  const [selected, setSelected] = useState({});
  const [markers, setMarkers] = useState([]);
  const [openWindow, setOpenWindow] = useState(false);


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
  setOpenWindow(true);
};

const handleRemoveMarker = (coords) => {
  let newList = markers.filter((mark) => {
    return mark.coordinates.lat !== coords.coordinates.lat;
  });
  setMarkers(newList);
  setSelected({})
};

const sendFlagInfo = () => {
  console.log(markers);
  axios.post('/flag', markers)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}


console.log('markers')
console.log(markers)

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
              animation={window.google.maps.Animation.DROP}
            />
          ))}

        {openWindow &&
        (
          <InfoWindow
            position={selected.coordinates}
            clickable={true}
            onCloseClick={() => setOpenWindow(false)}
          >
            <>
            <InfoWindowItem
              coordinates={selected.coordinates}
            />
            </>
          </InfoWindow>
        )}
        </GoogleMap>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            console.log('sending flag info')
            sendFlagInfo();
          }}>
          Confirm
        </Button>

        <button onClick={() => {handleRemoveMarker(selected)}}>remove</button>
      </div>
    )
  }

  if (loadError) {
    return <div>Error loading Map</div>
  }

  return isLoaded ? renderMap() : <div>noooo</div>

};

export default CaregiverMap;
