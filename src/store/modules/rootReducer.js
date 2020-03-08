import { combineReducers } from 'redux';

import score from './score/reducer';
import user from './user/reducer';

export default combineReducers({
  user,
  score,
});
