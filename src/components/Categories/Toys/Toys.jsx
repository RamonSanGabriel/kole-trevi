import React from 'react';
import { toyList, toyDetails } from '../../../data/toys';
import './Toys.css';

const Toys = () => {
  const { title, description } = toyDetails;
  return (
    <>
      <div className="toyWrapper">
        <div className="toyDetails">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="toyContainer">
          <ul className="toyList">
            {toyList.map(({ id, name, description, image }) => (
              <li key={id}>
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
