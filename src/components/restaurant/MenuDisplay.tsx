
"use client"

import Image from "next/image";

const MENU_ITEMS = [
  { section: "APPETIZERS", items: [
    { name: "Oysters Rockefeller", price: "$28", desc: "Spinach, pernod, breadcrumbs" },
    { name: "Wagyu Carpaccio", price: "$34", desc: "Truffle oil, arugula, parmesan" },
    { name: "Burrata & Heirloom", price: "$22", desc: "Balsamic glaze, fresh basil" }
  ]},
  { section: "MAIN DISHES", items: [
    { name: "Lobster Thermidor", price: "$85", desc: "Cognac, mustard, gruyere" },
    { name: "Prime Filet Mignon", price: "$65", desc: "Red wine reduction, marrow" },
    { name: "Seabass en Papillote", price: "$48", desc: "Seasonal herbs, lemon" }
  ]},
  { section: "DESSERTS", items: [
    { name: "Chocolate Soufflé", price: "$18", desc: "Grand Marnier, dark cocoa" },
    { name: "Crème Brûlée", price: "$16", desc: "Madagascar vanilla, berries" }
  ]}
];

export function MenuDisplay() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        
        {/* Left Page Style */}
        <div className="space-y-16">
          <div className="text-center mb-12">
             <span className="text-[10px] font-subtitle tracking-widest text-primary uppercase mb-4 block">AUTHENTIC TASTE</span>
             <h2 className="text-5xl font-headline tracking-tighter">OUR MENU</h2>
             <div className="gold-divider w-24 mx-auto" />
          </div>

          {MENU_ITEMS.slice(0, 2).map((section, idx) => (
            <div key={idx} className="space-y-10">
              <h3 className="font-headline text-2xl text-primary/80 border-b border-primary/20 pb-4">{section.section}</h3>
              {section.items.map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-headline text-lg group-hover:text-primary transition-colors">{item.name}</h4>
                    <div className="flex-1 border-b border-dashed border-primary/20 mx-4" />
                    <span className="font-subtitle text-primary">{item.price}</span>
                  </div>
                  <p className="text-xs text-muted italic font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Right Page Content with Image */}
        <div className="space-y-16">
           <div className="arched-portal h-[400px] gold-glow relative overflow-hidden">
             <Image src="https://picsum.photos/seed/menu-dish/800/600" alt="Featured Dish" fill className="object-cover" />
           </div>

           <div className="space-y-10">
              <h3 className="font-headline text-2xl text-primary/80 border-b border-primary/20 pb-4">DESSERTS</h3>
              {MENU_ITEMS[2].items.map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-headline text-lg group-hover:text-primary transition-colors">{item.name}</h4>
                    <div className="flex-1 border-b border-dashed border-primary/20 mx-4" />
                    <span className="font-subtitle text-primary">{item.price}</span>
                  </div>
                  <p className="text-xs text-muted italic font-light">{item.desc}</p>
                </div>
              ))}
           </div>

           <div className="arched-portal h-[250px] gold-glow relative overflow-hidden mt-12">
             <Image src="https://picsum.photos/seed/menu-dish2/800/600" alt="Dessert" fill className="object-cover" />
           </div>
        </div>

      </div>
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none select-none">
        <div className="w-full h-full rotate-45 border-[40px] border-primary" />
      </div>
    </section>
  );
}
