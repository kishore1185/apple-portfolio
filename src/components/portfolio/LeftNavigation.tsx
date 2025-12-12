import { Home, FolderOpen, User, Briefcase, Mail } from 'lucide-react';

type Section = 'home' | 'projects' | 'personal' | 'career' | 'contact';

interface LeftNavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const navItems: { icon: typeof Home; label: string; section: Section }[] = [
  { icon: Home, label: 'Home', section: 'home' },
  { icon: User, label: 'Personal', section: 'personal' },
  { icon: Briefcase, label: 'Career', section: 'career' },
  { icon: FolderOpen, label: 'Projects', section: 'projects' },
  { icon: Mail, label: 'Contact', section: 'contact' },
];

export function LeftNavigation({ activeSection, onSectionChange }: LeftNavigationProps) {
  return (
    <nav
      className="glass-card w-[105px] h-[160px] flex flex-col items-center justify-center px-3 py-4"
      style={{
        transform: 'rotateY(12deg)',
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="flex flex-col justify-center items-center gap-1 w-full h-full">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onSectionChange(item.section)}
            className={`flex items-center gap-[6px] w-full justify-start px-2 py-[5px] rounded-md transition-colors ${
              activeSection === item.section 
                ? 'bg-foreground/10 text-foreground' 
                : 'text-foreground/70 hover:bg-foreground/5 hover:text-foreground'
            }`}
          >
            <item.icon className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.4} />
            <span className="text-[11px] font-medium leading-none whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export type { Section };