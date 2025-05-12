
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

  return (
    <div
      className={cn(
        'flex items-end space-x-2 mb-4', // Increased mb slightly
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
          'px-4 py-3 max-w-xs sm:max-w-md md:max-w-lg break-words shadow-md', // Adjusted padding
          isUser
            ? 'bg-primary text-primary-foreground rounded-t-xl rounded-l-xl' // User bubble specific rounding
            : 'bg-card text-card-foreground border rounded-t-xl rounded-r-xl' // Bot bubble specific rounding
        )}
      >
        <p className="text-sm">{message.text}</p>
        <p className={cn(
            "text-xs mt-1.5", // Adjusted margin top slightly
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
