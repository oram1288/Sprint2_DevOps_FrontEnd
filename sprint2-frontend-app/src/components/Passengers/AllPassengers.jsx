import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AllPassengers({ passengers, loadPassengers }) {
  const handleDelete = async (passengerID) => {
    try {
      await axios.delete(`http://localhost:8080/deletePassengerByID/${passengerID}`);
    } catch (error) {
      console.error("There was an error deleting the passenger!", error);
    }
    loadPassengers();
  };

  return (
    <div class="cityBox">
      <h1>Passengers</h1>
      <ul>
        {passengers.map((passenger, index) => (
          <li key={index}>
            <h3>{passenger.passengerName}</h3>
            <p>
              <strong>Address: </strong> {passenger.passengerAddress}
            </p>
            <p>
              <strong>Phone Number: </strong> {passenger.passengerPhone}
            </p>
            <p>
              <strong>Email: </strong> {passenger.passengerEmail}
            </p>
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
