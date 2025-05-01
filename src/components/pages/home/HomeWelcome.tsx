'use client';
import { Button } from '@/components/atoms/Button';
import { useRouter } from 'next/navigation';

export const HomeWelcome = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-col p-6 gap-10 justify-center items-center">
      <div className="flex flex-col gap-2">
        <h2>HI THERE!</h2>
        <span className="flex flex-row gap-2">
          <h1>I'M </h1> <h1 className="text-primary">ANDRÉS FELIPE PAVA CANO</h1>
        </span>

        <p className="font-bold bg-primary text-foreground px-2 py-1 rounded-md w-fit my-5">
          DATA ANALYST
        </p>
        <p className="max-w-[600px] text-justify">
          I'm a software engineer with a passion for building web applications. I'm a software
          engineer with a passion for building web applications. I'm a software engineer with a
          passion for building web applications.
        </p>
      </div>
      <Button variant="primary" onClick={() => router.push('/about')} className="text-xl ">
        MORE ABOUT ME
      </Button>
    </div>
  );
};

export default HomeWelcome;
