import './NavBar.css';
import { navLinks } from '../../../data/nav-links';
import { NavLink } from 'react-router-dom';
import { TfiMenu } from 'react-icons/tfi';

const NavBar = () => {
  return (
    /*  <nav className="navWrapper">
      <div className="navListContainer">
        <ul className="navList">
          <li>
            <a href="" className="navListLink">

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
    </nav> */

    <nav className="navWrapper">
      {/* <div className="navListContainer"> */}
      <TfiMenu className="menuIcon" />
      <div className="navListContainer">
        <ul className="navList">
          {navLinks.map(({ id, link, path }) => (
            <li className="navListItem" key={id}>
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
