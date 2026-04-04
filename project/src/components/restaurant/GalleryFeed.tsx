
"use client"

const IMAGES = [
  "https://picsum.photos/seed/gal1/400/400",
  "https://picsum.photos/seed/gal2/400/400",
  "https://picsum.photos/seed/gal3/400/400",
  "https://picsum.photos/seed/gal4/400/400",
];

export function GalleryFeed() {
  return (
    <section className="py-24 bg-card/30">
      <div className="text-center mb-16 px-6">
        <span className="text-[10px] font-subtitle tracking-[0.5em] text-primary uppercase block mb-4">MOMENTS</span>
        <h2 className="text-4xl font-headline tracking-tighter italic">@CASA_LUCA_OFFICIAL</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {IMAGES.map((img, i) => (
          <div key={i} className="aspect-square relative group overflow-hidden cursor-pointer border border-primary/10">
            <img src={img} alt="Instagram" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125" />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <span className="text-white font-subtitle text-xs tracking-widest uppercase">VIEW POST</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
