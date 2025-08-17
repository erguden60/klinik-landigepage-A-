"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import { useChat } from "@/context/ChatContext";
import { FaPaperPlane, FaTimes, FaSpinner } from "react-icons/fa";

interface ChatWindowProps {
  closeChat: () => void;
}

export default function ChatWindow({ closeChat }: ChatWindowProps) {
  const { messages, addMessage, isLoading } = useChat();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const messageToSend = input;
    setInput("");
    await addMessage(messageToSend);
  };

  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-t-xl border-b border-zinc-700">
        <h3 className="text-lg font-semibold text-white">VetAsistan</h3>
        <button onClick={closeChat} className="text-gray-400 hover:text-white">
          <FaTimes size={20} />
        </button>
      </header>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-[80%] break-words ${
                msg.role === "user"
                  ? "bg-cyan-600 text-white"
                  : "bg-zinc-700 text-gray-200"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="p-3 rounded-lg bg-zinc-700 text-gray-200 flex items-center space-x-2">
              <FaSpinner className="animate-spin" />
              <span>Yazıyor...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="p-4 bg-zinc-800/50 rounded-b-xl border-t border-zinc-700"
      >
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Mesajınızı yazın..."
            className="flex-1 bg-zinc-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="ml-3 p-3 bg-cyan-500 rounded-full text-white hover:bg-cyan-600 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
            aria-label="Gönder"
            disabled={isLoading || !input.trim()}
          >
            <FaPaperPlane />
          </button>
        </div>
      </form>
    </div>
  );
}
