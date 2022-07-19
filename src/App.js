import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import { useEffect, useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import Todo from "./component/Todo";

function App() {
  const [weather, setWeather] = useState(null);
  const [currentCity, setCurrentCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [background, setBackgroud] = useState();
  const cities = ["New York", "Tokyo", "Rome", "Paris"];
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=273bb32879fb498bd1e6418e3f138bff&units=metric`;
    let response = await fetch(url);
    let data = await response.json();

    setWeather(data);
    setCurrentCity(data.name);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=273bb32879fb498bd1e6418e3f138bff&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);

    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    if (!city) {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div className="body">
      {loading ? (
        <div className="main">
          <DotLoader color="#ffff" loading={loading} size={100} />
        </div>
      ) : (
        <div
          className="main"
          style={{
            backgroundImage: `${background}`,
          }}
        >
          <h4 className="title">Today's weather 🌎</h4>
          <WeatherBox
            weather={weather}
            setBackgroud={setBackgroud}
            background={background}
          />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            currentCity={currentCity}
          />
          <Todo />
        </div>
      )}
    </div>
  );
}

export default App;
