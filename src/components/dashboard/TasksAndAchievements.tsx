
import { CheckCircle2, Circle, Trophy } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function TasksAndAchievements() {
  const tasks = [
    { title: "Quantum Physics Lab Report", deadline: "Tomorrow, 5 PM", priority: "High" },
    { title: "Historical Context Essay", deadline: "Friday", priority: "Medium" },
    { title: "Calculus Quiz Prep", deadline: "Next Monday", priority: "Low" },
  ];

  const achievements = [
    { title: "Scholar Distinction", date: "Jan 15", desc: "Top 1% in Mathematics" },
    { title: "Perfect Attendance", date: "Feb 02", desc: "No missed sessions this term" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <Card className="luxury-card">
        <CardHeader className="px-0 pt-0">
          <CardTitle className="font-headline text-lg">PENDING ASSIGNMENTS</CardTitle>
        </CardHeader>
        <CardContent className="px-0 space-y-4">
          {tasks.map((t, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-background/40 hover:bg-background/60 transition-colors border-l-2 border-primary/40">
              <Circle className="h-5 w-5 text-primary/60 shrink-0 mt-1" />
              <div className="flex-1">
                <p className="text-sm font-medium tracking-wide">{t.title}</p>
                <p className="text-[10px] text-muted-foreground uppercase font-subtitle mt-1">{t.deadline}</p>
              </div>
              <span className={`text-[10px] font-subtitle uppercase ${t.priority === 'High' ? 'text-primary' : 'text-primary/60'}`}>
                {t.priority}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="luxury-card">
        <CardHeader className="px-0 pt-0">
          <CardTitle className="font-headline text-lg">RECENT ACHIEVEMENTS</CardTitle>
        </CardHeader>
        <CardContent className="px-0 space-y-4">
          {achievements.map((a, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-background/40 hover:bg-background/60 transition-colors">
              <Trophy className="h-6 w-6 text-primary shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium tracking-wide">{a.title}</p>
                <p className="text-[10px] text-muted-foreground uppercase font-subtitle mt-1">{a.date}</p>
                <p className="text-xs text-primary/70 mt-1 italic">{a.desc}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
