/*global google */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import config from '../../../../config.js';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { ScriptLoaded } from '@react-google-maps/api';
import InfoItemWindow from '../map/InfoItemWindow.jsx';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Slide } from '@material-ui/core';

// const ScriptLoaded = require("@react-google-maps/api/dist/docs/ScriptLoaded").default;

const useStyles = makeStyles({
  button: {
    height: 100,
    width: 500,
    borderRadius: 50,
    boxShadow: '0 5px 10px 5px rgba(128,128,128, .3)',
    fontSize: 30,
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


const sampleCoords = [
  {
    lat: 37.795429,
    lng: -122.393561
  },
  {
    lat: 37.759773,
    lng: -122.427063
  },
  {
    lat: 37.781372,
    lng: -122.394241
  },
  {
    lat: 37.769722,
    lng: -122.476944
  },
  {
    lat: 37.769722,
    lng: -122.476944
  },
]

function RemoverMap(props) {
  const classes = useStyles();

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: config.token
  });

  const [selected, setSelected] = useState({});
  const [markers, setMarkers] = useState([]);


  useEffect(() => {
    setMarkers(sampleCoords);
  }, [])


 const onSelect = (item) => {
  setSelected(item);
};

const handleRemoveMarker = (coords) => {
  let newList = markers.filter((mark) => {
    return mark.lat !== coords.lat;
  });
  setMarkers(newList);
  setSelected({})
};

const sendTransaction = () => {
  axios.post('/transaction', selected)
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
          zoom={12}
        >

          {markers.map((marker, i) => (
            <Marker
              key={i}
              position={{lat: marker.lat, lng: marker.lng}}
              onClick={() => onSelect(marker)}
              animation={window.google.maps.Animation.DROP}
            />
          ))}

        {selected.coordinates &&
        (
          <InfoWindow
            position={selected.coordinates}
            clickable={true}
            // onCloseClick={() => setSelected({})}
          >
            <>
            <InfoItemWindow
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
          onClick={() => sendTransaction()}>
          Own
        </Button>

        <button onClick={() => {handleRemoveMarker(selected)}}>remove</button>
      </div>
    )
  }

  if (loadError) {
    return <div>Error loading Map</div>
  }

  return isLoaded ? renderMap() : <div>noooo</div>

}

export default RemoverMap;
