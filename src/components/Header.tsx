import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail, FileText, ExternalLink, Code, ChevronDown } from 'lucide-react';

export default function Header() {
  const [typedText, setTypedText] = useState('');
  const [showScrollHint, setShowScrollHint] = useState(true);
  const fullText = "Hello World! I'm a Python Developer";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollHint(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        {/* Primary background image */}
        <img
          src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900" />
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        {/* Floating code elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="code-rain" />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden gradient-border p-1 hover:scale-105 transition-transform relative">
              <div className="absolute inset-0 bg-pulse-ring"></div>
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQH3noXcHfP7RA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726415131084?e=1743033600&v=beta&t=pqLwBcDaE_B4hvqofxas-2ouuTcLweHOpvWacxoP-uI"
                alt="Profile"
                className="w-full h-full object-cover rounded-full relative z-10"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-8 h-8 text-green-400 animate-pulse" />
                <h1 className="text-5xl font-bold glow text-green-400">
                  {typedText}
                  <span className="animate-blink">|</span>
                </h1>
              </div>
              <h2 className="text-2xl mb-4 text-gray-300">Python Developer & Data Enthusiast</h2>
              <p className="text-lg mb-6 text-gray-400 max-w-2xl typing-text">
                Passionate about creating efficient solutions through Python programming.
                Specializing in automation, web development, and data analysis.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button flex items-center gap-2 px-4 py-2 bg-gray-800/80 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivam-singh-a160b4247/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button flex items-center gap-2 px-4 py-2 bg-gray-800/80 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/Shivam123-code"
                  className="cyber-button flex items-center gap-2 px-4 py-2 bg-gray-800/80 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Contact</span>
                </a>
                <a
                  href="/resume.pdf"
                  className="cyber-button flex items-center gap-2 px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors group"
                >
                  <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showScrollHint && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-green-400 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      )}
    </header>
  );
}