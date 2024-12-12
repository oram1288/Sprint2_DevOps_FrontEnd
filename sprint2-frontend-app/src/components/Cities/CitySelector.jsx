import { useState } from "react";
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
        className="select-box"
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
          <p>
            <strong>You Selected: </strong> {selectedCity.cityName}
          </p>
          <p>
            <strong>Country: </strong> {selectedCity.country}
          </p>
          <p>
            <strong>State: </strong> {selectedCity.state}
          </p>
          <p>
            <strong>Weather: </strong> {selectedCity.weather}
          </p>
          <p>
            <strong>Population: </strong> {selectedCity.population}
          </p>
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
