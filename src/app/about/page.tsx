import { HeaderText } from '@/components/molecules/HeaderText';
import Contact from '@/components/pages/about/Contact';
import Description from '@/components/pages/about/Description';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen p-8 space-y-8">
      <HeaderText title="ABOUT ME" />
      <Description />
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        <div>cards</div>
        <Contact />
      </div>
    </div>
  );
}
