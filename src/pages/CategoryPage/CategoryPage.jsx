import React, { Suspense } from 'react';
import Categories from '../../components/Categories/Categories';
import Loader from '../../components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BackBtn from '../../components/BackBtn/BackBtn';

const CategoryPage = ({ show, setShow }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Category</title>
      </Helmet>
      <Categories />
      <Suspense fallback={<Loader />}>
        <BackBtn show={show} setShow={setShow} />
        <Outlet />
      </Suspense>
    </HelmetProvider>
  );
};

export default CategoryPage;
