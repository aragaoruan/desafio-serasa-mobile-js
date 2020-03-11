import * as Score from '~/store/modules/score/actions';
import reducer, { INITIAL_STATE } from '~/store/modules/score/reducer';

describe('Score reducer', () => {
  it('@user/GET_USER_REQUEST', () => {
    const state = reducer(INITIAL_STATE, Score.getScoreRequest(20));

    expect(state).toStrictEqual({
      score: {
        points: 0,
        description: '',
        debt: [],
        credit: [],
        protection: [],
      },
      loading: true,
      error: false,
    });
  });

  it('@score/GET_SCORE_SUCCESS', () => {
    const state = reducer(INITIAL_STATE, Score.getScoreSuccess(20));

    expect(state).toStrictEqual({
      score: 20,
      loading: false,
      error: false,
    });
  });

  it('@score/GET_SCORE_ERROR', () => {
    const state = reducer(INITIAL_STATE, Score.getScoreError());

    expect(state).toStrictEqual({
      error: true,
      loading: false,
      score: {
        credit: [],
        debt: [],
        description: '',
        points: 0,
        protection: [],
      },
      user: null,
    });
  });
});
