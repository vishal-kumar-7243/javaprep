
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

      <Card className="shadow-lg">
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
            (() => {
              let htmlSummary = 'No summary available.';
              if (summary) {
                htmlSummary = summary
                  // Replace **Word:** with <strong>Word</strong>
                  .replace(/\*\*(.*?):\*\*/g, '<strong>$1</strong>')
                  // Replace newlines with <br />
                  .replace(/\n/g, '<br />');
              }
              return <div dangerouslySetInnerHTML={{ __html: htmlSummary }} />;
            })()
          )}
        </CardContent>
      </Card>
      
      {topic.details && !summary?.includes(topic.details) && ( // Show original details if different from summary
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Original Topic Details</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none dark:prose-invert">
             <p>{topic.details}</p>
          </CardContent>
        </Card>
      )}

      {topic.codeExample && (
        <Card>
          <CardHeader>
             <div className="flex items-center space-x-3">
                <Code2 className="h-6 w-6 text-green-500" />
                <CardTitle className="text-xl">Code Example</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
              <code>{topic.codeExample}</code>
            </pre>
          </CardContent>
        </Card>
      )}

      {topic.outputExample && (
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-3">
                <Terminal className="h-6 w-6 text-blue-500" />
                <CardTitle className="text-xl">Output</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
              <code>{topic.outputExample}</code>
            </pre>
          </CardContent>
        </Card>
      )}

      {topic.image && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Visual Aid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-64 md:h-96 rounded-md overflow-hidden border">
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

