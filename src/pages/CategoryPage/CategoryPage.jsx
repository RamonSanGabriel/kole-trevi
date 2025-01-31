import { Suspense } from 'react';
import Categories from '../../components/Categories/Categories';
import Loader from '../../components/Loader/Loader';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BackBtn from '../../components/BackBtn/BackBtn';
import { Link, useLocation, Outlet } from 'react-router-dom';

const CategoryPage = () => {
  const location = useLocation();
  const backBtn = location.state?.from ?? '/';
  console.log(location);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Category</title>
      </Helmet>
      <Categories />

      <Link to={backBtn}>
        <BackBtn />
      </Link>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </HelmetProvider>
  );
};

export default CategoryPage;
