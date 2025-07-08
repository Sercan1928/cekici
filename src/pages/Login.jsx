import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Demo: Giriş denemesi");
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <form className="bg-white shadow p-8 rounded-2xl w-96" onSubmit={handleLogin}>
        <h2 className="text-xl font-bold text-primary mb-4">Giriş Yap</h2>
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
        <button className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-cyan-700 transition">Giriş Yap</button>
      </form>
    </div>
  );
}
