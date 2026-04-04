
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ChefSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
         <div className="relative h-[600px] arched-portal gold-glow order-2 md:order-1">
           <Image 
             src={PlaceHolderImages?.[4]?.imageUrl || "https://picsum.photos/seed/chef/600/800"} 
             alt="The Chef" 
             fill 
             className="object-cover" 
           />
           <div className="absolute bottom-8 right-8 bg-primary p-6 luxury-card text-background shadow-2xl">
              <span className="text-[10px] font-subtitle tracking-widest uppercase opacity-70">MICHELIN STAR</span>
              <h4 className="text-xl font-headline">CHEF DE CUISINE</h4>
           </div>
         </div>
         
         <div className="space-y-8 order-1 md:order-2">
            <span className="text-[10px] font-subtitle tracking-[0.5em] text-primary uppercase">MEET THE MASTER</span>
            <h2 className="text-4xl md:text-5xl font-headline leading-tight">CHEF LUCA<br />VALENTINO</h2>
            <p className="text-muted text-lg font-light leading-relaxed italic border-l-2 border-primary/20 pl-8">
              "Cooking is not just about the recipe, it's about the soul of the ingredients. My mission is to translate tradition into a contemporary luxury experience."
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
               <div className="luxury-card bg-primary/5 p-4 text-center">
                  <span className="block text-2xl font-headline text-primary">25+</span>
                  <span className="text-[10px] font-subtitle uppercase tracking-widest text-muted">YEARS EXPERIENCE</span>
               </div>
               <div className="luxury-card bg-primary/5 p-4 text-center">
                  <span className="block text-2xl font-headline text-primary">3*</span>
                  <span className="text-[10px] font-subtitle uppercase tracking-widest text-muted">MICHELIN STARS</span>
               </div>
            </div>
         </div>
       </div>
    </section>
  );
}
