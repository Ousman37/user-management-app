// src/components/navigation/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from local storage
    navigate("/login"); // Redirect to the login page
  };

  const isLoggedIn = !!localStorage.getItem("token"); // Check if the user is logged in

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold">User Management App</div>
        <div className="space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/protected" className="text-white">
                Protected
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-white bg-blue-700 px-4 py-2 rounded-md"
            >
              Account
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import LoginRegisterModal from "../LoginRegisterModal";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [showModal, setShowModal] = useState(false);
//   const [modalContent, setModalContent] = useState("login");

//   const openModal = (content) => {
//     setModalContent(content);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <nav className="bg-blue-500 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white font-bold text-xl">User Management App</div>
//         <div className="space-x-4 flex items-center">
//           <Link to="/protected" className="text-white">
//             Protected
//           </Link>
//           <button
//             onClick={() => openModal("login")}
//             className="bg-white text-blue-500 p-2 rounded"
//           >
//             Login
//           </button>
//           <button
//             onClick={() => openModal("register")}
//             className="bg-white text-blue-500 p-2 rounded"
//           >
//             Register
//           </button>
//         </div>
//       </div>
//       {showModal && (
//         <LoginRegisterModal
//           content={modalContent}
//           onClose={closeModal}
//           onSwitch={setModalContent}
//         />
//       )}
//     </nav>
//   );
// }

// export default Navbar;
