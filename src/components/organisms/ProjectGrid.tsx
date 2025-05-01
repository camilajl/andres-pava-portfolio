import { ProjectCard } from '../molecules/ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          projectUrl={project.projectUrl}
        />
      ))}
    </div>
  );
} 