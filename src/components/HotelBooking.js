





// import React, { useState, useEffect } from "react";

// const HotelBooking = () => {
//   const [availableRooms, setAvailableRooms] = useState({ ac: 0, nonAc: 0 });
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     idProof: "",
//     roomType: "AC",
//     fromDate: "",
//     toDate: "",
//   });

//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     // Fetch available rooms from the backend
//     const fetchRooms = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/api/bookings/availableRooms");
//         const data = await response.json();
//         setAvailableRooms(data);
//       } catch (error) {
//         console.error("Error fetching available rooms:", error);
//       }
//     };
//     fetchRooms();
//   }, []);

//   const validateForm = () => {
//     let newErrors = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = "Full Name is required";
//     }

//     if (!/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = "Enter a valid 10-digit mobile number";
//     }

//     if (!/^\d{12}$/.test(formData.idProof)) {
//       newErrors.idProof = "Enter a valid 12-digit Aadhar number";
//     }

//     if (!formData.fromDate) {
//       newErrors.fromDate = "From Date is required";
//     }

//     if (!formData.toDate) {
//       newErrors.toDate = "To Date is required";
//     }

//     if (formData.fromDate && formData.toDate) {
//       const from = new Date(formData.fromDate);
//       const to = new Date(formData.toDate);
//       const today = new Date();

//       if (from < today.setHours(0, 0, 0, 0)) {
//         newErrors.fromDate = "From Date cannot be in the past";
//       }
//       if (to < from) {
//         newErrors.toDate = "To Date must be after From Date";
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     const roomTypeKey = formData.roomType === "AC" ? "ac" : "nonAc";

//     if (availableRooms[roomTypeKey] > 0) {
//       try {
//         const response = await fetch("http://localhost:8080/api/bookings", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//           setAvailableRooms((prev) => ({
//             ...prev,
//             [roomTypeKey]: prev[roomTypeKey] - 1,
//           }));
//           alert(`${formData.roomType} Room booked successfully!`);
//           setFormData({ name: "", phone: "", idProof: "", roomType: "AC", fromDate: "", toDate: "" });
//         } else {
//           alert("Failed to book room!");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("Something went wrong!");
//       }
//     } else {
//       alert(`No ${formData.roomType} rooms available!`);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
//       <h2 className="text-xl font-bold mb-4">Hotel Room Booking</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Full Name"
//             required
//             className="w-full p-2 border rounded"
//           />
//           {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//         </div>

//         <div>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Phone Number"
//             required
//             className="w-full p-2 border rounded"
//           />
//           {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//         </div>

//         <div>
//           <input
//             type="text"
//             name="idProof"
//             value={formData.idProof}
//             onChange={handleChange}
//             placeholder="Aadhar Number"
//             required
//             className="w-full p-2 border rounded"
//           />
//           {errors.idProof && <p className="text-red-500 text-sm">{errors.idProof}</p>}
//         </div>

//         <div>
//           <select name="roomType" value={formData.roomType} onChange={handleChange} className="w-full p-2 border rounded">
//             <option value="AC">AC Room</option>
//             <option value="Non-AC">Non-AC Room</option>
//           </select>
//         </div>

//         <div>
//           <input
//             type="date"
//             name="fromDate"
//             value={formData.fromDate}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//             min={new Date().toISOString().split("T")[0]} // Set min date to today
//           />
//           {errors.fromDate && <p className="text-red-500 text-sm">{errors.fromDate}</p>}
//         </div>

//         <div>
//           <input
//             type="date"
//             name="toDate"
//             value={formData.toDate}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//             min={formData.fromDate} // Ensure To Date is after From Date
//             placeholder="Select Check-Out Date"
//           />
//           {errors.toDate && <p className="text-red-500 text-sm">{errors.toDate}</p>}
//         </div>

//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Book Now</button>
//       </form>

//       <div className="mt-4">
//         <p>Available AC Rooms: {availableRooms.ac}</p>
//         <p>Available Non-AC Rooms: {availableRooms.nonAc}</p>
//       </div>
//     </div>
//   );
// };

// export default HotelBooking;


















// import React, { useState, useEffect } from "react";

// const HotelBooking = () => {
//   const [availableRooms, setAvailableRooms] = useState({ ac: 0, nonAc: 0 });
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     idProof: "",
//     roomType: "AC",
//     fromDate: "",
//     toDate: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false); // Loading state

//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/api/bookings/availableRooms");
//         const data = await response.json();
//         setAvailableRooms(data);
//       } catch (error) {
//         console.error("Error fetching available rooms:", error);
//       }
//     };
//     fetchRooms();
//   }, []);

//   const validateForm = () => {
//     let newErrors = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = "Full Name is required";
//     }

//     if (!/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = "Enter a valid 10-digit mobile number";
//     }

//     if (!/^\d{12}$/.test(formData.idProof)) {
//       newErrors.idProof = "Enter a valid 12-digit Aadhar number";
//     }

//     if (!formData.fromDate) {
//       newErrors.fromDate = "From Date is required";
//     }

//     if (!formData.toDate) {
//       newErrors.toDate = "To Date is required";
//     }

//     if (formData.fromDate && formData.toDate) {
//       const from = new Date(formData.fromDate);
//       const to = new Date(formData.toDate);
//       const today = new Date();

//       if (from < today.setHours(0, 0, 0, 0)) {
//         newErrors.fromDate = "From Date cannot be in the past";
//       }
//       if (to < from) {
//         newErrors.toDate = "To Date must be after From Date";
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     const roomTypeKey = formData.roomType === "AC" ? "ac" : "nonAc";

//     if (availableRooms[roomTypeKey] > 0) {
//       setLoading(true); // Start loading
//       try {
//         const response = await fetch("http://localhost:8080/api/bookings", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//           setAvailableRooms((prev) => ({
//             ...prev,
//             [roomTypeKey]: prev[roomTypeKey] - 1,
//           }));
//           alert(`${formData.roomType} Room booked successfully!`);
//           setFormData({ name: "", phone: "", idProof: "", roomType: "AC", fromDate: "", toDate: "" });
//         } else {
//           alert("Failed to book room!");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("Something went wrong!");
//       }
//       setLoading(false); // Stop loading
//     } else {
//       alert(`No ${formData.roomType} rooms available!`);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
//       <h2 className="text-xl font-bold mb-4">Hotel Room Booking</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Full Name"
//             required
//             className="w-full p-2 border rounded"
//           />
//           {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//         </div>

//         <div>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Phone Number"
//             required
//             className="w-full p-2 border rounded"
//           />
//           {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//         </div>

//         <div>
//           <input
//             type="text"
//             name="idProof"
//             value={formData.idProof}
//             onChange={handleChange}
//             placeholder="Aadhar Number"
//             required
//             className="w-full p-2 border rounded"
//           />
//           {errors.idProof && <p className="text-red-500 text-sm">{errors.idProof}</p>}
//         </div>

//         <div>
//           <select name="roomType" value={formData.roomType} onChange={handleChange} className="w-full p-2 border rounded">
//             <option value="AC">AC Room</option>
//             <option value="Non-AC">Non-AC Room</option>
//           </select>
//         </div>

//         <div>
//           <input
//             type="date"
//             name="fromDate"
//             value={formData.fromDate}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//             min={new Date().toISOString().split("T")[0]} // Set min date to today
//           />
//           {errors.fromDate && <p className="text-red-500 text-sm">{errors.fromDate}</p>}
//         </div>

//         <div>
//           <input
//             type="date"
//             name="toDate"
//             value={formData.toDate}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//             min={formData.fromDate} // Ensure To Date is after From Date
//           />
//           {errors.toDate && <p className="text-red-500 text-sm">{errors.toDate}</p>}
//         </div>

//         <button
//           type="submit"
//           className={`w-full text-white p-2 rounded ${loading ? "bg-gray-400" : "bg-blue-500"}`}
//           disabled={loading}
//         >
//           {loading ? (
//             <div className="flex items-center justify-center">
//               <svg className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
//               Booking...
//             </div>
//           ) : (
//             "Book Now"
//           )}
//         </button>
//       </form>

//       <div className="mt-4">
//         <p>Available AC Rooms: {availableRooms.ac}</p>
//         <p>Available Non-AC Rooms: {availableRooms.nonAc}</p>
//       </div>
//     </div>
//   );
// };

// export default HotelBooking;












import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const HotelBooking = () => {
  const [availableRooms, setAvailableRooms] = useState({ ac: 0, nonAc: 0 });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    idProof: "",
    roomType: "AC",
    fromDate: "",
    toDate: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/bookings/availableRooms");
        const data = await response.json();
        setAvailableRooms(data);
      } catch (error) {
        console.error("Error fetching available rooms:", error);
      }
    };
    fetchRooms();
  }, []);

  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }
    if (!/^\d{12}$/.test(formData.idProof)) {
      newErrors.idProof = "Enter a valid 12-digit Aadhar number";
    }
    if (!formData.fromDate) {
      newErrors.fromDate = "From Date is required";
    }
    if (!formData.toDate) {
      newErrors.toDate = "To Date is required";
    }

    if (formData.fromDate && formData.toDate) {
      const from = new Date(formData.fromDate);
      const to = new Date(formData.toDate);
      const today = new Date();

      if (from < today.setHours(0, 0, 0, 0)) {
        newErrors.fromDate = "From Date cannot be in the past";
      }
      if (to < from) {
        newErrors.toDate = "To Date must be after From Date";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const roomTypeKey = formData.roomType === "AC" ? "ac" : "nonAc";

    if (availableRooms[roomTypeKey] > 0) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setAvailableRooms((prev) => ({
            ...prev,
            [roomTypeKey]: prev[roomTypeKey] - 1,
          }));

          // Navigate to Receipt Page with booking details
          navigate("/receipt", { state: { formData } });
        } else {
          alert("Failed to book room!");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
      }
      setLoading(false);
    } else {
      alert(`No ${formData.roomType} rooms available!`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Hotel Room Booking</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="w-full p-2 border rounded" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="w-full p-2 border rounded" />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div>
          <input type="text" name="idProof" value={formData.idProof} onChange={handleChange} placeholder="Aadhar Number" required className="w-full p-2 border rounded" />
          {errors.idProof && <p className="text-red-500 text-sm">{errors.idProof}</p>}
        </div>

        <div>
          <select name="roomType" value={formData.roomType} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="AC">AC Room</option>
            <option value="Non-AC">Non-AC Room</option>
          </select>
        </div>

        <div>
          <input type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} required className="w-full p-2 border rounded" />
          {errors.fromDate && <p className="text-red-500 text-sm">{errors.fromDate}</p>}
        </div>

        <div>
          <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} required className="w-full p-2 border rounded" />
          {errors.toDate && <p className="text-red-500 text-sm">{errors.toDate}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded" disabled={loading}>
          {loading ? "Booking..." : "Book Now"}
        </button>
      </form>
    </div>
  );
};

export default HotelBooking;
