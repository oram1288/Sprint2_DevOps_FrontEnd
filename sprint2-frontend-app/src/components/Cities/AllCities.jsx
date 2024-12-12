import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function AllCities({ cities, fetchCities }) {
  const [notification, setNotification] = useState("");

  const handleDelete = async (cityId) => {
    try {
      await axios.delete(`http://localhost:8080/deleteCityById/${cityId}`);
      setNotification("City deleted successfully!");
      setTimeout(() => setNotification(""), 3000);
    } catch (error) {
      console.error("There was an error deleting the city!", error);
      setNotification("Failed to delete city.");
      setTimeout(() => setNotification(""), 3000);
    }
    fetchCities();
  };

  return (
    <div class="cityBox">
      <h1>Cities</h1>
      {notification && (
        <p
          style={{
            color: notification.includes("successfully") ? "green" : "red",
          }}
        >
          {notification}
        </p>
      )}
      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            <h3>{city.cityName}</h3>
            <p>
              <strong>Country: </strong> {city.country}
            </p>
            <p>
              <strong>State: </strong> {city.state}
            </p>
            <p>
              <strong>Weather: </strong> {city.weather}
            </p>
            <p>
              <strong>Population: </strong> {city.population}
            </p>
            <button
              onClick={() => handleDelete(city.cityId)}
              class="deleteButton"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <br />
      <Link to={"/City"} class="button2">
        Back
      </Link>
    </div>
  );
}
