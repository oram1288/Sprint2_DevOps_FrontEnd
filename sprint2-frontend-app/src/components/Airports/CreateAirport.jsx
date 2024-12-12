import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CreateAirport({ fetchAirport }) {
  const [cityName, setCityName] = useState("");
  const [Code, setCode] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newCity = {
      cityName,
      Code
    };
    try {
      await axios.post("http://localhost:8080/addNewAirport", newAircraft);
      setCityName("");
      setCode("");
      setNotification("Airport added successfully!");
      fetchAirport();
      setTimeout(() => setNotification(""), 3000);
    } catch (error) {
      console.error("There was an error adding the Airport", error);
      setNotification("Failed to add Airport.");
      setTimeout(() => setNotification(""), 3000);
    }
  };

  return (
    <div class="cityBox">
      <h2>Add a New Airport</h2>
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
          <label>Code:</label>
          <input
            type="text"
            value={Code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <button type="submit" class="addButton">
          Add Airport
        </button>
      </form>

      <br />
      <Link to={"/Airport"} class="button2">
        Back
      </Link>
    </div>
  );
}
