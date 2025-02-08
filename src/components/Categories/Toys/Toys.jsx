import { toyList, toyDetails } from '../../../data/toys';
import css from './Toys.module.css';
import style from '../../Categories/CategoryCommon.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect } from 'react';

const Toys = () => {
  const { title, description } = toyDetails;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={style.toyWrapper}>
        <div className={style.toyDetails}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {/* <div className={css.toyContainer}> */}
        <ul className={style.toyList}>
          {toyList.map(({ id, name, image, description, placeholder }) => (
            <li key={id}>
              <h4>
                {name}&nbsp; {id}
              </h4>
              <div className={css.toyImage}>
                <div className={style.lazyLoadContainer}>
                  <LazyLoadImage
                    className={style.lazyLoad}
                    src={image}
                    effect="blur"
                    alt={`toy image ${id}`}
                    placeholderSrc={placeholder}
                  />
                </div>
              </div>
              <p>
                {description}&nbsp;{id}
              </p>
            </li>
          ))}
        </ul>
        {/* </div> */}
      </div>
    </>
  );
};

export default Toys;
