import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import {
  userReducer,
  loadingReducer,
  errorReducer,
} from './userList/userListReducer';

const rootReducer = combineReducers({
  users: userReducer,
  loading: loadingReducer,
  error: errorReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

export default store;
