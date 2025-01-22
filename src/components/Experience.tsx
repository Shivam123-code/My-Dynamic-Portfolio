import React from 'react';
import { Experience as ExperienceType } from '../types';
import { Briefcase, ChevronRight } from 'lucide-react';

interface Props {
  experiences: ExperienceType[];
}

export default function Experience({ experiences }: Props) {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center text-green-400 glow">
            <Briefcase className="mr-3" /> Career Path
          </h2>
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="gradient-border p-6 rounded-lg card-hover bg-gray-800 relative"
              >
                <h3 className="text-2xl font-bold text-green-400">{exp.title}</h3>
                <p className="text-gray-400 mb-4">{exp.company} | {exp.period}</p>
                <ul className="space-y-3 mb-6">
                  {exp.description.map((desc, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <ChevronRight className="w-5 h-5 mt-1 text-green-400 flex-shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-900 text-green-400 rounded-full text-sm border border-green-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}