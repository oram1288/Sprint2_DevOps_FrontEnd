import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AirportsByCityId() {
  const [cityId, setCityId] = useState("");
  const [airports, setAirports] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchAirportsByCityId = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/getAirportsByCityId/${cityId}`
      );
      setAirports(response.data);
      setErrorMessage("");
    } catch (error) {
      console.error("Error fetching airports by city ID", error);
      setErrorMessage(
        "No airports found for this city ID or an error occurred."
      );
      setAirports([]);
    }
  };

  return (
    <div class="homeBox">
      <h1>Find Airports by The City ID</h1>
      <br />
      <br />
      <input
        className="select-box"
        type="text"
        value={cityId}
        onChange={(e) => setCityId(e.target.value)}
        placeholder="Enter City ID"
      />
      <button onClick={fetchAirportsByCityId} class="button2">
        Search
      </button>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <ul>
        {airports.map((airport) => (
          <li key={airport.airportId}>
            <h3>{airport.name}</h3>
            <p>
              <strong>Code: </strong> {airport.code}
            </p>
            <p>
              <strong>City Name: </strong> {airport.cityName.cityName}
            </p>
          </li>
        ))}
      </ul>

      <br />
      <Link to={"/Airport"} class="button2">
        Back
      </Link>
    </div>
  );
}

export default AirportsByCityId;
