import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailView } from './ProjectDetailView';
import { projects, type Project } from '@/data/projects';
import type { Section } from './LeftNavigation';
import profilePhoto from '@/assets/profile-photo.jpg';

interface MainCardProps {
  activeSection: Section;
  onSectionChange?: (section: Section) => void;
  selectedProject: Project | null;
  onProjectSelect: (project: Project | null) => void;
}

export function MainCard({ activeSection, onSectionChange, selectedProject, onProjectSelect }: MainCardProps) {
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
  return (
    <div className="flex flex-col items-center text-center w-full">

      {/* BIG RK LOGO */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg">
        <span className="text-3xl font-bold text-primary-foreground">RK</span>
      </div>

      {/* NAME */}
      <h2 className="text-3xl font-bold text-foreground tracking-tight">
        R KISHORE
      </h2>

      {/* TAGLINE */}
      <p className="text-sm text-muted-foreground mt-1">
        Creative Developer · India
      </p>

      {/* BUTTON ROW */}
      <div className="w-full flex justify-center mt-6 gap-4">

        {/* SEE MORE (GO TO PROJECTS) */}
        <button
          className="glass-card-button px-4 py-1.5 text-sm font-medium"
          onClick={() => onSectionChange?.('projects')}
        >
          See more
        </button>

        {/* VIEW RESUME */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="glass-card-button px-4 py-1.5 text-sm font-medium"
        >
          View Resume
        </a>

        {/* DOWNLOAD RESUME */}
        <a
          href="/resume.pdf"
          download="R_Kishore_Resume.pdf"
          className="glass-card-button px-4 py-1.5 text-sm font-medium"
        >
          Download Resume
        </a>

      </div>

    </div>
  );


    case 'projects': {
  // ✔ When a project is selected → split card into 2 panels
  if (selectedProject) {
    return (
      <div className="flex flex-col w-full h-full overflow-hidden">

        {/* 🔷 TOP PANEL — IMAGES */}
        <div className="flex-shrink-0 h-[180px] mb-2">
          <ProjectDetailView
            project={selectedProject}
            onClose={() => onProjectSelect(null)}
          />
        </div>

        {/* 🔷 BOTTOM PANEL — DESCRIPTION + TECH CHIPS */}
        <div className="flex-1 overflow-y-auto px-2 pb-2 mt-1">

          <p className="text-sm text-foreground/80 leading-relaxed mb-3">
            {selectedProject.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {selectedProject.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/40 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </div>
    );
  }

  // ✔ DEFAULT: Show 4 project cards
  return (
    <>
      <h2 className="text-lg font-semibold text-foreground mb-3">My Projects</h2>

      <div className="grid grid-cols-2 gap-3">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            category={project.category}
            image={project.mainImage}
            onClick={() => onProjectSelect(project)}
          />
        ))}
      </div>
    </>
  );
}

       case 'personal':
  return (
    <>
      <div className="flex items-center justify-between w-full px-3 mt-1">

        {/* NAME + ABOUT ME TEXT LEFT SIDE */}
        <div className="flex flex-col text-left">
          
          {/* Name */}
          <h2 
            className="text-3xl font-bold text-foreground"
            style={{ fontFamily: 'HK Modular, Orbiton, sans-serif' }}
          >
            R KISHORE
          </h2>

          {/* About Me Text */}
          <p className="text-sm text-foreground/80 leading-relaxed max-w-[260px] mt-3">
            A tech enthusiast and a developer with a passion for turning ideas
            into reality. Experienced in mobile and web development, API
            integration, and UI/UX optimization to deliver modern, impactful
            and innovative solutions. Always eager to learn and embrace
            new challenges.
          </p>
        </div>

        {/* PHOTO RIGHT SIDE - RECTANGLE SHAPE */}
        <img
          src={profilePhoto}
          alt="R Kishore"
          className="w-32 h-40 rounded-lg object-cover border border-foreground/20"
        />
      </div>
    </>
  );


      case 'career':
  return (
    <>
      {/* TITLE */}
      <h2 className="text-xl font-bold text-foreground mb-4">
        Qualifications & Career
      </h2>

      {/* ---- DEGREES SECTION ---- */}
      <p className="text-sm font-semibold text-foreground mb-2">Degrees</p>

      {/* DEGREE CARDS - 3 IN ONE ROW */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {/* BCA */}
        <div className="rounded-xl p-3 bg-white/10 backdrop-blur-md border border-white/20">
          <h3 className="text-sm font-semibold text-foreground leading-tight">
            Bachelor of Computer Applications (BCA)
          </h3>
          <p className="text-[11px] text-foreground/70 mt-1 leading-snug">
            JAIN College Vasavi Road, Bangalore
          </p>
          <p className="text-[10px] text-primary mt-2">2024 – 2027</p>
        </div>

        {/* PUC */}
        <div className="rounded-xl p-3 bg-white/10 backdrop-blur-md border border-white/20">
          <h3 className="text-sm font-semibold text-foreground leading-tight">
            Pre-University Certification (PCMC)
          </h3>
          <p className="text-[11px] text-foreground/70 mt-1 leading-snug">
            JAIN College VV Puram, Bangalore
          </p>
          <p className="text-[10px] text-primary mt-2">2021 – 2023</p>
        </div>

        {/* SSLC */}
        <div className="rounded-xl p-3 bg-white/10 backdrop-blur-md border border-white/20">
          <h3 className="text-sm font-semibold text-foreground leading-tight">
            Secondary School Leaving Certificate (SSLC)
          </h3>
          <p className="text-[11px] text-foreground/70 mt-1 leading-snug">
            Miranda English High School
          </p>
          <p className="text-[10px] text-primary mt-2">2010 – 2021</p>
        </div>
      </div>

      {/* ---- CERTIFICATIONS SECTION ---- */}
      <p className="text-sm font-semibold text-foreground mb-2">Certifications</p>

      {/* CERTIFICATION CARDS — ALL 5 IN ONE ROW */}
      <div className="grid grid-cols-5 gap-2">
        {['C and C++', 'Java', 'Python', 'MySQL', 'Power BI'].map((item, i) => (
          <div
            key={i}
            className="h-[70px] rounded-xl bg-white/10 backdrop-blur-md border border-white/20 
                       flex items-center justify-center text-center px-2"
          >
            <span className="text-[11px] text-foreground font-medium">
              {item}
            </span>
          </div>
        ))}
      </div>
    </>
  );


      case 'contact':
  return (
    <>
      <h2 className="text-xl font-bold text-foreground mb-4">Let's Connect</h2>

      <p className="text-sm text-foreground/70 leading-relaxed mb-6">
        Ready to bring your ideas to life? Let's discuss how we can work 
        together to create something amazing.
      </p>

      <a 
        href="mailto:2005kishore.sb@gmail.com"
        className="w-full block"
      >
        <button className="glass-card-button text-sm font-medium w-full py-3 text-foreground">
          Contact Me
        </button>
      </a>
    </>
  );


      default:
        return null;
    }
  };

 return (
  <div className="glass-card p-5 w-[504px] max-h-[450px] overflow-hidden flex flex-col">
    {renderContent()}
  </div>
);
}
