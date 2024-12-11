import React from "react";
import { Link } from "react-router-dom";

export default function AircraftPage() {
  return (
    <div className="homeBox">
      <h1>Aircraft Information</h1>
      <nav>
        <ul>
          <li>
            <Link to="/listAllAircrafts" class="button">
              All Aircrafts
            </Link>
          </li>
          <li>
            <Link to="/getAircraftById" class="button">
              Find Aircraft By ID
            </Link>
          </li>
          <li>
            <Link to="/CreateAirport" class="button">
              Find Aircraft By ID
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
