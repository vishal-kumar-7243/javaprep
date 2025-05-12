'use client';

import { useState, type ChangeEvent, type FormEvent, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';
import ChatWindow from './ChatWindow';
import type { Message } from './ChatMessage';
import { javaChatFlow } from '@/ai/flows/java-chat-flow';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const { toast } = useToast();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const initialGreetingMessage: Message = {
    id: Date.now().toString() + '-greeting',
    text: "Hello! I'm JavaPrepBot. How can I help you with Java today?",
    sender: 'bot',
    timestamp: new Date(),
  };

  useEffect(() => {
    if (isOpen && messages.length > 0) {
      chatContainerRef.current?.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isFullScreen && isOpen) { // If closing while in full screen, exit full screen
      setIsFullScreen(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString() + '-user',
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await javaChatFlow({ userInput: userMessage.text });
      const botMessage: Message = {
        id: Date.now().toString() + '-bot',
        text: response.botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: Message = {
        id: Date.now().toString() + '-error',
        text: "Sorry, I encountered an error. Please try again later.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      toast({
        title: 'Chatbot Error',
        description: 'Could not get a response from the assistant.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([initialGreetingMessage]);
    }
  }, [isOpen]); // Removed messages.length from dependencies to avoid re-triggering on message send

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleNewChat = () => {
    setMessages([
      {
        ...initialGreetingMessage,
        id: Date.now().toString() + '-greeting-new', // Ensure unique ID for new greeting
        timestamp: new Date(), // Update timestamp for new greeting
      }
    ]);
    setInputValue('');
    setIsLoading(false);
    // Optionally, exit full screen on new chat:
    // if (isFullScreen) setIsFullScreen(false); 
  };

  return (
    <>
      <Button
        onClick={toggleChat}
        className={cn(
          "fixed bottom-4 right-4 md:bottom-6 md:right-6 rounded-full h-14 w-14 p-0 shadow-lg z-[60] flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110", // Increased z-index
          isOpen ? "bg-destructive hover:bg-destructive/90" : "bg-primary hover:bg-primary/90"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="h-7 w-7 text-primary-foreground" /> : <MessageCircle className="h-7 w-7 text-primary-foreground" />}
      </Button>
      {isOpen && (
        <ChatWindow
          messages={messages}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onSendMessage={handleSendMessage}
          onClose={toggleChat}
          isLoading={isLoading}
          chatContainerRef={chatContainerRef}
          isFullScreen={isFullScreen}
          onToggleFullScreen={toggleFullScreen}
          onNewChat={handleNewChat}
        />
      )}
    </>
  );
};

export default ChatbotWidget;
