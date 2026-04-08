"use client";

const IMAGES = [
  "https://i.imgur.com/DDnZpfd.jpeg",
  "https://i.imgur.com/ZWypBVk.jpeg",
  "https://i.imgur.com/mretQsH.jpeg",
  "https://i.imgur.com/cLvc17r.jpeg",
];

export function GalleryFeed() {
  return (
    <section className="py-20 md:py-24 bg-card/30">
      
      {/* HEADER */}
      <div className="text-center mb-12 md:mb-16 px-6">
        <span className="text-[10px] font-subtitle tracking-[0.5em] text-primary uppercase block mb-4">
          MOMENTOS
        </span>

        <h2 className="text-3xl md:text-4xl font-headline tracking-tight text-primary italic">
          @casaluca.rd
        </h2>

        <p className="text-sm text-muted italic mt-4 max-w-xl mx-auto">
          Descubre experiencias reales, platos únicos y momentos especiales.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 px-4 md:px-6">
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className="aspect-square relative group overflow-hidden cursor-pointer border border-primary/10"
          >
            <img
              src={img}
              alt="Casa Luca Instagram"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
              <span className="text-white text-[10px] tracking-widest uppercase font-subtitle">
                Ver en Instagram
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* BOTÓN */}
      <div className="text-center mt-12">
        <a
          href="https://www.instagram.com/casaluca.rd/"
          target="_blank"
          rel="noreferrer"
          className="inline-block border border-primary/40 px-8 py-3 hover:bg-primary hover:text-background transition-all text-[10px] md:text-xs font-subtitle tracking-[0.25em] uppercase text-primary"
        >
          Ver perfil completo
        </a>
      </div>

    </section>
  );
}
