import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CreateAirport({ fetchAirports }) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [cityName, setCityName] = useState({ cityName: "" });
  const [notification, setNotification] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newAirport = {
      name,
      code,
      cityName,
    };
    try {
      await axios.post("http://localhost:8080/addNewAirport", newAirport);
      setName("");
      setCode("");
      setCityName({ cityName: "" });
      setNotification("Airport added successfully!");
      fetchAirports();
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
          <label>Airport Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Code:</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label>City Name:</label>
          <input
            type="text"
            value={cityName.cityName}
            onChange={(e) => setCityName({ cityName: e.target.value })}
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
