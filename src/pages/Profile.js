import React, { useState } from "react";
import Modal from "../components/Modal";

const Profile = ({ user, onUpdateUser }) => {
  const [phone, setPhone] = useState(user.phone || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePasswordChange = () => {
    if (!password || !confirmPassword) {
      setError("Please fill in both password fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setModalType("password");
    setIsModalOpen(true);
  };

  const handlePhoneChange = () => {
    if (!phone) {
      setError("Phone number cannot be empty.");
      return;
    }
    setModalType("phone");
    setIsModalOpen(true);
  };

  const confirmChange = () => {
    if (modalType === "password") {
      onUpdateUser({ ...user, password });
      setSuccess("Password changed successfully!");
    } else if (modalType === "phone") {
      onUpdateUser({ ...user, phone });
      setSuccess("Phone number updated successfully!");
    }
    setPassword("");
    setConfirmPassword("");
    setIsModalOpen(false);
    setError("");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <button
            onClick={handlePhoneChange}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-all"
          >
            Update Phone
          </button>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Change Password
          </label>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full mb-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <button
            onClick={handlePasswordChange}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-all"
          >
            Change Password
          </button>
        </div>

        <Modal
          isOpen={isModalOpen}
          title="Confirm Changes"
          message={`Are you sure you want to update your ${modalType}?`}
          onClose={() => setIsModalOpen(false)}
          onConfirm={confirmChange}
        />
      </div>
    </div>
  );
};

export default Profile;
