import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h2 className="text-2xl text-primary font-bold mb-6">Admin Paneli</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/admin/packages" className="block p-6 rounded-xl shadow bg-white hover:bg-primary hover:text-white font-semibold transition">Paketler</Link>
        <Link to="/admin/agents" className="block p-6 rounded-xl shadow bg-white hover:bg-primary hover:text-white font-semibold transition">Acenteler</Link>
        <Link to="/admin/sales" className="block p-6 rounded-xl shadow bg-white hover:bg-primary hover:text-white font-semibold transition">Satış Raporları</Link>
        <Link to="/admin/settings" className="block p-6 rounded-xl shadow bg-white hover:bg-primary hover:text-white font-semibold transition">Ayarlar</Link>
      </div>
    </div>
  );
}
