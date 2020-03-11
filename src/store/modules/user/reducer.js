import produce from 'immer';

export const INITIAL_STATE = {
  user: null,
  loading: false,
  error: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/GET_USER_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@user/GET_USER_SUCCESS': {
        draft.loading = false;
        draft.user = action.payload.user;
        draft.error = false;
        break;
      }
      case '@user/GET_USER_ERROR': {
        draft.loading = false;
        draft.user = null;
        draft.error = true;
        break;
      }
      default:
    }
  });
}
