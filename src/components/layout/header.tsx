import Link from 'next/link';
import { JavaPrepLogo } from '@/components/icons';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <JavaPrepLogo />
        </Link>
        <div className="md:hidden">
          <SidebarTrigger />
        </div>
      </div>
    </header>
  );
}
