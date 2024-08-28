"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import MyPresentation from "../assets/texts/MyPresentation.json";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import Header from "@/components/Header";
import { particlesOptions } from "@/assets/resources/particlesOptions";
import { TextContent } from "@/interfaces/TextContent";
import NavMenu from "@/components/NavMenu";
const presentationText: TextContent = MyPresentation;

export default function Home() {
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

  if (init) {
    return (
      <div className="flex flex-col gap-2 w-full min-h-screen p-2 bg-background font-roboto">
        <Particles
          id="bgparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <Header language={language} setLanguage={setLanguage} />

        <motion.div className="flex flex-col w-full h-full text-center mt-10 md:mt-52 md:text-left md:p-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-semibold text-white text-2xl md:text-4xl md:ml-32"
          >{`${presentationText[language].title.split("-")[0]}`}</motion.h2>
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gold font-semibold text-2xl md:text-4xl md:font-bold md:ml-32"
          >{`${presentationText[language].title.split("-")[1]}`}</motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 text-sm text-white md:w-[500px] md:ml-32"
          >
            {presentationText[language].text}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="w-40 text-white mt-4 md:ml-32 bg-gold"
          >
            {language === "es" ? "Descargar CV" : "Download CV"}
          </motion.button>
        </motion.div>
        <NavMenu />
      </div>
    );
  }

  return <></>;
}
