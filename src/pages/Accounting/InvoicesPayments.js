import React, { useState } from "react";

const InvoicesPayments = () => {
  const [invoices, setInvoices] = useState([
    { id: 1, client: "Client A", amount: 1000, status: "Paid" },
    { id: 2, client: "Client B", amount: 2000, status: "Unpaid" },
  ]);

  const markAsPaid = (id) => {
    setInvoices((prev) =>
      prev.map((invoice) =>
        invoice.id === id ? { ...invoice, status: "Paid" } : invoice
      )
    );
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Invoices and Payments</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Client</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td className="border px-4 py-2">{invoice.client}</td>
              <td className="border px-4 py-2">${invoice.amount}</td>
              <td className="border px-4 py-2">{invoice.status}</td>
              <td className="border px-4 py-2">
                {invoice.status === "Unpaid" && (
                  <button
                    onClick={() => markAsPaid(invoice.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Mark as Paid
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoicesPayments;
