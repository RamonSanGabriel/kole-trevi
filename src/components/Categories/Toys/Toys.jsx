import { toyList, toyDetails } from '../../../data/toys';
import './Toys.css';
import { NavLink } from 'react-router-dom';

const Toys = () => {
  const { title, description } = toyDetails;
  // const imageHandler = new Lightbox();
  return (
    <>
      <div className="toyWrapper">
        <div className="toyDetails">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="toyContainer">
          <ul className="toyList">
            {toyList.map(({ id, name, description, image, href }) => (
              <li key={id}>
                <h4>
                  {name}&nbsp; {id}
                </h4>
                <div className="toyImage">
                  <NavLink to={href}>
                    {/* <Lightbox> */}
                    <img src={image} alt={description} />
                    {/* </Lightbox> */}
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

export default Toys;
