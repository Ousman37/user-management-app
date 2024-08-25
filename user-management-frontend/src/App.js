import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
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
    </>
  );
}

export default App;
// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/navigation/Navbar";
// import Home from "./components/home/Home";
// import ProtectedPage from "./components/profile/Profile";
// import LoginRegisterModal from "./components/modal/LoginRegisterModal";

// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalContent, setModalContent] = useState("login");

//   const openModal = (content) => {
//     setModalContent(content);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <Navbar openModal={openModal} />
//       <Routes>
//         <Route path="/" element={<Home openModal={openModal} />} />
//         <Route path="/protected" element={<ProtectedPage />} />
//       </Routes>
//       {isModalOpen && (
//         <LoginRegisterModal
//           content={modalContent}
//           onClose={closeModal}
//           onSwitch={setModalContent}
//         />
//       )}
//     </>
//   );
// }

// export default App;
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./components/home/Home";
// // import Register from "./components/form/Register";
// import ProtectedPage from "./components/protected/ProtectedPage";
// import Navbar from "./components/navigation/Navbar";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/register" element={<Register />} /> */}
//         <Route path="/protected" element={<ProtectedPage />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
