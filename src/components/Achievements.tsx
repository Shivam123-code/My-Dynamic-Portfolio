import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: 'trophy' | 'award' | 'star';
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "AttendEasyApp Development",
    description: "Led the development of a smart attendance tracking app for students and faculty.",
    icon: 'trophy',
  },
  {
    id: 2,
    title: "Smart India Hackathon Leader",
    description: "Group leader for creating the 'Data Duplication Alert System' for the Ministry of Earth Sciences.",
    icon: 'award',
  },
  {
    id: 3,
    title: "Python Development Excellence",
    description: "Recognized for outstanding performance in Python projects and tools like the AI Art Prompter.",
    icon: 'star',
  },
];

const IconComponent = ({ type }: { type: Achievement['icon'] }) => {
  switch (type) {
    case 'trophy': return <Trophy className="w-8 h-8 text-yellow-400" />;
    case 'star': return <Star className="w-8 h-8 text-blue-400" />;
    case 'award': return <Award className="w-8 h-8 text-purple-400" />;
    default: return null;
  }
};

export default function Achievements() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center text-green-400 glow">
            <Trophy className="mr-3" /> Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="gradient-border p-6 rounded-lg floating bg-gray-900 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="rotate-3d">
                    <IconComponent type={achievement.icon} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-400">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
