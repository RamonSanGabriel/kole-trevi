import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { BackTopBtn } from '../BackTopBtn/BackTopBtn';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
        <BackTopBtn />
      </Suspense>
      <Footer />
    </div>
  );
};

export default SharedLayout;
