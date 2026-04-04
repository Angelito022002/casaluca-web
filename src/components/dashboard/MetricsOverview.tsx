
import { Card } from "@/components/ui/card";
import { GraduationCap, Clock, Award, TrendingUp } from "lucide-react";

export function MetricsOverview() {
  const metrics = [
    { label: "OVERALL PROGRESS", value: "84%", icon: GraduationCap, trend: "+2.4%" },
    { label: "CURRENT GPA", value: "3.9", icon: Award, trend: "Stable" },
    { label: "STUDY HOURS", value: "128h", icon: Clock, trend: "+12h" },
    { label: "RANKING", value: "Top 5%", icon: TrendingUp, trend: "Rising" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-6 mb-12">
      {metrics.map((m, idx) => (
        <Card key={idx} className="luxury-card group gold-glow">
          <div className="flex flex-col items-center text-center space-y-2">
            <m.icon className="h-6 w-6 text-primary mb-2 opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="font-subtitle text-[10px] tracking-[0.2em] text-muted uppercase">{m.label}</span>
            <span className="text-3xl font-headline text-primary">{m.value}</span>
            <span className="text-[10px] text-primary/60 font-medium">{m.trend}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
