import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { useState } from 'react';

import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import { BackTopBtn } from '../BackTopBtn/BackTopBtn';
// import BackBtn from '../BackBtn/BackBtn';

const SharedLayout = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
        {/* <BackBtn show={show} setShow={setShow} /> */}
        <BackTopBtn show={show} setShow={setShow} />
      </Suspense>
      <Footer />
    </div>
  );
};

export default SharedLayout;
