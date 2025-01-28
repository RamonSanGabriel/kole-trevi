import './Books.css';
import { bookDetails, bookList } from '../../../data/book';
import { NavLink } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState } from 'react';

const Books = () => {
  const [open, setOpen] = useState(false);

  const { title, description } = bookDetails;
  return (
    <>
      {/* <CategoryHome /> */}
      <div className="bookWrapper">
        <div className="bookDetails">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="bookContainer">
          <ul className="bookList">
            {bookList.map(({ id, name, price, description, src }) => (
              <li key={id} onClick={() => setOpen(true)}>
                {/* <NavLink to=""></NavLink> */}
                <h4>
                  {name}&nbsp;{id}
                </h4>
                <div className="bookImage">
                  <NavLink to={src} target="_blank">
                    <img src={src} alt={description} />
                  </NavLink>
                </div>
                <p>
                  {description}&nbsp;{id}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Books;
