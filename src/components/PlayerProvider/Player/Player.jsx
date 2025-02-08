// import ReactPlayer from 'react-player/youtube';
import ReactPlayer from 'react-player/lazy';
import Loader from '../../Loader/Loader';
import css from './Player.module.css';
import style from '../../Categories/CategoryCommon.module.css';
import { useContext, useRef } from 'react';
import { PlayerContext } from '../PlayerProvider';

const Player = ({ url, image, id }) => {
  const { isPlaying, play, pause } = useContext(PlayerContext);
  const videoRef = useRef();
  return (
    <div className={css.reactPlayerContainer}>
      <ReactPlayer
        ref={videoRef}
        controls
        muted={true}
        // playing={isPlaying(id)}
        // onPause={() => pause(id)}
        // onEnded={() => pause(id)}
        // onClickPreview={() => play(id)}
        // light={<img className={css.reactPlayer} src={image} alt="thumbnail" />}
        playIcon={
          <div
            className={css.reactPlayer}
            role="button"
            tabIndex={0}
            style={{ outline: 'none' }}
          >
            <img src={image} alt="thumbnail" />
          </div>
        }
        fallback={<Loader />}
        pip={true}
        playsinline={true}
        stopOnUnmount={false}
        url={url}
        width={300}
        height={400}
      />
    </div>
  );
};

export default Player;
