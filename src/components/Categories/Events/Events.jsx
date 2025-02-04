import css from './Events.module.css';
import { eventDetails, eventList } from '../../../data/events';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect } from 'react';

const Events = () => {
  const { title, description } = eventDetails;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={css.eventWrapper}>
        <div className={css.eventDetails}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={css.eventContainer}>
          <ul className={css.eventList}>
            {eventList.map(({ id, name, description, image, placeholder }) => (
              <li key={id}>
                <h4>
                  {name} &nbsp;
                  {id}
                </h4>
                <div className={css.eventImage}>
                  <div className={css.lazyLoadContainer}>
                    <LazyLoadImage
                      className={css.lazyLoad}
                      key={id}
                      effect="blur"
                      src={image}
                      alt={`event image ${id}`}
                      placeholderSrc={placeholder}
                      // height={200}
                      // width={300}
                    />
                  </div>
                </div>
                <p>
                  {description}&nbsp;
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

export default Events;
