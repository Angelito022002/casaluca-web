
"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
  { day: "Mon", score: 85 },
  { day: "Tue", score: 88 },
  { day: "Wed", score: 92 },
  { day: "Thu", score: 87 },
  { day: "Fri", score: 95 },
  { day: "Sat", score: 91 },
  { day: "Sun", score: 94 },
];

const chartConfig = {
  score: {
    label: "Performance Score",
    color: "hsl(var(--primary))",
  },
};

export function PerformanceCharts() {
  return (
    <Card className="luxury-card w-full mb-8">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
        <CardTitle className="font-headline text-xl">WEEKLY PERFORMANCE TRENDS</CardTitle>
        <span className="font-subtitle text-[10px] tracking-widest text-primary uppercase">ACADEMIC STANDING</span>
      </CardHeader>
      <CardContent className="h-[300px] w-full p-0">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart data={data}>
            <CartesianGrid vertical={false} stroke="hsl(var(--primary)/0.1)" />
            <XAxis 
              dataKey="day" 
              stroke="hsl(var(--primary)/0.5)" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false} 
            />
            <YAxis 
              stroke="hsl(var(--primary)/0.5)" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false} 
              domain={[80, 100]}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line 
              type="monotone" 
              dataKey="score" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2} 
              dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }} 
              activeDot={{ r: 6, fill: "hsl(var(--primary))", stroke: "white" }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
