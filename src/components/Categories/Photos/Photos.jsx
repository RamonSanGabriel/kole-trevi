import { NavLink } from 'react-router-dom';
import { photoDetails, photoList } from '../../../data/photos.js';
import './Photos.css';
import { Suspense } from 'react';

const Photos = () => {
  const { title, description } = photoDetails;
  return (
    <>
      {/* <CategoryHome /> */}
      <div className="photoWrapper">
        <div className="photoDetails">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="photoContainer">
          <ul className="photoList">
            {photoList.map(({ id, name, description, image }) => (
              <Suspense>
                <li key={id}>
                  <h4>
                    {name} &nbsp;
                    {id}
                  </h4>
                  <div className="photoImage">
                    <NavLink>
                      <img src={image} alt={description} />
                    </NavLink>
                  </div>
                  <p>
                    {description} &nbsp;
                    {id}
                  </p>
                </li>
              </Suspense>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Photos;
