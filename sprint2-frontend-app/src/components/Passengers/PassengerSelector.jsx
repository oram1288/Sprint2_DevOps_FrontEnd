import { useState } from "react";
import { Link } from "react-router-dom";

const PassengerSelector = ({ passengers }) => {
  const [selectedPassenger, setSelectedPassenger] = useState(null);

  const handleChange = (event) => {
    const selectedPassengerName = event.target.value;
    const passenger = passengers.find(
      (passenger) => passenger.passengerName === selectedPassengerName
    );
    console.log(passenger);
    setSelectedPassenger(passenger);
  };

  console.log(passengers);

  return (
    <div class="homeBox">
      <h2>Select a Passenger</h2>
      <select
        className="select-box"
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
          <p>
            <strong>You Selected: </strong> {selectedPassenger.passengerName}
          </p>
          <p>
            <strong>Address: </strong> {selectedPassenger.passengerAddress}
          </p>
          <p>
            <strong>Phone Number: </strong> {selectedPassenger.passengerPhone}
          </p>
          <p>
            <strong>Email: </strong> {selectedPassenger.passengerEmail}
          </p>
        </div>
      )}

      <br />
      <Link to={"/Passenger"} class="button2">
        Back
      </Link>
    </div>
  );
};

export default PassengerSelector;
