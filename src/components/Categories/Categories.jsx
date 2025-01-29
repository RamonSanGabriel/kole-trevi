import './Categories.css';
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
      <div className="categoryDetails">
        <h1>{title}</h1>
        <h6>{message}</h6>

        <p>{description}</p>
      </div>
      <div className="categoryOptions">
        <ul>
          {categoryOptions.map(({ id, cname, cdescription }) => (
            <li key={id}>
              <h4>{cname} : &nbsp;</h4>
              <p>{cdescription}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="categoryListContainer">
        <hr className="hr" />
        <form action="">
          <ul>
            {categoryLinks.map(({ id, link, path, icon: Icon }) => (
              <li key={id} className="categoryListItem">
                <NavLink to={path}>
                  <button onClick={() => setShow(true)} className="categoryBtn">
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
