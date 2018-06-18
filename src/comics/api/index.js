/* eslint-disable no-undef */
import axios from 'axios';

const instance = axios.create({
  baseURL: API_URL,
  params: {
    apikey: API_KEY,
  },
});

export default instance;
