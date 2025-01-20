import './Header.css';
import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';

const Header = () => {
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
