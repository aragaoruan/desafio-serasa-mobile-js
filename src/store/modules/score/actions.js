export function getScoreRequest(number) {
  return {
    type: '@score/GET_SCORE_REQUEST',
    payload: { number },
  };
}

export function getScoreSuccess(score) {
  return {
    type: '@score/GET_SCORE_SUCCESS',
    payload: { score },
  };
}

export function getScoreError() {
  return {
    type: '@score/GET_SCORE_ERROR',
    payload: {},
  };
}
