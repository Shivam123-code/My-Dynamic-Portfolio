import React from 'react';
import { MessageSquare } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Emily Chen",
    role: "Professor",
    company: "Tech University",
    content: "An exceptional student with strong Python programming skills. Shows great potential in data analysis and machine learning."
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Tech Lead",
    company: "TechStart Solutions",
    content: "During the internship, demonstrated excellent problem-solving skills and quick learning ability. Great team player with strong Python fundamentals."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-900 matrix-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center text-green-400 glow">
            <MessageSquare className="mr-3" /> Recommendations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="gradient-border p-6 rounded-lg card-hover bg-gray-800"
              >
                <blockquote className="text-gray-300 mb-4">"{testimonial.content}"</blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-xl font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-green-400">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
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