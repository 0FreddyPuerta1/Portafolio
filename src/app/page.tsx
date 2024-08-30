"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import MyPresentation from "../assets/texts/MyPresentation.json";
import ContactMe from "../assets/texts/ContactMe.json";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import Header from "@/components/Header";
import { particlesOptions } from "@/assets/resources/particlesOptions";
import { TextContent } from "@/interfaces/TextContent";
import NavMenu from "@/components/NavMenu";
import { techLogosInfo } from "@/assets/resources/techLogosInfo";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContectForm";
const presentationText: TextContent = MyPresentation;
const contactMeText: TextContent = ContactMe;
export default function Home() {
  const [init, setInit] = useState(false);
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState<"en" | "es">("es");
  const constraintsRef = useRef(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [language]);
  async function handleDownloadCV() {
    try {
      const response = await fetch("/api", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to download the CV.");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "CV Freddy Puerta.pdf"; // Nombre del archivo a descargar
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the CV:", error);
    }
  }

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };
  const animationVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };
  const options: ISourceOptions = useMemo(particlesOptions, []);

  if (init) {
    return (
      <div className="flex flex-col grow gap-2 w-full min-h-screen p-2 bg-background font-roboto">
        <Particles
          id="bgparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <Header language={language} setLanguage={setLanguage} />
        {page === 1 && (
          <motion.div
            key="page-1"
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col gap-4 md:grid md:grid-cols-2  justify-items-start content-center md:mt-36"
          >
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
                onClick={handleDownloadCV}
                className="w-40 text-white mt-4 md:ml-32 bg-gold"
              >
                {language === "es" ? "Descargar CV" : "Download CV"}
              </motion.button>
            </motion.div>
            <motion.div
              className=" w-full  md:max-w-[620px] h-full grid grid-cols-4 md:grid-cols-6 p-4 overflow-hidden bg-white bg-opacity-20 rounded-3xl"
              ref={constraintsRef}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
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
          </motion.div>
        )}
        {page === 2 && (
          <motion.div
            key="page-2"
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:pr-36"
          >
            <Projects language={language} />
          </motion.div>
        )}
        {page === 3 && (
          <motion.div
            key="page-3"
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col-reverse gap-4 md:grid md:grid-cols-2 justify-items-start content-center md:mt-36"
          >
            <ContactForm language={language} />
            <motion.div className="flex flex-col items-center mt-10 gp-4 md:gap-10 md:pr-36">
              <h3 className="font-semibold text-gold text-3xl">
                {contactMeText[language].title}
              </h3>
              <p className="text-white mt-10">{contactMeText[language].text}</p>
            </motion.div>
          </motion.div>
        )}
        <NavMenu setPage={setPage} />
      </div>
    );
  }

  return <></>;
}
