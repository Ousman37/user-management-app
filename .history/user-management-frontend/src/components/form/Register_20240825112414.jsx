import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/api/register", {
        name,
        email,
        password,
      });
      navigate("/login");
      onClose(); // Close the modal on successful registration
    } catch (error) {
      setError("Error in registration");
    }
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text">Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block font-medium mb-1">
          Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block border rounded p-2 mb-2 w-full"
        />
        <label htmlFor="email" className="block font-medium mb-1">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block border rounded p-2 mb-2 w-full"
        />
        <label htmlFor="password" className="block font-medium mb-1">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block border rounded p-2 mb-2 w-full"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
