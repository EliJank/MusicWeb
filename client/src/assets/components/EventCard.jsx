import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import './EventCard.css';

const EventCard = (props) => {
  return (
    <Link to={`/events/${props.id}`}>
      <div className="event-card">
        <Card style={{ width: "18rem", height: "100%" }}>
          <Card.Img
            variant="top"
            src={props.photo}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Header>{props.title}</Card.Header>
            <Card.Title>{props.location}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {props.date} {props.time}
            </Card.Subtitle>
            <Card.Text>
              Price from{" "}
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
