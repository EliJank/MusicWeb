import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./EventCard.css";

const EventCard = (props) => {
  return (
    <Link to={`/events/${props.id}`}>
      <div className="event-card">
        <Card style={{ width: "18rem", height: "100%" }}>
          <Card.Img
            variant="center"
            src={props.photo}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Header>{props.title}</Card.Header>
            <Card.Title>{props.location}</Card.Title>
            <Card.Subtitle>
              {props.date} {props.time}
            </Card.Subtitle>
            <Card.Text>
              From{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>
                {props.price}
              </span>{" "}
              EUR
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
};
export default EventCard;
