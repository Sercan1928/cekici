import React, { useState } from "react";

const dummyPackages = [
  { id: 1, name: "Mini Asist Paket", description: "7/24 çekici + lastik değişim", price: "299 TL" },
  { id: 2, name: "Full Kasko Asist", description: "Limitsiz çekici + ikame araç", price: "799 TL" },
];

export default function Packages() {
  const [selected, setSelected] = useState(null);
  const [card, setCard] = useState({ isim: "", kart: "", tarih: "", cvc: "" });

  const handlePay = (e) => {
    e.preventDefault();
    alert(`Ödeme başarılı! Paket: ${selected.name}`);
    setSelected(null);
  };

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {dummyPackages.map((paket) => (
        <div key={paket.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border hover:scale-105 transition-all">
          <h3 className="text-xl text-primary font-bold mb-2">{paket.name}</h3>
          <p className="text-gray-700 mb-3 text-center">{paket.description}</p>
          <div className="text-lg font-bold text-secondary mb-3">{paket.price}</div>
          <button className="bg-primary text-white px-4 py-2 rounded-xl font-semibold hover:bg-cyan-700 transition"
            onClick={() => setSelected(paket)}
          >Satın Al</button>
        </div>
      ))}
      {selected && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-10">
          <form className="bg-white rounded-xl p-8 shadow-xl min-w-[350px] flex flex-col gap-2" onSubmit={handlePay}>
            <div className="font-bold mb-2">{selected.name} - {selected.price}</div>
            <input required placeholder="Kart Sahibi" className="border p-2 rounded" onChange={e => setCard(c => ({ ...c, isim: e.target.value }))} />
            <input required placeholder="Kart Numarası" className="border p-2 rounded" maxLength={16} onChange={e => setCard(c => ({ ...c, kart: e.target.value }))} />
            <div className="flex gap-2">
              <input required placeholder="AA/YY" className="border p-2 rounded w-1/2" maxLength={5} onChange={e => setCard(c => ({ ...c, tarih: e.target.value }))} />
              <input required placeholder="CVC" className="border p-2 rounded w-1/2" maxLength={3} onChange={e => setCard(c => ({ ...c, cvc: e.target.value }))} />
            </div>
            <button className="bg-primary text-white rounded mt-3 py-2">Ödemeyi Tamamla</button>
            <button type="button" className="text-red-500 mt-2" onClick={() => setSelected(null)}>İptal</button>
          </form>
        </div>
      )}
    </div>
  );
}
