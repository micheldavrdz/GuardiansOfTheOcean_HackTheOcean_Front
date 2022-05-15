import axios from 'axios';

export default axios.create({
  baseURL: 'https://animales-api.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});
