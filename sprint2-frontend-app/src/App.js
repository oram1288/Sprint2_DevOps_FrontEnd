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

function App() {
  const [cities, setCities] = useState([]);
  const [passengers, setPassenger] = useState([]);

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

  const loadPassengers = useCallback(async() => {
    const response = await axios.get("http://localhost:8080/listAllPassengers");
    console.log(response.data);
    setPassengers(response.data);
  }, []);

  useEffect(() => {
    loadPassengers().then(() => console.log("Passengers loaded"));
  }, [loadPassengers]);

  const addPassenger = (newPassenger) => {
    setPassengers([...passengers, newPassenger]);
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/City" element={<CityPage />} />
        <Route path="/CityList" element={<CitySelector cities={cities} />} />
        <Route path="/Passenger" element={<PassengerPage />} />
        <Route path="/PassengerList" element={<PassengerSelector passengers={passengers} />} />
        <Route path="/ListAllCities" element={<AllCities cities={cities} />} />
        <Route
          path="/CreateNewCity"
          element={<CreateCity addCity={addCity} />}
        />
        <Route path="/ListAllPassengers" element={<AllPassengers passengers={passengers} />} />
        <Route
          path="/CreateNewPassenger"
          element={<CreatePassenger addPassenger={addPassenger} />}
        />
      </Routes>
    </div>
  );
}

export default App;
