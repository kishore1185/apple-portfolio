import tuneWaveImg from '@/assets/tunewave.jpg';
import pixelTalkzImg from '@/assets/pixeltalkz.jpg';
import whatsappImg from '@/assets/whatsapp-ai.jpg';
import portfolioImg from '@/assets/portfolio.jpg';
export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  techStack: string[];
  mainImage: string;
  previewImages: string[];
  liveUrl?: string;
  notesContent: {
    title: string;
    paragraphs: string[];
  };
}

export const projects: Project[] = [
  {
    id: 'tunewave',
    title: 'Tunewave',
    category: 'Music Streaming',
    subtitle: 'A modern and sleek music streaming platform',
    description: 'A beautifully designed flutter music app featuring animated visualizer, dark/light themes, persistant favourates/downloads, and a sleek UI inspired by modern music players. Built with clean architecture, real-time animations, and a focus on smooth user interaction.',
    techStack: ['Flutter', 'postman', 'Api integration', 'Dart', 'VScode', 'cloudflare'],
   mainImage: tuneWaveImg,
previewImages: [tuneWaveImg, tuneWaveImg, tuneWaveImg, tuneWaveImg],

    liveUrl: 'https://tunewavee.pages.dev/',
    notesContent: {
      title: 'What are these projects?',
      paragraphs: [
        'A collection of refined, purpose-built projects that blend intelligent design with modern engineering—showcasing how I solve problems, craft experiences, and bring ideas to life with clarity and precision,  creative ambition, and a relentless focus on seamless, human-centered innovation that pushes boundaries and elevates every interaction.',
        
      ],
    },
  },
  {
    id: 'pixeltalkz',
    title: 'PixelTalkz',
    category: 'Social Chat Web App',
    subtitle: 'The Anonymous Web App Where Humans And AI Connect Instantly',
    description: 'A modern web based chat platform that lets you chat freely and anonymously, without sign-ups or identity sharing. With a built-in Ai toggle, users can instantly switch from human chats to AI discussions for instant help, insights, or casual talks. A fast, intelligent, and privacy-first chat web app',
    techStack: ['React', 'typescript', 'GROQ API', 'Tailwind CSS', 'VScode', 'cloudflare', 'firebase'],
    mainImage: pixelTalkzImg,
previewImages: [pixelTalkzImg, pixelTalkzImg, pixelTalkzImg, pixelTalkzImg],

    liveUrl: 'https://pixeltalkz.vercel.app/',
    notesContent: {
      title: 'What are these projects?',
      paragraphs: [
        'A collection of refined, purpose-built projects that blend intelligent design with modern engineering—showcasing how I solve problems, craft experiences, and bring ideas to life with clarity and precision,  creative ambition, and a relentless focus on seamless, human-centered innovation that pushes boundaries and elevates every interaction.',
       
      ],
    },
  },
  {
    id: 'whatsapp-ai',
    title: 'WhatsApp AI Bot',
    category: 'AI / Creative',
    subtitle: 'Intelligent chatbot integration for Whatsapp',
    description: 'An advanced AI-powered intelligent chatbot that interacts with users through whatsapp. It processes user messages, provide smart replies, and demonstrates basic AI-driven conversational behaviour. Aimed to explore the intergation of conversational AI with real time messaging platforms',
    techStack: ['React', 'Groq API/Local LLMs', 'vercel', 'Tailwind CSS', 'VScode', 'open source'],
    mainImage: whatsappImg,
previewImages: [whatsappImg, whatsappImg, whatsappImg, whatsappImg],

    liveUrl: '#',
    notesContent: {
      title: 'What are these projects?',
      paragraphs: [
       'A collection of refined, purpose-built projects that blend intelligent design with modern engineering—showcasing how I solve problems, craft experiences, and bring ideas to life with clarity and precision,  creative ambition, and a relentless focus on seamless, human-centered innovation that pushes boundaries and elevates every interaction.',

      ],
    },
  },
  {
    id: 'portfolio',
    title: 'My Portfolio Website',
    category: 'React / Firebase',
    subtitle: 'Blending aesthetics and technology into flawless experiences',
    description: 'Designed with clarity, depth, and intention.Every interaction feels fluid, every detail crafted with precision. This portfolio reimagines how digital experiences should look, feel, and inspire.',
    techStack: ['React', 'VScode', 'Tailwind', 'vercel', 'Typescript'],
    mainImage: portfolioImg,
    previewImages: [
      portfolioImg,
      portfolioImg,
      portfolioImg,
      portfolioImg,
    ],
    liveUrl: '#',
    notesContent: {
      title: 'What are these projects?',
      paragraphs: [
        'A collection of refined, purpose-built projects that blend intelligent design with modern engineering—showcasing how I solve problems, craft experiences, and bring ideas to life with clarity and precision,  creative ambition, and a relentless focus on seamless, human-centered innovation that pushes boundaries and elevates every interaction.',
        
      ],
    },
  },
];
