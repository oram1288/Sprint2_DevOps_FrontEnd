import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CreateAircraft({ fetchAircrafts }) {
  const [type, setType] = useState("");
  const [airlineName, setAirlineName] = useState("");
  const [numberOfPassengers, setSeats] = useState("");
  const [airportId, setAirportId] = useState({ airportId: "" });
  const [notification, setNotification] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newAircraft = {
      type,
      airlineName,
      numberOfPassengers,
      airportId,
    };
    try {
      // await axios.post("http://localhost:8080/addNewAircraft", newAircraft);
      await axios.post("http://52.23.157.158:80/addNewAircraft", newAircraft);
      setType("");
      setAirlineName("");
      setSeats("");
      setAirportId({ airportId: "" });
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
          <label>Airline Type:</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Airline Name:</label>
          <input
            type="text"
            value={airlineName}
            onChange={(e) => setAirlineName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Number of Passengers:</label>
          <input
            type="text"
            value={numberOfPassengers}
            onChange={(e) => setSeats(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Airport ID:</label>
          <input
            type="text"
            value={airportId.airportId}
            onChange={(e) => setAirportId({ airportId: e.target.value })}
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
