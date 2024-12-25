import React, { useState } from "react";

const ReservationForm = ({ onAddReservation }) => {
  const [customer, setCustomer] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = () => {
    if (customer && date && time) {
      onAddReservation({ id: Date.now(), customer, date, time, status: "Confirmed" });
      setCustomer("");
      setDate("");
      setTime("");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add/Edit Reservation</h2>
      <input
        type="text"
        placeholder="Customer Name"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
      >
        Add Reservation
      </button>
    </div>
  );
};

export default ReservationForm;
