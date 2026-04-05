
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
</a>
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
        <MenuRecommendations />
      </div>

      {/* Reservation & Booking */}
      <ReservationSection />

      {/* Culinary Team */}
      <ChefSection />

      {/* Social / Gallery */}
      <GalleryFeed />

      {/* Footer */}
      <footer className="py-16 md:py-24 text-center border-t border-primary/10 px-4">
        <h2 className="text-4xl font-headline mb-8 tracking-tighter">CASA LUCA</h2>
        <div className="gold-divider max-w-lg mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto px-6 text-sm font-light italic opacity-80 mb-16">
          <div>
            <h4 className="font-subtitle text-[10px] tracking-widest uppercase text-primary mb-4">DIRECCIÓN</h4>
            <p>Calle Paseo de los Locutores<br />Sector Piantini, SD</p>
          </div>
          <div>
            <h4 className="font-subtitle text-[10px] tracking-widest uppercase text-primary mb-4">HORARIO</h4>
            <p>Domingo - Miercoles 12 PM - 12 AM<br />Jueves - Sabado 12 PM - 1 AM </p>
          </div>
          <div>
            <h4 className="font-subtitle text-[10px] tracking-widest uppercase text-primary mb-4">RESERVACIONES</h4>
            <p>+18293424146<br />CasaLuca@gmail.com</p>
          </div>
        </div>
        <p className="text-[10px] font-subtitle tracking-[0.4em] opacity-40 uppercase">© 2025 CASA LUCA FINE DINING GROUP</p>
      </footer>
    </main>
  );
}
