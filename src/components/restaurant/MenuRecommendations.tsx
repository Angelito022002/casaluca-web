
"use client"

import { useState } from "react";
import { personalizeStudyRecommendations } from "@/ai/flows/personalized-study-recommendations";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles, Loader2, Utensils, Lightbulb } from "lucide-react";

export function MenuRecommendations() {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<any | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      // Re-purposing the existing flow for a culinary context
      const result = await personalizeStudyRecommendations({
        studentName: "Guest",
        overallProgress: "A food enthusiast looking for a sophisticated pairing experience.",
        courseProgress: [
          { name: "Appetizer Preference", completion: 100, grade: "Seafood" },
          { name: "Main Course Goal", completion: 80, grade: "Bold Flavors" },
          { name: "Palate Style", completion: 90, grade: "Experimental" }
        ],
        performanceTrends: "Enjoys dry white wines and creamy textures.",
        pendingTasksSummary: "Planning a 3-course celebration dinner.",
        achievementsSummary: "Frequent visitor to Italian fine dining establishments.",
        studyTimeOverview: "70% Italian Cuisine, 30% Modern Fusion."
      });
      setRecommendations(result);
    } catch (error) {
      console.error("AI Generation failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="luxury-card border border-primary/20 mt-8 mb-12 bg-background">
      <CardHeader className="flex flex-row items-center justify-between pb-8 border-b border-primary/10">
        <div>
          <CardTitle className="font-headline text-2xl mb-2">AI SOMMELIER & CONCIERGE</CardTitle>
          <p className="text-[10px] font-subtitle tracking-widest text-primary/60 uppercase">PERSONALIZED PAIRING INSIGHTS</p>
        </div>
        <Button 
          onClick={handleGenerate} 
          disabled={loading}
          className="luxury-button bg-primary text-background font-subtitle tracking-widest h-14"
        >
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
          {loading ? "CONSULTING..." : "DISCOVER YOUR PALATE"}
        </Button>
      </CardHeader>
      
      <CardContent className="pt-12">
        {!recommendations && !loading && (
          <div className="text-center py-16 border border-dashed border-primary/20 arched-portal max-w-2xl mx-auto">
            <Utensils className="mx-auto h-12 w-12 text-primary/30 mb-4" />
            <p className="text-muted text-sm font-subtitle tracking-[0.3em] uppercase italic">ALLOW OUR AI TO CURATE YOUR PERFECT DINING EXPERIENCE</p>
          </div>
        )}

        {loading && (
          <div className="space-y-12 animate-pulse max-w-4xl mx-auto">
            <div className="h-8 bg-primary/10 w-1/3 mx-auto" />
            <div className="grid grid-cols-2 gap-12">
              <div className="h-32 bg-primary/5" />
              <div className="h-32 bg-primary/5" />
            </div>
          </div>
        )}

        {recommendations && (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="text-center">
              <h4 className="font-subtitle text-[10px] tracking-[0.4em] text-primary mb-6 uppercase">CURATED FLAVOR PROFILE</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {recommendations.keyFocusAreas.map((area: string, i: number) => (
                  <span key={i} className="px-6 py-2 bg-primary/5 text-primary border border-primary/20 text-[10px] font-subtitle uppercase tracking-[0.3em]">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h4 className="font-subtitle text-[10px] tracking-[0.4em] text-primary uppercase border-b border-primary/10 pb-4">CHEF'S RECOMMENDATIONS</h4>
                <ul className="space-y-6">
                  {recommendations.studyRecommendations.map((rec: string, i: number) => (
                    <li key={i} className="flex gap-6 items-start text-sm leading-relaxed text-foreground/90 font-light italic border-l border-primary/30 pl-6">
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <h4 className="font-subtitle text-[10px] tracking-[0.4em] text-primary uppercase border-b border-primary/10 pb-4">SUGGESTED VINTAGES & PAIRINGS</h4>
                <div className="space-y-6">
                  {recommendations.resourceSuggestions.map((res: any, i: number) => (
                    <div key={i} className="p-6 bg-primary/5 border border-primary/10 hover:border-primary/40 transition-all duration-500">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[10px] font-subtitle text-primary uppercase tracking-[0.3em]">{res.type}</span>
                        <Lightbulb className="h-3 w-3 text-primary/40" />
                      </div>
                      <h5 className="text-sm font-headline mb-2 tracking-wide text-primary">{res.title}</h5>
                      <p className="text-xs text-muted leading-relaxed font-light italic">{res.description}</p>
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
