import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Page404 from "../404page/Page404";
import Loader from "../../components/Loader";
import "./Event.css";
import { useNavigate } from "react-router-dom";

const Event = () => {
  const [oneEvent, setOneEvent] = useState(null);
  const { data, loading, apiMakeCall, error } = useFetch();
  const [ticket, setTicket] = useState(1);

  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    apiMakeCall(`http://localhost:3000/events/${id}`);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (error) return;

    if (data) {
      setOneEvent(data);
    }
  }, [data, error]);

  if (error) {
    return <Page404 />;
  }

  const deleteEvent = async (id) => {
    const response = await apiMakeCall(
      `http://localhost:3000/events/${id}`,
      "DELETE",
    );
    navigate("/events");
  };

  const handleAddToCart = async () => {
    console.log("token:", token);
    if (!token) {
      alert("Please log in to add items to your cart.");
      navigate("/login");
      return;
    }

    const response = await apiMakeCall("http://localhost:3000/cart/", "POST", {
      itemId: oneEvent._id,
      title: oneEvent.title,
      description: oneEvent.description,
      url: oneEvent.url,
      price: oneEvent.price,
      quantity: Number(ticket),
    });

    console.log(response);

    navigate("/cart/");
    window.location.reload();
  };
  return (
    <>
      {loading && <Loader />}

      {!loading && oneEvent && (
        <div className="event-page">
          <div className="event-hero">
            <img src={oneEvent.url} className="event-image" />
          </div>
          <div className="event-details">
            <h1>{oneEvent.title}</h1>
            <div className="event-info">
              <p>
                <strong>Genre:</strong> {oneEvent.genre}
              </p>
              <p>
                <strong>Date:</strong> {oneEvent.date}
              </p>

              <p>
                <strong>Time:</strong> {oneEvent.time}
              </p>

              <p>
                <strong>Location:</strong> {oneEvent.location}
              </p>
              <p>
                <strong>Event Type:</strong> {oneEvent?.eventType}
              </p>
              <p className="event-price">
                <strong>Price:</strong> {oneEvent.price} EUR
              </p>
              <div className="event-description">
                <h3>About Event</h3>
                <p>{oneEvent.description}</p>
                <input
                  type="number"
                  value={ticket}
                  onChange={(e) => setTicket(e.target.value)}
                  min="1"
                  max="4"
                />
              </div>
              <button className="event-order-btn" onClick={handleAddToCart}>
                Order Tickets Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Event;
