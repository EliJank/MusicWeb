import { useState } from "react";
import "./CreateNewEvent.css";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const CreateNewEvent = () => {
  const { apiMakeCall } = useFetch();
  const [event, setEvent] = useState({
    title: "",
    genre: "",
    date: "",
    time: "",
    location: "",
    description: "",
    url: "",
    price: "",
    eventType: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("New event:", event);
    try {
      const response = await apiMakeCall(
        `http://localhost:3000/events/create`,
        "POST",
        event,
      );
      navigate("/events/");
    } catch (error) {
      console.log(error);
      alert("Try one more time");
    }
  };

  return (
    <div className="create-event-page">
      <div className="event-form-card">
        <h1>Create New Event</h1>

        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Event title"
            value={event.title}
            onChange={handleChange}
          />

          <input
            name="genre"
            placeholder="Music genre"
            value={event.genre}
            onChange={handleChange}
          />

          <div className="form-row">
            <input
              type="date"
              name="date"
              value={event.date}
              onChange={handleChange}
            />

            <input
              type="time"
              name="time"
              value={event.time}
              onChange={handleChange}
            />
          </div>
          <input
            name="eventType"
            placeholder="Event Type"
            value={event.eventType}
            onChange={handleChange}
          />

          <input
            name="location"
            placeholder="Venue / Location"
            value={event.location}
            onChange={handleChange}
          />

          <input
            name="url"
            placeholder="Event image URL"
            value={event.url}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Ticket price"
            value={event.price}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Describe your event..."
            value={event.description}
            onChange={handleChange}
          />
         
            <button onClick={() => handleSubmit}>Create Event</button>
       
        </form>
      </div>
    </div>
  );
};

export default CreateNewEvent;
