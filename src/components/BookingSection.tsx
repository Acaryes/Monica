import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { Clock } from 'lucide-react';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('es', es);

const availableTimeSlots = [
  '09:00', '10:00', '11:00', '12:00', 
  '16:00', '17:00', '18:00'
];

export function BookingSection() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      alert('Por favor selecciona fecha y hora');
      return;
    }

    // Here you would typically integrate with Google Calendar API
    const appointmentDetails = {
      date: selectedDate,
      time: selectedTime,
      name,
      email,
      phone
    };

    console.log('Appointment details:', appointmentDetails);
    alert('¡Gracias! Te contactaremos pronto para confirmar tu cita.');
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 2);

  return (
    <section id="booking" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-purple-900 mb-12 text-center">Agendar Cita</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-purple-700 mb-2">Fecha</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  locale="es"
                  minDate={minDate}
                  maxDate={maxDate}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Selecciona una fecha"
                  className="w-full px-4 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
                />
              </div>
              <div>
                <label className="block text-purple-700 mb-2">Hora</label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Selecciona una hora</option>
                  {availableTimeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-purple-700 mb-2">Nombre completo</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-purple-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-purple-700 mb-2">Teléfono</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="bg-purple-50 p-4 rounded-md">
              <div className="flex items-center text-purple-700 mb-2">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-medium">Información importante</span>
              </div>
              <p className="text-sm text-purple-600">
                Las citas tienen una duración de 50 minutos. Recibirás un email de confirmación
                con los detalles de tu cita y el enlace para la videollamada si elegiste
                sesión online.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
            >
              Solicitar Cita
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}