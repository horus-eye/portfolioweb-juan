export default function Footer() {
  return (
    <footer className="bg-black py-12 text-gray-400">
      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Contacto</h4>
          <p className="mb-2"><i className="fas fa-map-marker-alt mr-2 icon-turquoise"></i> Guadalajara, Jalisco</p>
          <p className="mb-2"><i className="fas fa-envelope mr-2 icon-turquoise"></i> criscapevans19@gmail.com</p>
          <p><i className="fas fa-phone mr-2 icon-turquoise"></i> 3312895667</p>
        </div>

        <div className="md:text-center">
          <h4 className="text-xl font-semibold mb-4 text-white">Enlaces</h4>
          <ul className="space-y-2">
            <li><a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a></li>
            <li><a href="#skills" className="hover:text-white transition-colors">Habilidades</a></li>
            <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
          </ul>
        </div>  

        <div className="md:text-right">
          <h4 className="text-xl font-semibold mb-4 text-white">Sígueme</h4>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="https://github.com/horus-eye" className="hover:text-white transition-colors text-3xl"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/juanper-martinez" className="hover:text-white transition-colors text-3xl"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
        <p>&copy; 2025 Juan Pérez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
