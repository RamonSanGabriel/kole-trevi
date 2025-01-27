import './Events.css';
import { eventDetails, eventList } from '../../../data/events';
import CategoryHome from '../../CategoryHome/CategoryHome';
import eventImage1 from '../../../images/EventImages/EventCooking1.png';

const Events = () => {
  const { title, description } = eventDetails;
  const { imgName } = eventList;
  return (
    <>
      {/* <CategoryHome /> */}
      <div className="eventWrapper">
        <div className="eventDetails">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="eventContainer">
          <ul className="eventList">
            {eventList.map(({ id, name, description, image, imgName }) => (
              <li key={id}>
                <h4>
                  {name} &nbsp;
                  {id}
                </h4>
                <img src={imgName} alt={description} />
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
