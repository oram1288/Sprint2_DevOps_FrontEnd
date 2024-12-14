import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CreateCity({ fetchCities }) {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [weather, setWeather] = useState("");
  const [population, setPopulation] = useState("");
  const [notification, setNotification] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newCity = {
      cityName,
      country,
      state,
      weather,
      population,
    };
    try {
      // await axios.post("http://localhost:8080/addNewCity", newCity);
      await axios.post("http://52.23.157.158:80/addNewCity", newCity);
      setCityName("");
      setCountry("");
      setState("");
      setWeather("");
      setPopulation("");
      setNotification("City added successfully!");
      fetchCities();
      setTimeout(() => setNotification(""), 3000);
    } catch (error) {
      console.error("There was an error adding the city", error);
      setNotification("Failed to add city.");
      setTimeout(() => setNotification(""), 3000);
    }
  };

  return (
    <div class="cityBox">
      <h2>Add a New City</h2>
      {notification && (
        <p
          style={{
            color: notification.includes("successfully") ? "green" : "red",
          }}
        >
          {notification}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>City Name:</label>
          <input
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Weather:</label>
          <input
            type="text"
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Population:</label>
          <input
            type="number"
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
            required
          />
        </div>
        <button type="submit" class="addButton">
          Add City
        </button>
      </form>

      <br />
      <Link to={"/City"} class="button2">
        Back
      </Link>
    </div>
  );
}
