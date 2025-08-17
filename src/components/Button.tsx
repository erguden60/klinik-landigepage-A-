// Bu bir istemci bileşeni olacak çünkü kullanıcı etkileşimini (onClick) yönetebilir.
"use client";

import React from "react";

// Butonumuzun alacağı props'ları (özellikleri) tanımlıyoruz.
interface ButtonProps {
  children: React.ReactNode; // Butonun içindeki metin veya ikon
  onClick?: () => void; // Tıklanma olayı (opsiyonel)
  className?: string; // Ekstra stil sınıfları eklemek için (opsiyonel)
}

export default function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  // Temel stil sınıflarını burada birleştiriyoruz.
  const baseClasses =
    "px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-all duration-300";

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
}
