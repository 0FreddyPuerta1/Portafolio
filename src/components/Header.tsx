"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldCat } from "@fortawesome/free-solid-svg-icons/faShieldCat";
import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { HeaderProps } from "@/interfaces/HeaderProps";
export default function Header({
  language,
  setLanguage,
}: HeaderProps): JSX.Element {
  return (
    <motion.div className="flex p-2 text-white  md:h-10 justify-between md:pl-40 md:pr-20">
      <div className="flex items-center gap-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FontAwesomeIcon icon={faShieldCat} className="md:text-2xl" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-l md:text-xl"
        >
          Freddy Puerta
        </motion.h1>
      </div>
      <div className="flex gap-2 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FontAwesomeIcon icon={faGithub} className="md:text-2xl" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <FontAwesomeIcon icon={faInstagram} className="md:text-2xl" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <FontAwesomeIcon icon={faTwitter} className="md:text-2xl" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex gap-1 items-center ml-4 md:ml-10 "
        >
          Eng/Esp
          {language === "es" ? (
            <FontAwesomeIcon
              icon={faToggleOn}
              className="hover:cursor-pointer md:text-2xl"
              onClick={() => setLanguage("en")}
            />
          ) : (
            <FontAwesomeIcon
              icon={faToggleOff}
              className="hover:cursor-pointer md:text-2xl"
              onClick={() => setLanguage("es")}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
