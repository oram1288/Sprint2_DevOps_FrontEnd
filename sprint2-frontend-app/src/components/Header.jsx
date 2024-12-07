import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div class="header">
      <h1>Airport Hub</h1>
      <nav class="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/City">Cities</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
