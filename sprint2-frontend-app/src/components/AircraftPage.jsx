import React from "react";
import { Link } from "react-router-dom";

export default function AircraftPage() {
  return (
    <div className="homeBox">
      <h1>Aircraft Information</h1>
      <nav>
        <ul>
          <li>
            <Link to="/CreateNewAircraft" class="button">
              Add a Aircraft
            </Link>
          </li>
          <li>
            <Link to="/listAllAircrafts" class="button">
              All Aircrafts
            </Link>
          </li>
          <li>
            <Link to="/getAircraftById" class="button">
              Find An Aircraft
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
