import React from 'react';
import Toys from '../../../components/Categories/Toys/Toys';

const ToysPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Toys</title>
      </Helmet>
      <h1>Toys Page</h1>
      <Toys />
    </HelmetProvider>
  );
};

export default ToysPage;
