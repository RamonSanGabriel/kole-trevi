import './Videos.css';
import { videoDetails, videoList } from '../../../data/videos';
import { useEffect } from 'react';

const Videos = () => {
  const { title, description } = videoDetails;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <CategoryHome /> */}
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
                {/* add NavLink */}
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

export default Videos;
