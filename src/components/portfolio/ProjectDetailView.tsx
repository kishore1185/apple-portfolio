import { ArrowUpRight, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  mainImage: string;
  previewImages: string[];
  liveUrl?: string;
  subtitle?: string;
}

interface ProjectDetailViewProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetailView({ project, onClose }: ProjectDetailViewProps) {
  return (
    <div className="flex flex-col h-full w-full">

      {/* TOP PANEL ONLY (TITLE + IMAGES) */}
      <div className="flex-shrink-0">

        {/* Title row */}
        <div className="flex items-center justify-between mb-2 px-2">
          <h2 className="text-base font-semibold text-foreground">
            {project.title}
          </h2>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 text-[10px] 
                           rounded-full bg-white/10 border border-white/20 
                           hover:bg-white/20 backdrop-blur-md transition"
              >
                View live site <ArrowUpRight className="w-3 h-3" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/10"
            >
              <X className="w-4 h-4 text-foreground/70" />
            </button>
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className="flex gap-2 px-2 h-[150px]">

          {/* Main Image */}
          <div
            className="w-[58%] h-full rounded-lg bg-cover bg-center border border-white/15"
            style={{ backgroundImage: `url(${project.mainImage})` }}
          />

          {/* 2x2 previews */}
          <div className="w-[42%] grid grid-cols-2 grid-rows-2 gap-2">
            {project.previewImages.slice(0, 4).map((img, index) => (
              <div
                key={index}
                className="rounded-lg bg-cover bg-center border border-white/15"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
