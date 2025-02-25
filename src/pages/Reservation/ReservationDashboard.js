import React, { useState, lazy, Suspense } from "react";
import { CSSTransition } from "react-transition-group";

// Lazy load reservation components
const ReservationList = lazy(() => import("./ReservationList"));
const ReservationForm = lazy(() => import("./ReservationForm"));
const ReservationCalendar = lazy(() => import("./ReservationCalendar"));
const ReservationNotifications = lazy(() => import("./ReservationNotifications"));

// Tabs Configuration
const tabs = [
  { label: "All Reservations", component: ReservationList },
  { label: "Add/Edit Reservation", component: ReservationForm },
  { label: "Calendar View", component: ReservationCalendar },
  { label: "Notifications", component: ReservationNotifications },
];

// Fallback Component for Lazy Loading
const LoadingSpinner = () => <p className="text-center text-blue-500">Loading...</p>;

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

      {/* Active Component with Lazy Loading */}
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    </div>
  );
};

export default ReservationDashboard;
