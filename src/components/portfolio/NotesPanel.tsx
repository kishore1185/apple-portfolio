import { Copy, MoreHorizontal } from 'lucide-react';
import type { Section } from './LeftNavigation';
import type { Project } from '@/data/projects';
import personalSidePhoto from "@/assets/personal-side-photo.jpg";

interface NotesPanelProps {
  activeSection: Section;
  selectedProject?: Project | null;
}

const sectionContent: Record<Section, { title: string; subtitle: string; paragraphs: string[] }> = {
  home: {
    title: 'How to use this website?',
    subtitle: 'Title',
    paragraphs: [
      'Welcome to my portfolio,an immersive, motion-driven 3D experience built to present my work in a clean and engaging way. This space blends design, animation, and engineering to reflect how I think and create. Explore my projects, my journey, and the ideas that shape my work—crafted with clarity, precision,and a focus on meaningful digital experiences.',
    ],
  },
  projects: {
    title: 'How to use this website?',
    subtitle: 'Title',
    paragraphs: [
      'Welcome to my portfolio,an immersive, motion-driven 3D experience built to present my work in a clean and engaging way. This space blends design, animation, and engineering to reflect how I think and create. Explore my projects, my journey, and the ideas that shape my work—crafted with clarity, precision,and a focus on meaningful digital experiences.',
    ],
  },
  personal: {
    title: 'About Me',
    subtitle: 'Personal',
    paragraphs: [
      'I am a passionate front-end developer based in Amsterdam with a love for creating beautiful and functional web experiences.',
      'When I am not coding, you can find me exploring nature, reading about new technologies, or working on personal creative projects.',
      'I believe in continuous learning and pushing the boundaries of what is possible on the web.',
    ],
  },
  career: {
    title: 'My Journey',
    subtitle: 'Career',
    paragraphs: [
      'My journey in web development started with curiosity and a love for clean, thoughtful design. Since then, I’ve honed my craft through continuous learning and hands-on experimentation. Today, I focus on creating smooth, immersive digital experiences',

    ],
  },
  contact: {
    title: 'Get in Touch',
    subtitle: 'Contact',
    paragraphs: [
      'I would love to hear from you! Whether you have a project in mind or just want to say hello.',
      'Feel free to reach out through any of the social links below or send me an email directly.',
      'I typically respond within 24-48 hours. Looking forward to connecting with you!',
    ],
  },
};

export function NotesPanel({ activeSection, selectedProject }: NotesPanelProps) {
  if (activeSection === 'contact') {
    return <div className="w-72 h-[385px]" />;
  }

  // PERSONAL: only photo
  if (activeSection === 'personal') {
  return (
    <div
      className="glass-card w-72 h-[385px] overflow-hidden p-4"
      style={{
        transform: 'rotateY(-15deg)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
    >
      <img
        src={personalSidePhoto}
        alt="Personal"
        className="w-full h-full rounded-lg object-cover border border-foreground/10"
      />
    </div>
  );
}



  // Use project-specific content if a project is selected
  const content = selectedProject 
    ? { 
        title: selectedProject.notesContent.title, 
        subtitle: 'Project', 
        paragraphs: selectedProject.notesContent.paragraphs 
      }
    : sectionContent[activeSection];

  return (
    <div
      className="glass-card w-72 h-[385px] overflow-hidden p-5"
      style={{
        transform: 'rotateY(-15deg)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        maskImage: 'linear-gradient(to bottom, white 88%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, white 88%, transparent)',
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Notes</h3>
        <div className="flex gap-2">
          <button className="p-2 rounded-lg hover:bg-foreground/10 transition-colors">
            <Copy className="w-4 h-4 text-foreground/60" />
          </button>
          <button className="p-2 rounded-lg hover:bg-foreground/10 transition-colors">
            <MoreHorizontal className="w-4 h-4 text-foreground/60" />
          </button>
        </div>
      </div>
      
      <div className="space-y-3 text-sm text-foreground/80 leading-relaxed">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{content.subtitle}</p>
        <h4 className="text-base font-medium text-foreground">{content.title}</h4>

        {content.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}