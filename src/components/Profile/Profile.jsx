import css from './Profile.module.css';
import { profileDetails, details } from '../../data/profile';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Profile = () => {
  const { id, title, message, description, image, placeholder } =
    profileDetails;

  const {
    name,
    dob,
    length,
    kg,
    time,
    nationality,
    birthplace,
    mother,
    father,
  } = details;
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
          <div className={css.detailsContainer}>
            <p>
              <strong>Name:&nbsp;</strong>
              {name}
            </p>
            <p>
              <strong>DOB:&nbsp;</strong>
              {dob}
            </p>
            <p>
              <strong>Length:&nbsp;</strong>
              {length}
            </p>
            <p>
              <strong>Weight:&nbsp;</strong>
              {kg}
            </p>
            <p>
              <strong>Time:&nbsp;</strong>
              {time}
            </p>
            <p>
              <strong>Nationality:&nbsp;</strong>
              {nationality}
            </p>
            <p>
              <strong>Birthplace:&nbsp;</strong>
              {birthplace}
            </p>
            <p>
              <strong>Mom:&nbsp;</strong>
              {mother}
            </p>
            <p>
              <strong>Dad:&nbsp;</strong>
              {father}
            </p>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Profile;
