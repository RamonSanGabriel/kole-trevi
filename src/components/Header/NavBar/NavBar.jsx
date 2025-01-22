import './NavBar.css';
import { navLinks } from '../../../data/nav-links';
import { NavLink } from 'react-router-dom';
import { TfiMenu } from 'react-icons/tfi';

const NavBar = () => {
  return (
    <nav className="navWrapper">
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
    </nav>
  );
};

export default NavBar;
