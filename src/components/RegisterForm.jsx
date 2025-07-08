import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hata, setHata] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setHata("");
    try {
      await axios.post("http://localhost:4000/api/users/register", { name, email, password });
      navigate("/login");
    } catch (err) {
      setHata("Kayıt başarısız: " + (err.response?.data?.error || "Sunucu hatası"));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <form className="bg-white shadow-lg p-8 rounded-xl w-96" onSubmit={handleRegister}>
        <h2 className="text-2xl text-primary mb-4 font-bold">Kayıt Ol</h2>
        {hata && <div className="text-red-600 text-sm mb-3">{hata}</div>}
        <input
          className="w-full mb-3 p-2 border rounded"
          type="text"
          placeholder="Ad Soyad"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full mb-3 p-2 border rounded"
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full mb-4 p-2 border rounded"
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-cyan-700 transition-all">
          Kayıt Ol
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
