import axios from 'axios';

const apiBasePath = `${process.env.REACT_APP_SMARTUM_API_PATH}/venues`;

const getVenues = (
  latitude: number,
  longitude: number,
  distance: number,
) => {
  return axios.get(apiBasePath, {
    params: {
      lat: latitude,
      lon: longitude,
      distance: distance,
    }
  })
};

export default {
  getVenues,
}