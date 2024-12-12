import React from "react";
import { Link } from "react-router-dom";

export default function AirportPage() {
  return (
    <div class="homeBox">
      <h1>Airport Information</h1>
      <nav>
        <ul>
          <li>
            <Link to="/AirportsByCityId" class="button">
              Find An Airport
            </Link>
          </li>
          <li>
            <Link to="/listAllAirports" class="button">
              All Airports
            </Link>
          </li>
          <li>
            <Link to="/CreateAirport" class="button">
              Create A New Airport
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
