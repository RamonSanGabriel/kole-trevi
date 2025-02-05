import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from '../../components/Home/Home';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
// import CategoryHome from '../../components/CategoryHome/CategoryHome';
import Categories from '../../components/Categories/Categories';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Home />
      {/* <CategoryHome /> */}
      <Categories />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </HelmetProvider>
  );
};

export default HomePage;
