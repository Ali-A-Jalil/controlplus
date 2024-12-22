import React, { useState } from "react";

const CustomerInquiries = () => {
  const [inquiries, setInquiries] = useState([
    { id: 1, customer: "Ali", message: "Need assistance with my account.", responded: false },
    { id: 2, customer: "Sara", message: "How can I reset my password?", responded: false },
  ]);

  const handleRespond = (id) => {
    setInquiries(
      inquiries.map((inquiry) =>
        inquiry.id === id ? { ...inquiry, responded: true } : inquiry
      )
    );
    alert(`Responded to Inquiry ID: ${id}`);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Customer Inquiries</h2>
      <ul>
        {inquiries.map((inquiry) => (
          <li
            key={inquiry.id}
            className="border-b py-4 text-gray-700 flex justify-between"
          >
            <span>
              <strong>{inquiry.customer}:</strong> {inquiry.message}
            </span>
            <button
              className={`${
                inquiry.responded ? "text-gray-500 cursor-not-allowed" : "text-blue-500 hover:underline"
              }`}
              onClick={() => !inquiry.responded && handleRespond(inquiry.id)}
              disabled={inquiry.responded}
            >
              {inquiry.responded ? "Responded" : "Respond"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerInquiries;
