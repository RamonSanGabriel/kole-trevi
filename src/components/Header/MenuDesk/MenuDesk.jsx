import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './MenuDesk.module.css';
import { menuRoutes } from '../../../data/menu-routes';

const MenuDesk = () => {
  return (
    <div className={css.menuDeskListContainer}>
      <ul className={css.menuDeskList}>
        {menuRoutes.map(({ id, title, path, icon }) => (
          <li key={id} className={css.menuDeskListItem}>
            <NavLink to={path} onClick={() => setIsOpen(prev)}>
              <span>
                {icon}
                {title}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuDesk;
