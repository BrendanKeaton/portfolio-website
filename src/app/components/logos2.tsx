import {
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
    <div className="h-screen z-10">
      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 15,
          ease: "linear",
          delay: 1.3,
          repeat: Infinity,
        }}
      >
        <SiPowerbi
          color="#f6d958"
          className="py-4 absolute bg-white rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
        />
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 15,
          ease: "linear",
          delay: 4.3,
          repeat: Infinity,
        }}
      >
        <SiPython
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
          delay: 7.3,
          repeat: Infinity,
        }}
      >
        <SiJira
          color="#0052cc"
          className="py-4 absolute bg-bk-white rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
        />
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 15,
          ease: "linear",
          delay: 10.3,
          repeat: Infinity,
        }}
      >
        <SiJavascript
          color="#f7df1e"
          className="py-4 absolute bg-black rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
        />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          delay: 13.3,
        }}
      >
        <SiGithub
          color="black"
          className="py-4 absolute bg-bk-white rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
        />
      </motion.div>
    </div>
  );
}
