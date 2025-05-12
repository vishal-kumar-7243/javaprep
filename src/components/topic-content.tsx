
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { summarizeTopic, type SummarizeTopicInput } from '@/ai/flows/summarize-topic';
import type { Topic } from '@/lib/syllabus-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { Lightbulb, Terminal, AlertCircle, Code2 } from 'lucide-react';

interface TopicContentProps {
  topic: Topic;
}

// Helper function to format summary text to HTML for better prose styling
function formatSummaryToHtml(text: string | null): string {
  if (!text) return '<p>No summary available.</p>';

  // Convert **text** to <strong>text</strong>
  let processedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  const lines = processedText.split('\n');
  let htmlOutput = '';
  let inListType: 'ul' | 'ol' | null = null;
  let currentParagraph = '';

  const flushParagraph = () => {
    if (currentParagraph.trim()) {
      htmlOutput += `<p>${currentParagraph.trim()}</p>\n`;
    }
    currentParagraph = '';
  };

  const closeList = () => {
    if (inListType === 'ul') htmlOutput += `</ul>\n`;
    if (inListType === 'ol') htmlOutput += `</ol>\n`;
    inListType = null;
  };

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    const isUlItem = line.match(/^[\t ]*[-*]\s+(.*)/);
    const isOlItem = line.match(/^[\t ]*\d+\.\s+(.*)/);

    if (isUlItem) {
      flushParagraph(); // End current paragraph before starting a list
      if (inListType === 'ol') closeList();
      if (inListType !== 'ul') {
        htmlOutput += `<ul>\n`;
        inListType = 'ul';
      }
      htmlOutput += `  <li>${isUlItem[1]}</li>\n`;
    } else if (isOlItem) {
      flushParagraph(); // End current paragraph before starting a list
      if (inListType === 'ul') closeList();
      if (inListType !== 'ol') {
        htmlOutput += `<ol>\n`;
        inListType = 'ol';
      }
      htmlOutput += `  <li>${isOlItem[1]}</li>\n`;
    } else {
      // Not a list item
      closeList(); // Close any open list if we're moving to non-list content

      if (line.trim() === '') { // Blank line signifies a paragraph break
        flushParagraph();
      } else {
        if (currentParagraph) {
          currentParagraph += '<br />' + line; // Add as part of current paragraph with a line break
        } else {
          currentParagraph = line; // Start a new paragraph
        }
      }
    }
  }
  
  flushParagraph(); // Flush any remaining paragraph content
  closeList(); // Close any remaining open list

  // Remove multiple consecutive <br /> tags within paragraphs that might result from this logic
  htmlOutput = htmlOutput.replace(/<p>(\s*<br\s*\/?>\s*)+/g, '<p>');
  htmlOutput = htmlOutput.replace(/(<br\s*\/?>\s*)+<\/p>/g, '</p>');
  htmlOutput = htmlOutput.replace(/(<br\s*\/?>\s*){2,}/g, '<br />');


  return htmlOutput || '<p>No summary available.</p>'; // Ensure non-empty output
}


export function TopicContent({ topic }: TopicContentProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSummary() {
      if (!topic.details) {
        setSummary("No detailed information provided for this topic to summarize.");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);
      try {
        const input: SummarizeTopicInput = { topicDetails: topic.details };
        const result = await summarizeTopic(input);
        setSummary(result.summary);
      } catch (err) {
        console.error('Error fetching summary:', err);
        setError('Failed to load AI summary. Please try again later.');
        setSummary(topic.details); // Fallback to original details
      } finally {
        setIsLoading(false);
      }
    }

    fetchSummary();
  }, [topic.details, topic.id]);

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <Lightbulb className="h-8 w-8 text-primary" />
            <CardTitle className="text-2xl">AI Generated Summary (10 Marks Format)</CardTitle>
          </div>
          <CardDescription>
            This content is summarized by AI to help you understand the key concepts quickly.
          </CardDescription>
        </CardHeader>
        <CardContent className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none dark:prose-invert">
          {isLoading ? (
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
            </div>
          ) : (
             <div dangerouslySetInnerHTML={{ __html: formatSummaryToHtml(summary) }} />
          )}
        </CardContent>
      </Card>
      
      {topic.details && (!summary || !summary.includes(topic.details)) && ( // Show original details if different from summary or summary is missing
        <Card className="transition-all duration-300 ease-in-out hover:shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl">Original Topic Details</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none dark:prose-invert">
             <p>{topic.details}</p>
          </CardContent>
        </Card>
      )}

      {topic.codeExample && (
        <Card className="transition-all duration-300 ease-in-out hover:shadow-xl">
          <CardHeader>
             <div className="flex items-center space-x-3">
                <Code2 className="h-6 w-6 text-success" /> {/* Use success color for code icon */}
                <CardTitle className="text-xl">Code Example</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm shadow-inner">
              <code>{topic.codeExample}</code>
            </pre>
          </CardContent>
        </Card>
      )}

      {topic.outputExample && (
        <Card className="transition-all duration-300 ease-in-out hover:shadow-xl">
          <CardHeader>
            <div className="flex items-center space-x-3">
                <Terminal className="h-6 w-6 text-primary" /> {/* Use primary color for terminal icon */}
                <CardTitle className="text-xl">Output</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm shadow-inner">
              <code>{topic.outputExample}</code>
            </pre>
          </CardContent>
        </Card>
      )}

      {topic.image && (
        <Card className="transition-all duration-300 ease-in-out hover:shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl">Visual Aid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-64 md:h-96 rounded-md overflow-hidden border shadow-inner">
              <Image
                src={topic.image}
                alt={topic.name || 'Visual Aid'}
                layout="fill"
                objectFit="contain"
                data-ai-hint={topic.imageHint || "diagram code"}
              />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
