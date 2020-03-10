import { Platform } from 'react-native';

import axios from 'axios';

const api = axios.create({
  baseURL:
    Platform.OS === 'android'
      ? 'http://192.168.0.101:3333/'
      : 'http://192.168.0.101:3333/',
});

export default api;
