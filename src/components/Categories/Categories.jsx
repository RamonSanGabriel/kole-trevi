import './Categories.css';
import { Link } from 'react-router-dom';

import { FcAutomotive } from 'react-icons/fc';
import { FcCompactCamera } from 'react-icons/fc';
import { FcFilmReel } from 'react-icons/fc';
import { FcReading } from 'react-icons/fc';
import { FcSportsMode } from 'react-icons/fc';

const Categories = () => {
  return (
    <div className="categoryWrapper">
      <div className="categoryContainer">
        {/* <h1>Category Page</h1> */}
        <hr />
        <form action="">
          <ul>
            <li className="categoryListItem">
              <Link to="/category">
                <button className="categoryBtn">
                  <FcAutomotive className="categoryIcons" />
                  <h3>Toys</h3>
                </button>
              </Link>
            </li>

            <li className="categoryListItem">
              <Link to="/category">
                <button className="categoryBtn">
                  <FcCompactCamera className="categoryIcons" />
                  <h3>Photos</h3>
                </button>
              </Link>
            </li>

            <li className="categoryListItem">
              <Link to="/category">
                <button className="categoryBtn">
                  <FcSportsMode className="categoryIcons" />
                  <h3>Events</h3>
                </button>
              </Link>
            </li>

            <li className="categoryListItem">
              <Link to="/category">
                <button className="categoryBtn">
                  <FcReading className="categoryIcons" />
                  <h3>Books</h3>
                </button>
              </Link>
            </li>

            <li className="categoryListItem">
              <Link to="/category">
                <button className="categoryBtn">
                  <FcFilmReel className="categoryIcons" />
                  <h3>Videos</h3>
                </button>
              </Link>
            </li>
          </ul>
        </form>
        <hr />
      </div>
    </div>
  );
};

export default Categories;
