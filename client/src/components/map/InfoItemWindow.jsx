import React, { useState, useEffect } from 'react'

function WindowItem({coordinates}) {

  // const removeMarker = () => {
  //   handleRemoveMarker(coordinates);
  //   handleRemoveWindow(coordinates);
  // };

  // console.log('URL')
  // console.log(url)

  return (
    <>


    <b>hi</b>
    <div>lat: {coordinates.lat}, lng: {coordinates.lng}</div>

    {/* <button onClick={removeMarker}>remove location</button> */}

    </>
  )
}

export default WindowItem;
