import { Alert } from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { getScoreSuccess, getScoreError } from './actions';

export function* getScore({ payload }) {
  try {
    const { number } = payload;

    const { data } = yield call(api.get, `/score/${number}`);

    yield put(getScoreSuccess(data));
  } catch (err) {
    Alert.alert('Falha', err);

    yield put(getScoreError());
  }
}

export default all([takeLatest('@score/GET_SCORE_REQUEST', getScore)]);
