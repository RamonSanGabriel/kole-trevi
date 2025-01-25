import React, { Suspense } from 'react';
import Categories from '../../components/Categories/Categories';
import Loader from '../../components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavBar from '../../components/Header/NavBar/NavBar';
import MenuDesk from '../../components/Header/MenuDesk/MenuDesk';
import CategoryHome from '../../components/CategoryHome/CategoryHome';

const CategoryPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Category</title>
      </Helmet>
      <Categories />
      {/* <CategoryHome /> */}
      {/* <NavBar /> */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </HelmetProvider>
  );
};

export default CategoryPage;
