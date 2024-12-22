import React, { useState } from "react";

const SpecialOffers = () => {
  const [offers, setOffers] = useState([
    { id: 1, description: "20% off for first-time users." },
    { id: 2, description: "Refer a friend and get 10% off your next service." },
  ]);

  const [editOffer, setEditOffer] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleEdit = (offer) => {
    setEditOffer(offer);
    setEditedText(offer.description);
  };

  const handleSaveEdit = () => {
    setOffers(
      offers.map((offer) =>
        offer.id === editOffer.id ? { ...offer, description: editedText } : offer
      )
    );
    setEditOffer(null);
    setEditedText("");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Special Offers</h2>
      <ul>
        {offers.map((offer) => (
          <li
            key={offer.id}
            className="border-b py-4 text-gray-700 flex justify-between"
          >
            <span>{offer.description}</span>
            <button
              className="text-blue-500 hover:underline"
              onClick={() => handleEdit(offer)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>

      {editOffer && (
        <div className="mt-4 bg-gray-100 p-4 rounded shadow">
          <h3 className="text-lg font-bold mb-2">Edit Offer</h3>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="border p-2 w-full rounded mb-2"
          />
          <button
            onClick={handleSaveEdit}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default SpecialOffers;
