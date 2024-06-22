import {
  SiNextdotjs,
  SiVercel,
  SiReact,
  SiFigma,
  SiNotion,
  SiTailwindcss,
  SiPython,
  SiGithub,
  SiJira,
  SiJavascript,
  SiPowerbi,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

export default function Logos() {
  const initial = { y: "-175px", opacity: 1 };
  const animate = {
    y: ["-151px", "100vh"],
    opacity: [1, 1, 1, 0],
  };

  return (
    <div className="md:ml-12 lg:ml-20 2xl:ml-32 h-screen z-10">
      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <SiNextdotjs
          color="black"
          className="py-4 absolute bg-bk-white rounded-3xl w-10 h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40"
        />
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 15,
          ease: "linear",
          delay: 2.8,
          repeat: Infinity,
        }}
      >
        <SiFigma
          color="black"
          className="py-4 absolute bg-bk-white rounded-3xl w-10 h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40"
        />
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 15,
          ease: "linear",
          delay: 5.6,
          repeat: Infinity,
        }}
      >
        <SiReact
          color="#61DBFB"
          className="py-4 absolute bg-bk-white rounded-3xl w-10 h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40"
        />
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 15,
          ease: "linear",
          delay: 8.4,
          repeat: Infinity,
        }}
      >
        <SiVercel
          color="black"
          className="py-4 absolute bg-bk-white rounded-3xl w-10 h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40"
        />
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 15,
          ease: "linear",
          delay: 11.2,
          repeat: Infinity,
        }}
      >
        <SiTailwindcss
          color="#35bef8"
          className="py-4 absolute bg-bk-white rounded-3xl w-10 h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40"
        />
      </motion.div>
    </div>
  );
}
