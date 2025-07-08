import React from "react";

const sampleSales = [
  { id: 1, agent: "Acente A", package: "Mini Asist Paket", sale: 299, commission: 40 },
  { id: 2, agent: "Acente B", package: "Full Kasko Asist", sale: 799, commission: 110 },
];

export default function AgentCommissions() {
  return (
    <div className="p-8">
      <h2 className="text-2xl text-primary font-bold mb-6">Acente Komisyonları</h2>
      <table className="w-full bg-white rounded-xl shadow overflow-hidden">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-2">Acente</th>
            <th className="p-2">Paket</th>
            <th className="p-2">Satış</th>
            <th className="p-2">Komisyon</th>
          </tr>
        </thead>
        <tbody>
          {sampleSales.map((sale) => (
            <tr key={sale.id} className="text-center border-t">
              <td className="p-2">{sale.agent}</td>
              <td className="p-2">{sale.package}</td>
              <td className="p-2">{sale.sale} TL</td>
              <td className="p-2">{sale.commission} TL</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
