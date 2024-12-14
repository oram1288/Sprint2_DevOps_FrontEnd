import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AllAirports({ airports, fetchAirports }) {
  const handleDelete = async (airportId) => {
    try {
      await axios.delete(
        // `http://localhost:8080/deleteAirportById/${airportId}`
        `http://52.23.157.158:80/deleteAirportById/${airportId}`
      );
    } catch (error) {
      console.error("There was an error deleting the airport!", error);
    }
    fetchAirports(); // Refresh the list of airports
  };

  return (
    <div className="cityBox">
      <h1>Airports</h1>
      <ul>
        {airports.map((airport, index) => (
          <li key={index}>
            <h3>{airport.name}</h3>
            <p>
              <strong>Code: </strong> {airport.code}
            </p>
            <p>
              <strong>City Name: </strong> {airport.cityName.cityName}
            </p>
            <button
              onClick={() => handleDelete(airport.airportId)}
              className="deleteButton"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <br />
      <Link to={"/Airport"} className="button2">
        Back
      </Link>
    </div>
  );
}
