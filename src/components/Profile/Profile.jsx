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
            <ul>
              <li>
                <h5>Name:&nbsp;</h5>
                <p> {name}</p>
              </li>
              <li>
                <h5>Length:&nbsp;</h5>
                <p>{length}</p>
              </li>
              <li>
                <h5>DOB:&nbsp;</h5>
                <p>{dob}</p>
              </li>
              <li>
                <h5>Weight:&nbsp;</h5>
                <p> {kg}</p>
              </li>
              <li>
                <h5>Nationality:&nbsp;</h5>
                <p>{nationality}</p>
              </li>
              <li>
                <h5>Time:&nbsp;</h5>
                <p> {time}</p>
              </li>

              <li>
                <h5>Mom:&nbsp;</h5>
                <p>{mother}</p>
              </li>
              <li>
                <h5>Birthplace:&nbsp;</h5>
                <p> {birthplace}</p>
              </li>
              <li>
                <h5>Dad:&nbsp;</h5>
                <p>{father}</p>
              </li>
            </ul>
          </div>
          {/* <div className={css.detailsContainer} >
            <ul>
              //prettier-ignore
              {details.map(
                ({
                  id,
                  name,
                  dob,
                  length,
                  kg,
                  time,
                  nationality,
                  birthplace,
                  mother,
                  father,
                }) => (
                  <li key={id}>
                    <h5>{name}:</h5>
                    <p>{dob}</p>
                    <p>{length}</p>
                    <p>{kg}</p>
                    <p>{time}</p>
                    <p>{nationality}</p>
                    <p>{birthplace}</p>
                    <p>{mother}</p>
                    <p>{father}</p>
                  </li>
                ))}
            </ul>
          </div> */}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Profile;
