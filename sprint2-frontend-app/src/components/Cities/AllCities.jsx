import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AllCities({ cities, fetchCities }) {
  const handleDelete = async (cityId) => {
    try {
      await axios.delete(`http://localhost:8080/deleteCityById/${cityId}`);
      fetchCities(); // Refresh the list of cities
    } catch (error) {
      console.error("There was an error deleting the city!", error);
    }
  };

  return (
    <div>
      <h1>Cities</h1>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            <h3>{city.cityName}</h3>
            <p>Country: {city.country}</p>
            <p>State: {city.state}</p>
            <p>Weather: {city.weather}</p>
            <p>Population: {city.population}</p>
            <button onClick={() => handleDelete(city.cityId)}>Delete</button>
          </li>
        ))}
      </ul>

      <br />
      <Link to={"/City"}>Back</Link>
    </div>
  );
}
