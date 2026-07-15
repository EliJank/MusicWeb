import { Card, Button, ListGroup, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    gender: "",
    age: "",
    email: "",
  });
  const { data, loading, apiMakeCall, error } = useFetch();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const response = apiMakeCall(
      `http://localhost:3000/profile/${userId}`,
      "GET",
    );
    response.then((data) => {
      setUser(data);
    });
  }, [userId]);

  const logoutAction = async () => {
    const response = await apiMakeCall("http://localhost:3000/logout", "POST");
    if (response?.success) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      window.location.href = "/login";
    }
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && error && <p>Error: {error}</p>}
      {!loading && data && (
        <div className="profile">
          <h1>User Profile</h1>
          <Card
            className="profile-card"
            style={{ width: "50%", margin: "0 auto" }}
          >
            <Card.Body className="text-center">
              <Row>
                <Col md={2}></Col>
                <Col md={8}>
                  <ListGroup>
                    <ListGroup.Item className="profile-gap">
                      Name: {user.name} {user.surname}
                    </ListGroup.Item>
                    <ListGroup.Item className="profile-gap">
                      Age: {user.age}
                    </ListGroup.Item>
                    <ListGroup.Item className="profile-gap">
                      Gender: {user.gender}
                    </ListGroup.Item>
                    <ListGroup.Item className="profile-gap">
                      Email: {user.email}
                    </ListGroup.Item>
                    <ListGroup.Item className="profile-gap">
                      Location: {user?.location ? user.location : "Unknown"}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
              <Button
                variant="danger"
                style={{ marginTop: "20px", marginLeft: "10px" }}
                className="btn-logout"
                onClick={() => logoutAction()}
              >
                Logout
              </Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default Profile;
