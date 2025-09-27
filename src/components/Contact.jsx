import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// 2. Inicializa el Swal que acepta contenido de React (JSX)
const MySwal = withReactContent(Swal);

export default function Contact() {
  // Usamos el estado para manejar los datos del formulario 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Maneja el cambio en cualquier input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Validación de campos
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      // Usamos MySwal para mostrar un mensaje de error personalizado
      MySwal.fire({
        title: <p style={{ color: '#F87171' }}>¡Error de Validación!</p>,
        html: <p>Por favor, completa todos los campos requeridos antes de enviar.</p>,
        icon: 'warning',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#F87171' // Color de botón personalizado
      });
      return; // Detiene el envío
    }

    // Muestra SweetAlert de "Cargando"
    MySwal.fire({
      title: 'Enviando Mensaje...',
      text: 'Por favor espera un momento.',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        MySwal.showLoading();
      }
    });

    // Envío de datos a Formspree usando fetch (asíncrono)
    try {
      const response = await fetch("https://formspree.io/f/mldejbvl", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // 4. Verifica la respuesta y muestra el SweetAlert final
      if (response.ok) {
        MySwal.fire({
          title: <p style={{ color: '#34D399' }}>¡Mensaje Enviado!</p>,
          html: <p>Gracias por contactarme, te responderé pronto.</p>,
          icon: 'success',
          confirmButtonText: 'Genial',
          confirmButtonColor: '#34D399'
        });
        // Limpia el formulario
        setFormData({ name: '', email: '', message: '' });
      } else {
        MySwal.fire({
          title: <p style={{ color: '#F87171' }}>Error al Enviar</p>,
          html: <p>Hubo un problema con el servicio de Formspree. Inténtalo más tarde.</p>,
          icon: 'error',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#F87171'
        });
      }
    } catch (fetchError) {
      MySwal.fire({
        title: <p style={{ color: '#F87171' }}>Error de Conexión</p>,
        html: <p>No se pudo conectar con el servidor. Revisa tu conexión a internet.</p>,
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#F87171'
      });
    }
  };

  return (
    <section id="contacto" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 section-divider pb-4">Contáctame</h2>
      <div className="max-w-xl mx-auto p-8 rounded-lg">
        {/* Asigna el manejador onSubmit al formulario */}
        <form onSubmit={handleSubmit}>
          
          {/* Campo Nombre */}
          <div className="mb-6 relative">
            <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full px-4 pl-12 py-3 form-input text-gray-200 rounded-lg focus:outline-none" 
              placeholder="Tu nombre" 
              value={formData.name} // Valor controlado
              onChange={handleChange} // Maneja el cambio
              required 
            />
          </div>
          
          {/* Campo Email */}
          <div className="mb-6 relative">
            <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full px-4 pl-12 py-3 form-input text-gray-200 rounded-lg focus:outline-none" 
              placeholder="Correo electrónico" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          
          {/* Campo Mensaje */}
          <div className="mb-6 relative">
            <i className="fas fa-comment-dots absolute left-4 top-4 text-gray-500"></i>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              className="w-full px-4 pl-12 py-3 form-input text-gray-200 rounded-lg focus:outline-none" 
              placeholder="Tu mensaje" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <div className="text-center">
            <button type="submit" className="btn-primary">Enviar Mensaje</button>
          </div>
        </form>
      </div>
    </section>
  );
}