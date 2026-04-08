import Link from "next/link";

const MENU_SECTIONS = [
  {
    title: "ENTRADAS",
    image: "https://i.imgur.com/ZCGGJrj.jpeg",
    items: [
      { name: "Casa Luca cheese bread", price: "RD$345" },
      { name: "Aceitunas Crujientes", price: "RD$425" },
      { name: "Jamón ibérico Joselito", price: "RD$3,500" },
      { name: "Croquetas de Fuet", price: "RD$425" },
      { name: "Mini tortilla española", desc: "Con cebollas caramelizadas", price: "RD$550" },
      { name: "CL Shrimp", desc: "Camarones envueltos en masa wonton con queso de cabra y queso robiola", price: "RD$1,250" },
    ],
  },
  {
    title: "CARNES",
    image: "https://i.imgur.com/xeojJPQ.jpeg",
    items: [
      { name: "707 Steak", desc: "24 oz. wet aged Linz rib eye au jus (to share)", price: "RD$4,200" },
      { name: "Entrecote Café de París", desc: "NY striploin con salsa de hierbas y papas fritas", price: "RD$1,950" },
      { name: "Parmesan Pepper steak", desc: "NY striploin 14 oz.", price: "RD$1,975" },
      { name: "Wet aged Linz", desc: "16 oz. rib eye", price: "RD$2,850" },
    ],
  },
  {
    title: "POSTRES",
    image: "https://i.imgur.com/JzjaYdT.jpeg",
    items: [
      { name: "Casa Luca chocolate cake", price: "RD$900" },
      { name: "Guava bread pudding", price: "RD$575" },
      { name: "Crema de almendras", desc: "Pistacho tostado y agua de rosas", price: "RD$575" },
      { name: "Tiramisú de churros", price: "RD$550" },
    ],
  },
  // ... Puedes seguir añadiendo el resto de secciones aquí
];

const featuredSections = [
  {
    title: "Starter",
    displayTitle: "Entradas",
    image: "https://i.imgur.com/ZCGGJrj.jpeg",
    sideTitle: "STARTER",
    items: MENU_SECTIONS[0].items.slice(0, 4),
    reversed: false,
  },
  {
    title: "Main Dishes",
    displayTitle: "Platos Fuertes",
    image: "https://i.imgur.com/xeojJPQ.jpeg",
    sideTitle: "MAIN DISH",
    items: MENU_SECTIONS[1].items.slice(0, 4),
    reversed: true,
  },
  {
    title: "Desserts",
    displayTitle: "Postres",
    image: "https://i.imgur.com/JzjaYdT.jpeg",
    sideTitle: "DESSERTS",
    items: MENU_SECTIONS[2].items.slice(0, 4),
    reversed: false,
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#08100e] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header simple */}
        <div className="text-center mb-16">
          <Link href="/" className="text-[10px] text-[#C5A059] uppercase tracking-[0.4em] hover:opacity-80 transition">
            Volver al inicio
          </Link>
          <h1 className="text-6xl md:text-8xl font-serif text-[#C5A059] mt-4 opacity-90">MENÚ</h1>
        </div>

        {/* SECCIONES ESTILO EDITORIAL */}
        <div className="space-y-10">
          {featuredSections.map((section, index) => (
            <section
              key={index}
              className={`relative flex flex-col lg:flex-row items-center bg-[#1a2b27] overflow-hidden min-h-[450px] shadow-2xl ${
                section.reversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Texto Vertical de fondo (Marca de agua lateral) */}
              <div className={`absolute hidden lg:block pointer-events-none select-none ${
                section.reversed ? "left-4" : "right-4"
              }`}>
                <span className="text-[#d4b483] text-[90px] font-serif opacity-[0.08] tracking-[20px] [writing-mode:vertical-rl] uppercase">
                  {section.sideTitle}
                </span>
              </div>

              {/* Contenido de Texto */}
              <div className="flex-1 p-8 md:p-14 z-10 w-full">
                <h2 className="text-2xl md:text-3xl font-serif text-[#e0e0e0] mb-10 flex items-center gap-2 italic">
                  <span className="text-[#C5A059] not-italic">✦</span> {section.displayTitle}
                </h2>

                <div className="space-y-8">
                  {section.items.map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex items-baseline gap-4">
                        <h3 className="text-xs md:text-sm font-bold text-white uppercase tracking-widest whitespace-nowrap">
                          {item.name}
                        </h3>
                        <div className="flex-1 border-b border-[#d4b483]/20 mb-1"></div>
                        <span className="text-[#d4b483] text-sm font-bold font-mono">
                          {item.price}
                        </span>
                      </div>
                      {item.desc && (
                        <p className="text-[11px] md:text-xs text-gray-400 mt-2 max-w-[85%] leading-relaxed">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Imagen con forma de ARCO */}
              <div className="flex-1 flex justify-center items-center p-10 md:p-14 z-10">
                <div className="relative group">
                  <div className="absolute -inset-2 border border-[#d4b483]/30 rounded-t-full translate-y-2 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500"></div>
                  <div className="w-[260px] h-[360px] md:w-[300px] md:h-[400px] overflow-hidden rounded-t-full border-2 border-[#d4b483]">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Footer de Reserva */}
        <div className="text-center mt-20 pb-10">
          <a
            href="https://wa.me/18293424146"
            className="inline-block border border-[#C5A059] text-[#C5A059] px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-[#C5A059] hover:text-black transition-all duration-300"
          >
            Reservar Mesa
          </a>
        </div>
      </div>
    </main>
  );
}
