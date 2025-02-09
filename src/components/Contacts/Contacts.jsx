import css from './Contacts.module.css';
import { contactDetails } from '../../data/contacts';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Socials } from '../Socials/Socials';

const Contacts = () => {
  const { id, title, name, image, placeholder, message, thankYouMsg } =
    contactDetails;
  return (
    <div className={css.profileWrapper}>
      <div className={css.profileContainer}>
        <h1>{title}</h1>
        <h6>{message}</h6>
        <div className={css.profileImage}>
          <div className={css.lazyLoadContainer}>
            <LazyLoadImage
              className={css.lazyLoad}
              key={id}
              src={image}
              // wrapperProps={{
              //   // If you need to, you can tweak the effect transition using the wrapper style.
              //   style: { transitionDelay: '1s' },
              // }}
              effect="blur"
              alt={`profile image ${id}`}
              placeholderSrc={placeholder}
            />
          </div>
          <div className={css.detailsContainer}>
            <p>{thankYouMsg}</p>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
