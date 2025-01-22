import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import { experiences, projects, skills, education } from './data';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Achievements />
      <Education education={education} />
      <Testimonials />
    </div>
  );
}

export default App;