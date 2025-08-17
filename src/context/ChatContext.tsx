"use client";

import { createContext, useState, ReactNode, useContext } from "react";
import { generateChatResponse } from "@/actions/chatActions";

export interface Message {
  role: "user" | "model";
  text: string;
}

interface ChatContextType {
  messages: Message[];
  addMessage: (text: string) => Promise<void>;
  isLoading: boolean;
}

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined
);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Merhaba! Ben VetAsistan. Yazılımımız veya veterinerlikle ilgili sorularınızı yanıtlayabilirim.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = async (text: string) => {
    setIsLoading(true);

    const newUserMessage: Message = { role: "user", text };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);

    try {
      const botResponseText = await generateChatResponse(updatedMessages);
      const newBotMessage: Message = { role: "model", text: botResponseText };

      setMessages((prevMessages) => [...prevMessages, newBotMessage]);
    } catch (error) {
      console.error("Failed to get response from bot:", error);
      const errorMessage: Message = {
        role: "model",
        text: "Üzgünüm, bir hata oluştu.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage, isLoading }}>
      {children}
    </ChatContext.Provider>
  );
}
