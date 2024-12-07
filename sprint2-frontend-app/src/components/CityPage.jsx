import React from "react";
import { Link } from "react-router-dom";

export default function CityPage() {
  return (
    <div class="homeBox">
      <h1>City Information</h1>
      <nav>
        <ul>
          <li>
            <Link to="/CreateNewCity" class="button">
              Add a City
            </Link>
          </li>
          <li>
            <Link to="/ListAllCities" class="button">
              All Cities
            </Link>
          </li>
          <li>
            <Link to="/CityList" class="button">
              Select a City
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
