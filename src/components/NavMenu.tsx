import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBolt,
  faBriefcase,
  faHome,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type MenuOption = {
  icon: IconDefinition;
  text: string;
  path: string;
  key: number;
  delay: number;
};
import { motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type NavMenuProps = {
  setPage: Dispatch<SetStateAction<number>>;
};

export default function NavMenu({ setPage }: NavMenuProps): JSX.Element {
  const menuOptions: MenuOption[] = [
    {
      icon: faHome,
      text: "Home",
      path: "/",
      key: 1,
      delay: 0.3,
    },
    {
      icon: faBriefcase,
      text: "Projects",
      path: "/projects",
      key: 2,
      delay: 0.6,
    },

    {
      icon: faIdCard,
      text: "Contact",
      path: "/contact",
      key: 3,
      delay: 1.2,
    },
  ];
  return (
    <motion.div
      initial={{ x: 150, opacity: 0, scale: 0.5 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex ml-[-8px] md:m-[-150px] md:max-h-[300px] md:mb-50 md:w-12 bg-goldGradient fixed bottom-0 w-full p-2 md:rounded-full md:flex-col md:mr-20 md:w-auto md:h-auto md:right-0 md:top-1/3 md:mt-1 md:translate-y-[-50%] z-10"
    >
      <ul className="flex px-16 md:px-0 md:flex-col md:items-center justify-between md:py-16 w-full h-full">
        {menuOptions.map((option, index) => (
          <motion.li
            initial={{ x: 150, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: option.delay }}
            key={option.key}
            className="text-xl text-white hover:cursor-pointer"
          >
            <FontAwesomeIcon
              icon={option.icon}
              onClick={() => setPage(option.key)}
            />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
