import { HeaderText } from '@/components/molecules/HeaderText';
import Contact from '@/components/pages/contact/Contact';
import Description from '@/components/pages/about/Description';
import Tools from '@/components/pages/about/Tools';
import WorkExperience from '@/components/pages/about/WorkExperience';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen px-10 md:px-20 py-16 md:py-6">
      <HeaderText title="ABOUT ME" />
      <div className="mt-8">
        <Description />
      </div>
      <div className="mt-16 flex flex-col md:flex-row justify-between gap-16 md:gap-32">
        <div className="flex-1">
          <WorkExperience />
        </div>
        <div>
          <Tools />
        </div>
      </div>
    </div>
  );
}
