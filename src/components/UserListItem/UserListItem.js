import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LocationOn } from 'styled-icons/material';

const UserListItem = ({ item }) => (
  <Item>
    <ItemImg src={item.avatar_url} />
    <ItemText>
      <GeneralInfo>
        <Text>
          <Link href={item.html_url} target="_blank">
            {item.login}
          </Link>
        </Text>
        <Text>{item.name}</Text>
      </GeneralInfo>
      <Text>{item.bio}</Text>
      <Location>
        <LocationIcon />
        {item.location}
      </Location>
    </ItemText>
  </Item>
);

UserListItem.propTypes = {
  item: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

const LocationIcon = styled(LocationOn)`
  color: #4d4d4d;
  width: 15px;
  height: 15px;
  margin-left: -3px;
`;

const GeneralInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  color: #4d4d4d;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 600px;
  height: 90px;
  list-style: none;
  border-bottom: 1px solid silver;
  margin-bottom: 10px;
`;

const ItemImg = styled.img`
  width: 50px;
  height: 50px;
`;

const Text = styled.p`
  padding: 0;
  margin: 0;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 5px;
`;

const Link = styled.a`
  text-decoration: none;
  margin-right: 10px;
`;

const Location = styled.span`
  color: #4d4d4d;
  font-size: 12px;
`;

export default UserListItem;
