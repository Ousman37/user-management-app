// src/components/navigation/Navbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css";
import LoginRegisterModal from "../modal/LoginRegisterModal";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("login");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully!"); // Show success toast on logout
    navigate("/login");
  };

  const isLoggedIn = !!localStorage.getItem("token");

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <div
          className="text-white font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          User Management App
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="text-white">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => openModal("login")}
              className="text-white bg-blue-700 px-4 py-2 rounded-md"
            >
              Account
            </button>
          )}
        </div>
      </div>
      {showModal && (
        <LoginRegisterModal
          content={modalContent}
          onClose={() => setShowModal(false)}
          onSwitch={(content) => setModalContent(content)}
        />
      )}
    </nav>
  );
}

export default Navbar;