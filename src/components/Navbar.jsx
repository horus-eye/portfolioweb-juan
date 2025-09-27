import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const projects = [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Habilidades", href: "#skills" },
    { label: "Contacto", href: "#contacto" },
  ];

  const handleToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#inicio" className="text-2xl font-bold tracking-wider">
          <img
            src="assets/img/me.jpg"
            alt="Foto de perfil de Juan Pérez"
            width="70"
            className="rounded-full border-2 border-transparent hover:border-cyan-400 transition-all"
          />
        </a>

        {/* Menú desktop */}
        <div className="hidden md:flex space-x-8">
          {projects.map((item, i) => (
            <a key={i} href={item.href} className="nav-link text-gray-300">
              {item.label}
            </a>
          ))}
        </div>

        {/* Botón móvil */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={handleToggle}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg w-full mt-4 rounded-lg overflow-hidden transition-all ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {projects.map((item, index) => (
            <li
              key={index}
              className={`opacity-0 animate-slideDown`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards",
                animationDuration: "0.3s",
              }}
            >
              <a
                href={item.href}
                className="nav-link text-gray-300 block py-2"
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
