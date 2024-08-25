import React, { useState } from "react";
import LoginRegisterModal from ".";
import { Link } from "react-router-dom";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("login");

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">User Management App</div>
        <div className="space-x-4 flex items-center">
          <Link to="/protected" className="text-white">
            Protected
          </Link>
          <button
            onClick={() => openModal("login")}
            className="bg-white text-blue-500 p-2 rounded"
          >
            Login
          </button>
          <button
            onClick={() => openModal("register")}
            className="bg-white text-blue-500 p-2 rounded"
          >
            Register
          </button>
        </div>
      </div>
      {showModal && (
        <LoginRegisterModal
          content={modalContent}
          onClose={closeModal}
          onSwitch={setModalContent}
        />
      )}
    </nav>
  );
}

export default Navbar;
