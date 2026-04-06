
import Image from "next/image";

export function StorySection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 max-w-xl">
          <span className="text-[10px] font-subtitle tracking-[0.5em] text-primary uppercase">
            NUESTRA HISTORIA
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline leading-tight text-primary">
            Disfruta cada momento con una
            <br />
            experiencia gastronómica
            <br />
            de lujo
          </h2>

          <p className="text-muted text-lg font-light leading-relaxed italic max-w-lg">
            "Vive el arte culinario en un ambiente de elegancia inigualable.
            Cada ingrediente es seleccionado con dedicación, cada plato una obra maestra."
          </p>

          <div className="pt-8 flex gap-8 items-center">
            <div className="h-px w-24 bg-primary/40" />
            <span className="text-[10px] font-subtitle tracking-widest uppercase text-primary">
              EXPERIENCIA · SABOR · DISEÑO
            </span>
          </div>
        </div>

        <div className="relative h-[520px] md:h-[600px] flex items-center justify-center">
          <div className="arched-portal relative w-full max-w-[520px] h-[420px] md:h-[500px] z-10 gold-glow overflow-hidden">
            <Image
              src="https://i.imgur.com/Cx22uWZ.jpeg"
              alt="Interior del restaurante"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -top-2 right-4 sm:right-8 md:-top-4 md:left-0 z-20">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 relative overflow-hidden rounded-full border border-[#C5A059]/30 shadow-xl">
              <Image
                src="https://i.imgur.com/vNhAJ03.jpeg"
                alt="Detalle del restaurante"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
