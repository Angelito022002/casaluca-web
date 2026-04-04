
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
        <h1 className="text-5xl md:text-8xl font-headline tracking-[0.3em] text-primary">CASA LUCA</h1>
        <div className="gold-divider max-w-md mt-8" />
        <p className="text-[10px] font-subtitle tracking-[0.6em] text-primary/60 mt-4 uppercase">Exquisite Culinary Artistry</p>
      </header>

      {/* Navigation & Guest Services */}
      <nav className="sticky top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-primary/10 px-8 py-6 flex justify-center items-center gap-16">
        <div className="flex gap-12 text-[10px] font-subtitle tracking-[0.3em] uppercase opacity-70">
          <span className="cursor-pointer hover:text-primary transition-colors">HOME</span>
          <span className="cursor-pointer hover:text-primary transition-colors">ABOUT</span>
          <span className="cursor-pointer hover:text-primary transition-colors">MENU</span>
          <span className="cursor-pointer hover:text-primary transition-colors">RESERVATION</span>
          <span className="cursor-pointer hover:text-primary transition-colors">CONTACT</span>
        </div>
        <button className="border border-primary/40 px-6 py-2 hover:bg-primary hover:text-background transition-all text-[10px] font-subtitle tracking-[0.2em] uppercase">BOOK A TABLE</button>
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
      <footer className="py-24 text-center border-t border-primary/10">
        <h2 className="text-4xl font-headline mb-8 tracking-tighter">CASA LUCA</h2>
        <div className="gold-divider max-w-lg mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto px-6 text-sm font-light italic opacity-80 mb-16">
          <div>
            <h4 className="font-subtitle text-[10px] tracking-widest uppercase text-primary mb-4">LOCATION</h4>
            <p>123 Luxury Avenue<br />Fine Dining District, FL</p>
          </div>
          <div>
            <h4 className="font-subtitle text-[10px] tracking-widest uppercase text-primary mb-4">HOURS</h4>
            <p>Mon - Sun: 5:00 PM - 11:00 PM<br />Lunch: Sat & Sun Only</p>
          </div>
          <div>
            <h4 className="font-subtitle text-[10px] tracking-widest uppercase text-primary mb-4">RESERVATIONS</h4>
            <p>+1 (555) LUXURY-DINING<br />concierge@casaluca.com</p>
          </div>
        </div>
        <p className="text-[10px] font-subtitle tracking-[0.4em] opacity-40 uppercase">© 2025 CASA LUCA FINE DINING GROUP</p>
      </footer>
    </main>
  );
}
