interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  onClick?: () => void;
}

export function ProjectCard({ title, category, image, onClick }: ProjectCardProps) {
  return (
    <div 
      className="relative h-[100px] rounded-xl overflow-hidden cursor-pointer group transition-transform duration-200 hover:scale-[1.02] border border-foreground/10"
      onClick={onClick}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      
      {/* Category Badge */}
      <span className="absolute top-2 left-2 text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white/90 font-medium">
        {category}
      </span>
      
      {/* Title */}
      <div className="absolute bottom-2 left-2 right-2">
        <h3 className="text-xs font-medium text-white leading-tight line-clamp-2">
          {title}
        </h3>
      </div>
    </div>
  );
}
