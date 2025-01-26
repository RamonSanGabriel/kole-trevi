import './Profile.css';
import { profileDetails } from '../../data/profile';

const Profile = () => {
  const { title, message, description } = profileDetails;
  return (
    <div className="profileWrapper">
      <div className="profileContainer">
        <h1>{title}</h1>
        <h6>{message}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Profile;
