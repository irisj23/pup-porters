const axios = require('axios');
const config = require('../../config');


const getLongLatByPlace = async (place) => {

  const placeIdUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&input=${place}&key=${config.token}`;
  // const placeDetailUrl =

  try {
    const response = await axios.get(placeIdUrl)
    // let placeId = response.place_id
    console.log('helper get place result here:')
    console.log(response.data.candidates[0].place_id)
    const placeId = response.data.candidates[0].place_id;

    const placeDetail = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${config.token}`);

    // console.log('placeDetail')
    // console.log(placeDetail.data.result.geometry.location)
    // {address: longAddress, coordinates: longLat, link: url}
    const longLat = placeDetail.data.result.geometry.location;
    const name = placeDetail.data.result.name;

    return {name: name, coordinates: longLat};

  } catch(error) {
    console.log('helper get place error here:')
    console.log(error)
  }
};

module.exports.getLongLatByPlace = getLongLatByPlace;
