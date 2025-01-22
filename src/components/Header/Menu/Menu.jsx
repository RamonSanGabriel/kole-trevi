import { useRef, useState } from 'react';
// import { TfiMenu } from 'react-icons/tfi';
import css from './Menu.module.css';
import { Squash as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickAway } from 'react-use';
import { menuRoutes } from '../../../data/menu-routes';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setIsOpen(false));

  return (
    <>
      <button className={css.menuBtn}>
        <Hamburger
          className={css.menuIcon}
          isOpen={isOpen}
          setOpen={setIsOpen}
        />
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
                {menuRoutes.map(({ title, path, icon, link }) => (
                  <motion.li
                    key={title}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                  >
                    <NavLink
                      to={path}
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      {/* {icon} */}
                      {title}
                      {link}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </>
  );
};

export default Menu;
