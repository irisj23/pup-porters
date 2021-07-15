import React, { useState, useEffect, useRef } from "react";
import config from '../../../../config.js';

let autoComplete = null;

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}

function SearchBar(props) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  if (props.googleApiLoaded && autoComplete === null) {
    autoComplete = new window.google.maps.places.Autocomplete(autoCompleteRef.current, {
      types: ["(cities)"],
      componentRestrictions: { country: "us" }
    });
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(setQuery)
    );
}

  return (
    <div className="search-location-input">
      <input
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder="Enter a City"
        value={query}
      />
    </div>
  );
}


export default SearchBar;
