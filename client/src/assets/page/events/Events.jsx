import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./Events.css";
import Loader from "../../components/Loader.jsx";
import Page404 from "../404page/Page404.jsx";
import EventCard from "../../components/eventCard.jsx";

const Events = () => {
  const [events, setEvents] = useState([]);
  const { data, loading, apiMakeCall, error } = useFetch();

  useEffect(() => {
    apiMakeCall("http://localhost:3000/events");
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (error) return;

    if (data) {
      setEvents(data);
    }
  }, [data, error]);

  if (error) {
    return <Page404 />;
  }

  return (
    <div className="events-page">
      <div className="eventsImg">
        <p>FIND YOUR FAVORITE ARTISTS EVENTS IN YOUR COUNTRY</p>
      </div>

      <h1 className="eventsH">Upcoming Events</h1>
      <div className="cards">
        
        {loading && <Loader />}

        {!loading &&
          events.map((event) => (
            <EventCard
              key={event._id}
              id={event._id}
              title={event.title}
              photo={event.url}
              location={event.location}
              date={event.date}
              time={event.time}
              price={event.price}
            />
          ))}
      </div>
    </div>
  );
};

export default Events;
