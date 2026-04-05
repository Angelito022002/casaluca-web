
"use client";

import Image from "next/image";

const MENU_ITEMS = [
  {
    section: "ENTRADAS",
    items: [
      { name: "Ostras Rockefeller", price: "$28", desc: "Espinaca, pernod y pan gratinado" },
      { name: "Carpaccio de Wagyu", price: "$34", desc: "Aceite de trufa, rúcula y parmesano" },
      { name: "Burrata & Tomates Heirloom", price: "$22", desc: "Glaseado balsámico y albahaca fresca" }
    ]
  },
  {
    section: "PLATOS FUERTES",
    items: [
      { name: "Langosta Thermidor", price: "$85", desc: "Coñac, mostaza y gruyere" },
      { name: "Filete Mignon Prime", price: "$65", desc: "Reducción de vino tinto y tuétano" },
      { name: "Lubina en Papillote", price: "$48", desc: "Hierbas de temporada y limón" }
    ]
  },
  {
    section: "POSTRES",
    items: [
      { name: "Soufflé de Chocolate", price: "$18", desc: "Grand Marnier y cacao oscuro" },
      { name: "Crème Brûlée", price: "$16", desc: "Vainilla de Madagascar y frutos rojos" }
    ]
  }
];

export function MenuDisplay() {
  return (
    <section id="menu" className="py-24 bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        
        <div className="space-y-16">
          <div className="text-center mb-12">
            <span className="text-[10px] font-subtitle tracking-widest text-primary uppercase mb-4 block">
              SABOR AUTÉNTICO
            </span>
            <h2 className="text-5xl font-headline tracking-tighter">NUESTRO MENÚ</h2>
            <div className="gold-divider w-24 mx-auto" />
          </div>

          {MENU_ITEMS.slice(0, 2).map((section, idx) => (
            <div
              key={idx}
              id={
                section.section === "ENTRADAS"
                  ? "appetizers"
                  : section.section === "PLATOS FUERTES"
                  ? "mains"
                  : ""
              }
              className="space-y-10"
            >
              <h3 className="font-headline text-2xl text-primary/80 border-b border-primary/20 pb-4">
                {section.section}
              </h3>

              {section.items.map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-headline text-lg group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>
                    <div className="flex-1 border-b border-dashed border-primary/20 mx-4" />
                    <span className="font-subtitle text-primary">{item.price}</span>
                  </div>
                  <p className="text-xs text-muted italic font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="space-y-16">
          <div className="arched-portal h-[400px] gold-glow relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
              alt="Plato destacado"
              fill
              className="object-cover"
            />
          </div>

          <div id="desserts" className="space-y-10">
            <h3 className="font-headline text-2xl text-primary/80 border-b border-primary/20 pb-4">
              POSTRES
            </h3>

            {MENU_ITEMS[2].items.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-headline text-lg group-hover:text-primary transition-colors">
                    {item.name}
                  </h4>
                  <div className="flex-1 border-b border-dashed border-primary/20 mx-4" />
                  <span className="font-subtitle text-primary">{item.price}</span>
                </div>
                <p className="text-xs text-muted italic font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="arched-portal h-[250px] gold-glow relative overflow-hidden mt-12">
            <Image
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80"
              alt="Postre"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none select-none">
        <div className="w-full h-full rotate-45 border-[40px] border-primary" />
      </div>
    </section>
  );
}
