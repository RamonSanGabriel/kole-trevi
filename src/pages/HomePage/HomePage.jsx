import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from '../../components/Home/Home';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Home />
    </HelmetProvider>
  );
};

export default HomePage;
