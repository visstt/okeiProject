import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayaot from "./pages/Home/HomeLayaot";
import Projects from "./pages/Projects/Projects";
import "./App.css";
import TextCustomizer from "./components/TextCustomizer/TextCustomizer";
import AdminPanel from "./pages/Admin/AdminPanel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayaot />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/textCustomizer" element={<TextCustomizer />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
