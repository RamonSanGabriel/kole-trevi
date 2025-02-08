import css from './Videos.module.css';
import style from '../../Categories/CategoryCommon.module.css';
import { videoDetails, videoList } from '../../../data/videos';
import { useEffect, useState } from 'react';
import Player from '../../PlayerProvider/Player/Player';

const Videos = () => {
  // const playerRef = useRef();
  // const play = () => playerRef.current.play();
  // const pause = () => playerRef.current.pause();

  const [play, setPlay] = useState();

  const handleClick = () => {
    setPlay(play);
  };

  const { title, description } = videoDetails;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={style.videoWrapper}>
        <div className={style.videoDetails}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <ul className={style.videoList}>
          {videoList.map(({ id, name, description, url, image }) => (
            <li key={id} onClick={handleClick}>
              <h4>
                {name}&nbsp; {id}
              </h4>
              <div className={css.reactPlayerWrapper}>
                <Player url={url} image={image} id={id} />
              </div>
              <p>
                {description}&nbsp;{id}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Videos;
