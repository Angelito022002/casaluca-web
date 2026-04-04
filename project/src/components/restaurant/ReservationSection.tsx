
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ReservationSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="luxury-card bg-primary/5 border border-primary/20 p-12 space-y-8 relative z-10">
          <div className="text-center">
            <span className="text-[10px] font-subtitle tracking-widest text-primary uppercase">RESERVATION</span>
            <h2 className="text-4xl font-headline mt-2 mb-6 tracking-tighter">BOOK A TABLE</h2>
            <p className="text-sm font-light italic text-muted max-w-xs mx-auto">"Join us for an unforgettable evening. We recommend booking at least 48 hours in advance."</p>
          </div>
          
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Full Name" className="bg-transparent border-primary/20 rounded-none h-12 text-xs uppercase tracking-widest" />
              <Input placeholder="Guests" type="number" className="bg-transparent border-primary/20 rounded-none h-12 text-xs uppercase tracking-widest" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Date" type="date" className="bg-transparent border-primary/20 rounded-none h-12 text-xs uppercase tracking-widest" />
              <Input placeholder="Time" type="time" className="bg-transparent border-primary/20 rounded-none h-12 text-xs uppercase tracking-widest" />
            </div>
            <Input placeholder="Phone Number" className="bg-transparent border-primary/20 rounded-none h-12 text-xs uppercase tracking-widest" />
            <Button className="luxury-button w-full bg-primary text-background hover:bg-primary/90">CONFIRM RESERVATION</Button>
          </form>
        </div>

        <div className="relative h-[500px] arched-portal border-primary/40 overflow-hidden group">
          <img src="https://picsum.photos/seed/table/1000/1000" alt="Reserved Table" className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-8">
             <span className="text-[10px] font-subtitle tracking-[0.6em] uppercase mb-4 text-white">THE AMBIANCE</span>
             <h3 className="text-3xl font-headline text-white drop-shadow-lg">A Private Affair</h3>
             <div className="gold-divider w-24 mx-auto" />
             <p className="text-xs text-white/80 italic font-light max-w-xs">Intimate lighting, soft acoustics, and world-class service await you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
