import {
  SiPython,
  SiGithub,
  SiJira,
  SiJavascript,
  SiPowerbi,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

export default function LogosSmall2() {
  const initial = { x: "-200px", opacity: 1 };
  const animate = {
    x: ["-220px", "100vw"],
    opacity: [1, 1, 1, 0],
  };

  return (
    <div className="w-screen z-10 mt-12">
      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 10,
          ease: "linear",
          delay: 0.6,
          repeat: Infinity,
        }}
      >
        <SiPowerbi
          color="#f6d958"
          className="py-4 absolute bg-white rounded-3xl w-20 h-20 sm:w-32 sm:h-32"
        />
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 10,
          ease: "linear",
          delay: 2.6,
          repeat: Infinity,
        }}
      >
        <SiPython
          color="black"
          className="py-4 absolute bg-bk-white rounded-3xl w-20 h-20 sm:w-32 sm:h-32"
        />
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 10,
          ease: "linear",
          delay: 4.6,
          repeat: Infinity,
        }}
      >
        <SiJira
          color="#0052cc"
          className="py-4 absolute bg-bk-white rounded-3xl w-20 h-20 sm:w-32 sm:h-32"
        />
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 10,
          ease: "linear",
          delay: 6.6,
          repeat: Infinity,
        }}
      >
        <SiJavascript
          color="#f7df1e"
          className="py-4 absolute bg-black rounded-3xl w-20 h-20 sm:w-32 sm:h-32"
        />
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 10,
          ease: "linear",
          delay: 8.6,
          repeat: Infinity,
        }}
      >
        <SiGithub
          color="black"
          className="py-4 absolute bg-bk-white rounded-3xl w-20 h-20 sm:w-32 sm:h-32"
        />
      </motion.div>
    </div>
  );
}
