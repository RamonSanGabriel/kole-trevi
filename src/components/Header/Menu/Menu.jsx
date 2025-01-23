import { useRef, useState } from 'react';
// import { TfiMenu } from 'react-icons/tfi';
import './Menu.css';
import { Squash as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickAway } from 'react-use';

import { NavLink } from 'react-router-dom';
import { menuRoutes } from '../../../data/menu-routes';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setIsOpen(false));

  return (
    <>
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
        <button className="menuBtn" onClick={() => setIsOpen((prev) => !prev)}>
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </button>
        <div className="navListContainer">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="menu"
              >
                {/* <button className="menuBtn"> */}
                <ul className="navList">
                  {menuRoutes.map(({ idx, title, path, icon }) => {
                    return (
                      <motion.li
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + idx / 10,
                        }}
                        key={title}
                        className="navListItem"
                      >
                        <NavLink to={path}>
                          <span>
                            {title}
                            {icon}
                          </span>
                        </NavLink>
                      </motion.li>
                    );
                  })}
                </ul>
                {/* </button> */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Menu;
