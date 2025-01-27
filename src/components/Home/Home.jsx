import './Home.css';
import trev from '../../images/trev1.png';
import CategoryHome from '../CategoryHome/CategoryHome';
import { homeAbout } from '../../data/home';

const Home = () => {
  const { tittle, description } = homeAbout;
  return (
    <>
      <main>
        <div className="mainWrapper">
          <div className="heroContainer">
            <img className="heroImage" src={trev} alt="trevi image" />
          </div>
          <div className="mainContainer">
            <CategoryHome />

            <div className="mainContent">
              <h2 className="aboutMe">About me</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
