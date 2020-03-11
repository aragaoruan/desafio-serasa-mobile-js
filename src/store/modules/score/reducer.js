import produce from 'immer';

export const INITIAL_STATE = {
  score: {
    points: 0,
    description: '',
    debt: [],
    credit: [],
    protection: [],
  },
  loading: false,
  error: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@score/GET_SCORE_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@score/GET_SCORE_SUCCESS': {
        draft.loading = false;
        draft.score = action.payload.score;
        draft.error = false;
        break;
      }
      case '@score/GET_SCORE_ERROR': {
        draft.loading = false;
        draft.user = null;
        draft.error = true;
        break;
      }
      default:
    }
  });
}
