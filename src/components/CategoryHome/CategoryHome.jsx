import './CategoryHome.css';
import { categoryLinks } from '../../data/category-links';
import { NavLink } from 'react-router-dom';

const CategoryHome = () => {
  return (
    <div className="categoryWrapper">
      <div className="categoryContainer">
        {/* <h1>Category Page</h1> */}
        <hr />
        <form action="">
          <ul>
            {categoryLinks.map(({ id, link, path, icon: Icon }) => (
              <li key={id} className="categoryListItem">
                <NavLink to="category">
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

export default CategoryHome;
