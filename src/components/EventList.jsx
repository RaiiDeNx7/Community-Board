import Event from "./Event";

const EventList = ({ events }) => {
  return (
    <div className="container">
      {events.map((event, index) => (
        <Event
          key={index}
          title={event.title}
          type={event.type}
          image={event.image}
          link={event.link}
        />
      ))}
    </div>
  );
};

export default EventList;

