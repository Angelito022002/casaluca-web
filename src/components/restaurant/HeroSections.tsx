
"use client"

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const CATEGORIES = [
  { id: "appetizers", title: "APPETIZERS", img: PlaceHolderImages?.[0]?.imageUrl || "https://picsum.photos/seed/food1/800/1200" },
  { id: "mains", title: "MAIN DISHES", img: PlaceHolderImages?.[1]?.imageUrl || "https://picsum.photos/seed/food2/800/1200" },
  { id: "drinks", title: "DRINKS", img: PlaceHolderImages?.[2]?.imageUrl || "https://picsum.photos/seed/food3/800/1200" },
];

export function HeroSections() {
  return (
    <section className="h-[90vh] grid grid-cols-1 md:grid-cols-3">
      {CATEGORIES.map((cat) => (
        <div key={cat.id} className="relative group overflow-hidden cursor-pointer h-full">
          <Image 
            src={cat.img} 
            alt={cat.title} 
            fill 
            className="object-cover transition-transform duration-1000 group-hover:scale-110" 
            data-ai-hint="luxury food"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-3xl md:text-5xl font-headline tracking-tighter text-white drop-shadow-2xl">
              {cat.title}
            </h2>
          </div>
          <div className="absolute bottom-12 left-0 w-full flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[10px] font-subtitle tracking-[0.5em] text-white border-b border-white/40 pb-2">EXPLORE CATEGORY</span>
          </div>
        </div>
      ))}
    </section>
  );
}
