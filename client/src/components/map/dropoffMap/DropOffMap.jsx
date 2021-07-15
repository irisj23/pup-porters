/*global google */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import config from '../../../../../config.js';
import { GoogleMap, useLoadScript, Marker, InfoWindow, ScriptLoaded } from '@react-google-maps/api';
import InfoWindowItem from './InfoWindowItem.jsx';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Slide } from '@material-ui/core';


const useStyles = makeStyles({
  // container: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
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


const sampleCoords = [
  {
    coordinates: {
      lat: 37.795429,
      lng: -122.393561
    }
  },
  {
    coordinates: {
    lat: 37.759773,
    lng: -122.427063
    }
  },
  {
    coordinates: {
    lat: 37.781372,
    lng: -122.394241
    }
  },
  {
    coordinates: {
    lat: 37.769722,
    lng: -122.476944
    }
  },
  {
    coordinates: {
    lat: 37.769722,
    lng: -122.476944
    }
  },
]

function DropOffMap(props) {
  const classes = useStyles();

  const [selected, setSelected] = useState({});
  const [markers, setMarkers] = useState([]);
  const [openWindow, setOpenWindow] = useState(false);
  const [isClaimed, setStatus] = useState(false);


  useEffect(() => {
    setMarkers(sampleCoords);
  }, []);


 const onSelect = (item) => {
  setSelected(item);
  setOpenWindow(true);
};


  const renderMap = () => {

    return (
      <div className={classes.container}>
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
              position={{lat: marker.coordinates.lat, lng: marker.coordinates.lng}}
              onClick={() => onSelect(marker)}
              animation={window.google.maps.Animation.DROP}

            />
          ))};

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

      </div>
    )
  };

  return props.googleApiLoaded ? renderMap() : <div>noooo</div>

};

export default DropOffMap;
