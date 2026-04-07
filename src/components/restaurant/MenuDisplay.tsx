"use client";

import Image from "next/image";

const MENU_ITEMS = [
  {
    section: "ENTRADAS",
    items: [
      { name: "Casa Luca cheese bread", price: "RD$345", desc: "Espinaca, pernod y pan gratinado" },
      { name: "Croquetas de Fuet", price: "RD$425", desc: "Aceite de trufa, rúcula y parmesano" },
      { name: "CL Shrimp", desc: "Camarones envueltos en masa wonton con queso de cabra y queso robiola", price: "RD$1,250" }
    ]
  },
  {
    section: "PLATOS FUERTES",
    items: [
      { name: "Pulpo Yakitori", price: "RD$1,400" },
      { name: "Carpaccio de zucchini", desc: "Queso de cabra y tomate confit", price: "RD$550" },
      { name: "Carpaccio de Pescado Blanco", desc: "Con olio de limón y albahaca fresca", price: "RD$695" }
    ]
  },
  {
    section: "POSTRES",
    items: [
      { name: "Casa Luca chocolate cake", price: "RD$900" },
      { name: "Guava bread pudding", price: "RD$575" }
    ]
  }
];

export function MenuDisplay() {
  return (
    <section id="menu" className="py-16 md:py-24 bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[10px] font-subtitle tracking-widest text-primary uppercase mb-4 block">
            SABOR AUTÉNTICO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline tracking-tight text-primary">
            Sabores diseñados para sorprender
          </h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="text-sm md:text-base text-muted italic mt-6 max-w-2xl mx-auto">
            Una selección de entradas, platos principales y postres pensados para una experiencia gastronómica elegante.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">

          {/* IZQUIERDA */}
          <div className="space-y-12">

            {/* ENTRADAS */}
            <div className="space-y-6">
              <div className="arched-portal h-[220px] sm:h-[260px] gold-glow relative overflow-hidden mb-6">
                <Image
                  src="https://i.imgur.com/ZCGGJrj.jpeg"
                  alt="Entradas"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="font-headline text-2xl md:text-3xl text-primary/90 border-b border-primary/20 pb-3">
                ENTRADAS
              </h3>

              {MENU_ITEMS[0].items.slice(0, 2).map((item, i) => (
                <div key={i} className="group">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                    <h4 className="font-headline text-lg md:text-xl group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>

                    <div className="hidden sm:block flex-1 border-b border-dashed border-primary/20" />

                    <span className="font-subtitle text-primary">
                      {item.price}
                    </span>
                  </div>

                  {item.desc && (
                    <p className="text-sm text-muted italic">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* PLATOS FUERTES */}
            <div className="space-y-6">
              <div className="arched-portal h-[280px] sm:h-[320px] gold-glow relative overflow-hidden mb-6">
                <Image
                  src="https://i.imgur.com/xeojJPQ.jpeg"
                  alt="Platos fuertes"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="font-headline text-2xl md:text-3xl text-primary/90 border-b border-primary/20 pb-3">
                PLATOS FUERTES
              </h3>

              {MENU_ITEMS[1].items.slice(0, 2).map((item, i) => (
                <div key={i} className="group">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                    <h4 className="font-headline text-lg md:text-xl group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>

                    <div className="hidden sm:block flex-1 border-b border-dashed border-primary/20" />

                    <span className="font-subtitle text-primary">
                      {item.price}
                    </span>
                  </div>

                  {item.desc && (
                    <p className="text-sm text-muted italic">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* DERECHA */}
          <div className="space-y-10">

            {/* POSTRES */}
            <div className="space-y-6">
              <div className="arched-portal h-[260px] sm:h-[300px] gold-glow relative overflow-hidden mb-6">
                <Image
                  src="https://i.imgur.com/JzjaYdT.jpeg"
                  alt="Postres"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="font-headline text-2xl md:text-3xl text-primary/90 border-b border-primary/20 pb-3">
                POSTRES
              </h3>

              {MENU_ITEMS[2].items.map((item, i) => (
                <div key={i} className="group">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                    <h4 className="font-headline text-lg md:text-xl group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>

                    <div className="hidden sm:block flex-1 border-b border-dashed border-primary/20" />

                    <span className="font-subtitle text-primary">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* BOTÓN */}
        <div className="text-center mt-14">
          <a
            href="/menu"
            className="inline-block border border-primary/40 px-8 py-3 hover:bg-primary hover:text-background transition-all text-xs tracking-[0.25em] uppercase"
          >
            Ver menú completo
          </a>

          <p className="text-sm text-muted italic mt-4">
            Descubre la carta completa y encuentra tu próxima reserva favorita.
          </p>
        </div>

      </div>
    </section>
  );
}
