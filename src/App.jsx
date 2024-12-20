import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayaot from "./pages/Home/HomeLayaot";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayaot />} />
      </Routes>
    </Router>
  );
}

export default App;
