import { TechLogoInfo } from "./TechLogoInfo";

export interface ProjectProps {
  en: {
    title: string;
    description: string;
    technologies: TechLogoInfo[];
    imagePath: string;
    videoUrl: string;
  };
  es: {
    title: string;
    description: string;
    technologies: TechLogoInfo[];
    imagePath: string;
    videoUrl: string;
  };
}
