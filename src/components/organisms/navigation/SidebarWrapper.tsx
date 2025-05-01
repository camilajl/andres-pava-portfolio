'use client';

import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { useIsMobile } from '@/hooks/useIsMobile';
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';

export const SidebarWrapper = () => {
  const { isMobileDevice } = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobileDevice);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  if (isHomePage) {
    return null;
  }

  return (
    <>
      {isMobileDevice && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 bg-primary rounded-lg shadow-lg hover:bg-primary-dark transition-colors"
        >
          <Icon 
            icon={isOpen ? "mdi:close" : "mdi:menu"} 
            className="w-6 h-6 text-white"
          />
        </button>
      )}
      <Sidebar isOpen={isOpen} isMobile={isMobileDevice} />
    </>
  );
};
