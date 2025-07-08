import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import AdminDashboard from "./pages/AdminDashboard";
import AdminPackages from "./pages/AdminPackages";
import AgentCommissions from "./pages/AgentCommissions";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f5faff]">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Paneli */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/packages" element={<AdminPackages />} />

            {/* Acente Paneli */}
            <Route path="/acente/commissions" element={<AgentCommissions />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
