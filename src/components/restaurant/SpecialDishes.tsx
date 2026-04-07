
"use client"

import Image from "next/image";

const SPECIALS = [
  { id: 1, name: "Pulpo Yakitori", price: "RD$1,400", img: "https://i.imgur.com/a7mck02.jpeg" },
  { id: 2, name: "Carpaccio de Pescado Blanco", price: "RD$695", img: "https://i.imgur.com/CTPZOWG.jpeg" },
  { id: 3, name: "Casa Luca chocolate cake", price: "RD$900", img: "https://i.imgur.com/CDq4c0H.jpeg" },
];

export function SpecialDishes() {
  return (
    <section className="py-24 text-center">
      <span className="text-[10px] font-subtitle tracking-[0.5em] text-primary uppercase block mb-6">CHEF'S SELECTION</span>
      <h2 className="text-4xl md:text-5xl font-headline mb-16">PLATOS DESTACADOS</h2>
      
      <div className="flex flex-wrap justify-center gap-12 max-w-7xl mx-auto px-6">
        {SPECIALS.map((dish) => (
          <div key={dish.id} className="w-full md:w-[300px] group cursor-pointer">
            <div className="rounded-full aspect-square border-2 border-primary/20 p-2 overflow-hidden mb-8 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-105">
              <div className="rounded-full overflow-hidden w-full h-full relative">
                <Image src={dish.img} alt={dish.name} fill className="object-cover" />
              </div>
            </div>
            <h3 className="font-headline text-xl mb-2">{dish.name}</h3>
            <span className="font-subtitle text-primary text-lg">{dish.price}</span>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
               <button className="text-[10px] font-subtitle uppercase tracking-widest border-b border-primary/40 hover:border-primary">ADD TO ORDER</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
