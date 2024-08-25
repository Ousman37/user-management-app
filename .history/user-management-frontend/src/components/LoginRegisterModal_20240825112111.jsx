import React from "react";
import Login from "./Login";
import Register from "./form";

function LoginRegisterModal({ content, onClose, onSwitch }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-lg w-96">
        <button className="text-red-500 float-right" onClick={onClose}>
          &times;
        </button>
        {content === "login" ? (
          <div>
            <Login onClose={onClose} />
            <p className="text-center mt-4">
              Don't have an account?{" "}
              <button
                onClick={() => onSwitch("register")}
                className="text-blue-500 underline"
              >
                Register here
              </button>
            </p>
          </div>
        ) : (
          <div>
            <Register onClose={onClose} />
            <p className="text-center mt-4">
              Already have an account?{" "}
              <button
                onClick={() => onSwitch("login")}
                className="text-blue-500 underline"
              >
                Login here
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginRegisterModal;
