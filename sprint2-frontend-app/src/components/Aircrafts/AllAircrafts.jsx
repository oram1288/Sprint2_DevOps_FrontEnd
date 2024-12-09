import { useState, useEffect } from "react";
import axios from "axios";

const AllAircrafts = () => {
  const [aircrafts, setAircrafts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchAircrafts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/AllAircraft");
      setAircrafts(response.data);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Error fetching aircrafts");
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchAircrafts();
  }, []);

  return (
    <div>
      <h1>Aircraft List</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <ul>
        {aircrafts.map((aircraft) => (
          <li key={aircraft.aircraftId}>
            <h3>{aircraft.type}</h3>
            <p>Airline: {aircraft.airlineName}</p>
            <p>Seats: {aircraft.numberOfPassengers}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllAircrafts;