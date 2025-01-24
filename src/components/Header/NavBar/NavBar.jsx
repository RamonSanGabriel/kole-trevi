import './NavBar.css';
import Menu from '../Menu/Menu';
import { useState } from 'react';

import MenuDesk from '../MenuDesk/MenuDesk';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navWrapper">
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      <MenuDesk />
      {/* <Categories /> */}

      {/*  <ul className="menuList">
        {menuRoutes.map(({ idx, title, path, icon }) => {
          return (
            // <button onClick={() => setIsOpen((prev) => !prev)}>
            <li key={title} className="menuListItem">
              <NavLink to={path} onClick={() => setIsOpen(prev)}>
                <span>
                  {title}
                  {icon}
                </span>
              </NavLink>
            </li>
            // </button>
          );
        })}
      </ul> */}
    </nav>
  );
};

export default NavBar;
