import './App.css';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

const Toys = lazy(() => import('./components/Categories/Toys/Toys'));
const Photos = lazy(() => import('./components/Categories/Photos/Photos'));
const Events = lazy(() => import('./components/Categories/Events/Events'));
const Books = lazy(() => import('./components/Categories/Books/Books'));
const Videos = lazy(() => import('./components/Categories/Videos/Videos'));

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage/CategoryPage'));
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
          {/*  <Route path="toys" element={<Toys />} />
          <Route path="photos" element={<Photos />} />
          <Route path="events" element={<Events />} />
          <Route path="books" element={<Books />} />
          <Route path="videos" element={<Videos />} /> */}
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
