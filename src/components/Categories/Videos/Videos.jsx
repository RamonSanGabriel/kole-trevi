import './Videos.css';
import { videoDetails, videoList } from '../../../data/videos';
import { useEffect } from 'react';
// import ReactPlayer from 'react-player';
// import { useState } from 'react';
import ReactPlayer from 'react-player/lazy';

const Videos = () => {
  // const [start, setStart] = useState(false);
  const { title, description } = videoDetails;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (e) => {
    // const click = e.target.value;
    if (start === onStart) {
      setStart(true);
      console.log(setStart);
    } else {
      setStart(false);
    }
  };

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
                <div className="reactPlayerWrapper">
                  <div className="reactPlayerContainer">
                    <ReactPlayer
                      // onClick={(e) => {
                      //   handleClick(e.target.value);
                      // }}
                      controls
                      loop={true}
                      muted={true}
                      light={
                        <img
                          className="reactPlayer"
                          src={image}
                          alt="thumbnail"
                        />
                      }
                      pip={true}
                      stopOnUnmount={false}
                      url={url}
                      width={300}
                      height={400}
                      playsinline={false}
                      onReady={() => console.log('onReady Callback')}
                      onStart={() => console.log('onStart Callback')}
                    />
                  </div>
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
