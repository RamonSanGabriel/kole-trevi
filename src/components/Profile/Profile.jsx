import css from './Profile.module.css';
import { profileDetails, details } from '../../data/profile';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Profile = () => {
  //prettier-ignore
  const { id, title, message, hobbies, image, placeholder, favoriteFoodDrink, favoriteColor, favoriteMovie, favoriteBook, favoriteToys, favoriteVideos  } = profileDetails;
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
                <p>
                  <strong>Name:&nbsp;</strong> {name}
                </p>
              </li>
              <li>
                <p>
                  <strong>Length:&nbsp;</strong>
                  {length}
                </p>
              </li>
              <li>
                <p>
                  <strong>DOB:&nbsp;</strong>
                  {dob}
                </p>
              </li>
              <li>
                <p>
                  <strong>Weight:&nbsp;</strong> {kg}
                </p>
              </li>
              <li>
                <p>
                  <strong>Nationality:&nbsp;</strong>
                  {nationality}
                </p>
              </li>
              <li>
                <p>
                  <strong>Time:&nbsp;</strong> {time}
                </p>
              </li>

              <li>
                <p>
                  <strong>Mom:&nbsp;</strong>
                  {mother}
                </p>
              </li>
              <li>
                <p>
                  <strong>Birthplace:&nbsp;</strong> {birthplace}
                </p>
              </li>
              <li>
                <p>
                  <strong>Dad:&nbsp;</strong>
                  {father}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className={css.profileInterests}>
          <ul>
            <li>
              <p>
                <strong>Hobbies:&nbsp;</strong>
                {hobbies}
              </p>
            </li>
            <li>
              <p>
                <strong>Favorite Colors:&nbsp;</strong>
                {favoriteColor}
              </p>
            </li>
            <li>
              <p>
                <strong>Favorite Books:&nbsp;</strong>
                {favoriteBook}
              </p>
            </li>
            <li>
              <p>
                <strong>Favorite Toys:&nbsp;</strong>
                {favoriteToys}
              </p>
            </li>
            <li>
              <p>
                <strong>Videos:&nbsp;</strong>
                {favoriteVideos}
              </p>
            </li>
            <li>
              <p>
                <strong>Movies:&nbsp;</strong>
                {favoriteMovie}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
