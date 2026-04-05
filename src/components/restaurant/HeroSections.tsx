
"use client"

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const CATEGORIES = [
  { id: "appetizers", title: "ENTRADAS", img: PlaceHolderImages?.[0]?.imageUrl || "https://picsum.photos/seed/food1/800/1200" }, 
  { id: "mains", title: "PLATOS FUERTES", img: PlaceHolderImages?.[1]?.imageUrl || "https://picsum.photos/seed/food2/800/1200" }, 
 { id: "drinks", title: "BEBIDAS", img: PlaceHolderImages?.[2]?.imageUrl || "https://picsum.photos/seed/food3/800/1200" },  
];

export function HeroSections() {
  return (
    <section className="h-[90vh] grid grid-cols-1 md:grid-cols-3">
       {CATEGORIES.map((cat) => (
  <a href={`#${cat.id}`} key={cat.id}>
    <div className="relative group overflow-hidden cursor-pointer h-full">
      <Image 
        src={cat.img} 
        alt={cat.title} 
        fill 
        className="object-cover transition-transform duration-1000 group-hover:scale-110" 
        data-ai-hint="luxury food"
      />
      <h3 className="absolute bottom-4 left-4 text-white text-xl">
        {cat.title}
      </h3>
    </div>
  </a>
))}
    </section>
  );
}
