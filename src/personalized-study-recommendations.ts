'use server';
/**
 * @fileOverview A Genkit flow for generating personalized study recommendations.
 *
 * - personalizeStudyRecommendations - A function that provides personalized study recommendations.
 * - PersonalizedStudyRecommendationsInput - The input type for the personalizeStudyRecommendations function.
 * - PersonalizedStudyRecommendationsOutput - The return type for the personalizeStudyRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const PersonalizedStudyRecommendationsInputSchema = z.object({
  studentName: z.string().optional().describe('The name of the student for personalization in the recommendations.'),
  overallProgress: z.string().describe('A summary of the student\u0027s overall academic progress and standing.'),
  courseProgress: z.array(z.object({
    name: z.string().describe('The name of the course.'),
    completion: z.number().min(0).max(100).describe('Completion percentage of the course.'),
    grade: z.string().optional().describe('Current grade in the course (e.g., "A", "B+", "Outstanding").'),
  })).describe('List of active courses with their progress and grades.'),
  performanceTrends: z.string().describe('A summary of weekly and monthly performance trends (e.g., "grades declined in math last month", "improved in science this week").'),
  pendingTasksSummary: z.string().describe('A summary of upcoming deadlines and pending tasks.'),
  achievementsSummary: z.string().describe('A summary of recent academic achievements or recognitions.'),
  studyTimeOverview: z.string().describe('A description of how study time is currently distributed across subjects or activities.'),
});
export type PersonalizedStudyRecommendationsInput = z.infer<typeof PersonalizedStudyRecommendationsInputSchema>;

// Output Schema
const PersonalizedStudyRecommendationsOutputSchema = z.object({
  studyRecommendations: z.array(z.string()).describe('A list of specific, actionable study advice tailored to the student.'),
  resourceSuggestions: z.array(z.object({
    title: z.string().describe('The title of the suggested resource.'),
    description: z.string().describe('A brief description of the resource and why it\u0027s recommended.'),
    type: z.enum(['article', 'video', 'book', 'course', 'tool', 'other']).describe('The type of resource.'),
    url: z.string().url().optional().describe('Optional URL to access the resource.'),
  })).describe('A list of suggested external resources (e.g., articles, videos, books, online courses).'),
  keyFocusAreas: z.array(z.string()).describe('A list of specific subjects or topics the student should prioritize for improvement or deeper study.'),
});
export type PersonalizedStudyRecommendationsOutput = z.infer<typeof PersonalizedStudyRecommendationsOutputSchema>;

export async function personalizeStudyRecommendations(input: PersonalizedStudyRecommendationsInput): Promise<PersonalizedStudyRecommendationsOutput> {
  return personalizedStudyRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedStudyRecommendationsPrompt',
  input: { schema: PersonalizedStudyRecommendationsInputSchema },
  output: { schema: PersonalizedStudyRecommendationsOutputSchema },
  prompt: `You are an intelligent and empathetic educational advisor. Your goal is to analyze a student's academic profile and provide personalized, actionable study recommendations to help them optimize their learning and improve in areas where they need help.\n\nHere is the student's current academic profile:\n\n{{#if studentName}}\nStudent Name: {{{studentName}}}\n{{/if}}\n\nOverall Progress: {{{overallProgress}}}\n\nActive Courses and Progress:\n{{#each courseProgress}}\n- Course: {{{this.name}}}, Completion: {{{this.completion}}}%, Grade: {{{this.grade}}}\n{{/each}}\n\nPerformance Trends: {{{performanceTrends}}}\n\nPending Tasks Summary: {{{pendingTasksSummary}}}\n\nRecent Achievements: {{{achievementsSummary}}}\n\nStudy Time Overview: {{{studyTimeOverview}}}\n\nBased on this information, provide:\n1. A list of specific study recommendations.\n2. A list of suggested resources (e.g., articles, videos, books, online courses) to support these recommendations.\n3. A list of key subjects or topics the student should prioritize for improvement or deeper study.\n\nEnsure your recommendations are encouraging, practical, and directly address the student's strengths and weaknesses as inferred from the provided data.\n`
});

const personalizedStudyRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedStudyRecommendationsFlow',
    inputSchema: PersonalizedStudyRecommendationsInputSchema,
    outputSchema: PersonalizedStudyRecommendationsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
