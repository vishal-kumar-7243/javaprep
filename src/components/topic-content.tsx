
'use client';

import { useEffect, useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import { summarizeTopic, type SummarizeTopicInput } from '@/ai/flows/summarize-topic';
import type { Topic } from '@/lib/syllabus-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Lightbulb, Terminal, AlertCircle, Code2, X } from 'lucide-react';
import { Input } from '@/components/ui/input'; // Added Input import

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
      flushParagraph(); 
      if (inListType === 'ol') closeList();
      if (inListType !== 'ul') {
        htmlOutput += `<ul>\n`;
        inListType = 'ul';
      }
      htmlOutput += `  <li>${isUlItem[1]}</li>\n`;
    } else if (isOlItem) {
      flushParagraph(); 
      if (inListType === 'ul') closeList();
      if (inListType !== 'ol') {
        htmlOutput += `<ol>\n`;
        inListType = 'ol';
      }
      htmlOutput += `  <li>${isOlItem[1]}</li>\n`;
    } else {
      closeList(); 

      if (line.trim() === '') { 
        flushParagraph();
      } else {
        if (currentParagraph) {
          currentParagraph += '<br />' + line; 
        } else {
          currentParagraph = line; 
        }
      }
    }
  }
  
  flushParagraph(); 
  closeList(); 

  htmlOutput = htmlOutput.replace(/<p>(\s*<br\s*\/?>\s*)+/g, '<p>');
  htmlOutput = htmlOutput.replace(/(<br\s*\/?>\s*)+<\/p>/g, '</p>');
  htmlOutput = htmlOutput.replace(/(<br\s*\/?>\s*){2,}/g, '<br />');


  return htmlOutput || '<p>No summary available.</p>';
}


export function TopicContent({ topic }: TopicContentProps) {
  const summaryPreferencesOptions = ["10-mark answer", "Bullet points", "Key concepts list", "ELI5 (Explain Like I'm 5)", "Other..."];
  const defaultPreference = summaryPreferencesOptions[0];

  const [currentSummaryPreference, setCurrentSummaryPreference] = useState<string>(defaultPreference);
  const [selectedButtonStyle, setSelectedButtonStyle] = useState<string>(defaultPreference);
  const [customStyleInput, setCustomStyleInput] = useState<string>('');
  
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSummaryInternal() {
      if (!topic.details) {
        setSummary("No detailed information provided for this topic to summarize.");
        setIsLoading(false);
        return;
      }

      // setIsLoading(true) and setError(null) are set by click handlers or initial state
      // For the very first load, isLoading is already true.

      try {
        const input: SummarizeTopicInput = { 
          topicDetails: topic.details,
          summaryFormatPreference: currentSummaryPreference || undefined // AI flow handles undefined as default
        };
        const result = await summarizeTopic(input);
        setSummary(result.summary);
      } catch (err) {
        console.error('Error fetching summary:', err);
        setError('Failed to load AI summary. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    if (isLoading && topic.details) {
        fetchSummaryInternal();
    } else if (!topic.details) {
        setSummary("No detailed information provided for this topic to summarize.");
        setIsLoading(false);
    }
  }, [topic.details, topic.id, currentSummaryPreference, isLoading]);


  const handlePreferenceClick = (pref: string) => {
    if (pref === "Other...") {
      setSelectedButtonStyle("Other...");
      // Don't change currentSummaryPreference or trigger loading yet.
      // User will type in the input and then click "Apply".
    } else {
      setCurrentSummaryPreference(pref);
      setSelectedButtonStyle(pref);
      setCustomStyleInput(''); // Clear custom input if a predefined one is chosen
      setIsLoading(true);
      setError(null);
    }
  };

  const handleApplyCustomStyle = () => {
    if (customStyleInput.trim()) {
      setCurrentSummaryPreference(customStyleInput.trim());
      setSelectedButtonStyle("Other..."); // Keep "Other..." button highlighted
      setIsLoading(true);
      setError(null);
    }
  };

  const handleCustomInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleApplyCustomStyle();
    }
  };

  const handleClearPreference = () => {
    setCurrentSummaryPreference(defaultPreference); // Reset to default
    setSelectedButtonStyle(defaultPreference);
    setCustomStyleInput("");
    setIsLoading(true);
    setError(null);
  };

  const showClearButton = currentSummaryPreference !== defaultPreference || customStyleInput !== "";

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card className="mb-6 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">Customize Summary Style</CardTitle>
          <CardDescription>Choose how you want the AI to summarize this topic for you, or specify your own.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            {summaryPreferencesOptions.map(pref => (
              <Button
                key={pref}
                variant={selectedButtonStyle === pref ? "default" : "outline"}
                size="sm"
                onClick={() => handlePreferenceClick(pref)}
                disabled={isLoading}
              >
                {pref}
              </Button>
            ))}
          </div>

          {selectedButtonStyle === "Other..." && (
            <div className="flex items-center gap-2 mt-2">
              <Input
                type="text"
                placeholder="Enter custom summary style (e.g., 'in 3 sentences')"
                value={customStyleInput}
                onChange={(e) => setCustomStyleInput(e.target.value)}
                onKeyDown={handleCustomInputKeyDown}
                disabled={isLoading}
                className="flex-grow"
              />
              <Button 
                size="sm" 
                onClick={handleApplyCustomStyle} 
                disabled={isLoading || !customStyleInput.trim()}
              >
                Apply
              </Button>
            </div>
          )}
          
          {showClearButton && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearPreference}
              disabled={isLoading}
              className="text-muted-foreground hover:text-foreground mt-2 self-start"
            >
              <X className="mr-1 h-4 w-4" /> Reset to Default Style
            </Button>
          )}
        </CardContent>
      </Card>


      <Card className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <Lightbulb className="h-8 w-8 text-primary" />
            <CardTitle className="text-2xl">AI Generated Summary</CardTitle>
          </div>
          <CardDescription>
            This content is summarized by AI {currentSummaryPreference && currentSummaryPreference !== defaultPreference ? `in a "${currentSummaryPreference}" style` : `in a "${defaultPreference}" style`}.
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
      
      {topic.details && (currentSummaryPreference !== topic.details || currentSummaryPreference !== defaultPreference) && ( 
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
                <Code2 className="h-6 w-6 text-success" /> 
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
                <Terminal className="h-6 w-6 text-primary" /> 
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

