import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./Events.css";
import Loader from "../../components/Loader.jsx";
import Page404 from "../Page404.jsx";
import EventCard from "../../components/eventCard.jsx";

const Events = () => {
  const [events, setEvents] = useState([]);
  const { data, loading, apiMakeCall, error } = useFetch();

  useEffect(() => {
    apiMakeCall("http://localhost:7000/events");
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
    <>
      <div className="eventsImg">
        <p>FIND YOUR FAVORITE ARTISTS EVENTS IN YOUR COUNTRY</p>
      </div>

      <h1>Upcoming Events</h1>

      {loading && <Loader />}

      {!loading &&
        events.map((event) => (
          <EventCard
            key={event._id}
            title={event.title}
            photo={event.url}
            location={event.location}
            date={event.date}
            time={event.time}
          />
        ))}
    </>
  );
};

export default Events;