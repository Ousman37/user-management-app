import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import LoginRegisterModal from "./components/modal/LoginRegisterModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("login");

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar openModal={openModal} />
      <Routes>
        <Route path="/" element={<Home openModal={openModal} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {isModalOpen && (
        <LoginRegisterModal
          content={modalContent}
          onClose={closeModal}
          onSwitch={setModalContent}
        />
      )}
      {/* ToastContainer should be placed here to display toast notifications */}
      <ToastContainer />
    </>
  );
}

export default App;