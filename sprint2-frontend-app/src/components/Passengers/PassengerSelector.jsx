import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Header from "../Header";
import { Link } from "react-router-dom";

const PassengerSelector = ({ passengers }) => {
  const [selectedPassenger, setSelectedPassenger] = useState(null);

  const handleChange = (event) => {
    const selectedPassengerName = event.target.value;
    const passenger = passengers.find((passenger) => passenger.passengerName === selectedPassengerName);
    console.log(passenger);
    setSelectedCity(passenger);
  };

  console.log(passengers);

  return (
    <div>
      <h2>Select a Passenger</h2>
      <select
        value={selectedPassenger ? selectedPassenger.passengerName : ""}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select a Passenger
        </option>
        {passengers.map((passenger, index) => (
          <option key={index} value={passenger.passengerName}>
            {passenger.passengerName}
          </option>
        ))}
      </select>
      {selectedPassenger && (
        <div>
          <p>You selected: {selectedPassenger.passengerName}</p>
          <p>Address: {selectedPassenger.passengerAddress}</p>
          <p>Phone: {selectedPassenger.passengerPhone}</p>
          <p>Email: {selectedPassenger.passengerEmail}</p>
        </div>
      )}

      <br />
      <Link to={"/Passenger"}>Back</Link>
    </div>
  );
};

export default PassengerSelector;