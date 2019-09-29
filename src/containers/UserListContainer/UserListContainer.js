import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserList from '../../components/UserList/UserList';
import { users, loading, error } from '../../redux/userList/userListSelectors';
import { getUsers } from '../../redux/userList/userListOperatons';
import Loader from '../../components/Loader/Loader';
import ErrorNotification from '../../components/Error/ErrorNotification';

class UserListContainer extends Component {
  componentDidMount() {
    const { getUserList } = this.props;
    getUserList();
  }

  render() {
    const { userList, loader, errorMessage } = this.props;

    return (
      <div>
        <UserList items={userList} />
        {loader && <Loader />}
        {errorMessage && <ErrorNotification error={errorMessage} />}
      </div>
    );
  }
}

UserListContainer.propTypes = {
  getUserList: PropTypes.func.isRequired,
  loader: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  userList: PropTypes.arrayOf(
    PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      bio: PropTypes.string,
      location: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const mapStateToProps = state => ({
  userList: users(state),
  loader: loading(state),
  errorMessage: error(state),
});

const mapDispatchToProps = {
  getUserList: getUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserListContainer);
