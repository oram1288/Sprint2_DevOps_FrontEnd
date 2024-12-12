import React from "react";
import { Link } from "react-router-dom";

export default function PassengerPage() {
  return (
    <div class="homeBox">
      <h1>Passenger Information:</h1>
      <nav>
        <ul>
          <li>
            <Link to="/CreateNewPassenger" class="button">
              Add a Passenger
            </Link>
          </li>
          <li>
            <Link to="/ListAllPassengers" class="button">
              All Passengers
            </Link>
          </li>
          <li>
            <Link to="/PassengerList" class="button">
              Select Passenger
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
