import React, { useState, useEffect } from "react";

const LeadSupport = () => {
  const [supportTickets, setSupportTickets] = useState([]);

  useEffect(() => {
    fetch("/api/leads/support")
      .then((response) => response.json())
      .then((data) => setSupportTickets(data));
  }, []);

  return (
    <div>
      <h2>Lead Support</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Issue</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {supportTickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.name}</td>
              <td>{ticket.issue}</td>
              <td>{ticket.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadSupport;
