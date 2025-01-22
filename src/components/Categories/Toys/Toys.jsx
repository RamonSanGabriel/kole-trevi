import React from 'react';
import { toyLists, toyDetails } from '../../../data/toys';
import { NavLink } from 'react-router-dom';
import './Toys.css';

const Toys = () => {
  const { title } = toyDetails;
  return (
    <div className="toyWrapper">
      <h2>{title}</h2>
      <div className="toyContainer">
        <ul className="toyList">
          {toyLists.map(({ id, name, price, description, image }) => (
            <li key={id}>
              {/* <NavLink to=""></NavLink> */}
              <h4>{name}</h4>
              <img src={image} alt={name} />
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Toys;
