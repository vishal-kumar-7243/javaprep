
'use client';

import type { FC, ChangeEvent, FormEvent } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, X, Bot, Expand, Shrink, RefreshCcw } from 'lucide-react';
import ChatMessage, { type Message } from './ChatMessage';
import { Skeleton } from '../ui/skeleton';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';


interface ChatWindowProps {
  messages: Message[];
  inputValue: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSendMessage: (e: FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
  isLoading: boolean;
  chatContainerRef: React.RefObject<HTMLDivElement>;
  isFullScreen: boolean;
  onToggleFullScreen: () => void;
  onNewChat: () => void;
  responsePreferenceValue: string;
  onResponsePreferenceChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ChatWindow: FC<ChatWindowProps> = ({
  messages,
  inputValue,
  onInputChange,
  onSendMessage,
  onClose,
  isLoading,
  chatContainerRef,
  isFullScreen,
  onToggleFullScreen,
  onNewChat,
  responsePreferenceValue,
  onResponsePreferenceChange,
}) => {
  return (
    <Card className={cn(
      "fixed shadow-xl rounded-lg border bg-background z-50 flex flex-col",
      isFullScreen
        ? "inset-0 w-full h-full max-h-full rounded-none"
        : "bottom-20 right-4 md:right-6 w-[calc(100%-2rem)] sm:w-96 h-[70vh] max-h-[500px]"
    )}>
      <CardHeader className="flex flex-row items-center justify-between p-3 border-b bg-muted/50">
        <div className="flex items-center space-x-2">
          <Bot className="h-6 w-6 text-primary" />
          <CardTitle className="text-lg font-semibold">JavaPrep Assistant</CardTitle>
        </div>
        <div className="flex items-center space-x-1">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={onNewChat} className="h-8 w-8">
                  <RefreshCcw className="h-4 w-4" />
                  <span className="sr-only">New Chat</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>New Chat</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={onToggleFullScreen} className="h-8 w-8">
                  {isFullScreen ? <Shrink className="h-4 w-4" /> : <Expand className="h-4 w-4" />}
                  <span className="sr-only">{isFullScreen ? 'Exit Full Screen' : 'Full Screen'}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isFullScreen ? 'Exit Full Screen' : 'Full Screen'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close chat</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Close</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-0 overflow-hidden">
        <ScrollArea className="h-full p-4">
          <div ref={chatContainerRef} className="space-y-1">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            {isLoading && (
               <div className="flex items-end space-x-2 mb-4 justify-start">
                 <Avatar className="h-8 w-8">
                    <AvatarFallback>
                        <Bot className="h-5 w-5 text-primary" />
                    </AvatarFallback>
                 </Avatar>
                 <div className="px-4 py-3 rounded-t-xl rounded-r-xl max-w-xs sm:max-w-md md:max-w-lg bg-card text-card-foreground border shadow-md">
                    <Skeleton className="h-4 w-24 mb-1" />
                    <Skeleton className="h-3 w-16" />
                 </div>
               </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-3 border-t flex flex-col gap-2">
        <Input
            type="text"
            placeholder="Response style (e.g., 'explain simply', 'code example')"
            value={responsePreferenceValue}
            onChange={onResponsePreferenceChange}
            disabled={isLoading}
            className="w-full text-xs h-8"
            aria-label="Response style preference"
        />
        <form onSubmit={onSendMessage} className="flex w-full space-x-2">
          <Input
            type="text"
            placeholder="Ask about Java..."
            value={inputValue}
            onChange={onInputChange}
            disabled={isLoading}
            className="flex-1 text-sm"
            aria-label="Chat message input"
          />
          <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()} className="h-10 w-10">
            <Send className="h-5 w-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default ChatWindow;

