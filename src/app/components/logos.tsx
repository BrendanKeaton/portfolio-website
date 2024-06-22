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
    <div className="lg:ml-10 2xl:ml-32 h-screen z-10">
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
          className="py-4 absolute bg-bk-white rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
        />
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 15,
          ease: "linear",
          delay: 3,
          repeat: Infinity,
        }}
      >
        <SiFigma
          color="black"
          className="py-4 absolute bg-bk-white rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
        />
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 15,
          ease: "linear",
          delay: 6,
          repeat: Infinity,
        }}
      >
        <SiReact
          color="#61DBFB"
          className="py-4 absolute bg-bk-white rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
        />
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 15,
          ease: "linear",
          delay: 9,
          repeat: Infinity,
        }}
      >
        <SiVercel
          color="black"
          className="py-4 absolute bg-bk-white rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
        />
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 15,
          ease: "linear",
          delay: 12,
          repeat: Infinity,
        }}
      >
        <SiTailwindcss
          color="#35bef8"
          className="py-4 absolute bg-bk-white rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
        />
      </motion.div>
    </div>
  );
}
