'use client';

import Link from 'next/link';
import Image from 'next/image';
import { links } from '@/utils/const';

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[15%] bg-primary shadow-lg">
      <div className="flex flex-col h-full gap-8">
        <div className="relative w-full aspect-square mb-10">
          <Image
            src={'/pexels-hamidtajikph-17388092.jpg'}
            alt={'Skills'}
            fill
            className="object-cover"
            priority
          />
        </div>
        <nav className="flex flex-col justify-center items-center gap-10">
          {links.map((link) => (
            <Link className="text-xl font-bold hover:text-white transition-colors" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};
