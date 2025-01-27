import { Suspense } from 'react';
import Categories from '../../components/Categories/Categories';
import Loader from '../../components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BackBtn from '../../components/BackBtn/BackBtn';
import { Link, useLocation } from 'react-router-dom';
import Photos from '../../components/Categories/Photos/Photos';
import Toys from '../../components/Categories/Toys/Toys';
import Events from '../../components/Categories/Events/Events';
import Books from '../../components/Categories/Books/Books';

const CategoryPage = () => {
  const location = useLocation();
  const backBtn = location.state?.from ?? '/';
  console.log(location);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Category</title>
      </Helmet>
      <Suspense fallback={<Loader />}>
        <Categories />
        <Link to={backBtn}>
          <BackBtn />
        </Link>
        {/* <Toys />
        <Photos />
        <Events />
        <Books /> */}
        <Outlet />
      </Suspense>
    </HelmetProvider>
  );
};

export default CategoryPage;
