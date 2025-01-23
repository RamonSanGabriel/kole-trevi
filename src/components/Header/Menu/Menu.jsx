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
      <nav className="menuWrapper">
        <button className="menuBtn" onClick={() => setIsOpen((prev) => !prev)}>
          <Hamburger
            className="hamburgerMenu"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </button>
        <div className="menuListContainer">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="menu"
              >
                {/* <button className="menuBtn"> */}
                <ul className="menuList">
                  {menuRoutes.map(({ idx, title, path, icon }) => {
                    return (
                      // <button onClick={() => setIsOpen((prev) => !prev)}>
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
                        className="menuListItem"
                      >
                        <NavLink to={path} onClick={() => setIsOpen(prev)}>
                          <span>
                            {title}
                            {icon}
                          </span>
                        </NavLink>
                      </motion.li>
                      // </button>
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
