import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [cities, setCities] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cities}&appid=f1094e8bb7d5876d5ef93fa05dd8facc`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((cityObj) => {
        console.log(cityObj);
        const { lat, lon } = cityObj[0];
        navigate(`/details/${lat}/${lon}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="text-center mt-5">
      <h1>METEO</h1>
      <p>Inserisci una città</p>
      <Row className="justify-content-center mt-4">
        <Col xs={12} sm={8} md={6}>
          <Form onSubmit={handleChange}>
            <Form.Group controlId="cityInput">
              <Form.Control
                type="text"
                placeholder="Cerca una città"
                value={cities}
                onChange={(e) => setCities(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" className="my-3" type="submit">
              Cerca
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
