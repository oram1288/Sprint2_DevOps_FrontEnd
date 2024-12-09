import React from "react";
import { Link } from "react-router-dom";

export default function AircraftPage() {
  return (
    <div className="homeBox">
      <h1>Aircraft Information</h1>
      <nav>
        <ul>
          <li>
            <Link to="/listAllAircrafts" className="button">
              All Aircrafts
            </Link>
          </li>
          <li>
            <Link to="/getAircraftById" className="button">
              Find Aircraft By ID
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}