import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ProtectedPage from "./components/protected/ProtectedPage";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/protected" element={<ProtectedPage />} />
      </Routes>
    </>
  );
}

export default App;
