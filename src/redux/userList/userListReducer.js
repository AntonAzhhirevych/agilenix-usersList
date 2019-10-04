import types from './userListTypes';

export const userReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.GET_USERS_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case types.GET_USERS_START:
      return true;
    case types.GET_USERS_SUCCESS:
    case types.GET_USERS_ERROR:
      return false;

    default:
      return state;
  }
};

export const errorReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.GET_USERS_ERROR:
      return payload.message;

    default:
      return state;
  }
};
