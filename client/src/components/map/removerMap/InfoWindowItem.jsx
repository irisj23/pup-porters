import React, { useState, useEffect } from 'react'

function InfoWindowItem({coordinates}) {

  return (
    <>
      <b>hi</b>
      <div>POOP HERE</div>
      <div>lat: {coordinates.lat}, lng: {coordinates.lng}</div>
      <div>Dog type: medium</div>
      <div>Price: $5</div>
    </>
  )
};

export default InfoWindowItem;
