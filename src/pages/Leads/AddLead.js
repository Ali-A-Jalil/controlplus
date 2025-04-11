import React, { useState } from "react";
import countries from "world-countries";
import Select from "react-select"; // استيراد react-select
import { parseWhatsAppMessage } from "../../utils/parseWhatsAppMessage";

const AddLead = ({ onLeadAdded }) => {
  const [lead, setLead] = useState({
    name: "",
    phone: "",
    service: "",
    residencyType: "",
    residencyFrom: "",
    residencyTo: "",
    passportNumber: "",
    email: "",
    country: "",
  });

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // تجهيز الدول مع الأعلام
  const countryOptions = countries.map((c) => ({
    value: c.name.common,
    label: (
      <div className="flex items-center gap-2">
        <span>{c.flag}</span>
        <span>{c.name.common}</span>
      </div>
    ),
  }));

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    for (let key in lead) {
      formData.append(key, lead[key]);
    }
    for (let file of files) {
      formData.append("files", file);
    }

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to add lead. Please try again.");
      }

      const newLead = await response.json();
      setLead({
        name: "",
        phone: "",
        service: "",
        residencyType: "",
        residencyFrom: "",
        residencyTo: "",
        passportNumber: "",
        email: "",
        country: "",
      });
      setFiles([]);
      setSuccess(true);

      if (onLeadAdded) {
        onLeadAdded(newLead);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const generateWhatsAppLink = () => {
    const text = `يرجى إرسال البيانات التالية كما هي:

الاسم:
رقم الهاتف:
رقم الباسبور:
الإيميل:

مثال:
الاسم: ${lead.name}
رقم الهاتف: ${lead.phone}
رقم الباسبور:
الإيميل:
`;
    return `https://wa.me/${lead.phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add New Lead</h2>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Lead added successfully!</p>}

      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input name="name" placeholder="Name" value={lead.name} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input name="phone" placeholder="Phone" value={lead.phone} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input name="email" placeholder="Email" value={lead.email} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="passportNumber" placeholder="Passport Number" value={lead.passportNumber} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="service" placeholder="Service Interested In" value={lead.service} onChange={handleChange} required className="w-full p-2 border rounded" />
        <select
        name="residencyType"
        value={lead.residencyType}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Residency Type</option>
        <option value="Student Residency">Student Residency</option>
        <option value="Tourist Residency">Tourist Residency</option>
        <option value="Work Residency">Work Residency</option>
        <option value="Family Residency">Family Residency</option>
        <option value="Humanitarian Residency">Humanitarian Residency</option>
        <option value="Permanent Residency">Permanent Residency</option>
      </select>


        
        <div className="flex gap-2">
          <input type="date" name="residencyFrom" value={lead.residencyFrom} onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="date" name="residencyTo" value={lead.residencyTo} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        {/* react-select لحقل الدولة */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Country</label>
          <Select
            options={countryOptions}
            onChange={(selected) => setLead({ ...lead, country: selected.value })}
            placeholder="Select Country"
            className="w-full"
          />
        </div>

        <input type="file" multiple onChange={handleFileChange} className="w-full" />

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className={`flex-1 p-2 text-white rounded ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"}`}
          >
            {loading ? "Adding..." : "Add Lead"}
          </button>

          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 p-2 bg-green-500 hover:bg-green-600 text-white text-center rounded"
          >
            إرسال عبر واتساب
          </a>
        </div>
      </form>
    </div>
  );
};

export default AddLead;
