import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ThreeDots from 'react-loader-spinner';
import React from 'react';
import styled from 'styled-components';

const Loader = () => (
  <LoaderContainer>
    <LoaderItem>
      <ThreeDots type="ThreeDots" color="black" height={100} width={100} />
    </LoaderItem>
  </LoaderContainer>
);

const LoaderContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const LoaderItem = styled.div`
  margin: auto;
`;

export default Loader;
