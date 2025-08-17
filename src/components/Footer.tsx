import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com", name: "GitHub" },
  { icon: <FaTwitter />, href: "https://twitter.com", name: "Twitter" },
  { icon: <FaLinkedin />, href: "https://linkedin.com", name: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} VetKlinik Pro. Tüm Hakları Saklıdır.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
