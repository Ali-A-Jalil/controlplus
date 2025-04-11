// AddCustomerWithInvoice.js
import React, { useState } from "react";

const servicesList = [
  { name: "English Course", price: 200 },
  { name: "Visa Support", price: 150 },
  { name: "Translation Service", price: 100 },
];

const AddCustomerWithInvoice = ({ onAddCustomer }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState(0);
  const [paid, setPaid] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [installments, setInstallments] = useState([]);

  const handleAddInstallment = () => {
    setInstallments([...installments, { date: "", amount: 0 }]);
  };

  const updateInstallment = (index, field, value) => {
    const updated = [...installments];
    updated[index][field] = value;
    setInstallments(updated);
  };

  const handleServiceChange = (e) => {
    const selected = servicesList.find((s) => s.name === e.target.value);
    setService(selected.name);
    setPrice(selected.price);
    setRemaining(selected.price - paid);
  };

  const handlePaidChange = (value) => {
    const paidAmount = Number(value);
    setPaid(paidAmount);
    setRemaining(price - paidAmount);
  };

  const handleAddCustomer = () => {
    if (name && email && phone) {
      const customerData = {
        id: Date.now(),
        name,
        email,
        phone,
        invoice: {
          service,
          price,
          paid,
          remaining,
          installments,
        },
      };
      onAddCustomer(customerData);
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setPrice(0);
      setPaid(0);
      setRemaining(0);
      setInstallments([]);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Add New Customer</h2>

      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 w-full mb-4 rounded" />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full mb-4 rounded" />
      <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="border p-2 w-full mb-4 rounded" />
      <input type="tel" placeholder="Phone" value={service} onChange={(e) => setPhone(e.target.value)} className="border p-2 w-full mb-4 rounded" />


      <h3 className="text-lg font-semibold mt-4 mb-2">Invoice</h3>

      <select value={service} onChange={handleServiceChange} className="border p-2 w-full mb-4 rounded">
        <option value="">Select Service</option>
        {servicesList.map((s, i) => (
          <option key={i} value={s.name}>{s.name}</option>
        ))}
      </select>

      <input type="number" placeholder="Price" value={price} readOnly className="border p-2 w-full mb-4 rounded bg-gray-100" />
      <input type="number" placeholder="Paid" value={paid} onChange={(e) => handlePaidChange(e.target.value)} className="border p-2 w-full mb-4 rounded" />
      <input type="number" placeholder="Remaining" value={remaining} readOnly className="border p-2 w-full mb-4 rounded bg-gray-100" />

      <h4 className="font-medium mb-2">Installment Dates</h4>
      {installments.map((inst, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input type="date" value={inst.date} onChange={(e) => updateInstallment(index, 'date', e.target.value)} className="border p-2 rounded w-1/2" />
          <input type="number" placeholder="Amount" value={inst.amount} onChange={(e) => updateInstallment(index, 'amount', e.target.value)} className="border p-2 rounded w-1/2" />
        </div>
      ))}
      <button onClick={handleAddInstallment} className="text-sm text-blue-500 hover:underline mb-4">+ Add Installment</button>

      <button onClick={handleAddCustomer} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
        Add Customer
      </button>
    </div>
  );
};

export default AddCustomerWithInvoice;
