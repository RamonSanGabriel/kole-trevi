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
    </nav>
  );
};

export default NavBar;
