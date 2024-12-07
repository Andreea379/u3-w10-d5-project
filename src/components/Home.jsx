import { useState } from "react";
import { Button, Col, Container, Row, Navbar } from "react-bootstrap";

import { CloudyFill } from "react-bootstrap-icons";
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
    <Container id="weatherContainer" className="text-center mt-5">
      <Navbar className="bg-transparent">
        <Container fluid className="justify-content-center">
          <Navbar.Brand href="#" className="align-items-center">
            <CloudyFill className="cloud mx-3 pb-2" />
            <p className="pt-3 d-inline-block fs-2">Meteo</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <h1 className="mt-5">WELCOME!</h1>
      <p className="mt-5">Inserisci una città🌆:</p>
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
            <Button
              id="submit"
              variant="primary"
              className="mt-5"
              type="submit"
            >
              Cerca
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
