import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllAircrafts({ aircrafts, fetchAircrafts }) {
  const handleDelete = async (aircraftId) => {
    try {
      await axios.delete(
        `http://localhost:8080/deleteAircraftById/${aircraftId}`
      );
    } catch (error) {
      console.error("There was an error deleting the aircraft!", error);
    }
    fetchAircrafts();
  };

  return (
    <div className="cityBox">
      <h1>Aircraft List</h1>
      <ul>
        {aircrafts.map((aircraft, index) => (
          <li key={index}>
            <h3>{aircraft.type}</h3>
            <p>
              <strong>Airline: </strong> {aircraft.airlineName}
            </p>
            <p>
              <strong>Seats: </strong> {aircraft.numberOfPassengers}
            </p>
            <button
              onClick={() => handleDelete(aircraft.aircraftId)}
              className="deleteButton"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <br />
      <Link to={"/Aircraft"} className="button2">
        Back
      </Link>
    </div>
  );
}
