import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import './MerchCard.css';

const MerchCard = (props) => {
  return (
    <Link to={`/merch/${props.id}`}>
      <div className="merch-card">
        <Card style={{ width: "18rem", height: "100%" }}>
          <Card.Img
            variant="top"
            src={props.photo}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Header className="merch-title">Group: {props.group}</Card.Header>
            <Card.Subtitle className="text-muted">
              Product: {props.title}
            </Card.Subtitle>
            <Card.Text>
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
export default MerchCard;
