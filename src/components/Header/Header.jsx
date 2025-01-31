import { Suspense } from 'react';
import './Header.css';
import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';

const Header = () => {
  return (
    <div className="headerWrapper">
      <header className="headerContainer">
        <Suspense>
          <Logo />
          <NavBar />
        </Suspense>
      </header>
    </div>
  );
};

export default Header;
