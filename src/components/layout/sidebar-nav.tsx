'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen } from 'lucide-react';
import { getAllUnits, type Unit } from '@/lib/syllabus-data';
import { cn } from '@/lib/utils';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

export function SidebarNav() {
  const pathname = usePathname();
  const units = getAllUnits();

  return (
    <SidebarMenu>
      {units.map((unit: Unit) => (
        <SidebarMenuItem key={unit.id}>
          <Link href={`/unit/${unit.id}`} passHref legacyBehavior>
            <SidebarMenuButton
              isActive={pathname.startsWith(`/unit/${unit.id}`)}
              className="w-full justify-start"
              tooltip={unit.longTitle}
            >
              <BookOpen className="h-4 w-4" />
              <span className="truncate">{unit.title}: {unit.longTitle}</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
