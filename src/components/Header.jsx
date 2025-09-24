export default function Header() {
  return (
    <header id="inicio" className="relative h-screen flex flex-col justify-center items-center text-center p-6 parallax-bg">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative z-10 p-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hola, soy <span className="text-glow">Juan Pérez</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-8">
          Desarrollador Full-Stack apasionado por la tecnología.
        </p>
        <a href="#proyectos" className="btn-primary">Mis Proyectos</a>
      </div>
    </header>
  );
}
