import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GeoAltFill, SunriseFill, SunsetFill } from "react-bootstrap-icons";

const Details = () => {
  const { lat, lon } = useParams();
  const [weatherObject, setWeatherObject] = useState(null);

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f1094e8bb7d5876d5ef93fa05dd8facc&units=metric`
    )
      .then((response) => response.json())
      .then((weather) => {
        console.log(weather);

        setWeatherObject(weather);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchWeather();
  }, [lat, lon]);

  return (
    <>
      {weatherObject ? (
        <Container id="weatherContainer" className="my-5 text-center ">
          <Row className="bg-transparent ">
            <Col className="bg-transparent ">
              <h1 className="mt-4">
                {weatherObject.name} <GeoAltFill className="pb-2" />
              </h1>
              <h4 className="align-items-center mt-4">
                Temperature: {weatherObject.main.temp}°C
              </h4>
              <Row>
                <Col className="fs-4 lh-1 text-end mt-3">
                  <p>
                    <strong> Min: </strong>
                    {weatherObject.main.temp_min} C° -
                  </p>
                  <h1 className="mt-5 me-5 pt-3">
                    {weatherObject.weather[0].main}
                  </h1>
                </Col>
                <Col className="fs-4 lh-1 text-start mt-3">
                  <p>
                    <strong> Max:</strong> {weatherObject.main.temp_max}C°
                  </p>
                  <img
                    className="ms-3"
                    src={`https://openweathermap.org/img/wn/${weatherObject.weather[0].icon}@2x.png`}
                    alt=""
                    width={160}
                  />
                </Col>
              </Row>
              <p id="weather-states" className="mb-3 ">
                Feels like: {weatherObject.main.feels_like}°C
              </p>
              <p id="weather-states" className="mb-3 ">
                Humidity: {weatherObject.main.humidity}%
              </p>
              <p id="weather-states" className="mb-3 ">
                Wind Speed: {weatherObject.wind.speed} m/s
              </p>
              <p id="weather-states" className="mb-3 ">
                Cloud cover: {weatherObject.clouds.all} %
              </p>
              <Row className="mt-4">
                <Col>
                  <p className="mb-3 ">
                    <strong>Sunrise:</strong>
                    {new Date(
                      weatherObject.sys.sunrise * 1000
                    ).toLocaleTimeString()}
                  </p>
                  <SunriseFill className="cloud" />
                </Col>
                <Col>
                  <p className="mb-3">
                    <strong> Sunset:</strong>
                    {new Date(
                      weatherObject.sys.sunset * 1000
                    ).toLocaleTimeString()}
                  </p>

                  <SunsetFill className="cloud" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <Spinner animation="grow" />
      )}
    </>
  );
};
export default Details;
