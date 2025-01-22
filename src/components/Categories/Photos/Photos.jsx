import { photoDetails, photoList } from '../../../data/photos';
import './Photos.css';

const Photos = () => {
  const { title } = photoDetails;
  return (
    <div className="photoWrapper">
      <h2>{title}</h2>
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
  );
};

export default Photos;
