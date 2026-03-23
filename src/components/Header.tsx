// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => (
  <header className="bg-gray-900 text-white p-6 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Влад Афанасьев — Видеомонтаж</h1>
    <nav>
      <a href="#videos" className="px-3 hover:underline">Видео</a>
      <a href="#contacts" className="px-3 hover:underline">Контакты</a>
    </nav>
  </header>
);

export default Header;