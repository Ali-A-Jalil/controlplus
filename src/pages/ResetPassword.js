import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePasswordReset = () => {
    if (!newPassword || !confirmPassword) {
      setError("Please fill in all fields.");
    } else if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      alert("Password reset successful!");
      navigate("/"); // Redirect to login page
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border border-gray-300 p-3 w-full mb-4 rounded"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border border-gray-300 p-3 w-full mb-4 rounded"
        />
        <button
          onClick={handlePasswordReset}
          className="bg-blue-500 text-white py-3 px-6 rounded w-full hover:bg-blue-600 transition"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
