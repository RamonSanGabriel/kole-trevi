import './Categories.css';
import { MdToys } from 'react-icons/md';
import { MdOutlineToys } from 'react-icons/md';
import { GiClothes } from 'react-icons/gi';
import { MdOutlineFoodBank } from 'react-icons/md';

import { FcAutomotive } from 'react-icons/fc';
import { FcCompactCamera } from 'react-icons/fc';
import { FcFilmReel } from 'react-icons/fc';
import { FcReading } from 'react-icons/fc';
import { FcSportsMode } from 'react-icons/fc';

const Categories = () => {
  return (
    <div className="categoryWrapper">
      <div className="categoryContainer">
        <hr />
        <form action="">
          <ul>
            <li className="categoryListItem">
              <a href="/">
                <button className="categoryBtn">
                  <FcAutomotive className="categoryIcons" />
                  <h3>Toys</h3>
                </button>
              </a>
            </li>

            <li className="categoryListItem">
              <a href="/">
                <button className="categoryBtn">
                  <FcCompactCamera className="categoryIcons" />
                  <h3>Photos</h3>
                </button>
              </a>
            </li>

            <li className="categoryListItem">
              <a href="">
                <button className="categoryBtn">
                  <FcSportsMode className="categoryIcons" />
                  <h3>Events</h3>
                </button>
              </a>
            </li>

            <li className="categoryListItem">
              <a href="">
                <button className="categoryBtn">
                  <FcReading className="categoryIcons" />
                  <h3>Books</h3>
                </button>
              </a>
            </li>

            <li className="categoryListItem">
              <a href="">
                <button className="categoryBtn">
                  <FcFilmReel className="categoryIcons" />
                  <h3>Movies</h3>
                </button>
              </a>
            </li>
          </ul>
        </form>
        <hr />
      </div>
    </div>
  );
};

export default Categories;
