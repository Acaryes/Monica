import React from 'react';

export function BookingSection() {
  return (
    <section id="booking" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-purple-900 mb-12 text-center">Agendar Cita</h2>
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8">
          {/* Google Calendar Appointment Scheduling iframe with increased height and width */}
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0OLRhSxzsPU2qgZAIF7qzOGbWoiOWMXXYHEAwv_1AjZzfRhLVA3D9YM6GM8UhrLvWG5uH9Ib_E?gv=true"
            style={{ border: 0, width: '80vw', height: '90vh' }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
