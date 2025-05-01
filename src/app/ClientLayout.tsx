'use client';

import { Montserrat } from 'next/font/google';
import { SidebarWrapper } from '@/components/organisms/navigation/SidebarWrapper';
import { usePathname } from 'next/navigation';
import { useIsMobile } from '@/hooks/useIsMobile';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { isMobileDevice } = useIsMobile();

  return (
    <body className={`${montserrat.className} antialiased`}>
      <div className="flex min-h-screen">
        <SidebarWrapper />
        <main className={`flex-1 ${!isMobileDevice && !isHomePage ? 'ml-[15%]' : ''}`}>
          {children}
        </main>
      </div>
    </body>
  );
} 