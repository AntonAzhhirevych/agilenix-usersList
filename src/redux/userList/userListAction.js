import types from './userListTypes';

export const getUserStart = () => ({
  type: types.GET_USERS_START,
});

export const getUserSuccess = users => ({
  type: types.GET_USERS_SUCCESS,
  payload: users,
});

export const getUserError = error => ({
  type: types.GET_USERS_ERROR,
  payload: error,
});
