import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayaot from "./pages/Home/HomeLayaot";
import Projects from "./pages/Projects/Projects";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayaot />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
