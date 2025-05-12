
'use client';

import type { FC, ChangeEvent, FormEvent } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, X, Bot } from 'lucide-react';
import ChatMessage, { type Message } from './ChatMessage';
import { Skeleton } from '../ui/skeleton';

interface ChatWindowProps {
  messages: Message[];
  inputValue: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSendMessage: (e: FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
  isLoading: boolean;
  chatContainerRef: React.RefObject<HTMLDivElement>;
}

const ChatWindow: FC<ChatWindowProps> = ({
  messages,
  inputValue,
  onInputChange,
  onSendMessage,
  onClose,
  isLoading,
  chatContainerRef,
}) => {
  return (
    <Card className="fixed bottom-20 right-4 md:right-6 w-[calc(100%-2rem)] sm:w-96 h-[70vh] max-h-[500px] flex flex-col shadow-xl rounded-lg border bg-background z-50">
      <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <Bot className="h-6 w-6 text-primary" />
          <CardTitle className="text-lg font-semibold">JavaPrep Assistant</CardTitle>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
          <X className="h-5 w-5" />
          <span className="sr-only">Close chat</span>
        </Button>
      </CardHeader>
      <CardContent className="flex-1 p-0 overflow-hidden">
        <ScrollArea className="h-full p-4">
          <div ref={chatContainerRef} className="space-y-2">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            {isLoading && (
               <div className="flex items-end space-x-2 mb-3 justify-start">
                 <Bot className="h-8 w-8 text-primary self-end" />
                 <div className="p-3 rounded-lg max-w-xs sm:max-w-md md:max-w-lg bg-card text-card-foreground rounded-bl-none border shadow-md">
                    <Skeleton className="h-4 w-24 mb-1" />
                    <Skeleton className="h-3 w-16" />
                 </div>
               </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-3 border-t">
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
