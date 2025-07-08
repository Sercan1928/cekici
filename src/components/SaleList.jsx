import React from "react";

// Placeholder: Satış listesi için örnek component
const SaleList = ({ sales }) => (
  <div className="mt-6">
    <h3 className="text-lg font-semibold mb-2">Satışlar</h3>
    <ul>
      {sales.map((sale) => (
        <li key={sale.id} className="border-b py-2">
          Paket: {sale.package_name} | Fiyat: {sale.price}₺ | Komisyon: {sale.commission}₺
        </li>
      ))}
    </ul>
  </div>
);

export default SaleList;
