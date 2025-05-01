'use client';
import { Button } from '@/components/atoms/Button';
import { useRouter } from 'next/navigation';

export const HomeWelcome = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-col p-6 gap-10 justify-center items-center">
      <div className="flex flex-col gap-2 text-center md:text-left">
        <h2>HI THERE!</h2>
        <span className="flex  flex-col md:flex-row gap-2 ">
          <h1>I'M </h1> <h1 className="text-primary">ANDRÉS FELIPE PAVA CANO</h1>
        </span>

        <p className="font-bold bg-primary text-foreground px-2 py-1 rounded-md w-fit my-5">
          SENIOR DATA ANALYST | ADVANCED ANALYTICS & AUTOMATION
        </p>
        <p className="max-w-[600px] text-justify">
          As a Senior Data Analyst, I'm passionate about transforming complex data into clear,
          actionable insights that support business growth and decision-making.
          <br />
          I enjoy solving problems with data, optimizing processes, and working cross-functionally
          to bring value through analysis.
          <br />
        
          
        </p>
      </div>
      <Button variant="primary" onClick={() => router.push('/about')} className="text-xl ">
        MORE ABOUT ME
      </Button>
    </div>
  );
};

export default HomeWelcome;
