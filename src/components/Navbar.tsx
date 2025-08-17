import Link from "next/link";
import { FaPaw } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-zinc-950/80 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <FaPaw className="h-8 w-8 text-cyan-400" />
          <span className="text-2xl font-bold text-white">VetKlinik Pro</span>
        </Link>

        {/* Navigasyon Linkleri (İleride eklenebilir) */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Örnek Linkler:
          <Link href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">Özellikler</Link>
          <Link href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">Hakkımızda</Link>
          <Link href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">İletişim</Link>
          */}
        </nav>

        {/* CTA Butonu */}
        <a
          href="#"
          className="px-5 py-2 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-all duration-300"
        >
          Giriş Yap
        </a>
      </div>
    </header>
  );
}
