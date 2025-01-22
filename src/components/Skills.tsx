import React from 'react';
import { Skill as SkillType } from '../types';
import { Cpu, CheckCircle2 } from 'lucide-react';

interface Props {
  skills: SkillType[];
}

export default function Skills({ skills }: Props) {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center text-green-400 glow">
            <Cpu className="mr-3" /> Technical Arsenal
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="gradient-border p-6 rounded-lg card-hover bg-gray-800"
              >
                <h3 className="text-xl font-bold mb-6 text-green-400">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>{skill}</span>
                    </div>
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