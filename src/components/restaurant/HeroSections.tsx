
"use client"

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const CATEGORIES = [
  { id: "appetizers", title: "ENTRADAS", img: "https://i.imgur.com/ZCGGJrj.jpeg" },
  { id: "mains", title: "PLATOS FUERTES", img: "https://i.imgur.com/xeojJPQ.jpeg" },
  { id: "desserts", title: "POSTRES", img: "https://i.imgur.com/JzjaYdT.jpeg" },
];

export function HeroSections() {
  return (
   <section className="grid grid-cols-1 md:grid-cols-3 auto-rows-[260px] md:auto-rows-auto md:h-[90vh]">
       {CATEGORIES.map((cat) => (
  <a href={`#${cat.id}`} key={cat.id}>
    <div className="relative group overflow-hidden cursor-pointer h-[260px] md:h-full">
      <Image 
        src={cat.img} 
        alt={cat.title} 
        fill 
        className="object-cover transition-transform duration-1000 group-hover:scale-110" 
        data-ai-hint="luxury food"
      />
      <h3 className="absolute bottom-4 left-4 text-white text-2xl md:text-xl font-headline">
  {cat.title}
</h3>
    </div>
  </a>
))}
    </section>
  );
}
