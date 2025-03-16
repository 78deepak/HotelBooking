import logo from './logo.svg';
import './App.css';
import './components/HotelBooking'
import HotelBooking from './components/HotelBooking';
import Receipt from "./components/Receipt";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Receipt from "./Receipt";

function App() {
  return (
    
    <Routes>
    <Route path="/" element={<HotelBooking />} />
    <Route path="/receipt" element={<Receipt />} />
    </Routes>

  );
}

export default App;
