import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AllAirports({ airports, fetchAirports }) {
  const handleDelete = async (airportId) => {
    try {
      await axios.delete(`http://localhost:8080/deleteAirportById/${airportId}`);
      fetchAirports(); // Refresh the list of airports
    } catch (error) {
      console.error("There was an error deleting the airport!", error);
    }
  };

  return (
    <div className="airportBox">
      <h1>Airports</h1>
      <ul>
        {airports.map((airport, index) => (
          <li key={index}>
            <h3>{airport.name}</h3>
            <p>Code: {airport.code}</p>
            <p>City: {airport.cityName}</p>
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
      <Link to={"/Airports"} className="button2">
        Back
      </Link>
    </div>
  );
}