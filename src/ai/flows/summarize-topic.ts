
// src/ai/flows/summarize-topic.ts
'use server';
/**
 * @fileOverview Summarizes a detailed topic.
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
  summaryFormatPreference: z.string().optional().describe('User preference for the summary format (e.g., "bullet points", "short paragraph", "explain concepts"). Default is "10-mark answer format".')
});
export type SummarizeTopicInput = z.infer<typeof SummarizeTopicInputSchema>;

const SummarizeTopicOutputSchema = z.object({
  summary: z.string().describe('A summary of the topic based on the requested format.'),
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

  {{#if summaryFormatPreference}}
  Summarize the following topic details according to this preference: "{{{summaryFormatPreference}}}". Ensure the output is clear and directly addresses the preference. For example, if "bullet points" is requested, provide a bulleted list. If "ELI5" is requested, explain in very simple terms.
  {{else}}
  Summarize the following topic details into a 10-mark answer format, using simple language and highlighting key concepts.
  {{/if}}

  Topic Details:
  {{{topicDetails}}}`,
});

const summarizeTopicFlow = ai.defineFlow(
  {
    name: 'summarizeTopicFlow',
    inputSchema: SummarizeTopicInputSchema,
    outputSchema: SummarizeTopicOutputSchema,
  },
  async input => {
    // The await prompt(input) call will throw an error if the API call itself fails (e.g., 503 error).
    // That error will propagate to the client and be caught by the try-catch in TopicContent.tsx.
    const {output} = await prompt(input); 

    if (!output) {
      // This condition handles cases where the API call might have succeeded (e.g., 200 OK),
      // but the model's response was empty or didn't conform to the output schema.
      console.error('summarizeTopicFlow: AI model returned empty or non-conforming output for input:', input);
      throw new Error('The AI model returned an unexpected response. Please try again.');
    }
    return output; // No longer using output! as we've checked it.
  }
);

