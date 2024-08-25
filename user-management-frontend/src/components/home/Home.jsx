// src/components/Home.js
import React from "react";

function Home({ openModal }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-2xl">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-600">
          Welcome to User Management App
        </h1>
        <p className="text-xl mb-6 text-gray-700">
          Explore this full-stack application showcasing my expertise in modern
          web development technologies.
        </p>
        <p className="text-lg mb-8 text-gray-600">
          Register or log in to experience the app's features, including user
          management, protected routes, and more.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-8">
          <p className="text-xl font-semibold mb-4 text-gray-800">
            Technical Skills
          </p>
          <ul className="text-left list-disc list-inside text-gray-700">
            <li>React.js for dynamic and responsive UI</li>
            <li>Node.js and Express.js for efficient server-side operations</li>
            <li>MongoDB for scalable database solutions</li>
            <li>JWT for secure authentication</li>
            <li>Tailwind CSS for modern and responsive design</li>
          </ul>
        </div>
        <div className="flex justify-center space-x-6">
          <button
            onClick={() => openModal("register")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Get Started
          </button>
          <button
            onClick={() => openModal("login")}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Protected Area
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

// import React from "react";

// function Home() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-2xl">
//         <h1 className="text-4xl font-extrabold mb-6 text-blue-600">
//           Welcome to User Management App
//         </h1>
//         <p className="text-xl mb-6 text-gray-700">
//           Explore this full-stack application showcasing my expertise in modern
//           web development technologies.
//         </p>
//         <p className="text-lg mb-8 text-gray-600">
//           Register or log in to experience the app's features, including user
//           management, protected routes, and more.
//         </p>
//         <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-8">
//           <p className="text-xl font-semibold mb-4 text-gray-800">
//             Technical Skills
//           </p>
//           <ul className="text-left list-disc list-inside text-gray-700">
//             <li>React.js for dynamic and responsive UI</li>
//             <li>Node.js and Express.js for efficient server-side operations</li>
//             <li>MongoDB for scalable database solutions</li>
//             <li>JWT for secure authentication</li>
//             <li>Tailwind CSS for modern and responsive design</li>
//           </ul>
//         </div>
//         <div className="flex justify-center space-x-6">
//           <a
//             href="/register"
//             className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
//           >
//             Get Started
//           </a>
//           <a
//             href="/protected"
//             className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
//           >
//             Protected Area
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

