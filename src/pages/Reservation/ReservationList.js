import React from "react";

const ReservationList = ({ reservations }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Reservations</h2>
      <table className="table-auto w-full bg-gray-100 rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id} className="text-center">
              <td className="px-4 py-2">{reservation.customer}</td>
              <td className="px-4 py-2">{reservation.date}</td>
              <td className="px-4 py-2">{reservation.time}</td>
              <td className="px-4 py-2">{reservation.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
