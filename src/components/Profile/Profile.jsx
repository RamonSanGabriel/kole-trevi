import './Profile.css';
import { categoryLinks } from '../../data/category-links';
import { NavLink } from 'react-router-dom';
import { profileDetails } from '../../data/profile';

const Profile = () => {
  const { title, message, description } = profileDetails;
  return (
    <div className="profileWrapper">
      <div className="profileContainer">
        {/* <div className="categoryDetails"> */}
        <h1>{title}</h1>
        <h6>{message}</h6>

        <p>{description}</p>
        {/* </div> */}
        <hr />
        <form action="">
          <ul>
            {categoryLinks.map(({ id, link, path, icon: Icon }) => (
              <li key={id} className="profileListItem">
                <NavLink to={path}>
                  <button className="profileBtn">
                    <Icon className="profileIcons" />
                    <h3>{link}</h3>
                  </button>
                </NavLink>
              </li>
            ))}
          </ul>
        </form>
        <hr />
      </div>
    </div>
  );
};

export default Profile;
