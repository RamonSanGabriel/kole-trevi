import css from './Categories.module.css';
import { NavLink } from 'react-router-dom';
import {
  categoryLinks,
  categoryDetails,
  categoryOptions,
} from '../../data/category-links';
import { useState } from 'react';

const Categories = () => {
  const [show, setShow] = useState(false);
  const { title, message, description } = categoryDetails;

  return (
    <>
      <div className={css.categoryDetails}>
        <h1>{title}</h1>
        <h6>{message}</h6>
        <p>{description}</p>
      </div>
      <div className={css.categoryOptions}>
        <ul>
          {categoryOptions.map(({ id, cname, cdescription }) => (
            <li key={id}>
              <h4>{cname} : &nbsp;</h4>
              <p>{cdescription}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={css.categoryListContainer}>
        <hr />
        <ul>
          {categoryLinks.map(({ id, link, path, icon: Icon }) => (
            <li key={id}>
              <div className={css.categoryLink}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? css.categoryLinkActive : css.categoryLink
                  }
                  onClick={() => setShow(true)}
                  to={path}
                >
                  <Icon className={css.categoryIcons} />
                  <h3>{link}</h3>
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
        <hr />
      </div>
    </>
  );
};

export default Categories;
