import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot"; 
import { ChatProvider } from "@/context/ChatContext"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
 
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
         
          
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatBot /> 
        </ChatProvider>
      </body>
    </html>
  );
}
