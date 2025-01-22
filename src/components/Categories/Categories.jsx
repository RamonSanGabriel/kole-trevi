import './Categories.css';
import { NavLink } from 'react-router-dom';
import { categoryLinks, categoryDetails } from '../../data/category-links';

const Categories = () => {
  const { title, message, description } = categoryDetails;
  return (
    <>
      {/* <div className="categoryContainer"> */}
      <div className="categoryDetails">
        <h1>{title}</h1>
        <h6>{message}</h6>
        <p>{description}</p>
      </div>
      <div className="categoryListContainer">
        <hr className="hr" />
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
        <hr className="hr" />
      </div>
    </>
  );
};

export default Categories;
