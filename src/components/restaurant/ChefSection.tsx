import Image from "next/image";

export function ChefSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* IMAGEN */}
        <div className="relative h-[500px] md:h-[600px] arched-portal gold-glow order-2 md:order-1">
          <Image
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
            alt="Chef profesional"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXTO */}
        <div className="space-y-8 order-1 md:order-2">

          <span className="text-[10px] font-subtitle tracking-[0.5em] text-primary uppercase">
            CONOCE AL CHEF
          </span>

          <h2 className="text-4xl md:text-5xl font-headline leading-tight text-primary">
            Cocina de autor <br /> con elegancia
          </h2>

          <p className="text-muted text-lg font-light leading-relaxed italic border-l-2 border-primary/20 pl-6">
            "Cada plato en Casa Luca nace del equilibrio entre técnica, sabor y presentación.
            Nuestra misión es convertir cada visita en una experiencia gastronómica memorable."
          </p>

          {/* BLOQUES */}
          <div className="grid grid-cols-2 gap-6 pt-6">

            <div className="luxury-card bg-primary/5 p-5 text-center">
              <span className="block text-lg font-headline text-primary">
                Cocina moderna
              </span>
              <span className="text-[10px] font-subtitle uppercase tracking-widest text-muted">
                Estilo contemporáneo
              </span>
            </div>

            <div className="luxury-card bg-primary/5 p-5 text-center">
              <span className="block text-lg font-headline text-primary">
                Ingredientes premium
              </span>
              <span className="text-[10px] font-subtitle uppercase tracking-widest text-muted">
                Selección cuidadosa
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
