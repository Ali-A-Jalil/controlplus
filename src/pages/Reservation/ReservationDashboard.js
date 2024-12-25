import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import ReservationList from "./ReservationList";
import ReservationForm from "./ReservationForm";
import ReservationCalendar from "./ReservationCalendar";
import ReservationNotifications from "./ReservationNotifications";

const tabs = [
  { label: "All Reservations", component: ReservationList },
  { label: "Add/Edit Reservation", component: ReservationForm },
  { label: "Calendar View", component: ReservationCalendar },
  { label: "Notifications", component: ReservationNotifications },
];

const ReservationDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [reservations, setReservations] = useState([
    { id: 1, customer: "Ali", date: "2024-12-25", time: "14:00", status: "Confirmed" },
  ]);

  const handleAddReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  const ActiveComponent = tabs[activeTab]?.component;

  return (
    <div className="bg-gray-100 p-6 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Reservation Management</h1>

      {/* Tabs */}
      <div className="flex border-b mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 font-medium ${
              activeTab === index
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Component */}
      <CSSTransition in={true} timeout={300} classNames="fade" unmountOnExit>
        <div className="bg-white p-6 rounded shadow">
          {ActiveComponent && (
            <ActiveComponent
              reservations={reservations}
              onAddReservation={handleAddReservation}
            />
          )}
        </div>
      </CSSTransition>
    </div>
  );
};

export default ReservationDashboard;
