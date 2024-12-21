import React from "react";

const Notifications = () => {
  const notifications = [
    { id: 1, message: "Reservation #123 confirmed", date: "2024-12-20" },
    { id: 2, message: "Client Sara added a review", date: "2024-12-19" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Notifications</h1>
      <div className="bg-white shadow-lg rounded-lg p-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="border-b py-3 flex justify-between items-center"
          >
            <p className="text-gray-700">{notification.message}</p>
            <span className="text-sm text-gray-500">{notification.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
