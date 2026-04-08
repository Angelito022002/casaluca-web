"use client";

import { useState } from "react";

export function ReservationSection() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");

  const handleWhatsAppReservation = () => {
    const message = `Hola, quiero hacer una reserva en Casa Luca.

Nombre: ${name}
Cantidad de personas: ${guests}
Fecha: ${date}
Hora: ${time}
Teléfono: ${phone}`;

    const whatsappUrl = `https://wa.me/18293424146?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="border border-primary/20 bg-card px-6 py-10 md:px-12 md:py-14 text-center">
          <span className="text-[10px] font-subtitle tracking-[0.4em] text-primary uppercase block mb-4">
            Reservas
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline text-primary mb-6">
            Reserva tu mesa
          </h2>

          <p className="text-muted italic text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Vive una experiencia inolvidable en Casa Luca. Completa tus datos y envía tu solicitud de reserva por WhatsApp.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <input
              type="text"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-primary/20 bg-transparent px-4 py-4 text-foreground placeholder:text-muted focus:outline-none"
            />

            <input
              type="number"
              placeholder="Cantidad de personas"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full border border-primary/20 bg-transparent px-4 py-4 text-foreground placeholder:text-muted focus:outline-none"
            />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-primary/20 bg-transparent px-4 py-4 text-foreground placeholder:text-muted focus:outline-none"
            />

            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border border-primary/20 bg-transparent px-4 py-4 text-foreground placeholder:text-muted focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full md:col-span-2 border border-primary/20 bg-transparent px-4 py-4 text-foreground placeholder:text-muted focus:outline-none"
            />
          </div>

          <div className="mt-8">
            <button
              onClick={handleWhatsAppReservation}
              className="w-full md:w-auto border border-primary bg-primary text-background px-8 py-4 uppercase tracking-[0.25em] hover:opacity-90 transition-all"
            >
              CONFIRMAR RESERVACIÓN 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
