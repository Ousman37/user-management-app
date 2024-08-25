// src/components/ProtectedPage.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if there's no token
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-lg font-bold">Welcome to the Protected Page!</h2>
    </div>
  );
}

export default ProtectedPage;
