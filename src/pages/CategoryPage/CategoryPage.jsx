import React, { Suspense } from 'react';
import Categories from '../../components/Categories/Categories';
import Loader from '../../components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const CategoryPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Category</title>
      </Helmet>
      <Categories />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </HelmetProvider>
  );
};

export default CategoryPage;
