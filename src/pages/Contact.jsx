import React, { useState } from "react";

export default function Contact() {
  const [ad, setAd] = useState("");
  const [email, setEmail] = useState("");
  const [mesaj, setMesaj] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("İletişim formu başarıyla gönderildi!");
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <form className="bg-white shadow-xl p-8 rounded-2xl w-96" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold text-primary mb-4">İletişim Formu</h2>
        <input
          className="w-full mb-3 p-2 border rounded"
          type="text"
          placeholder="Adınız Soyadınız"
          value={ad}
          onChange={(e) => setAd(e.target.value)}
        />
        <input
          className="w-full mb-3 p-2 border rounded"
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="w-full mb-4 p-2 border rounded"
          placeholder="Mesajınız"
          rows={4}
          value={mesaj}
          onChange={(e) => setMesaj(e.target.value)}
        />
        <button className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-cyan-700 transition">Gönder</button>
      </form>
    </div>
  );
}
