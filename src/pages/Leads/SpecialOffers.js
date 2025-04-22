import React, { useState } from "react";

const SpecialOffers = () => {
  const [offers, setOffers] = useState([
    { id: 1, title: "10% Off", description: "Get 10% off your first consultation!" },
    { id: 2, title: "Free Follow-Up", description: "Enjoy one free follow-up session." },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newOffer, setNewOffer] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setNewOffer({ ...newOffer, [e.target.name]: e.target.value });
  };

  const handleAddOffer = () => {
    if (!newOffer.title.trim() || !newOffer.description.trim()) return;

    const newEntry = {
      ...newOffer,
      id: Date.now(),
    };
    setOffers((prev) => [...prev, newEntry]);
    setNewOffer({ title: "", description: "" });
    setShowForm(false);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Special Offers for Leads</h2>

      <button
        onClick={() => setShowForm(true)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
      >
        Add Offer
      </button>

      <ul className="list-disc pl-6 space-y-2">
        {offers.map((offer) => (
          <li key={offer.id}>
            <strong>{offer.title}:</strong> {offer.description}
          </li>
        ))}
      </ul>

      {/* Modal for adding new offer */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Add New Offer</h3>

            <div className="space-y-3">
              <input
                type="text"
                name="title"
                placeholder="Offer Title"
                value={newOffer.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <textarea
                name="description"
                placeholder="Offer Description"
                value={newOffer.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddOffer}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800"
              >
                Add Offer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecialOffers;
