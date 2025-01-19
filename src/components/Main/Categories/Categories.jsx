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
        <ul>
          <li>
            <a href="">
              <FcAutomotive className="categoryIcons" />
              {/* <MdToys /> */}
              <h3>Toys</h3>
            </a>
          </li>
          <li>
            <a href="">
              {/* <MdOutlineToys /> */}
              <FcCompactCamera className="categoryIcons" />
              <h3>Photos</h3>
            </a>
          </li>
          <li>
            <a href="">
              {/* <GiClothes /> */}
              <FcSportsMode className="categoryIcons" />
              <h3>Events</h3>
            </a>
          </li>
          <li>
            <a href="">
              {/* <MdOutlineFoodBank /> */}
              <FcReading className="categoryIcons" />
              <h3>Books</h3>
            </a>
          </li>
          <li>
            <a href="">
              <FcFilmReel className="categoryIcons" />
              <h3>Movies</h3>
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Categories;
