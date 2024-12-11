import React, { useState } from "react";
import axios from "axios";

const AircraftById = () => {
  const [aircraftId, setAircraftId] = useState("");
  const [aircraft, setAircraft] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchAircraftById = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/getAircraftById/${aircraftId}`);
      setAircraft(response.data);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Aircraft not found.");
      setAircraft(null);
    }
  };

  return (
    <div>
      <h1>Get Aircraft by ID</h1>
      <input
        type="text"
        value={aircraftId}
        onChange={(e) => setAircraftId(e.target.value)}
        placeholder="Enter Aircraft ID"
      />
      <button onClick={fetchAircraftById}>Search</button>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {aircraft && (
        <div>
          <h3>{aircraft.type}</h3>
          <p>Airline: {aircraft.airlineName}</p>
          <p>Seats: {aircraft.numberOfPassengers}</p>
        </div>
      )}
    </div>
  );
};

export default AircraftById;