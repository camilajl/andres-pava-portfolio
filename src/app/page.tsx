import Image from 'next/image';
import { HomeWelcome } from '@/components/pages/home/HomeWelcome';

export const Home = () => {
  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-2 min-h-screen">
        <HomeWelcome />
        <div className="relative h-full w-full">
          <Image
            src={'/pexels-hamidtajikph-17388092.jpg'}
            alt={'Skills'}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
