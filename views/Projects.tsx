
import React from 'react';
import { Project, UILabels, SectionId } from '../types';
import SectionHeader from '../components/SectionHeader';
import { Github, ExternalLink, Layers } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
  ui: UILabels;
}

const Projects: React.FC<ProjectsProps> = ({ projects, ui }) => {
  const sectionData = ui.sections[SectionId.PROJECTS];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader 
        title={sectionData?.title || "Projects"} 
        subtitle={sectionData?.subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                {project.demoUrl && (
                   <a 
                     href={project.demoUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="p-3 bg-white rounded-full text-slate-900 hover:text-accent hover:scale-110 transition-all"
                     title={ui.buttons.viewDemo}
                   >
                     <ExternalLink className="h-6 w-6" />
                   </a>
                )}
                {project.repoUrl && (
                   <a 
                     href={project.repoUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="p-3 bg-white rounded-full text-slate-900 hover:text-accent hover:scale-110 transition-all"
                     title={ui.buttons.viewCode}
                   >
                     <Github className="h-6 w-6" />
                   </a>
                )}
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                {project.description}
              </p>
              
              <div className="mt-auto">
                <div className="flex items-center mb-3 text-sm font-medium text-slate-500">
                    <Layers className="h-4 w-4 mr-2" />
                    {ui.buttons.techStack}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
