'use client';

import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bot, UserCircle } from 'lucide-react';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  const renderMessageContent = (text: string) => {
    // Regex to identify code blocks like ```java ... ``` or ``` ... ```
    const codeBlockRegex = /(```(?:[a-z]*\n)?[\s\S]*?```)/g;
    const parts = text.split(codeBlockRegex);

    return parts.map((part, index) => {
      if (part.startsWith('```')) {
        // This part is a code block
        let codeContent = part.substring(3, part.length - 3); // Remove ``` delimiters

        // Remove optional language identifier line (e.g., "java\n")
        const languageLineMatch = codeContent.match(/^[a-z]*\n/);
        if (languageLineMatch) {
          codeContent = codeContent.substring(languageLineMatch[0].length);
        }

        return (
          <pre key={index} className="bg-muted p-3 rounded-md overflow-x-auto my-2 text-sm shadow">
            <code>{codeContent.trim()}</code>
          </pre>
        );
      }
      // This part is plain text
      // It might be empty if the message starts/ends with a code block or has adjacent code blocks
      if (part.trim() === '') {
        return null; 
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div
      className={cn(
        'flex items-end space-x-2 mb-4',
        isUser ? 'justify-end' : 'justify-start'
      )}
    >
      {!isUser && (
        <Avatar className="h-8 w-8">
          <AvatarFallback>
            <Bot className="h-5 w-5 text-primary" />
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          'px-4 py-3 max-w-xs sm:max-w-md md:max-w-lg break-words shadow-md text-sm',
          isUser
            ? 'bg-primary text-primary-foreground rounded-t-xl rounded-l-xl'
            : 'bg-card text-card-foreground border rounded-t-xl rounded-r-xl'
        )}
      >
        {/* Container for message content that preserves whitespace for plain text parts */}
        <div style={{ whiteSpace: 'pre-wrap' }}>
          {renderMessageContent(message.text)}
        </div>
        
        <p className={cn(
            "text-xs mt-1.5",
            isUser ? "text-primary-foreground/80 text-right" : "text-muted-foreground text-left"
        )}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
      {isUser && (
         <Avatar className="h-8 w-8">
          <AvatarFallback>
            <UserCircle className="h-5 w-5 text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;
