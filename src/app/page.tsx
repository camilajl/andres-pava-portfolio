'use client';

import Image from 'next/image';
import { HomeWelcome } from '@/components/pages/home/HomeWelcome';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="flex order-2 lg:order-1 items-center justify-center">
          <HomeWelcome />
        </div>
        <div className="relative h-[30vh] sm:h-[30vh] md:h-[35vh] lg:h-full w-full order-1 lg:order-2">
          <Image
            src={'/foto_mejorada.png'}
            alt={'Skills'}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </main>
  );
}
