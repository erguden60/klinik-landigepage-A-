"use client";

import { useState } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";
import ChatWindow from "./ChatWindow";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sohbet Penceresi */}
      <div
        className={`fixed bottom-24 right-5 sm:right-10 w-[calc(100%-40px)] sm:w-96 h-[60vh] bg-zinc-900/80 backdrop-blur-xl rounded-xl shadow-2xl transition-all duration-300 z-50 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ChatWindow closeChat={() => setIsOpen(false)} />
      </div>

      {/* Sohbet Baloncuğu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 sm:right-10 h-16 w-16 bg-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg z-50 hover:bg-cyan-600 transition-transform duration-300 hover:scale-110 cursor-pointer"
        aria-label={isOpen ? "Sohbeti Kapat" : "Sohbeti Aç"}
      >
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
      </button>
    </>
  );
}
