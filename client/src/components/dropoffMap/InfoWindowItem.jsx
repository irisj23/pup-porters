import React, { useState, useEffect } from 'react'

function InfoWindowItem({coordinates}) {

  return (
    <>
      <b>hi</b>
      <div>POOP DROP OFF HERE</div>
      <div>lat: {coordinates.lat}, lng: {coordinates.lng}</div>
    </>
  )
}

export default InfoWindowItem;
