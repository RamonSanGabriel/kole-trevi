import './CategoryHome.css';
import { categoryLinks } from '../../data/category-links';
import { NavLink } from 'react-router-dom';

const CategoryHome = () => {
  return (
    <div className="categoryHomeWrapper">
      <div className="categoryHomeContainer">
        {/* <h1>Category Page</h1> */}
        <hr />
        <form action="">
          <ul>
            {categoryLinks.map(({ id, path, link, icon: Icon }) => (
              <li key={id} className="categoryHomeListItem">
                <NavLink to={path}>
                  <button className="categoryHomeBtn">
                    <Icon className="categoryHomeIcons" />
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
