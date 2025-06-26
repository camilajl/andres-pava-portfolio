'use client';

import Link from 'next/link';
import Image from 'next/image';
import { links } from '@/utils/const';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isOpen: boolean;
  isMobile: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, isMobile, onClose }: SidebarProps) => {
  const sidebarClasses = `fixed left-0 top-0 h-screen bg-primary shadow-lg transition-all duration-300 z-40 ${
    isMobile ? (isOpen ? 'w-[50%] md:w-[70%] translate-x-0' : 'w-[50%] md:w-[70%] -translate-x-full') : 'w-[15%]'
  }`;

  const pathname = usePathname();

  const isCurrentPage = (path: string) => {
    return path === pathname;
  };

  const handleLinkClick = () => {
    if (isMobile) {
      onClose();
    }
  };

  return (
    <>
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
      <aside className={sidebarClasses}>
        <div className="flex flex-col h-full gap-8">
          <div className="relative w-full aspect-square mb-10">
            <Image
              src={'/foto_mejorada.png'}
              alt={'Skills'}
              fill
              className="object-cover"
              priority
            />
          </div>
          <nav className="flex flex-col justify-center items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                className={`
                  text-xs md:text-xl font-bold 
                  transition-all duration-300
                  ${isCurrentPage(link.href) 
                    ? 'text-white scale-105 border-b-2 border-white pb-1' 
                    : 'text-black hover:text-white hover:scale-105'
                  }
                `}
                href={link.href}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};
