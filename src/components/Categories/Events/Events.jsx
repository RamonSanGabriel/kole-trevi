import './Events.css';
import { eventDetails, eventList } from '../../../data/events';

const Events = () => {
  const { title, description } = eventDetails;
  return (
    <div className="eventWrapper">
      <div className="eventDetails">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="eventContainer">
        <ul className="eventList">
          {eventList.map(({ id, name, description, image }) => (
            <li key={id}>
              <h4>
                {name} &nbsp;
                {id}
              </h4>
              <img src={image} alt={description} />
              <p>
                {description}&nbsp;
                {id}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Events;
