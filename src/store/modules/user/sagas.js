import { Alert } from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { getUserSuccess, getUserError } from './actions';

export function* getUser() {
  try {
    const { data } = yield call(api.get, '/user');

    yield put(getUserSuccess(data));
  } catch (err) {
    Alert.alert('Falha', 'Erro au buscar usuario');

    yield put(getUserError());
  }
}

export default all([takeLatest('@user/GET_USER_REQUEST', getUser)]);
