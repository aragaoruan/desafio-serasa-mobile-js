import { Alert } from 'react-native';

import { takeLatest, put, all } from 'redux-saga/effects';

// import api from '~/services/api';

import { getScoreSuccess, getScoreError } from './actions';

export function* getUser({ payload }) {
  try {
    let data = [];
    if (payload.number === '1') {
      data = {
        points: 15,
        description: 'Sua pontuação é baixa',
        debt: [
          {
            id: 1,
            photo: {
              uri: 'https://i.ya-webdesign.com/images/xbox-one-icon-png-2.png',
            },
            oldValue: 'R$280,00',
            newValue: 'por R$79,90',
          },
          {
            id: 2,
            photo: {
              uri: 'https://i.ya-webdesign.com/images/xbox-one-icon-png-2.png',
            },
            oldValue: 'R$280,00',
            newValue: 'por R$79,90',
          },
        ],
        credit: [],
        protection: [],
      };
    }

    if (payload.number === '2') {
      data = {
        points: 50,
        description: 'Sua pontuacao é média',
        debt: [],
        credit: [
          {
            id: 1,
            photo: {
              uri:
                'https://assets.b9.com.br/wp-content/uploads/2019/01/mastercard-2019.jpg',
            },
            oldValue: 'Anuidade Grátis',
            newValue: 'Limite de R$ 2.000,00',
          },
        ],
        protection: [
          {
            id: 1,
            photo: {
              uri:
                'https://icon-icons.com/icons2/1732/PNG/48/iconfinder-securityprotectlockshield46-4021440_113126.png',
            },
            oldValue: 'Anuidade Grátis',
            newValue: 'Limite de R$ 2.000,00',
          },
        ],
      };
    }

    if (payload.number === '3') {
      data = {
        points: 89,
        description: 'Sua pontuacao é alta',
        debt: [],
        credit: [],
        protection: [
          {
            id: 1,
            photo: {
              uri:
                'https://icon-icons.com/icons2/1732/PNG/48/iconfinder-securityprotectlockshield46-4021440_113126.png',
            },
            oldValue: 'Anuidade Grátis',
            newValue: 'Limite de R$ 2.000,00',
          },
        ],
      };
    }

    yield put(getScoreSuccess(data));
  } catch (err) {
    Alert.alert('Falha', 'Ouve um erro tente novamente mais tarde');

    yield put(getScoreError());
  }
}

export default all([takeLatest('@score/GET_SCORE_REQUEST', getUser)]);
