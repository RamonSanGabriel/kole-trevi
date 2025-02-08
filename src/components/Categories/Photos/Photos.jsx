import { photoDetails, photoList } from '../../../data/photos.js';
import style from '../../Categories/CategoryCommon.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect } from 'react';

const Photos = () => {
  const { title, description } = photoDetails;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={style.photoWrapper}>
        <div className={style.photoDetails}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={style.photoContainer}>
          <ul className={style.photoList}>
            {photoList.map(({ id, name, description, image, placeholder }) => (
              <li key={id}>
                <h4>
                  {name} &nbsp;
                  {id}
                </h4>
                <div className={style.photoImage}>
                  <div className={style.lazyLoadContainer}>
                    <LazyLoadImage
                      className={style.lazyLoad}
                      key={id}
                      effect="blur"
                      src={image}
                      alt={`photo image ${id}`}
                      placeholderSrc={placeholder}
                    />
                  </div>
                </div>
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
