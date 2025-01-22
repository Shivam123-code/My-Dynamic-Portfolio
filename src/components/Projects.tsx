import React, { useState } from 'react';
import { Project as ProjectType } from '../types';
import { Code, ExternalLink, Github, ChevronRight, ChevronLeft } from 'lucide-react';

interface Props {
  projects: ProjectType[];
}

export default function Projects({ projects }: Props) {
  const [activeProject, setActiveProject] = useState(0);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Map of project IDs to their respective images
  const projectImages = {
    1: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80', // Task Manager
    2: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'  // Data Dashboard
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center text-green-400 glow">
            <Code className="mr-3" /> Featured Projects
          </h2>
          <div className="relative">
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 cyber-button p-2 rounded-full bg-gray-800 hover:bg-gray-700 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-green-400" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 cyber-button p-2 rounded-full bg-gray-800 hover:bg-gray-700 z-10"
            >
              <ChevronRight className="w-6 h-6 text-green-400" />
            </button>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeProject * 100}%)` }}
              >
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="gradient-border p-6 rounded-lg card-hover bg-gray-900 group">
                      <div className="relative mb-4">
                        <img
                          src={projectImages[project.id as keyof typeof projectImages]}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-lg opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                        <div className="absolute top-2 right-2 flex gap-2">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-800/80 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110"
                          >
                            <Github className="w-5 h-5 text-green-400" />
                          </a>
                          <a
                            href={`https://demo${project.id}.example.com`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-800/80 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110"
                          >
                            <ExternalLink className="w-5 h-5 text-green-400" />
                          </a>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-green-400">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-800 text-green-400 rounded-full text-sm border border-green-400/30 hover:scale-105 transition-transform"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-6 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeProject ? 'bg-green-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}