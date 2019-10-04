import axios from 'axios';
import * as action from './userListAction';

/* eslint-disable-next-line */
export const getUsers = () => dispatch => {
  dispatch(action.getUserStart());
  axios
    .get('https://api.github.com/search/users?q=location:kyiv&per_page=10')
    .then(users => users.data.items.map(user => user.login))
    .then(loginUsers =>
      Promise.all(
        loginUsers.map(login =>
          axios.get(`https://api.github.com/users/${login}`),
        ),
      ),
    )
    .then(result => result.map(r => r.data))
    .then(user => dispatch(action.getUserSuccess(user)))
    .catch(error => dispatch(action.getUserError(error)));
};
