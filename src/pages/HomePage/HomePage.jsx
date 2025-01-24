import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from '../../components/Home/Home';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Home />
      <Suspense>
        <Outlet />
      </Suspense>
    </HelmetProvider>
  );
};

export default HomePage;
