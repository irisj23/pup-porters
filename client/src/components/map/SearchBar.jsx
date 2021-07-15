import React, { useState, useEffect, useRef } from "react";
import config from '../../../../config.js';

let autoComplete = null;

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.address_components[0].long_name;
  updateQuery(query);
  console.log(addressObject);
}

function SearchBar(props) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  if (props.googleApiLoaded && autoComplete === null) {
    const southwest = { lat: 37.712, lng: -122.537 };
    const northeast = { lat: 37.826, lng: -122.370 };
    const bounds = new google.maps.LatLngBounds(southwest, northeast);

    autoComplete = new window.google.maps.places.Autocomplete(autoCompleteRef.current, {
      bounds: bounds,
      componentRestrictions: { country: "us" },
      strictBounds: true,
    });

    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(setQuery)
    );
};

const handleSubmitDest = (event) => {
  event.preventDefault();

  props.getCenterLocation(query);
  console.log('HERE:')
  console.log(query)
  setQuery('');
}


  return (
    <form onSubmit={handleSubmitDest}>
      <div className="search-location-input">
        <input
          ref={autoCompleteRef}
          onChange={event => setQuery(event.target.value)}
          placeholder="Enter a City"
          value={query}
        />
      </div>
    </form>
  );
}


export default SearchBar;
