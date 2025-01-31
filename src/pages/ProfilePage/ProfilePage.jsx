import { Helmet, HelmetProvider } from 'react-helmet-async';
import Profile from '../../components/Profile/Profile';
import BackBtn from '../../components/BackBtn/BackBtn';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../../components/Loader/Loader';

const ProfilePage = () => {
  const location = useLocation();
  const backBtn = location.state?.from ?? '/';
  return (
    <HelmetProvider>
      <Helmet>
        <title>Profile </title>
      </Helmet>
      <Profile />
      <Link to={backBtn}>
        <BackBtn />
      </Link>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </HelmetProvider>
  );
};

export default ProfilePage;
