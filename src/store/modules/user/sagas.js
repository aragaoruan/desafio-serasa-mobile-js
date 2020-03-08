import { Alert } from 'react-native';

import { takeLatest, put, all } from 'redux-saga/effects';

// import api from '~/services/api';

import { getUserSuccess, getUserError } from './actions';

export function* getUser() {
  try {
    const data = {
      name: 'Maurivan Luiz',
      photo: {
        uri: 'http://api.adorable.io/avatars/90/serasaconsumidor@adorable.png',
      },
    };

    console.log('AQUI');
    yield put(getUserSuccess(data));
  } catch (err) {
    Alert.alert('Falha', 'Erro au buscar usuario');

    yield put(getUserError());
  }
}

export default all([takeLatest('@user/GET_USER_REQUEST', getUser)]);
