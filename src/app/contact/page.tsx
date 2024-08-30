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
import ContactForm from "@/components/ContectForm";
export default function Contact(): JSX.Element {
  const [init, setInit] = useState(false);
  const [language, setLanguage] = useState<"en" | "es">("es");

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
      <h1 className="mt-10 font-semibold text-gold text-3xl text-center">
        {language === "es" ? "Contactame" : "Contact Me"}
      </h1>
      <div className="mt-10 p-4">
        <ContactForm />
      </div>
      <NavMenu />
    </div>
  );
}
