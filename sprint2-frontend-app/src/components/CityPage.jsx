import React from "react";
import { Link } from "react-router-dom";

export default function CityPage() {
  return (
    <div>
      <h1>City Information</h1>
      <nav>
        <ul>
          <li>
            <Link to="/CreateNewCity">Add a City</Link>
          </li>
          <li>
            <Link to="/ListAllCities">All Cities</Link>
          </li>
          <li>
            <Link to="/CityList">Select a City</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
