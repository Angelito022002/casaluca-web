
"use client"

import { useState } from "react";
import { personalizeStudyRecommendations, type PersonalizedStudyRecommendationsOutput } from "@/ai/flows/personalized-study-recommendations";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles, Loader2, ExternalLink, Lightbulb } from "lucide-react";

export function StudyRecommendations() {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<PersonalizedStudyRecommendationsOutput | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await personalizeStudyRecommendations({
        studentName: "Alexander",
        overallProgress: "Consistent high performer, but struggling with historical dates recently.",
        courseProgress: [
          { name: "Advanced Calculus", completion: 75, grade: "A+" },
          { name: "Quantum Mechanics", completion: 42, grade: "B" },
          { name: "Modern History", completion: 90, grade: "A" }
        ],
        performanceTrends: "Grades are stable in math/science, but history scores dipped in the last month due to time management.",
        pendingTasksSummary: "Quantum Physics Lab due tomorrow, History Essay next week.",
        achievementsSummary: "Recently awarded Scholar Distinction in Math.",
        studyTimeOverview: "60% Science, 30% Math, 10% History."
      });
      setRecommendations(result);
    } catch (error) {
      console.error("AI Generation failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="luxury-card border border-primary/20 mt-8 mb-12">
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <div>
          <CardTitle className="font-headline text-2xl mb-2">AI STUDY ADVISOR</CardTitle>
          <p className="text-xs font-subtitle tracking-widest text-primary/60">GENERATE PERSONALIZED INSIGHTS</p>
        </div>
        <Button 
          onClick={handleGenerate} 
          disabled={loading}
          className="luxury-button bg-primary text-background font-subtitle"
        >
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
          {loading ? "ANALYZING..." : "ANALYZE PERFORMANCE"}
        </Button>
      </CardHeader>
      
      <CardContent>
        {!recommendations && !loading && (
          <div className="text-center py-12 border border-dashed border-primary/20">
            <Lightbulb className="mx-auto h-12 w-12 text-primary/30 mb-4" />
            <p className="text-muted text-sm font-subtitle tracking-wide">CLICK THE BUTTON ABOVE TO GET CUSTOM AI ADVICE</p>
          </div>
        )}

        {loading && (
          <div className="space-y-6 animate-pulse">
            <div className="h-6 bg-primary/10 w-1/3" />
            <div className="space-y-2">
              <div className="h-4 bg-primary/5 w-full" />
              <div className="h-4 bg-primary/5 w-5/6" />
              <div className="h-4 bg-primary/5 w-4/6" />
            </div>
          </div>
        )}

        {recommendations && (
          <div className="space-y-12">
            <div>
              <h4 className="font-subtitle text-[10px] tracking-[0.3em] text-primary mb-4 uppercase">STRATEGIC FOCUS AREAS</h4>
              <div className="flex flex-wrap gap-2">
                {recommendations.keyFocusAreas.map((area, i) => (
                  <span key={i} className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 text-[10px] font-subtitle uppercase tracking-widest">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-subtitle text-[10px] tracking-[0.3em] text-primary mb-6 uppercase">PERSONALIZED RECOMMENDATIONS</h4>
                <ul className="space-y-4">
                  {recommendations.studyRecommendations.map((rec, i) => (
                    <li key={i} className="flex gap-4 items-start text-sm leading-relaxed text-foreground/90 font-light italic border-l-2 border-primary/20 pl-4">
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-subtitle text-[10px] tracking-[0.3em] text-primary mb-6 uppercase">SUGGESTED RESOURCES</h4>
                <div className="space-y-4">
                  {recommendations.resourceSuggestions.map((res, i) => (
                    <div key={i} className="p-4 bg-background/50 border border-primary/10 hover:border-primary/40 transition-colors group">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-subtitle text-primary/60 uppercase tracking-widest">{res.type}</span>
                        {res.url && <ExternalLink className="h-3 w-3 text-primary/40 group-hover:text-primary" />}
                      </div>
                      <h5 className="text-sm font-medium mb-1 tracking-wide">{res.title}</h5>
                      <p className="text-xs text-muted leading-relaxed font-light">{res.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
