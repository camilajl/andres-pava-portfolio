import { HeaderText } from '@/components/molecules/HeaderText';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { contact } from '@/utils/const';

export const Contact = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2>Contact me</h2>
      {contact?.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-primary transition-colors flex items-center gap-2"
        >
          <Icon icon={item.icon} className="w-20 h-20" />
          <p className="text-xl">{item.text}</p>
        </Link>
      ))}
    </div>
  );
};

export default Contact;
