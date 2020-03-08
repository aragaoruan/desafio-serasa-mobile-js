import { all } from 'redux-saga/effects';

import score from '~/store/modules/score/sagas';
import user from '~/store/modules/user/sagas';

export default function* rootSaga() {
  return yield all([user, score]);
}
