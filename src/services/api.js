import { API_KEY } from 'react-native-dotenv';

import axios from 'axios';

const api = axios.create({
  baseURL: `http://${API_KEY}:3333/`,
});

export default api;
