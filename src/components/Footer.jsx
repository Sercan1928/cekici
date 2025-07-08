import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-4 mt-8 rounded-t-2xl w-full">
      <div>Egeea Assist © {new Date().getFullYear()} | Tüm hakları saklıdır.</div>
      <div className="mt-1 text-sm">İletişim: info@egeeaassist.com | 0850 XXX XX XX</div>
    </footer>
  );
}
