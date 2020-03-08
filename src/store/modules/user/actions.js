export function getUserRequest() {
  return {
    type: '@user/GET_USER_REQUEST',
    payload: {},
  };
}

export function getUserSuccess(user) {
  return {
    type: '@user/GET_USER_SUCCESS',
    payload: { user },
  };
}

export function getUserError() {
  return {
    type: '@user/GET_USER_ERROR',
    payload: {},
  };
}
