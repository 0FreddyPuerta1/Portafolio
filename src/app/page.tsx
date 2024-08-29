"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import MyPresentation from "../assets/texts/MyPresentation.json";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import Header from "@/components/Header";
import { particlesOptions } from "@/assets/resources/particlesOptions";
import { TextContent } from "@/interfaces/TextContent";
import NavMenu from "@/components/NavMenu";
import nodeLogo from "../assets/images/Node.js.svg";
import { techLogosInfo } from "@/assets/resources/techLogosInfo";
const presentationText: TextContent = MyPresentation;
const BOUNCE_SPEED = 2;
export default function Home() {
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

  if (init) {
    return (
      <div className="flex flex-col gap-2 w-full min-h-screen p-2 bg-background font-roboto">
        <Particles
          id="bgparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <Header language={language} setLanguage={setLanguage} />
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 mt-10 md:mt-52 content-center">
          <motion.div className="flex p-2 md:items-left md:justify-center flex-col w-full h-full text-center  md:text-left ">
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
          <motion.div
            className="ml-4 mt-10 w-96 md:max-w-[720px] h-96 grid grid-cols-4 md:grid-cols-6 p-4 overflow-hidden bg-white bg-opacity-20 rounded-3xl"
            ref={constraintsRef}
          >
            {techLogosInfo.map((logo, index) => (
              <div key={logo.key} className="flex flex-col items-center">
                <motion.div
                  drag
                  dragConstraints={constraintsRef}
                  className="p-2 flex flex-col items-center"
                >
                  <motion.img
                    className="w-16 h-16 rounded-inherit"
                    src={logo.path}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                  <p className="mt-2 text-sm text-white">{logo.name}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
        <NavMenu />
      </div>
    );
  }

  return <></>;
}
