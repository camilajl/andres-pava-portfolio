'use client';
import { Button } from '@/components/atoms/Button';
import { useRouter } from 'next/navigation';

export const HeaderText = ({ title }: { title: string }) => {
  return (
    <div className=" flex flex-col p-6 gap-10 items-center border border-dashed">
      <h3>{title}</h3>
    </div>
  );
};

export default HeaderText;
