import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from ".";

function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo as text */}
        <div className="text-white font-bold text-xl">User Management App</div>
        <div className="space-x-4 flex items-center">
          <Link to="/protected" className="text-white">
            Protected
          </Link>
          <button
            onClick={openLoginModal}
            className="bg-white text-blue-500 p-2 rounded"
          >
            Login
          </button>
        </div>
      </div>
      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-lg">
            <button
              className="text-red-500 float-right"
              onClick={closeLoginModal}
            >
              &times;
            </button>
            <Login onClose={closeLoginModal} />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
