import React from 'react';
import { Education as EducationType } from '../types';
import { GraduationCap, Award } from 'lucide-react';

interface Props {
  education: EducationType[];
}

export default function Education({ education }: Props) {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center text-green-400 glow">
            <GraduationCap className="mr-3" /> Academic Background
          </h2>
          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="gradient-border p-6 rounded-lg card-hover bg-gray-900"
              >
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-green-400">{edu.degree}</h3>
                    <p className="text-gray-400 mb-2">{edu.institution} | {edu.period}</p>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}