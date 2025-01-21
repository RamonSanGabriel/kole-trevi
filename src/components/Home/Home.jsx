import './Home.css';
import trev from '../../images/trev1.png';
import Categories from '../Categories/Categories';
import CategoryHome from '../CategoryHome/CategoryHome';

const Home = () => {
  return (
    <>
      <main>
        <div className="mainWrapper">
          <div className="heroContainer">
            {/* <h1>Kole Trevi App coming soon...</h1> */}
            <img className="heroImage" src={trev} alt="trevi image" />
          </div>
          <div className="mainContainer">
            {/* <Categories /> */}
            <CategoryHome />

            <div className="mainContent">
              <h2 className="aboutMe">About me</h2>
              <p>
                <strong>Hi, I'm Trevi!</strong> ipsum dolor sit amet consectetur
                adipisicing elit. Beatae, porro nulla, repellendus quod ullam
                aperiam quo aspernatur vel sequi nisi, eum dolorem tempora neque
                repudiandae eos exercitationem quasi dolores. Maiores
                dignissimos reprehenderit placeat voluptate eum fugiat
                blanditiis excepturi, asperiores quas at expedita ab eaque a
                ratione doloremque? Fuga id possimus ad quas, aspernatur maiores
                nam recusandae voluptatum sed. Odit, numquam quaerat in
                voluptatum nihil sit fuga ipsa illum placeat tempore sed quas
                aperiam ad reprehenderit inventore perspiciatis? Eos quam
                inventore distinctio debitis blanditiis fuga? Natus repudiandae,
                quasi aut dicta labore reprehenderit laudantium neque odit.
                Alias reiciendis ipsa enim fugit natus. Odit, dolor. Aperiam
                ullam iure quibusdam commodi dolorem. Porro incidunt,
                dignissimos, iste sapiente architecto placeat enim perferendis
                dolores distinctio illo magnam aliquam dicta dolorum reiciendis
                nihil asperiores vero dolorem aut ad nam nemo! Facere, earum
                saepe! Quod quibusdam temporibus perferendis natus vel, nisi
                numquam laudantium rem doloremque! Harum, in doloribus. Omnis
                ducimus ex ipsum, laborum ipsam nulla hic unde exercitationem
                excepturi nobis ea id accusamus. Doloremque nemo vitae cum ipsum
                harum, aperiam laborum fugit eligendi incidunt. Labore nostrum
                ipsam quam perspiciatis rerum beatae eligendi qui possimus
                numquam cupiditate inventore voluptates reprehenderit, accusamus
                neque maiores sequi amet, commodi reiciendis eum at ratione quas
                rem sit veritatis. Alias reprehenderit numquam molestias ea
                officiis nesciunt. Eligendi, incidunt? Necessitatibus porro
                nesciunt ullam voluptate corporis possimus numquam repudiandae
                esse laborum officiis, non maiores. Provident repellat
                perspiciatis quia nobis debitis dignissimos quod fugiat? Harum
                eveniet a quibusdam, asperiores nam qui laudantium? Illum eius
                eum ipsa cum ipsum, at suscipit vitae sunt laborum ipsam
                consequuntur unde officiis amet ducimus atque corrupti ut ex et
                quae modi magni quidem quia! Non quasi doloribus laboriosam quae
                dignissimos iste! Minus omnis amet quo recusandae fugit
                reprehenderit modi esse impedit, quis quibusdam iure repudiandae
                praesentium, mollitia quaerat, illo iusto cumque maxime.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
