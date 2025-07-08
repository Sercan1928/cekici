import React, { useState } from "react";

export default function AdminPackages() {
  const [packages, setPackages] = useState([
    { id: 1, name: "Mini Asist Paket", description: "7/24 çekici + lastik değişim", price: "299 TL" },
    { id: 2, name: "Full Kasko Asist", description: "Limitsiz çekici + ikame araç", price: "799 TL" },
  ]);
  const [form, setForm] = useState({ name: "", description: "", price: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.description || !form.price) return;
    setPackages([...packages, { ...form, id: Date.now() }]);
    setForm({ name: "", description: "", price: "" });
  };

  const handleDelete = (id) => setPackages(packages.filter((p) => p.id !== id));

  return (
    <div className="p-8">
      <h2 className="text-2xl text-primary font-bold mb-6">Paketleri Yönet</h2>
      <form className="flex gap-2 mb-6" onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} className="border rounded p-2" placeholder="Paket adı" />
        <input name="description" value={form.description} onChange={handleChange} className="border rounded p-2" placeholder="Açıklama" />
        <input name="price" value={form.price} onChange={handleChange} className="border rounded p-2" placeholder="Fiyat" />
        <button className="bg-primary text-white rounded px-4 py-2">Ekle</button>
      </form>
      <div className="grid md:grid-cols-3 gap-4">
        {packages.map((paket) => (
          <div key={paket.id} className="bg-white p-4 rounded-2xl shadow">
            <div className="font-bold text-primary">{paket.name}</div>
            <div className="text-gray-600">{paket.description}</div>
            <div className="font-semibold">{paket.price}</div>
            <button className="text-sm mt-2 text-red-600" onClick={() => handleDelete(paket.id)}>Sil</button>
          </div>
        ))}
      </div>
    </div>
  );
}
