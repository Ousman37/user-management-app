import React, { useEffect, useState } from "react";
import axios from "axios";

function ProtectedPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProtectedData = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:9000/api/protected", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage(response.data.message);
    };

    fetchProtectedData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-4 shadow-md rounded-md bg-white">
        <h2 className="text-lg font-bold mb-4">Protected Page</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ProtectedPage;
