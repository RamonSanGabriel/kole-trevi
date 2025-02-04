import css from './Profile.module.css';
import { profileDetails, details } from '../../data/profile';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Profile = () => {
  //prettier-ignore
  const { id, title, message, description, image, placeholder } = profileDetails;
  //prettier-ignore
  const {name, dob, length, kg, time, nationality, birthplace, mother, father} = details;
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
            <div>
              <strong>Name:&nbsp;</strong>
              <p> {name}</p>
            </div>
            <div>
              <strong>DOB:&nbsp;</strong>
              <p>{dob}</p>
            </div>
            <div>
              <strong>Length:&nbsp;</strong>
              <p>{length}</p>
            </div>
            <div>
              <strong>Weight:&nbsp;</strong>
              <p> {kg}</p>
            </div>
            <div>
              <strong>Time:&nbsp;</strong>
              <p> {time}</p>
            </div>
            <div>
              <strong>Nationality:&nbsp;</strong>
              <p>{nationality}</p>
            </div>
            <div>
              <strong>Birthplace:&nbsp;</strong>
              <p> {birthplace}</p>
            </div>
            <div>
              <strong>Mom:&nbsp;</strong>
              <p>{mother}</p>

              <strong>Dad:&nbsp;</strong>
              <p>{father}</p>
            </div>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Profile;
