import { Helmet, HelmetProvider } from 'react-helmet-async';
import Contacts from '../../components/Contacts/Contacts';
import { Link, useLocation, Outlet } from 'react-router-dom';
import BackBtn from '../../components/BackBtn/BackBtn';
import { Suspense } from 'react';

const ContactsPage = () => {
  const location = useLocation();
  const backBtn = location.state?.from ?? '/';

  return (
    <HelmetProvider>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Contacts />

      <Link to={backBtn}>
        <BackBtn />
      </Link>
    </HelmetProvider>
  );
};

export default ContactsPage;
