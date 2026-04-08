
import { HeroSections } from "@/components/restaurant/HeroSections";
import { StorySection } from "@/components/restaurant/StorySection";
import { MenuDisplay } from "@/components/restaurant/MenuDisplay";
import { SpecialDishes } from "@/components/restaurant/SpecialDishes";
import { ReservationSection } from "@/components/restaurant/ReservationSection";
import { ChefSection } from "@/components/restaurant/ChefSection";
import { GalleryFeed } from "@/components/restaurant/GalleryFeed";
import { MenuRecommendations } from "@/components/restaurant/MenuRecommendations";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      {/* Branding Header - Now outside the navigation panel */}
      <header className="w-full pt-24 pb-12 bg-background flex flex-col items-center">
       <h1 className="text-4xl sm:text-5xl md:text-8xl font-headline tracking-[0.18em] sm:tracking-[0.24em] md:tracking-[0.3em] text-primary text-center">
  CASA LUCA
</h1>
        <div className="gold-divider max-w-md mt-8" />
       <p className="text-[12px] font-subtitle tracking-[0.2em] text-primary/80 mt-4 uppercase text-center">
  Reserva tu mesa en segundos por WhatsApp<br />
  Sin llamadas. Sin esperas.
</p>
      </header>

      {/* Navigation & Guest Services */}
     <nav className="sticky top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-primary/10 px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16">
  <div className="flex flex-wrap justify-center gap-4 md:gap-12 text-[9px] md:text-[10px] font-subtitle tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-70 text-center">
    <span className="cursor-pointer hover:text-primary transition-colors">HOME</span>
    <span className="cursor-pointer hover:text-primary transition-colors">ABOUT</span>
    <a href="/menu" className="cursor-pointer hover:text-primary transition-colors">
      MENU
    </a>
    <span className="cursor-pointer hover:text-primary transition-colors">RESERVATION</span>
    <span className="cursor-pointer hover:text-primary transition-colors">CONTACT</span>
  </div>

  <div className="flex flex-col items-center w-full md:w-auto">
    <a
      href="https://wa.me/18293424146?text=Hola,%20quiero%20reservar%20en%20Casa%20Luca"
      target="_blank"
      rel="noreferrer"
      className="w-full md:w-auto flex justify-center"
    >
      <button className="w-full md:w-auto max-w-[260px] border border-primary/40 px-4 md:px-6 py-3 md:py-2 hover:bg-primary hover:text-background transition-all text-[10px] font-subtitle tracking-[0.2em] uppercase">
        RESERVAR POR WHATSAPP
      </button>
    </a>

    <p className="text-[10px] text-primary/60 mt-2 text-center max-w-[260px]">
      ⚡ Respuesta rápida · Cupos limitados
    </p>
  </div>
</nav>

{/* Hero Categories */}
      <HeroSections />

      {/* Intro Story Section */}
      <StorySection />

      {/* The Menu Experience */}
      <MenuDisplay />

      {/* Special Dishes Slider (AI Powered Insights below) */}
      <SpecialDishes />

      {/* AI Recommendation Layer */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
      </div>

      {/* Reservation & Booking */}
      <ReservationSection />

      {/* Culinary Team */}
      <ChefSection />

      {/* Social / Gallery */}
      <GalleryFeed />
 {/* Footer */}
    <footer className="py-16 md:py-24 border-t border-primary/10 bg-background">
  <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">

    <h2 className="text-4xl md:text-5xl font-headline text-primary tracking-[0.12em]">
      CASA LUCA
    </h2>

    <p className="text-[10px] md:text-xs font-subtitle tracking-[0.35em] uppercase text-primary/60 mt-4">
      Fine Dining · Santo Domingo
    </p>

    <div className="gold-divider max-w-md mx-auto mt-8 mb-12" />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
      <div className="space-y-3">
        <h3 className="text-[10px] md:text-xs font-subtitle tracking-[0.35em] uppercase text-primary">
          Dirección
        </h3>
        <p className="text-base md:text-lg text-muted italic leading-relaxed">
          Calle Paseo de los Locutores
          <br />
          Sector Piantini, Santo Domingo
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-[10px] md:text-xs font-subtitle tracking-[0.35em] uppercase text-primary">
          Horario
        </h3>
        <p className="text-base md:text-lg text-muted italic leading-relaxed">
          Domingo - Miércoles 12PM - 12AM
          <br />
          Jueves - Sábado 12PM - 1AM
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-[10px] md:text-xs font-subtitle tracking-[0.35em] uppercase text-primary">
          Reservas
        </h3>
        <p className="text-base md:text-lg text-muted italic leading-relaxed">
          +1 829 342 4146
          <br />
          CasaLuca@gmail.com
        </p>

        <a
          href="https://wa.me/18293424146?text=Hola,%20quiero%20reservar%20en%20Casa%20Luca"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 border border-primary/40 px-6 py-3 text-[10px] md:text-xs font-subtitle tracking-[0.25em] uppercase text-primary hover:bg-primary hover:text-background transition-all"
        >
          Reservar por WhatsApp
        </a>
      </div>
    </div>

    <div className="mt-14 md:mt-16 pt-6 border-t border-primary/10">
      <p className="text-[10px] md:text-xs font-subtitle tracking-[0.3em] uppercase text-primary/40">
        © 2025 Casa Luca Fine Dining Group
      </p>
    </div>
  </div>
</footer>
</main>
  );
}
