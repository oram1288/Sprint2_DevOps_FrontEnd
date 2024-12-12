import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AircraftById = () => {
  const [aircraftId, setAircraftId] = useState("");
  const [aircraft, setAircraft] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchAircraftById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/getAircraftById/${aircraftId}`
      );
      setAircraft(response.data);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Aircraft not found.");
      setAircraft(null);
    }
  };

  return (
    <div class="homeBox">
      <h1>Get Aircraft by ID</h1>
      <br />
      <br />
      <input
        className="select-box"
        type="text"
        value={aircraftId}
        onChange={(e) => setAircraftId(e.target.value)}
        placeholder="Enter Aircraft ID"
      />
      <button onClick={fetchAircraftById} class="button2">
        Search
      </button>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {aircraft && (
        <div>
          <h3>{aircraft.type}</h3>
          <p>
            <strong>Airline: </strong> {aircraft.airlineName}
          </p>
          <p>
            <strong>Seats: </strong> {aircraft.numberOfPassengers}
          </p>
        </div>
      )}

      <br />
      <Link to={"/Aircraft"} class="button2">
        Back
      </Link>
    </div>
  );
};

export default AircraftById;
