import './NavBar.css';
import logo from '../../../images/trevi.svg';

const NavBar = () => {
  return (
    // <div>
    <nav className="navWrapper">
      <div className="navListContainer">
        <ul className="navList">
          <li>
            <a href="" className="navListLink">
              {/* <p className="navListText logo">Logo</p> */}
              <img src={logo} alt="Logo" className="navListText logo" />
            </a>
          </li>
          <li>
            <a href="" className="navListLink">
              <p className="navListText website">KTSG</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="navListContainer">
        <ul className="navList">
          <li>
            <a href="" className="navListLink">
              <p className="navListText home">Home</p>
            </a>
          </li>
          <li>
            <a href="" className="navListLink">
              <p className="navListText profile">Profile</p>
            </a>
          </li>
          <li>
            <a href="" className="navListLink">
              <p className="navListText services">Services</p>
            </a>
          </li>
          <li>
            <a href="" className="navListLink">
              <p className="navListText contacts">Contacts</p>
            </a>
          </li>
          <li>
            <a href="" className="navListLink">
              <p className="navListText help">Help</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    // </div>
  );
};

export default NavBar;
