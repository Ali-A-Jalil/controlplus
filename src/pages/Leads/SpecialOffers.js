import React, { useState, useEffect } from "react";

const SpecialOffers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("/api/leads/offers")
      .then((response) => response.json())
      .then((data) => setOffers(data));
  }, []);

  return (
    <div>
      <h2>Special Offers for Leads</h2>
      <ul>
        {offers.map((offer) => (
          <li key={offer.id}>
            <strong>{offer.title}:</strong> {offer.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecialOffers;
