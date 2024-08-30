"use client";
import { ProjectProps } from "@/interfaces/ProjectProps";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";
type ProjectCardProps = {
  project: ProjectProps;
  language: "es" | "en";
};

export default function ProjectCard({
  project,
  language,
}: ProjectCardProps): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  return (
    <motion.div
      className="flex flex-col items-center gap-4 w-[180px] md:w-[250px] h-72 md:h-96 bg-militaryGreen hover:scale(1.2) bg-opacity-60 rounded-3xl overflow-hidden shadow-lg"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      }}
    >
      <div className="w-[250px] h-[200px] overflow-hidden">
        <Image
          src={project[language].imagePath}
          width={250}
          height={100}
          alt={project[language].title}
        />
      </div>
      <h1 className="text-center text-white font-semibold">
        {project[language].title}
      </h1>
      <p className="text-sm text-white line-clamp-3 px-2">
        {project[language].description}
      </p>
      <button
        onClick={() => setShowModal(true)}
        className="bg-gold mb-2 w-28 rounded-lg text-white"
      >
        {language === "es" ? "Leer Más" : "Read More"}
      </button>
      {showModal ? (
        <motion.div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-96 md:w-auto md:my-6 md:mx-auto md:w-full md:max-w-[1500px]">
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-militaryGreen bg-opacity-95 outline-none focus:outline-none">
                <div className="flex p-5 items-start justify-between rounded-t">
                  <h3 className="text-xl md:text-3xl text-gold font-semibold">
                    {project[language].title}
                  </h3>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-2 relative p-6">
                  <div className="flex w-full items-center overflow-hidden">
                    <ReactPlayer
                      url={project[language].videoUrl}
                      className="w-[150px] md:w-full md:h-full"
                      controls
                    />
                  </div>
                  <div className="overflow-y-scroll md:overflow-auto max-h-[150px] md:max-h-[500px]">
                    <p className=" my-4 text-white text-lg leading-relaxed">
                      {project[language].description}
                    </p>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6  rounded-b">
                  <button
                    className="text-gold background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    {language === "es" ? "Cerrar" : "Close"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </motion.div>
      ) : null}
    </motion.div>
  );
}
