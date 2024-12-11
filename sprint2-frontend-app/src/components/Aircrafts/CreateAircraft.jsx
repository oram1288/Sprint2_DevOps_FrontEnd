import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CreateAircraft({ fetchAircrafts }) {
  const [cityName, setCityName] = useState("");
  const [airlineName, setAirline] = useState("");
  const [numberOfPassengers, setSeats] = useState("");
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newCity = {
      cityName,
      airlineName,
      numberOfPassengers, 
    };
    try {
      await axios.post("http://localhost:8080/addNewAircraft", newAircraft);
      setCityName("");
      setAirline("");
      setSeats("");
      setNotification("Aircraft added successfully!");
      fetchAircrafts();
      setTimeout(() => setNotification(""), 3000);
    } catch (error) {
      console.error("There was an error adding the Aircraft", error);
      setNotification("Failed to add Aircraft.");
      setTimeout(() => setNotification(""), 3000);
    }
  };

  return (
    <div class="cityBox">
      <h2>Add a New Aircraft</h2>
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
          <label>Seats:</label>
          <input
            type="text"
            value={numberOfPassengers}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <button type="submit" class="addButton">
          Add Aircraft
        </button>
      </form>

      <br />
      <Link to={"/Aircraft"} class="button2">
        Back
      </Link>
    </div>
  );
}
