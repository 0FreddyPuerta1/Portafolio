"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { particlesOptions } from "@/assets/resources/particlesOptions";
import MyPresentation from "../../assets/texts/MyPresentation.json";
import Header from "@/components/Header";
import NavMenu from "@/components/NavMenu";
import ProjectCard from "@/components/ProjectCard";
import { projectsArray } from "@/assets/resources/projectsArray";
export default function Projects(): JSX.Element {
  const [init, setInit] = useState(false);
  const [language, setLanguage] = useState<"en" | "es">("es");
  const constraintsRef = useRef(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(particlesOptions, []);
  return (
    <div className="flex flex-col gap-2 w-full min-h-screen p-2 bg-background font-roboto">
      <Particles
        id="bgparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <Header language={language} setLanguage={setLanguage} />
      <div className="flex flex-col items-center  md:items-start  md:px-40 md:mt-10">
        <h1 className=" text-2xl md:text-4xl mt-10 font-semibold text-gold">
          {language === "es" ? "Proyectos" : "Projects"}
        </h1>
        <div className="grid grid-cols-2 mt-10 items-center md:grid md:grid-cols-4 md:mt-20 gap-2 w-full">
          {projectsArray.map((project, index) => (
            <div key={index}>
              <ProjectCard project={project} language={language} />
            </div>
          ))}
        </div>
      </div>
      <NavMenu />
    </div>
  );
}
