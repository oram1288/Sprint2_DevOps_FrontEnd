import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div class="header">
      <h1>EastWing Hub</h1>
      <nav class="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/City">Cities</Link>
          </li>
          <li>
            <Link to="/Airport">Airports</Link>
          </li>
          <li>
            <Link to="/Aircraft">Aircrafts</Link>
          </li>
          <li>
            <Link to="/Passenger">Passengers</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
