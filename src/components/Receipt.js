import React from "react";
import { useLocation } from "react-router-dom";

const Receipt = () => {
  const location = useLocation();
  const { formData } = location.state || {}; // Get booking details

  if (!formData) {
    return <p>No booking details found.</p>;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Booking Receipt</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Aadhar Number:</strong> {formData.idProof}</p>
      <p><strong>Room Type:</strong> {formData.roomType}</p>
      <p><strong>Check-in Date:</strong> {formData.fromDate}</p>
      <p><strong>Check-out Date:</strong> {formData.toDate}</p>

      <p className="text-red-800">Please take an screenshot of the receipt is mandatory </p>
    </div>
  );
};

export default Receipt;
