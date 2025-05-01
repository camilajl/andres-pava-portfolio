import { HeaderText } from "@/components/molecules/HeaderText";
import ProjectCard from "@/components/pages/projects/ProjectCard";
import { projects } from "@/utils/const";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-10 md:px-20 py-16 md:py-6">
      <HeaderText title="PROJECTS" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {projects?.map((project) => (
          <ProjectCard 
            key={project.projectName} 
            projectName={project.projectName}
            htmlFile={project.htmlFile}
          />
        ))}
      </div>
    </main>
  );
}
