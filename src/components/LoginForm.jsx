import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hata, setHata] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setHata("");
    try {
      const res = await axios.post("http://localhost:4000/api/users/login", { email, password });
      localStorage.setItem("token", res.data.token);
      // Kullanıcı rolüne göre yönlendirme:
      if (res.data.user.role === "admin") navigate("/admin");
      else if (res.data.user.role === "acente") navigate("/acente");
      else navigate("/user");
    } catch (err) {
      setHata("Giriş başarısız: " + (err.response?.data?.error || "Sunucu hatası"));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <form className="bg-white shadow-lg p-8 rounded-xl w-96" onSubmit={handleLogin}>
        <h2 className="text-2xl text-primary mb-4 font-bold">Giriş Yap</h2>
        {hata && <div className="text-red-600 text-sm mb-3">{hata}</div>}
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
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
