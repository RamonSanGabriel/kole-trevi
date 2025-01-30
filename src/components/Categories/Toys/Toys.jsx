import { toyList, toyDetails } from '../../../data/toys';
import css from './Toys.module.css';
import ToyImages from './ToyImages/ToyImages';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Toys = () => {
  const { title, description } = toyDetails;

  return (
    <>
      <div className={css.toyWrapper}>
        <div className={css.toyDetails}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={css.toyContainer}>
          <ul className={css.toyList}>
            {toyList.map(({ id, name, image, description, placeholder }) => (
              <li key={id}>
                <h4>
                  {name}&nbsp; {id}
                </h4>
                <div className={css.toyImage}>
                  <LazyLoadImage
                    key={id}
                    src={image}
                    alt={`toy image ${id}`}
                    effect="blur"
                    // wrapperProps={{
                    //   // If you need to, you can tweak the effect transition using the wrapper style.
                    //   style: { transitionDelay: '1s' },
                    // }}
                    placeholderSrc={placeholder}
                  />
                  {/* <ToyImages /> */}
                  {/* {toyList.map(({ id, image, description }) => {
                    return (
                      <LazyLoadImage
                        key={id}
                        src={image}
                        alt={`toy image ${id}`}
                        effect="blur"
                        wrapperProps={{
                          // If you need to, you can tweak the effect transition using the wrapper style.
                          style: { transitionDelay: '1s' },
                        }}
                        placeholderSrc={'/public/Toy1-small.png'}
                      />
                    );
                  })} */}
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

export default Toys;
