import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const CitySelector = ({ cities }) => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleChange = (event) => {
    const selectedCityName = event.target.value;
    const city = cities.find((city) => city.cityName === selectedCityName);
    console.log(city);
    setSelectedCity(city);
  };

  console.log(cities);

  return (
    <div class="homeBox">
      <h2>Select a City</h2>
      <select
        value={selectedCity ? selectedCity.cityName : ""}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select a city
        </option>
        {cities.map((city, index) => (
          <option key={index} value={city.cityName}>
            {city.cityName}
          </option>
        ))}
      </select>
      {selectedCity && (
        <div>
          <p>You selected: {selectedCity.cityName}</p>
          <p>Country: {selectedCity.country}</p>
          <p>State: {selectedCity.state}</p>
          <p>Weather: {selectedCity.weather}</p>
          <p>Population: {selectedCity.population}</p>
        </div>
      )}

      <br />
      <Link to={"/City"} class="button2">
        Back
      </Link>
    </div>
  );
};

export default CitySelector;
