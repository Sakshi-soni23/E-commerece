import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Collections from "./Pages/Collections";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
    </>
  );
}

export default App;
