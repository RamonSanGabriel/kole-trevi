import './App.css';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
/* import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main'; */
import SharedLayout from './components/SharedLayout/SharedLayout';
import Categories from './components/Categories/Categories';
// import Toys from './components/Home/Categories/Toys/Toys';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage/CategoryPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage/ServicesPage'));
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
          <Route path="category" element={<CategoryPage />}>
            <Route path="books" element={<Categories />} />
            {/* <Route path="toys" element={<Toys />} /> */}
          </Route>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
