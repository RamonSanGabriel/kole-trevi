import css from './Profile.module.css';
import { profileDetails } from '../../data/profile';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Profile = () => {
  const { id, title, message, description, image, placeholder } =
    profileDetails;
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
              wrapperProps={{
                // If you need to, you can tweak the effect transition using the wrapper style.
                style: { transitionDelay: '1s' },
              }}
              effect="blur"
              alt={`profile image ${id}`}
              placeholderSrc={placeholder}
            />
          </div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Profile;
