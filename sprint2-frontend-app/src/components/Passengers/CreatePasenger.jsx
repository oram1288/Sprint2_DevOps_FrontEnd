import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CreatePassenger() {
  const [passengerName, setPassengerName] = useState("");
  const [passengerAddress, setPassengerAddress] = useState("");
  const [passengerEmail, setPassengerEmail] = useState("");
  const [passengerPhone, setPassengerPhone] = useState("");
  const [notification, setNotification] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPasenger = {
      passengerName,
      passengerAddress,
      passengerPhone,
      passengerEmail,
    };
    try {
      await axios.post("http://localhost:8080/addNewPassenger", newPassenger);
      setPassengerName("");
      setPassengerAddress("");
      setPassengerPhone("");
      setPassengerEmail("");
      setNotification("Passenger added successfully!");
      setTimeout(() => setNotification(""), 3000);
    } catch (error) {
      console.error("There was an error adding the passenger", error);
      setNotification("Failed to add Passenger.");
      setTimeout(() => setNotification(""), 3000);
    }
  };

  return (
    <div class="passengerBox">
      <h2>Add a New Passenger</h2>
      {notification && (
        <p
          style={{
            color: notification.includes("successfully") ? "green" : "red",
          }}
        >
          {notification}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Passenger Name:</label>
          <input
            type="text"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={passengerAddress}
            onChange={(e) => setPassengerAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone #:</label>
          <input
            type="text"
            value={passengerPhone}
            onChange={(e) => setPassengerPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={passengerEmail}
            onChange={(e) => setPassengerEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" class="addButton">
          Add Passenger
        </button>
      </form>

      <br />
      <Link to={"/Passenger"} class="button2">
        Back
      </Link>
    </div>
  );
}