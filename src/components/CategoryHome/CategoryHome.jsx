import css from './CategoryHome.module.css';
import { categoryHomeLinks } from '../../data/category-links';
import { NavLink } from 'react-router-dom';

const CategoryHome = () => {
  return (
    <div className={css.categoryHomeWrapper}>
      <hr />
      <ul>
        {categoryHomeLinks.map(({ id, path, link, icon: Icon }) => (
          <li key={id} className={css.categoryHomeListItem}>
            <div className={css.categoryHomeLink}>
              <NavLink to={path} className={css.categoryHomeLink}>
                <Icon className={css.categoryHomeIcons} />
                <h3>{link}</h3>
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default CategoryHome;
