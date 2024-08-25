import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/protected");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-4 shadow-md rounded-md bg-white"
      >
        <h2 className="text-lg font-bold mb-4">Login</h2>
        <div>
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
