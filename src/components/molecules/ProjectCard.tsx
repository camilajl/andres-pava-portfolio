import Image from 'next/image';
import { Button } from '../atoms/Button';
import { useRouter } from 'next/router';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export function ProjectCard({ 
  title, 
  description, 
  imageUrl, 
  projectUrl 
}: ProjectCardProps) {
  const router = useRouter();
  return (
    <article className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button 
          variant="primary"
          onClick={() => router.push(projectUrl)}
        >
          View Project
        </Button>
      </div>
    </article>
  );
} 