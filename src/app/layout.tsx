import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot"; // Yeni
import { ChatProvider } from "@/context/ChatContext"; // Yeni

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  /* ... */
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <ChatProvider>
          {" "}
          {/* Provider'ı buraya ekliyoruz */}
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatBot /> {/* ChatBot'u da buraya ekliyoruz */}
        </ChatProvider>
      </body>
    </html>
  );
}
