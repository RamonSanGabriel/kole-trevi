import './NavBar.css';
import { navLinks } from '../../../data/nav-links';
import { NavLink } from 'react-router-dom';
// import Menu from '../Menu/Menu';
import { Squash as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickAway } from 'react-use';
// import { menuRoutes } from '../../../data/menu-routes';
import { useRef, useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setIsOpen(false));
  return (
    <nav className="navWrapper">
      {/* <TfiMenu className="menuIcon" /> */}
      {/*   <button className="menuBtn">
        <Hamburger className="menuIcon" isOpen={isOpen} setOpen={setIsOpen} />
        <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={css.menu}
          >
            <ul>
              {navLinks.map(({ id, path, icon, link }) => {
                console.log(navLinks);
                <motion.li
                  key={id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + idx / 10,
                  }}
                >
                  <NavLink to={path} onClick={() => setIsOpen((prev) => !prev)}>
                    {icon}
                    {title}
                    {link}
                  </NavLink>
                </motion.li>;
              })}
            </ul>
          </motion.div>
        )}
        </AnimatePresence>
      </button> */}
      <button className="menuBtn">
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </button>
      <div className="navListContainer">
        {/* <button className="menuBtn"> */}
        <ul className="navList">
          {navLinks.map(({ id, link, path }) => (
            <li className="navListItem" key={id}>
              <NavLink to={path} onClick={() => setIsOpen((prev) => !prev)}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* </button> */}
      </div>
    </nav>
  );
};

export default NavBar;
