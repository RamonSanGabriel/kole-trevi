import { photoDetails, photoList } from '../../../data/photos.js';
// import CategoryHome from '../../CategoryHome/CategoryHome';
import './Photos.css';

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
              <li key={id}>
                <h4>
                  {name} &nbsp;
                  {id}
                </h4>
                <img src={image} alt={description} />
                <p>
                  {description} &nbsp;
                  {id}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Photos;
