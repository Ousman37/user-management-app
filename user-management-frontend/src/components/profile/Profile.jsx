// src/components/profile/Profile.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if there's no token
    } else {
      axios
        .get("http://localhost:9000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data", error);
          localStorage.removeItem("token"); // Remove token if it's invalid
          navigate("/login"); // Redirect to login
        });
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
          <div className="text-center mb-6">
            <img
              src={`https://ui-avatars.com/api/?name=${user.name}&background=random&size=128`}
              alt="User Avatar"
              className="rounded-full mx-auto mb-4"
            />
            <h2 className="text-3xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <div className="border-t pt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Account Details
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Name:</strong> {user.name}
            </p>
            {/* Add more user details here if needed */}
          </div>
        </div>
      ) : (
        <p className="text-xl text-gray-700">Loading profile...</p>
      )}
    </div>
  );
}

export default Profile;
