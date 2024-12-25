import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const ReservationCalendar = () => {
  const [events, setEvents] = useState([]);
  const [canceledReservations, setCanceledReservations] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Fetch reservations from an API or mock data
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch("/api/reservations");
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        } else {
          showNotification("Failed to fetch reservations.", "error");
        }
      } catch (error) {
        showNotification("An error occurred while fetching reservations.", "error");
      }
    };
    fetchReservations();
  }, []);

  // Show notification
  const showNotification = (message, type = "success") => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    }, 3000); // Auto-hide notification after 3 seconds
  };

  // Handle reservation creation
  const handleDateClick = (info) => {
    const title = prompt("Enter reservation title:");
    if (title) {
      const newEvent = { id: Date.now(), title, start: info.dateStr, allDay: true };
      setEvents([...events, newEvent]);
      showNotification("Reservation added successfully!", "success");
    }
  };

  // Cancel reservation
  const cancelReservation = (event) => {
    setCanceledReservations([...canceledReservations, event]);
    setEvents(events.filter((e) => e.id !== event.id));
    showNotification("Reservation canceled.", "info");
  };

  return (
    <div className="bg-white p-6 rounded shadow relative">
      <h2 className="text-xl font-bold mb-4">Reservation Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        events={events}
        dateClick={handleDateClick}
        eventClick={(info) => {
          if (window.confirm(`Do you want to cancel the reservation: ${info.event.title}?`)) {
            cancelReservation(info.event);
          }
        }}
      />
      <div className="bg-gray-100 p-4 mt-6 rounded shadow">
        <h3 className="text-lg font-bold mb-4">Canceled Reservations</h3>
        <ul className="list-disc pl-6">
          {canceledReservations.map((res) => (
            <li key={res.id}>
              {res.title} on {new Date(res.start).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>

      {/* Notifications */}
      <div className="notifications-container">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification ${notification.type}`}
          >
            {notification.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationCalendar;
