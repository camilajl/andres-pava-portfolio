'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from './Sidebar';

export function SidebarWrapper() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  if (isHomePage) {
    return null;
  }

  return <Sidebar />;
}
