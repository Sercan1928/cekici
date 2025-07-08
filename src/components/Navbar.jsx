import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="bg-primary text-white px-6 py-3 flex justify-between items-center shadow w-full">
      <div className="font-bold text-xl tracking-wider">Egeea Assist</div>
      <div className="space-x-5">
        <Link to="/" className="hover:underline">Ana Sayfa</Link>
        <Link to="/packages" className="hover:underline">Paketler</Link>
        {user?.role === "admin" && (
          <Link to="/admin" className="hover:underline">Admin Paneli</Link>
        )}
        {user?.role === "agent" && (
          <Link to="/acente/commissions" className="hover:underline">Acente Komisyonu</Link>
        )}
        <Link to="/contact" className="hover:underline">İletişim</Link>
        {user
          ? <span className="ml-2 italic">({user.email})</span>
          : <Link to="/login" className="hover:underline">Giriş</Link>
        }
      </div>
    </nav>
  );
};

export default Navbar;
