
"use client"

import Image from "next/image";

const SPECIALS = [
  { id: 1, name: "Roasted Duck", price: "$52", img: "https://picsum.photos/seed/spec1/600/600" },
  { id: 2, name: "Truffle Pasta", price: "$38", img: "https://picsum.photos/seed/spec2/600/600" },
  { id: 3, name: "Pan Seared Scallops", price: "$42", img: "https://picsum.photos/seed/spec3/600/600" },
];

export function SpecialDishes() {
  return (
    <section className="py-24 text-center">
      <span className="text-[10px] font-subtitle tracking-[0.5em] text-primary uppercase block mb-6">CHEF'S SELECTION</span>
      <h2 className="text-4xl md:text-5xl font-headline mb-16">SPECIAL DISHES</h2>
      
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
