import { HeaderText } from '@/components/molecules/HeaderText';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { contact } from '@/utils/const';

export const Contact = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-10">
      {contact?.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 md:gap-6 hover:text-primary transition-all duration-300 group"
        >
          <div className="bg-neutral-100 dark:text-black p-3 md:p-4 rounded-full group-hover:bg-primary/10 transition-colors">
            <Icon icon={item.icon} className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <span className="text-lg md:text-2xl">{item.text}</span>
        </Link>
      ))}
    </div>
  );
};

export default Contact;
