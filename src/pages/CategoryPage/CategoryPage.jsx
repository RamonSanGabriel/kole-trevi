import { Suspense } from 'react';
import Categories from '../../components/Categories/Categories';
import Loader from '../../components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BackBtn from '../../components/BackBtn/BackBtn';
import { Link, useLocation } from 'react-router-dom';

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
      <Suspense fallback={<Loader />}>
        <Link to={backBtn}>
          <BackBtn />
        </Link>
        <Outlet />
      </Suspense>
    </HelmetProvider>
  );
};

export default CategoryPage;
