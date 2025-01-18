import './Header.css';
import NavBar from './NavBar/NavBar';

const Header = () => {
  return (
    <div className="headerWrapper">
      <header className="headerContainer">
        <NavBar />
      </header>
    </div>
  );
};

export default Header;
