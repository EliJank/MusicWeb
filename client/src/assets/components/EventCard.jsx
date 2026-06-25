import Card from "react-bootstrap/Card";


const EventCard = (props) =>
 {
    return(
        <>
<Card style={{ width: "22rem"}}>
    <Card.Img variant="top" src={props.photo} />
    <Card.Body>
        <Card.Header>{props.title}</Card.Header>
        <Card.Title>{props.location}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
            {props.date} {props.time}
        </Card.Subtitle>
       <Card.Text>Price from {props.price}</Card.Text>

    </Card.Body>
</Card>
        </>
    )
 }
 export default EventCard;