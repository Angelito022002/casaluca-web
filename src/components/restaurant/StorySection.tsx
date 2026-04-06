
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
              Desde 2023
            </span>
          </div>
        </div>

        <div className="relative h-[600px] flex items-center justify-center">
          <div className="arched-portal relative w-full h-[500px] z-10 gold-glow">
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
              alt="Interior del restaurante"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -top-12 -left-12 arched-portal w-48 h-64 border-primary/20 hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
              alt="Ambiente"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-12 -right-12 arched-portal w-48 h-64 border-primary/20 hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
              alt="Experiencia gastronómica"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
