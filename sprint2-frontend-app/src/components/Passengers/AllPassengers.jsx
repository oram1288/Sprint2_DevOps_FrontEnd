import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AllPassengers({ passengers, loadPassengers }) {
  const handleDelete = async (passengerID) => {
    try {
      await axios.delete(`http://localhost:8080/deletePassengerById/${passengerID}`);
      loadPassengers(); // Refresh the list of passengers
    } catch (error) {
      console.error("There was an error deleting the Passenger!", error);
    }
  };

  return (
    <div class="passengerBox">
      <h1>Passengers</h1>
      <ul>
        {passengers.map((passenger, index) => (
          <li key={index}>
            <h3>{passenger.passengerName}</h3>
            <p>Address: {passenger.passengerAddress}</p>
            <p>Phone: {passenger.passengerPhone}</p>
            <p>Email: {passenger.passengerEmail}</p>
            <button
              onClick={() => handleDelete(passenger.passengerID)}
              class="deleteButton"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <br />
      <Link to={"/Passenger"} class="button2">
        Back
      </Link>
    </div>
  );
}