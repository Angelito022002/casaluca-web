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
    title: "CRUDOS",
    items: [
      { name: "Pegao al Plato con Hongos Silvestres", price: "RD$765" },
      { name: "Vitello tonnato", price: "RD$750" },
      { name: "Carpaccio Medici", desc: "Carpaccio de res con parmesano crocante y avellanas tostadas", price: "RD$695" },
      { name: "Carpaccio de Pescado Blanco", desc: "Con olio de limón y albahaca fresca", price: "RD$695" },
      { name: "Purple tiradito", desc: "Pescado blanco con salsa koreana", price: "RD$725" },
      { name: "Tuna Tartar w/ bone marrow", price: "RD$925" },
      { name: "Lasagna de Alcachofas", price: "RD$675" },
      { name: "Tartar de fresa y tomate", desc: "Burrata con vinagre balsámico de maple", price: "RD$750" },
      { name: "Escalibada con Burrata", desc: "Berenjena, cebollas y tomate", price: "RD$875" },
      { name: "Ravioli de plátano al caldero con Short Rib", price: "RD$725" },
      { name: "Foie con setas y espárragos", price: "RD$1,500" },
      { name: "Pulpo Mykonos", desc: "Pulpo a la brasa, habas, tomate, aceitunas kalamata y olio de limón", price: "RD$1,550" },
      { name: "Pulpo Yakitori", price: "RD$1,400" },
      { name: "Fabada Asturiana", price: "RD$550" },
      { name: "Carpaccio de zucchini", desc: "Queso de cabra y tomate confit", price: "RD$550" },
    ],
  },
  {
    title: "SOPAS",
    items: [
      { name: "Tortelini in Brodo", price: "RD$625" },
      { name: "Sopa de Pescadores", price: "RD$925" },
    ],
  },
  {
    title: "PESCADOS",
    items: [
      { name: "Chillo Santorini", desc: "Envuelto en papillote con hongos y limón", price: "RD$1,750" },
      { name: "Lubina Bocuse", desc: "Lubina al grill con puré de puerro y tomates", price: "RD$2,500" },
      { name: "Dorado", desc: "Con parmesano, pancetta, espinaca y tomate confit", price: "RD$1,650" },
      { name: "Chillo con beurre blanc de chinola", price: "RD$1,750" },
      { name: "Salmón con milhojas de papas", price: "RD$1,650" },
    ],
  },
  {
    title: "ACOMPAÑANTES",
    items: [
      { name: "Grilled corn salad", price: "RD$325" },
      { name: "Mouselline de yuca robouchon", price: "RD$325" },
      { name: "Vegetales al grill", price: "RD$325" },
      { name: "Haricots Verts", desc: "Vainitas en vinagreta de champagne", price: "RD$425" },
      { name: "Shishito Peppers", price: "RD$425" },
      { name: "Kojak Salad", desc: "Aguacate, berro, panceta, tomate y palmitos", price: "RD$525" },
      { name: "Bizcocho de aceite de oliva con romero", price: "RD$550" },
    ],
  },
  {
    title: "ENSALADAS",
    items: [
      { name: "Miso Caesar salad", price: "RD$675" },
      { name: "Caccio e Pepe salad", desc: "Lechuga romana, fonduta de pecorino, parmesano y pimienta fresca", price: "RD$675" },
      { name: "Salade Lyonnaise con Centollo", desc: "Escarola, pancetta y vinagreta de mostaza", price: "RD$1,600" },
    ],
  },
  {
    title: "PASTAS",
    items: [
      { name: "Crostata Malfatta", desc: "Fetuccini de espinaca hecho en casa, canasta de parmesano", price: "RD$725" },
      { name: "Classic Carbonara", price: "RD$725" },
      { name: "Spicy Vodka Rigatoni with a twist", price: "RD$745" },
      { name: "Bucatini Amatricciana", price: "RD$725" },
      { name: "Casarecce Vittorio", desc: "Italian sausage, parmesano, casabe tostado y rúcula", price: "RD$795" },
      { name: "Ravioli de camarones de Sánchez", desc: "Con salsa de oporto", price: "RD$750" },
      { name: "Ravioli de auyama, salvia y amaretto", price: "RD$725" },
      { name: "Lasagna Trabocci", desc: "Short Rib lasagna", price: "RD$750" },
    ],
  },
  {
    title: "CARNES",
    image: "https://i.imgur.com/xeojJPQ.jpeg",
    items: [
      { name: "707 Steak", desc: "24 oz. wet aged Linz rib eye au jus (to share)", price: "RD$4,200" },
      { name: "Entrecote Café de París", desc: "NY striploin con salsa de hierbas y papas fritas", price: "RD$1,950" },
      { name: "Parmesan Pepper steak", desc: "NY striploin 14 oz.", price: "RD$1,975" },
      { name: "Wet aged Linz", desc: "16 oz. rib eye, con finas hierbas y echalottes rostizados", price: "RD$2,850" },
      { name: "Pepi's Wienerschniztel", desc: "Milanesa de ternera, roasted potatoes, braised red cabbage", price: "RD$1,450" },
      { name: "Marrocan Chicken", desc: "Plums, almonds w/rice (to share)", price: "RD$1,250" },
      { name: "Mashed Wagyu burger", price: "RD$895" },
      { name: "Steak Bernaise", desc: "NY striploin, salsa bernesa y french fries", price: "RD$1,950" },
      { name: "Bourbon Steak", desc: "NY striploin 14 oz.", price: "RD$1,950" },
      { name: "Paletilla de cordero cocida al horno", desc: "Servida en su jugo", price: "RD$2,600" },
    ],
  },
  {
    title: "ARROCES",
    items: [
      { name: "Rosejat", desc: "Fideos con fumet de crustáceos, sepias, calamares y camarón", price: "RD$925" },
      { name: "Arroz negro", desc: "Con pulpo tostado, camarones y chips de ajo", price: "RD$1,350" },
      { name: "Arroz meloso", desc: "Con camarones de Sánchez", price: "RD$1,400" },
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
      { name: "Sorbetes de frutas", price: "RD$625" },
    ],
  },
];

const featuredSections = [
  {
    title: "ENTRADAS",
    image: "https://i.imgur.com/ZCGGJrj.jpeg",
    sideTitle: "ENTRADAS",
    items: MENU_SECTIONS[0].items.slice(0, 4),
    reversed: false,
  },
  {
    title: "CARNES",
    image: "https://i.imgur.com/xeojJPQ.jpeg",
    sideTitle: "CARNES",
    items: MENU_SECTIONS[7].items.slice(0, 4),
    reversed: true,
  },
  {
    title: "POSTRES",
    image: "https://i.imgur.com/JzjaYdT.jpeg",
    sideTitle: "POSTRES",
    items: MENU_SECTIONS[9].items.slice(0, 4),
    reversed: false,
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#0B1C16] text-white px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 md:mb-20">
          <Link
            href="/"
            className="text-[10px] md:text-xs text-[#C5A059] uppercase tracking-[0.35em]"
          >
            Volver al inicio
          </Link>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#C5A059] mt-6">
            MENÚ
          </h1>

          <p className="text-[#BDBDBD] mt-5 text-sm md:text-base max-w-2xl mx-auto italic">
            Sabores diseñados para una experiencia única
          </p>

          <div className="w-20 h-px bg-[#C5A059]/40 mx-auto mt-6" />
        </div>

        {/* BLOQUES EDITORIALES */}
        <div className="space-y-12 md:space-y-16 mb-20 md:mb-24">
          {featuredSections.map((section, index) => (
            <section
              key={index}
              className="bg-[#103128] border border-[#C5A059]/15 p-5 md:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className={`lg:col-span-5 ${section.reversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative overflow-hidden rounded-t-[120px] border border-[#C5A059]/20 h-[320px] md:h-[420px]">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={`lg:col-span-7 ${section.reversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-start gap-4 md:gap-8">
                    <div className="hidden md:flex items-center justify-center min-w-[70px]">
                      <span className="text-[#C5A059] text-5xl lg:text-6xl font-serif [writing-mode:vertical-rl] rotate-180 tracking-wide opacity-90">
                        {section.sideTitle}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-serif text-[#E8E0D0] mb-8">
                        {section.title}
                      </h2>

                      <div className="space-y-5">
                        {section.items.map((item, i) => (
                          <div key={i}>
                            <div className="flex items-baseline gap-3">
                              <h3 className="text-base md:text-lg font-semibold text-white">
                                {item.name}
                              </h3>
                              <div className="flex-1 border-b border-[#C5A059]/30" />
                              <span className="text-[#C5A059] text-sm md:text-base whitespace-nowrap">
                                {item.price}
                              </span>
                            </div>

                            {item.desc && (
                              <p className="text-sm text-[#C9C9C9] mt-2 italic leading-relaxed">
                                {item.desc}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* MENÚ COMPLETO */}
        <div className="space-y-8 md:space-y-10">
          {MENU_SECTIONS.map((section, index) => (
            <section
              key={index}
              className="border border-[#C5A059]/20 bg-[#0F261E] p-5 sm:p-6 md:p-8 rounded-t-[40px] md:rounded-t-[70px]"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#C5A059] mb-8 tracking-wide">
                {section.title}
              </h2>

              <div className="space-y-6">
                {section.items.map((item, i) => (
                  <div key={i}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                      <h3 className="text-lg md:text-xl text-white leading-snug">
                        {item.name}
                      </h3>

                      <div className="hidden sm:block flex-1 border-b border-dashed border-[#C5A059]/30" />

                      <span className="text-[#C5A059] whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>

                    {item.desc && (
                      <p className="text-sm text-[#BDBDBD] mt-2 italic leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="text-center mt-16 md:mt-20">
          <a
            href="https://wa.me/18293424146?text=Hola,%20quiero%20reservar%20en%20Casa%20Luca"
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-[#C5A059] text-[#C5A059] px-8 py-4 uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-[#0B1C16] transition"
          >
            Reservar por WhatsApp
          </a>

          <p className="text-center mt-4 text-sm text-[#BDBDBD] italic">
            Experiencia exclusiva · Reservas limitadas
          </p>
        </div>
      </div>
    </main>
  );
}
