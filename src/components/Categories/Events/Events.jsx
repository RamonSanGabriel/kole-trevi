import './Events.css';
import { eventDetails, eventList } from '../../../data/events';
import { NavLink } from 'react-router-dom';

const Events = () => {
  const { title, description } = eventDetails;
  // const { imgName } = eventList;
  return (
    <>
      <div className="eventWrapper">
        <div className="eventDetails">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="eventContainer">
          <ul className="eventList">
            {eventList.map(({ id, name, description, image, href, src }) => (
              <li key={id}>
                <h4>
                  {name} &nbsp;
                  {id}
                </h4>
                <div className="eventImage">
                  <NavLink>
                    <img src={image} alt={description} />
                  </NavLink>
                </div>
                <p>
                  {description}&nbsp;
                  {id}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Events;
