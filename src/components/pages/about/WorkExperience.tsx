'use client';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { workExperience } from '@/utils/const';

interface ExperienceCardProps {
  company: string;
  period: string;
  responsibilities: string[];
  tools?: string;  
  focus?: string;
  achievements?: string[];
}

const ExperienceCard = ({ company, period, responsibilities, tools, focus, achievements }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full bg-neutral-100 rounded-lg overflow-hidden transition-all duration-300 shadow-lg">
      <div 
        className="p-4 cursor-pointer flex justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <h3 className="text-xl font-bold text-black">{company}</h3>
          <p className="text-neutral-600">{period}</p>
        </div>
        <Icon 
          icon={isExpanded ? 'mdi:chevron-up' : 'mdi:chevron-down'} 
          className="w-6 h-6 text-neutral-600"
        />
      </div>
      
      {isExpanded && (
        <div className="px-4 pb-4 overflow-y-auto max-h-[500px]">
          <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-3 text-sm">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
          {tools && (
              <p className="text-neutral-700 text-sm"> <strong className="font-bold">Tools:</strong> {tools}</p>
          )}
          {focus && (
            <p className="text-neutral-700 text-sm"> <strong className="font-bold">Focus:</strong> {focus}</p>
          )}
          {achievements && achievements?.length > 0 && (
            <p className="text-neutral-700 text-sm"> <strong className="font-bold">Achievements:</strong> {achievements?.join(', ')}</p>
          )}
        </div>
      )}
    </div>
  );
};

export const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-6  max-w-3xl">
      <h2>Work Experience</h2>
      <div className="space-y-4">
        {workExperience.map((experience, index) => (
          <ExperienceCard
            key={index}
            company={experience.company}
            period={experience.period}
            responsibilities={experience.responsibilities}
            tools={experience.tools}
            focus={experience.focus}
            achievements={experience.achievements}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
