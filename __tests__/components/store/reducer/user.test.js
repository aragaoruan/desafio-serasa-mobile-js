import * as Score from '~/store/modules/user/actions';
import reducer, { INITIAL_STATE } from '~/store/modules/user/reducer';

describe('Score reducer', () => {
  it('@user/GET_USER_REQUEST', () => {
    const state = reducer(INITIAL_STATE, Score.getUserRequest());

    expect(state).toStrictEqual({ error: false, loading: true, user: null });
  });

  it('@user/GET_USER_SUCCESS', () => {
    const state = reducer(
      INITIAL_STATE,
      Score.getUserSuccess({
        id: 1,
        name: 'Maurivan Luiz',
        photo: {
          uri: `http://api.adorable.io/avatars/90/124@adorable.png`,
        },
      })
    );

    expect(state).toStrictEqual({
      error: false,
      loading: false,
      user: {
        id: 1,
        name: 'Maurivan Luiz',
        photo: { uri: 'http://api.adorable.io/avatars/90/124@adorable.png' },
      },
    });
  });

  it('@user/GET_USER_ERROR', () => {
    const state = reducer(INITIAL_STATE, Score.getUserError());

    expect(state).toStrictEqual({ error: true, loading: false, user: null });
  });
});
