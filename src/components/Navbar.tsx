import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <span className="text-2xl font-serif text-purple-800">Dra. María Santos</span>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6 text-purple-800" /> : <Menu className="h-6 w-6 text-purple-800" />}
          </button>

          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-purple-900 hover:text-purple-700">Sobre Mí</a>
            <a href="#services" className="text-purple-900 hover:text-purple-700">Servicios</a>
            <a href="#pricing" className="text-purple-900 hover:text-purple-700">Costos</a>
            <a href="#booking" className="text-purple-900 hover:text-purple-700">Agendar Cita</a>
            <a href="#contact" className="text-purple-900 hover:text-purple-700">Contacto</a>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" className="block px-3 py-2 text-purple-900" onClick={() => setIsMenuOpen(false)}>Sobre Mí</a>
            <a href="#services" className="block px-3 py-2 text-purple-900" onClick={() => setIsMenuOpen(false)}>Servicios</a>
            <a href="#pricing" className="block px-3 py-2 text-purple-900" onClick={() => setIsMenuOpen(false)}>Costos</a>
            <a href="#booking" className="block px-3 py-2 text-purple-900" onClick={() => setIsMenuOpen(false)}>Agendar Cita</a>
            <a href="#contact" className="block px-3 py-2 text-purple-900" onClick={() => setIsMenuOpen(false)}>Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}