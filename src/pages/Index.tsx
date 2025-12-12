import { useState } from 'react';
import { useMouseParallax, getUnifiedTransform } from '@/hooks/useMouseParallax';
import { ParallaxBackground } from '@/components/portfolio/ParallaxBackground';
import { FloatingParticles } from '@/components/portfolio/FloatingParticles';
import { LeftNavigation, Section } from '@/components/portfolio/LeftNavigation';
import { MainCard } from '@/components/portfolio/MainCard';
import { NotesPanel } from '@/components/portfolio/NotesPanel';
import { SocialBar } from '@/components/portfolio/SocialBar';
import type { Project } from '@/data/projects';

const Index = () => {
  const parallax = useMouseParallax();
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Reset selected project when changing sections
  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    if (section !== 'projects') {
      setSelectedProject(null);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Layer - pans with parallax */}
      <ParallaxBackground parallax={parallax} />
      
      {/* Floating Particles */}
      <FloatingParticles />

      {/* All UI Cards Container - unified parallax with subtle tilt */}
      <div 
        className="relative z-20 w-full h-full flex items-center justify-center"
        style={getUnifiedTransform(parallax)}
      >
        {/* Cards Layout Container */}
        <div className="flex items-center gap-[6mm]">
          {/* Left Navigation - static inward tilt only */}
          <div style={{ transform: 'perspective(1500px) rotateY(15deg)' }}>
            <LeftNavigation 
              activeSection={activeSection}
              onSectionChange={handleSectionChange}
            />
          </div>

          {/* Center Column: Main Card + Social Bar */}
          <div className="flex flex-col items-center gap-[6mm]">
            <MainCard 
              activeSection={activeSection} 
              onSectionChange={handleSectionChange}
              selectedProject={selectedProject}
              onProjectSelect={setSelectedProject}
            />
            <SocialBar />
          </div>

          {/* Right Notes Panel - static inward tilt only */}
          <div style={{ transform: 'perspective(1500px) rotateY(-15deg)' }}>
            <NotesPanel 
              activeSection={activeSection}
              selectedProject={selectedProject}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
