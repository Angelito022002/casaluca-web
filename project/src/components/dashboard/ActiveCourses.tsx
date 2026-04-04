
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const COURSES = [
  { 
    id: "math", 
    name: "ADVANCED CALCULUS", 
    completion: 75, 
    img: PlaceHolderImages?.[0]?.imageUrl || "https://picsum.photos/seed/math42/600/800" 
  },
  { 
    id: "physics", 
    name: "QUANTUM MECHANICS", 
    completion: 42, 
    img: PlaceHolderImages?.[1]?.imageUrl || "https://picsum.photos/seed/physics88/600/800" 
  },
  { 
    id: "history", 
    name: "MODERN HISTORY", 
    completion: 90, 
    img: PlaceHolderImages?.[2]?.imageUrl || "https://picsum.photos/seed/history12/600/800" 
  },
];

export function ActiveCourses() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 mb-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-headline">ACTIVE CURRICULUM</h2>
        <span className="font-subtitle text-xs tracking-widest text-primary">VIEW ALL COURSES</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {COURSES.map((course) => (
          <div key={course.id} className="group cursor-pointer">
            <div className="arched-portal relative aspect-[3/4] mb-6 gold-glow transition-transform duration-500 group-hover:scale-[1.02]">
              <Image 
                src={course.img} 
                alt={course.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                data-ai-hint="luxury texture academic"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            </div>
            <div className="text-center space-y-3">
              <h3 className="font-headline text-lg tracking-wide">{course.name}</h3>
              <div className="flex items-center justify-center gap-4 px-8">
                <Progress value={course.completion} className="h-1 bg-white/10" />
                <span className="text-xs font-subtitle text-primary shrink-0">{course.completion}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
