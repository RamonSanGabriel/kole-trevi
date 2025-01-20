import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Main from '../../components/Main/Main';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Main />
    </HelmetProvider>
  );
};

export default HomePage;
