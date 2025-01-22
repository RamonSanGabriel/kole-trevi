import './Categories.css';
import { NavLink } from 'react-router-dom';
import { categoryLinks } from '../../data/category-links';

const Categories = () => {
  return (
    <div className="categoryWrapper">
      <div className="categoryContainer">
        {/* <div className="categoryDetails"> */}
        <h1>Category Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          nostrum saepe minus porro vitae voluptatibus nisi facilis in culpa
          quisquam? Atque consequuntur quasi pariatur vero temporibus.
          Asperiores eveniet dicta quasi. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Tenetur deserunt veritatis commodi
          recusandae quasi pariatur omnis totam optio cumque facere. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi
          reprehenderit, qui tempora ex nesciunt blanditiis maxime a laborum
          rem.
        </p>
        {/* </div> */}
        <hr />
        <form action="">
          <ul>
            {categoryLinks.map(({ id, link, path, icon: Icon }) => (
              <li key={id} className="categoryListItem">
                <NavLink to={path}>
                  <button className="categoryBtn">
                    <Icon className="categoryIcons" />
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

export default Categories;
