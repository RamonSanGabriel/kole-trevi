import './Books.css';
import { bookDetails, bookList } from '../../../data/book';
import CategoryHome from '../../CategoryHome/CategoryHome';

const Books = () => {
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
            {bookList.map(({ id, name, price, description, image }) => (
              <li key={id}>
                {/* <NavLink to=""></NavLink> */}
                <h4>
                  {name}&nbsp; {id}
                </h4>
                <img src={image} alt={description} />
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
