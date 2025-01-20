import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Help from '../../components/Help/Help';

const HelpPage = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Help Page</title>
        </Helmet>
        <Help />
      </HelmetProvider>
    </div>
  );
};

export default HelpPage;
