// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import CitySelector from "./components/Cities/CitySelector";
import Home from "./components/Home";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import CityPage from "./components/CityPage";
import AllCities from "./components/Cities/AllCities";
import CreateCity from "./components/Cities/CreateCity";
import AirportPage from "./components/AirportPage";
import AllAirports from "./components/Airports/AllAirports";
import AircraftPage from "./components/AircraftPage";
import AllAircrafts from "./components/Aircrafts/AllAircrafts";
import PassengerSelector from "./components/Passengers/PassengerSelector";
import PassengerPage from "./components/PassengerPage";

function App() {
  const [cities, setCities] = useState([]);
  const [airports, setAirports] = useState([]);
  const [aircrafts, setAircrafts] = useState([]);
  const [passengers, setPassengers] = useState([]);

  // Cities
  const fetchCities = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:8080/listAllCities");
      console.log(response.data);
      setCities(response.data);
    } catch (error) {
      console.error("There was an error fetching the cities!", error);
    }
  }, []);

  useEffect(() => {
    fetchCities().then(() => console.log("Cities loaded"));
  }, [fetchCities]);

  const addCity = (newCity) => {
    setCities([...cities, newCity]);
  };

  // Passengers
  const loadPassengers = useCallback(async () => {
    const response = await axios.get("http://localhost:8080/getAllPassengers");
    console.log(response.data);
    setPassengers(response.data);
  }, []);

  useEffect(() => {
    loadPassengers().then(() => console.log("Passengers loaded"));
  }, [loadPassengers]);

  // Airports
  const fetchAirports = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:8080/listAllAirports");
      console.log(response.data);
      setAirports(response.data);
    } catch (error) {
      console.error("There was an error fetching the airports!", error);
    }
  }, []);

  useEffect(() => {
    fetchAirports().then(() => console.log("Airport loaded"));
  }, [fetchAirports]);

  // Aircrafts
  const fetchAircrafts = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/listAllAircrafts"
      );
      console.log(response.data);
      setAircrafts(response.data);
    } catch (error) {
      console.error("There was an error fetching the aircrafts!", error);
    }
  }, []);

  useEffect(() => {
    fetchAircrafts().then(() => console.log("Aircraft loaded"));
  }, [fetchAircrafts]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/City" element={<CityPage />} />
        <Route path="/CityList" element={<CitySelector cities={cities} />} />
        <Route
          path="/ListAllCities"
          element={<AllCities cities={cities} fetchCities={fetchCities} />}
        />
        <Route
          path="/CreateNewCity"
          element={<CreateCity addCity={addCity} fetchCities={fetchCities} />}
        />
        <Route path="/Airport" element={<AirportPage />} />
        <Route
          path="/listAllAirports"
          element={
            <AllAirports airports={airports} fetchAirports={fetchAirports} />
          }
        />
        <Route path="/Aircraft" element={<AircraftPage />} />
        <Route
          path="/listAllAircrafts"
          element={<AllAircrafts aircrafts={aircrafts} />}
        />
        <Route path="/Passenger" element={<PassengerPage />} />
        <Route
          path="/PassengerList"
          element={<PassengerSelector passengers={passengers} />}
        />
      </Routes>
    </div>
  );
}

export default App;
