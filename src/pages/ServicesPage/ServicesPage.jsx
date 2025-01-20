import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Services from '../../components/Services/Services';

const ServicesPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <Services />
    </HelmetProvider>
  );
};

export default ServicesPage;
