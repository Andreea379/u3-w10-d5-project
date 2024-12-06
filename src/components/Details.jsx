import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Details = () => {
  const { lat, lon } = useParams();
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      if (lat && lon) {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f1094e8bb7d5876d5ef93fa05dd8facc&units=metric`
        );
        if (response.ok) {
          const response = await response.json();
          setWeather(response);
        } else {
          throw new Error("errore");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOtherDays = async () => {
    try {
      if (lat && lon) {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f1094e8bb7d5876d5ef93fa05dd8facc&units=metric`
        );
        if (response.ok) {
          const response = await response.json();
        } else {
          throw new Error("errore");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchWeather();
    fetchOtherDays();
  }, []);

  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <div>
          {weather && (
            <div>
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column">
                  <div className="d-block">
                    <h1 className="d-inline-block">{weather.name}</h1>
                  </div>

                  <div>
                    <p>{Math.floor(weather.main.temp) + "°"}</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-around">
                <div>
                  <p>
                    <strong>min: </strong>
                    {Math.floor(weather.main.temp_min) + "°"}
                  </p>
                </div>
                <p>Percepita: {weather.main.feels_like}</p>
                <div>
                  <p>
                    <strong>max: </strong>
                    {Math.floor(weather.main.temp_max) + "°"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};
export default Details;
