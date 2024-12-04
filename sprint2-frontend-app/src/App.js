// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import CitySelector from "./components/Cities/CitySelector";
import Home from "./components/Home";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import CityPage from "./components/CityPage";

function App() {
  const [cities, setCities] = useState([]);
  const [passengers, setPassenger] = useState([]);

  const loadCities = useCallback(async () => {
    const response = await axios.get("http://localhost:8080/listAllCities");
    console.log(response.data);
    setCities(response.data);
  }, []);

  useEffect(() => {
    loadCities().then(() => console.log("Cities loaded"));
  }, [loadCities]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/City" element={<CityPage />} />
        <Route path="/CityList" element={<CitySelector cities={cities} />} />
      </Routes>
    </div>
  );
}

export default App;
