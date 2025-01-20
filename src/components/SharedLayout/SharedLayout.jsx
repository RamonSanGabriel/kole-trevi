import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense>
        <Outlet fallback={Loader} />
      </Suspense>
      <Footer />
    </div>
  );
};

export default SharedLayout;
