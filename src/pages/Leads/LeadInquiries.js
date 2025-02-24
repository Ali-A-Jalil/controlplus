import React, { useState, useEffect, useCallback } from "react";

const LeadInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // بيانات وهمية لاستخدامها إذا فشل جلب البيانات
  const dummyInquiries = [
    { id: 1, name: "Ahmed Ali", message: "What documents are required for a visa?", date: "2024-02-15" },
    { id: 2, name: "Sara Mohamed", message: "How much does document translation cost?", date: "2024-02-14" },
    { id: 3, name: "Omar Hassan", message: "Do you provide business consultation?", date: "2024-02-13" },
  ];

  // دالة لجلب البيانات من الـ API
  const fetchInquiries = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch("/api/leads/inquiries");

      // التحقق من أن الاستجابة هي JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response format: Expected JSON");
      }

      if (!response.ok) {
        throw new Error(`Failed to fetch inquiries: ${response.status}`);
      }

      const data = await response.json();
      setInquiries(data.length > 0 ? data : dummyInquiries); // إذا لم توجد بيانات، استخدم البيانات الوهمية
    } catch (err) {
      setError(err.message);
      setInquiries(dummyInquiries); // استخدام البيانات الوهمية في حالة الخطأ
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInquiries();
  }, [fetchInquiries]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Lead Inquiries</h2>

      {loading ? (
        <p className="text-gray-500">Loading inquiries...</p>
      ) : error ? (
        <div className="text-red-500">
          <p>{error}</p>
          <button
            onClick={fetchInquiries}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      ) : inquiries.length === 0 ? (
        <p className="text-gray-500">No inquiries found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Inquiry</th>
                <th className="border p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-gray-50">
                  <td className="border p-2">{inquiry.name}</td>
                  <td className="border p-2">{inquiry.message}</td>
                  <td className="border p-2">{new Date(inquiry.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LeadInquiries;
