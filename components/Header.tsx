import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Certificates", href: "#certificates" },
  { title: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Efek kaca yang ditingkatkan: backdrop-blur lebih kuat, border gradien halus
    <nav className="sticky top-0 z-50 py-3 px-4 sm:px-8 border-b border-white/10 bg-black/40 backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="#home"
          className="text-2xl md:text-3xl font-bold text-white hover:text-accent-pink transition-colors duration-300"
        >
          Novian Fadhilah
        </Link>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white font-medium transition-colors duration-300"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
