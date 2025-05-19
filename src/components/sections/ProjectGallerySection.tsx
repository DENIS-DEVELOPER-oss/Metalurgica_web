"use client";

import Image from 'next/image';
import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent } from '@/components/ui/card';
import { Maximize } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 'proj1',
    title: 'Heavy Duty Industrial Frame',
    description: 'A custom-fabricated heavy-duty steel frame for industrial machinery, designed for maximum load capacity and durability. Features precision welds and reinforced joints.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'industrial frame',
    category: 'Industrial',
  },
  {
    id: 'proj2',
    title: 'Architectural Metal Facade',
    description: 'Laser-cut aluminum panels forming an intricate facade for a modern commercial building. Includes custom powder coating for weather resistance.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'metal facade',
    category: 'Architectural',
  },
  {
    id: 'proj3',
    title: 'Custom Stainless Steel Kitchen',
    description: 'Complete stainless steel kitchen for a commercial restaurant, featuring custom countertops, sinks, and shelving units. NSF certified.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'steel kitchen',
    category: 'Commercial',
  },
  {
    id: 'proj4',
    title: 'Artistic Metal Sculpture',
    description: 'A large-scale outdoor sculpture crafted from corten steel, showcasing complex curves and welded elements. Designed to naturally patina over time.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'metal sculpture',
    category: 'Artistic',
  },
];

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function ProjectModal({ project, isOpen, setIsOpen }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] p-0">
        <Image
          src={project.imageUrl.replace('800x600', '1200x900')} // Larger image for modal
          alt={project.title}
          width={1200}
          height={900}
          className="w-full h-auto max-h-[70vh] object-contain rounded-t-lg"
          data-ai-hint={project.imageHint}
        />
        <DialogHeader className="p-6">
          <DialogTitle className="text-2xl text-primary">{project.title}</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground pt-2">
            {project.description}
          </DialogDescription>
           <p className="text-sm text-accent font-semibold pt-2">Category: {project.category}</p>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}


export default function ProjectGallerySection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Our Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Witness the quality and craftsmanship in every project we undertake.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(project)}
            >
              <CardContent className="p-0 relative">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.imageHint}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Maximize className="h-12 w-12 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-neutral-300">{project.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </section>
  );
}
