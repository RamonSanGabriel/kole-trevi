import React from 'react';
import { toyList, toyDetails } from '../../../data/toys';
// import { NavLink } from 'react-router-dom';
import './Toys.css';
import CategoryHome from '../../CategoryHome/CategoryHome';

const Toys = () => {
  const { title, description } = toyDetails;
  return (
    <>
      {/* <CategoryHome /> */}
      <div className="toyWrapper">
        <div className="toyDetails">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="toyContainer">
          <ul className="toyList">
            {toyList.map(({ id, name, price, description, image }) => (
              <li key={id}>
                {/* <NavLink to=""></NavLink> */}
                <h4>
                  {name}&nbsp; {id}
                </h4>
                <img src={image} alt={description} />
                <p>
                  {description}&nbsp;{id}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Toys;
