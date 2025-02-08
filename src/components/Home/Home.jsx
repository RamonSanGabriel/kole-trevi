import './Home.css';
import trev from '../../images/trev1.png';
import { useEffect } from 'react';
import { homeAbout } from '../../data/home';

const Home = () => {
  const { paragraph1, paragraph2, paragraph3, greeting } = homeAbout;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main>
        <div className="mainWrapper">
          <div className="heroContainer">
            <img className="heroImage" src={trev} alt="trevi image" />
          </div>

          <div className="mainContent">
            <h2 className="aboutMe">About me</h2>
            <p>
              <strong>{greeting}&nbsp;</strong>
              {paragraph1}
            </p>
            <p>{paragraph2}</p>
            <p>{paragraph3}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
