import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Profile from '../../components/Profile/Profile';

const ProfilePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Profile </title>
      </Helmet>
      <Profile />
    </HelmetProvider>
  );
};

export default ProfilePage;
