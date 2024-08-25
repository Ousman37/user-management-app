// src/components/Home.js
import React from "react";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-6 bg-white shadow-md rounded-md max-w-lg">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">
          Welcome to My User Management App
        </h1>
        <p className="text-lg mb-4">
          This application demonstrates my skills in full-stack development,
          including React, Node.js, Express, MongoDB, and JWT authentication.
        </p>
        <p className="text-lg mb-4">
          Feel free to explore the functionalities like user registration,
          login, and protected routes.
        </p>
        <p className="text-lg font-medium">Technical Skills:</p>
        <ul className="text-left list-disc list-inside mb-4">
          <li>React.js for front-end development</li>
          <li>Node.js and Express.js for back-end development</li>
          <li>MongoDB for database management</li>
          <li>JWT for authentication</li>
          <li>CSS with Tailwind for responsive design</li>
        </ul>
        <div className="space-x-4">
          <a
            href="/register"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Get Started
          </a>
          <a
            href="/protected"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Protected Area
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
