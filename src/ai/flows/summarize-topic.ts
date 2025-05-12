// src/ai/flows/summarize-topic.ts
'use server';
/**
 * @fileOverview Summarizes a detailed topic into a 10-mark answer format.
 *
 * - summarizeTopic - A function that summarizes the topic.
 * - SummarizeTopicInput - The input type for the summarizeTopic function.
 * - SummarizeTopicOutput - The return type for the summarizeTopic function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTopicInputSchema = z.object({
  topicDetails: z
    .string()
    .describe('Detailed information about the topic to be summarized.'),
});
export type SummarizeTopicInput = z.infer<typeof SummarizeTopicInputSchema>;

const SummarizeTopicOutputSchema = z.object({
  summary: z.string().describe('A summary of the topic in a 10-mark answer format.'),
});
export type SummarizeTopicOutput = z.infer<typeof SummarizeTopicOutputSchema>;

export async function summarizeTopic(input: SummarizeTopicInput): Promise<SummarizeTopicOutput> {
  return summarizeTopicFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeTopicPrompt',
  input: {schema: SummarizeTopicInputSchema},
  output: {schema: SummarizeTopicOutputSchema},
  prompt: `You are an expert Java teacher who can condense detailed information into key concepts for exam preparation.

  Summarize the following topic details into a 10-mark answer format, using simple language and highlighting key concepts:

  {{{topicDetails}}}`,
});

const summarizeTopicFlow = ai.defineFlow(
  {
    name: 'summarizeTopicFlow',
    inputSchema: SummarizeTopicInputSchema,
    outputSchema: SummarizeTopicOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
