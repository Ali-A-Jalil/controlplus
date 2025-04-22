import React, { useState } from "react";

const LeadSupport = () => {
  const [supportTickets, setSupportTickets] = useState([
    { id: 1, name: "Ahmed Ali", phone: "01012345678", issue: "Visa delay", note: "Waiting for embassy reply", issueTime: "2024-04-01 10:00", reminderTime: "2024-04-05 09:00", status: "Open" },
    { id: 2, name: "Sara Hassan", phone: "01087654321", issue: "Missing document", note: "Client didn’t upload", issueTime: "2024-04-02 15:00", reminderTime: "2024-04-03 10:00", status: "Pending" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    issue: "",
    note: "",
    issueTime: "",
    reminderTime: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddIssue = () => {
    const newTicket = {
      ...formData,
      id: Date.now(),
      status: "Open",
    };
    setSupportTickets((prev) => [...prev, newTicket]);
    setFormData({
      name: "",
      phone: "",
      issue: "",
      note: "",
      issueTime: "",
      reminderTime: "",
    });
    setShowForm(false);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Lead Support</h2>

      <button
        onClick={() => setShowForm(true)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
      >
        Add Issue
      </button>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Issue</th>
            <th className="border p-2">Note</th>
            <th className="border p-2">Issue Time</th>
            <th className="border p-2">Reminder</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {supportTickets.map((ticket) => (
            <tr key={ticket.id}>
              <td className="border p-2">{ticket.name}</td>
              <td className="border p-2">{ticket.phone}</td>
              <td className="border p-2">{ticket.issue}</td>
              <td className="border p-2">{ticket.note}</td>
              <td className="border p-2">{ticket.issueTime}</td>
              <td className="border p-2">{ticket.reminderTime}</td>
              <td className="border p-2">{ticket.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Add New Issue</h3>

            <div className="space-y-3">
              <input type="text" name="name" placeholder="Client Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
              <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" />
              <input type="text" name="issue" placeholder="Issue Type" value={formData.issue} onChange={handleChange} className="w-full p-2 border rounded" />
              <textarea name="note" placeholder="Note" value={formData.note} onChange={handleChange} className="w-full p-2 border rounded" />
              <input type="datetime-local" name="issueTime" value={formData.issueTime} onChange={handleChange} className="w-full p-2 border rounded" />
              <input type="datetime-local" name="reminderTime" value={formData.reminderTime} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
              <button onClick={handleAddIssue} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800">Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadSupport;
