import { Linkedin, Mail, Github, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/kishore1185', external: true },
  { icon: Mail, label: 'Email', href: 'mailto:2005kishore.sb@gmail.com', external: false },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kishore-r1185', external: true },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/kishore_8532official?igsh=emxsNDg4bzA4a2N6&utm_source=qr', external: true },
];

export function SocialBar() {
  return (
    <div className="glass-card px-3 py-1.5 flex items-center justify-center gap-2 w-[360px] mx-auto">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
          className="glass-card-button flex items-center gap-1.5 px-2 py-1"
        >
          <link.icon className="w-3 h-3 text-foreground/70" strokeWidth={1.4} />
          <span className="text-[11px] font-medium text-foreground/80">{link.label}</span>
        </a>
      ))}
    </div>
  );
}
