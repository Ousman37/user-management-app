import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold">User Management App</div>
        <div className="space-x-4">
          <Link to="/login" className="text-white">
            Login
          </Link>
          <Link to="/register" className="text-white">
            Register
          </Link>
          <Link to="/protected" className="text-white">
            Protected
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
