import { Helmet, HelmetProvider } from 'react-helmet-async';
import Profile from '../../components/Profile/Profile';
// import BackBtn from '../../components/BackBtn/BackBtn';
// import { Link } from 'react-router-dom';

const ProfilePage = ({ backBtn }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Profile </title>
      </Helmet>
      <Profile />
    </HelmetProvider>
  );
};

export default ProfilePage;
