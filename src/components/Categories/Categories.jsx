import './Categories.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { categoryLinks } from '../../data/category-links';

const Categories = () => {
  return (
    <div className="categoryWrapper">
      <div className="categoryContainer">
        <h1>Category Page</h1>
        <hr />
        <form action="">
          <ul>
            {categoryLinks.map(({ id, link, path, icon: Icon }) => (
              <li key={id} className="categoryListItem">
                <NavLink to={path}>
                  <button className="categoryBtn">
                    <Icon className="categoryIcons" />
                    <h3>{link}</h3>
                  </button>
                </NavLink>
              </li>
            ))}
          </ul>
        </form>
        <hr />
      </div>
    </div>
  );
};

export default Categories;
