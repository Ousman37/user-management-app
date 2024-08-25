import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/";
import Register from "./components/form/Register";
import ProtectedPage from "./components/ProtectedPage";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/protected" element={<ProtectedPage />} />
      </Routes>
    </>
  );
}

export default App;
