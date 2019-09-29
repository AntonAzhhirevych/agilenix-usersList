import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from '../UserListItem/UserListItem';

const UserList = ({ items }) => (
  <ul>
    {items.map(item => (
      <UserListItem key={item.id} item={item} />
    ))}
  </ul>
);

UserList.propTypes = {
  items: PropTypes.arrayOf(
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

export default UserList;
