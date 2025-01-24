import './Header.css';
import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';
import { navLinks } from '../../data/nav-links';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const { id, link, path, icon } = navLinks;
  return (
    <div className="headerWrapper">
      <header className="headerContainer">
        <Logo />
        <NavBar />
      </header>
    </div>
  );
};

export default Header;
