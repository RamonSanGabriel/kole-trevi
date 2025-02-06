import './Videos.css';
import { videoDetails, videoList } from '../../../data/videos';
import { useEffect } from 'react';
import ReactPlayer from 'react-player';

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
            {videoList.map(({ id, name, price, description, url, image }) => (
              <li key={id}>
                {/* <NavLink to=""></NavLink> */}
                <h4>
                  {name}&nbsp; {id}
                </h4>
                {/* add NavLink */}
                {/* <img src={url} alt={description} /> */}
                <div className="reactPlayer">
                  <ReactPlayer
                    controls
                    loop="true"
                    muted="true"
                    light={<img src={image} alt="thumbnail" />}
                    pip={url}
                    stopOnUnmount={false}
                    url={url}
                    width={300}
                    height={400}
                    // config={{
                    //   youtube: {
                    //     playerVars: { showinfo: 1 },
                    //   },
                    //   facebook: {
                    //     appId: '12345',
                    //   },
                    // }}
                  />
                </div>
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
