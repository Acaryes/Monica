import React, { useState } from 'react';
import { Heart, MessageCircle, Sparkles, Clock } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { BookingSection } from './components/BookingSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gray-200">
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
              src="https://scontent.fmxl1-1.fna.fbcdn.net/v/t39.30808-6/441403471_891003739709111_8601551531553612574_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=3SHlBkSnmt0Q7kNvgFaWs2q&_nc_zt=23&_nc_ht=scontent.fmxl1-1.fna&_nc_gid=A5m9Dcy-SI5oYjvvNlPFEGu&oh=00_AYC4sWc6FrlPoaa6AfX0KWp9X08g9wVRGhG3O3FBl1YuDQ&oe=6737863B"
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
              <ul className="space-y-4 text-purple-700">
              <li>✓ Licenciada en Psicología por la UABC</li>
              <li>✓ Maestría en Terapia Cognitivo-Conductual</li>
              <li>✓ Especialización en Terapia de Pareja</li>
              <li>✓ Miembro de la Asociación Mexicana de Psicología</li>
            </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-purple-900 mb-12 text-center">Servicios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-purple-600" />,
                title: "Terapia Individual",
                description: "Sesiones personalizadas para abordar tus necesidades específicas y alcanzar tus objetivos de bienestar."
              },
              {
               icon: <Heart className="w-8 h-8 text-purple-600" />,
               title: "Terapia de Pareja",
               description: "Mejora la comunicación y fortalece tu relación"
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
      <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-purple-900 mb-12 text-center">Costos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-200 rounded-lg shadow-md p-8 text-center">
            <h3 className="text-xl font-serif text-purple-800 mb-4">Primera Consulta</h3>
            <p className="text-3xl font-bold text-purple-900 mb-4">$800 MXN</p>
            <p className="text-purple-700 mb-6">Sesión de evaluación inicial de 60 minutos</p>
            <a
              href="#appointment"
              className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Agendar cita
            </a>
          </div>
          
          <div className="bg-gray-200 rounded-lg shadow-md p-8 text-center transform scale-105">
            <div className="bg-purple-600 text-white py-1 px-4 rounded-full text-sm inline-block mb-4">
              Más popular
            </div>
            <h3 className="text-xl font-serif text-purple-800 mb-4">Terapia Individual</h3>
            <p className="text-3xl font-bold text-purple-900 mb-4">$700 MXN</p>
            <p className="text-purple-700 mb-6">Sesión regular de 50 minutos</p>
            <a
              href="#appointment"
              className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Agendar cita
            </a>
          </div>

          <div className="bg-gray-200 rounded-lg shadow-md p-8 text-center">
            <h3 className="text-xl font-serif text-purple-800 mb-4">Terapia de Pareja</h3>
            <p className="text-3xl font-bold text-purple-900 mb-4">$900 MXN</p>
            <p className="text-purple-700 mb-6">Sesión de 60 minutos para parejas</p>
            <a
              href="#appointment"
              className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Agendar cita
            </a>
          </div>
        </div>
      </div>
    </section>

      {/* Booking Section */}
      <BookingSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-purple-900 mb-12 text-center">Contacto</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-200 rounded-lg shadow-md p-8">
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
          <div className="bg-gray-200 rounded-lg shadow-md p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Ubicación</h3>
              <p className="text-purple-700 mb-2">Av Reforma 973, Segunda</p>
              <p className="text-purple-700 mb-4">21100 Mexicali, B.C.</p>
            </div>
            <div className="w-full h-[450px] rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.8183737415566!2d-115.48126362423065!3d32.66427708973887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d77aa8cfbddfc9%3A0xc1e4925e28adca03!2sAv%20Reforma%20973%2C%20Segunda%2C%2021100%20Mexicali%2C%20B.C.!5e0!3m2!1ses-419!2smx!4v1730712859736!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-purple-100 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">Psic. Monica Nicte Ha</p>
          <p className="text-purple-300">Céd. Prof. 12345678</p>
        </div>
      </footer>
    </div>
  );
}

export default App;