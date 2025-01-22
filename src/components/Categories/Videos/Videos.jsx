import './Videos.css';
import { videoDetails, videoList } from '../../../data/videos';

const Videos = () => {
  const { title, description } = videoDetails;
  return (
    <div className="videoWrapper">
      <div className="videoDetails">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="videoContainer">
        <ul className="videoList">
          {videoList.map(({ id, name, price, description, image }) => (
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
  );
};

export default Videos;
