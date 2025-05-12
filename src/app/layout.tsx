import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono'; // Removed as per previous fix for module not found
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Header } from '@/components/layout/header';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { JavaPrepLogo } from '@/components/icons';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import ChatbotWidget from '@/components/chatbot/ChatbotWidget'; // Added ChatbotWidget import

const geistSans = GeistSans;
// const geistMono = GeistMono; // Removed as per previous fix

export const metadata: Metadata = {
  title: 'JavaPrep - Your Java Exam Companion',
  description: 'Learn Java concepts for your semester exams with detailed explanations and examples.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          geistSans.variable
          // geistMono.variable // Removed as per previous fix
        )}
      >
        <SidebarProvider defaultOpen>
          <Sidebar collapsible="icon">
            <SidebarHeader>
               <Link href="/" className="flex items-center justify-center gap-2 p-3 mb-2 rounded-lg bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 transition-colors">
                <JavaPrepLogo className="hidden group-data-[state=expanded]:block" />
                <BookOpen className="h-6 w-6 block group-data-[state=expanded]:hidden" /> {/* text color will be inherited from Link */}
              </Link>
            </SidebarHeader>
            <SidebarContent>
              <SidebarNav />
            </SidebarContent>
          </Sidebar>
          <SidebarInset className="flex flex-col">
            <Header />
            <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
        <ChatbotWidget /> {/* Added ChatbotWidget here */}
      </body>
    </html>
  );
}
