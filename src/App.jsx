import './App.css';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
/* import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main'; */
import SharedLayout from './components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/profilePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage/ServicesPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/contactsPage'));
const HelpPage = lazy(() => import('./pages/HelpPage/HelpPage'));

function App() {
  return (
    <>
      {/*  <Header />
      <Main />
      <Footer /> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="help" element={HelpPage} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
