'use client';

import { Icon } from '@iconify/react';

interface ProjectCardProps {
  projectName: string;
  htmlFile: string;
}

const ProjectCard = ({ projectName, htmlFile }: ProjectCardProps) => {  
  const handleClick = () => {
    // Abre el archivo HTML en una nueva pestaña
    window.open(`/html/${htmlFile}`, '_blank');
  };

  return (
    <div 
      className="w-full bg-neutral-100 rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-neutral-200 min-h-[150px] relative"
      onClick={handleClick}
    >
      <div className="absolute top-3 right-3 text-neutral-600">
        <Icon icon="mdi:open-in-new" className="w-6 h-6" />
      </div>
      <div className="p-4 h-full flex items-center justify-center">
        <h3 className="text-xl font-bold text-black text-center">{projectName}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;