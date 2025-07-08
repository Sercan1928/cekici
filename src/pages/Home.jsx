import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh]">
    <h1 className="text-4xl font-bold text-primary mb-6">Egeea Assist’e Hoşgeldiniz</h1>
    <p className="text-lg mb-6 text-secondary text-center max-w-xl">
      Araç çekici ve asistans hizmetinde Ege’nin yeni gücü! Avantajlı paketlerle tanışın.
    </p>
    <Link
      to="/packages"
      className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-cyan-700 transition-all"
    >
      Paketleri İncele
    </Link>
  </div>
);

export default Home;
