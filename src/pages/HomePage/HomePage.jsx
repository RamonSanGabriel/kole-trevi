import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from '../../components/Home/Home';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import CategoryHome from '../../components/CategoryHome/CategoryHome';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Home />
      <Suspense fallback={<Loader />}>
        <CategoryHome />
        <Outlet />
      </Suspense>
    </HelmetProvider>
  );
};

export default HomePage;
