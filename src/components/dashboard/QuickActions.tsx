
import { Button } from "@/components/ui/button";
import { MonitorPlay, Send, FileText, Settings } from "lucide-react";

export function QuickActions() {
  const actions = [
    { label: "Join Live Session", icon: MonitorPlay },
    { label: "Submit Assignments", icon: Send },
    { label: "Review Grades", icon: FileText },
    { label: "Study Settings", icon: Settings },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 mb-12">
      {actions.map((action, idx) => (
        <Button 
          key={idx} 
          variant="outline" 
          className="luxury-button gold-glow bg-transparent hover:bg-primary hover:text-background border-primary/50 text-primary flex items-center gap-3"
        >
          <action.icon className="h-4 w-4" />
          <span className="font-subtitle text-[10px] tracking-[0.2em]">{action.label}</span>
        </Button>
      ))}
    </div>
  );
}
