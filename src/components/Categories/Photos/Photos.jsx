// import { NavLink } from 'react-router-dom';
import { photoDetails, photoList } from '../../../data/photos.js';
import css from './Photos.module.css';
// import { Suspense } from 'react';
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
      {/* <CategoryHome /> */}
      <div className={css.photoWrapper}>
        <div className={css.photoDetails}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={css.photoContainer}>
          <ul className={css.photoList}>
            {photoList.map(({ id, name, description, image, placeholder }) => (
              // <Suspense>
              <li key={id}>
                <h4>
                  {name} &nbsp;
                  {id}
                </h4>
                <div className={css.photoImage}>
                  <div className={css.lazyLoadContainer}>
                    <LazyLoadImage
                      className={css.lazyLoad}
                      key={id}
                      effect="blur"
                      src={image}
                      alt={`toy image ${id}`}
                      placeholderSrc={placeholder}
                    />
                  </div>
                  {/* <NavLink>
                      <img src={image} alt={description} loading="lazy" />
                    </NavLink> */}
                </div>
                <p>
                  {description} &nbsp;
                  {id}
                </p>
              </li>
              // </Suspense>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Photos;
