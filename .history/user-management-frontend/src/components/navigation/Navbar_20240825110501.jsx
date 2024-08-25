import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login"; // Ensure the correct path is used
import Register from "./Register"; // Ensure the correct path is used

function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold">User Management App</div>
        <div className="space-x-4">
          <button
            onClick={() => setShowLoginModal(true)}
            className="text-white"
          >
            Login
          </button>
          <button
            onClick={() => setShowRegisterModal(true)}
            className="text-white"
          >
            Register
          </button>
          <Link to="/protected" className="text-white">
            Protected
          </Link>
        </div>
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-2 right-2 text-gray-500"
            >
              &times;
            </button>
            <Login />
          </div>
        </div>
      )}

      {showRegisterModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <button
              onClick={() => setShowRegisterModal(false)}
              className="absolute top-2 right-2 text-gray-500"
            >
              &times;
            </button>
            <Register />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
