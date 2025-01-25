import './App.css';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
/* import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main'; */
import SharedLayout from './components/SharedLayout/SharedLayout';
// import Categories from './components/Categories/Categories';
// import ToysPage from './pages/CategoryPage/ToysPage/ToysPage';
import Toys from './components/Categories/Toys/Toys';
import Photos from './components/Categories/Photos/Photos';
import Events from './components/Categories/Events/Events';
import Books from './components/Categories/Books/Books';
import Videos from './components/Categories/Videos/Videos';
import CategoryPage from './pages/CategoryPage/CategoryPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const CategoryPage = lazy(() => import('./pages/CategoryPage/CategoryPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage/ServicesPage'));
const HelpPage = lazy(() => import('./pages/HelpPage/HelpPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="toys" element={<Toys />} />
          <Route path="photos" element={<Photos />} />
          <Route path="events" element={<Events />} />
          <Route path="books" element={<Books />} />
          <Route path="videos" element={<Videos />} />
          <Route path="category" element={<CategoryPage />}>
            <Route path="toys" element={<Toys />} />
            <Route path="photos" element={<Photos />} />
            <Route path="events" element={<Events />} />
            <Route path="books" element={<Books />} />
            <Route path="videos" element={<Videos />} />
          </Route>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
