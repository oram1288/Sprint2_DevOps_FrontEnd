import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function App() {
  const [cities, setCities] = useState([]);

  const loadCities = useCallback(async () => {
    const response = await axios.get("http://localhost:8080/listAllCities");
    console.log(response.data);
    setCities(response.data);
  }, []);

  useEffect(() => {
    loadCities().then(() => console.log("Cities loaded"));
  }, [loadCities]);

  return (
    <div>
      <h1>Airline Hub</h1>
      {cities.map((city) => {
        return (
          <div key={city.cityId}>
            <h2>{city.cityName}</h2>
            <p>{city.country}</p>
            <p>{city.state}</p>
            <p>{city.weather}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
