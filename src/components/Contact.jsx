export default function Contact() {
  return (
    <section id="contacto" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 section-divider pb-4">Contáctame</h2>
      <div className="max-w-xl mx-auto p-8 rounded-lg">
        <form action="#" method="POST">
          <div className="mb-6 relative">
            <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
            <input type="text" id="name" name="name" className="w-full px-4 pl-12 py-3 form-input text-gray-200 rounded-lg focus:outline-none" placeholder="Tu nombre" required />
          </div>
          <div className="mb-6 relative">
            <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
            <input type="email" id="email" name="email" className="w-full px-4 pl-12 py-3 form-input text-gray-200 rounded-lg focus:outline-none" placeholder="Correo electrónico" required />
          </div>
          <div className="mb-6 relative">
            <i className="fas fa-comment-dots absolute left-4 top-4 text-gray-500"></i>
            <textarea id="message" name="message" rows="5" className="w-full px-4 pl-12 py-3 form-input text-gray-200 rounded-lg focus:outline-none" placeholder="Tu mensaje" required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn-primary">Enviar Mensaje</button>
          </div>
        </form>
      </div>
    </section>
  );
}
