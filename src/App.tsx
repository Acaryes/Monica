import React, { useState } from 'react';
import { Heart, MessageCircle, Sparkles, Clock } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { BookingSection } from './components/BookingSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-purple-50">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-purple-100 to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-purple-900 mb-6">
            Encuentra tu camino hacia el bienestar emocional
          </h1>
          <p className="text-xl text-purple-700 mb-8 max-w-2xl mx-auto">
            Psicoterapia personalizada para ayudarte a alcanzar una vida más plena y satisfactoria
          </p>
          <a href="#booking" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
            Agenda tu consulta
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
              alt="Psicóloga profesional"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-serif text-purple-900 mb-6">Sobre Mí</h2>
              <p className="text-purple-800 mb-4">
                Con más de 10 años de experiencia, me especializo en proporcionar un espacio seguro y acogedor donde puedas explorar tus emociones y desarrollar herramientas para enfrentar los desafíos de la vida.
              </p>
              <p className="text-purple-800 mb-4">
                Mi enfoque terapéutico se basa en la empatía, el respeto y la comprensión, adaptándome a las necesidades únicas de cada persona.
              </p>
              <div className="flex items-center text-purple-700 mt-6">
                <Heart className="w-5 h-5 mr-2" />
                <span>Comprometida con tu bienestar emocional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-purple-900 mb-12 text-center">Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-purple-600" />,
                title: "Terapia Individual",
                description: "Sesiones personalizadas para abordar tus necesidades específicas y alcanzar tus objetivos de bienestar."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-purple-600" />,
                title: "Manejo de Ansiedad",
                description: "Aprende técnicas efectivas para manejar el estrés y la ansiedad en tu vida diaria."
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-purple-600" />,
                title: "Consultas Online",
                description: "Sesiones virtuales cómodas y flexibles desde la comodidad de tu hogar."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">{service.title}</h3>
                <p className="text-purple-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-purple-900 mb-12 text-center">Costos</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border border-purple-100">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Sesión Presencial</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">$800 MXN</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-purple-700">
                  <Clock className="w-5 h-5 mr-2" />
                  50 minutos de duración
                </li>
                <li className="flex items-center text-purple-700">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Primera consulta de evaluación
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-purple-100">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Sesión Online</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">$700 MXN</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-purple-700">
                  <Clock className="w-5 h-5 mr-2" />
                  50 minutos de duración
                </li>
                <li className="flex items-center text-purple-700">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Videollamada segura
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <BookingSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-purple-900 mb-12 text-center">Contacto</h2>
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-purple-700 mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-purple-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-purple-700 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-purple-100 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">Dra. María Santos - Psicóloga Clínica</p>
          <p className="text-purple-300">Céd. Prof. 12345678</p>
        </div>
      </footer>
    </div>
  );
}

export default App;