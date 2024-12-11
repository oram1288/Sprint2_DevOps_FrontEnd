import React from "react";
import { Link } from "react-router-dom";

export default function PassengerPage() {
  return (
    <div>
      <h1>Passenger Information:</h1>
      <nav>
        <ul>
          <li>
            <Link to="/PassengerList">Select Passenger</Link>
          </li>
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
        </ul>
      </nav>
    </div>
  );
}
