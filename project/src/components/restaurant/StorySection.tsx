
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function StorySection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <span className="text-[10px] font-subtitle tracking-[0.5em] text-primary uppercase">OUR STORY</span>
          <h2 className="text-4xl md:text-6xl font-headline leading-tight">
            Enjoy Every Moment with<br />
            Luxury Breakfast, Lunch<br />
            & Dinner.
          </h2>
          <p className="text-muted text-lg font-light leading-relaxed italic max-w-lg">
            "Experience culinary artistry in an atmosphere of unparalleled elegance. Every ingredient is sourced with devotion, every plate a masterpiece."
          </p>
          <div className="pt-8 flex gap-8 items-center">
             <div className="h-px w-24 bg-primary/40" />
             <span className="text-[10px] font-subtitle tracking-widest uppercase text-primary">SINCE 1985</span>
          </div>
        </div>

        <div className="relative h-[600px] flex items-center justify-center">
          <div className="arched-portal relative w-full h-[500px] z-10 gold-glow">
            <Image 
              src={PlaceHolderImages?.[3]?.imageUrl || "https://picsum.photos/seed/interior/1200/800"} 
              alt="Interior" 
              fill 
              className="object-cover" 
            />
          </div>
          {/* Accent smaller images like in the prompt */}
          <div className="absolute -top-12 -left-12 arched-portal w-48 h-64 border-primary/20 hidden md:block">
            <Image src="https://picsum.photos/seed/chefwork/300/400" alt="Chef" fill className="object-cover" />
          </div>
          <div className="absolute -bottom-12 -right-12 arched-portal w-48 h-64 border-primary/20 hidden md:block">
            <Image src="https://picsum.photos/seed/winepour/300/400" alt="Wine" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
