import axios from 'axios';

const host = '192.168.43.7'; // put the host of your machine here

const api = axios.create({
  baseURL: `http://${host}:3333/`,
});

export default api;
