import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorNotification = ({ error }) => (
  <ErrorContainer>
    <Text>Oh, something went wrong: {error}</Text>
  </ErrorContainer>
);

ErrorNotification.propTypes = {
  error: PropTypes.string.isRequired,
};

const ErrorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Text = styled.h1`
  margin: auto;
  color: #bd0000;
`;

export default ErrorNotification;
