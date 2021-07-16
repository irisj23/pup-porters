/*global google */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import config from '../../../../../config.js';
import { GoogleMap, ScriptLoaded, useLoadScript, Marker, InfoWindow, Autocomplete } from '@react-google-maps/api';
import InfoWindowItem from './InfoWindowItem.jsx';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Slide } from '@material-ui/core';
import { useAuth } from "../../../contexts/AuthContext.js"

const useStyles = makeStyles({
  button: {
    height: 100,
    width: 500,
    borderRadius: 50,
    boxShadow: '0 5px 10px 5px rgba(128,128,128, .3)',
    fontSize: 30,
  },
  buttons: {
    margin: 50,
    marginLeft: '-25%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const containerStyle = {
  width: '70%',
  height: '70%',
  margin: 0,
  padding: 0,
};

function CaregiverMap(props) {
  const classes = useStyles();

  const { currentUser } = useAuth()

  const [markerCoord, setMarkerCoord] = useState(null);
  const [postedMarkers, setPostedMarkers] = useState([]);
  const [openWindow, setOpenWindow] = useState(false);
  const [iconImage, setIconImage] = useState('');

  useEffect(() => {
    console.log("Fetching existing markers");
    axios.get('/availablePiles')
    .then((res) => {
      console.log(res);
      setPostedMarkers(postedMarkers.concat(res.data));
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  const onMapClick = (event) => {
    setMarkerCoord({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

 const onSelect = (item) => {
  console.log(item)
  setOpenWindow(true);
};

const handleConfirm = () => {
  console.log("Handling confirm")

  const availablePile = {
    coords: markerCoord,
    caregiver_user_id: JSON.stringify(currentUser.uid),
  };

  console.log(availablePile);

  axios.post('/availablePiles', availablePile)
    .then((res) => {
      console.log(res);
      setMarkerCoord(null);
      setPostedMarkers(postedMarkers.concat([res.data]));
    })
    .catch((err) => {
      console.log(err);
    })
};

  const renderMap = () => {
    const markersToRender = markerCoord ? postedMarkers.concat({
      coords: markerCoord,
    }) : postedMarkers;
    console.log("rendering with");
    console.log(markersToRender);

    return (

      <div>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={props.centerLocation}
          zoom={14}
          onClick={onMapClick}
        >


          {markersToRender.map((marker, index) => (
            <Marker
              key={index}
              position={marker.coords}
              onClick={() => onSelect(marker)}
              icon={{
                url: 'poop.png',
                scaledSize: new google.maps.Size(50, 50),
              }}
              animation={2}
            />
          ))}


        {/* {openWindow && markerCoord &&
        (
          <InfoWindow
            position={markerCoord}
            clickable={true}
            onCloseClick={() => setOpenWindow(false)}
          >
            <>
            <InfoWindowItem
              coordinates={markerCoord}
            />
            </>
          </InfoWindow>
        )} */}
        </GoogleMap>


        <div className={classes.buttons}>
        {markerCoord &&
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              console.log('sending flag info')
              handleConfirm();
            }}>
            Confirm
          </Button>
        }
        </div>
      </div>
    )
  }

  return props.googleApiLoaded ? renderMap() : <div>noooo</div>

};

export default CaregiverMap;

