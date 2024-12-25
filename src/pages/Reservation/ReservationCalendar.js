import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";

const ReservationCalendar = () => {
  const [events, setEvents] = useState([]);
  const [canceledReservations, setCanceledReservations] = useState([]);

  // Fetch reservations from an API or mock data
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch("/api/reservations");
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        } else {
          toast.error("Failed to fetch reservations.");
        }
      } catch (error) {
        toast.error("An error occurred while fetching reservations.");
      }
    };
    fetchReservations();
  }, []);

  // Handle reservation creation
  const handleDateClick = (info) => {
    const title = prompt("Enter reservation title:");
    if (title) {
      const newEvent = { id: Date.now(), title, start: info.dateStr, allDay: true };
      setEvents([...events, newEvent]);
      toast.success("Reservation added successfully!");
    }
  };

  // Function to send reminder
  const sendReminder = async (event) => {
    try {
      const response = await fetch("/api/send-reminder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: event.title,
          date: event.start,
          email: event.extendedProps?.email || "customer@example.com",
        }),
      });
      if (response.ok) {
        toast.success("Reminder sent successfully!");
      } else {
        toast.error("Failed to send reminder.");
      }
    } catch (error) {
      toast.error("An error occurred while sending the reminder.");
    }
  };

  // Cancel reservation
  const cancelReservation = (event) => {
    setCanceledReservations([...canceledReservations, event]);
    setEvents(events.filter((e) => e.id !== event.id));
    toast.info("Reservation canceled.");
  };

  // Export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Reservations Report", 10, 10);
    events.forEach((event, index) => {
      doc.text(`${index + 1}. ${event.title} - ${event.start}`, 10, 20 + index * 10);
    });
    doc.save("reservations-report.pdf");
  };

  // Export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(events);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Reservations");
    XLSX.writeFile(workbook, "reservations-report.xlsx");
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Reservation Calendar</h2>
      <div className="mb-4 flex gap-4">
        <button
          onClick={exportToPDF}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Export to PDF
        </button>
        <button
          onClick={exportToExcel}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Export to Excel
        </button>
      </div>
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
    </div>
  );
};

export default ReservationCalendar;
