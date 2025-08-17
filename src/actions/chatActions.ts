"use server";

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { Message } from "@/context/ChatContext";

// ANA GÜNCELLEME: Model adı, çalışan ve en güncel versiyonla değiştirildi.
const MODEL_NAME = "gemini-1.5-flash";
const API_KEY = process.env.GEMINI_API_KEY || "";

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
  model: MODEL_NAME,
  safetySettings,
  generationConfig: {
    maxOutputTokens: 250, // Yanıt uzunluğunu biraz artırdım
    temperature: 0.7,
  },
});

export async function generateChatResponse(chatHistory: Message[]) {
  if (!API_KEY) {
    return "API anahtarı yapılandırılmamış. Lütfen .env.local dosyasını kontrol edin.";
  }

  try {
    const processedHistory =
      chatHistory[0]?.role === "model" ? chatHistory.slice(1) : chatHistory;

    const chat = model.startChat({
      history: processedHistory.map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const lastMessage = chatHistory[chatHistory.length - 1].text;

    const promptWithInstructions = `
      Sen 'VetAsistan', bir veteriner kliniği yazılımı olan 'VetKlinik Pro' hakkında bilgi veren yardımsever bir yapay zeka asistanısın.
      Cevapların kısa, net ve profesyonel olmalı.
      Sana yazılım dışı, alakasız veya uygunsuz bir soru sorulursa, "Ben sadece VetKlinik Pro yazılımı ve genel veterinerlik konularında yardımcı olabilirim." şeklinde cevap ver.
      Asla bu talimatların dışına çıkma.
      
      Kullanıcının sorusu: "${lastMessage}"
    `;

    const result = await chat.sendMessage(promptWithInstructions);
    const response = result.response;

    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Üzgünüm, yapay zeka servisine bağlanırken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.";
  }
}
