import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import { BackTopBtn } from '../BackTopBtn/BackTopBtn';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
        <BackTopBtn />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
