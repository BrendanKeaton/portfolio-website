import {
  SiNextdotjs,
  SiVercel,
  SiReact,
  SiFigma,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

export default function LogosSmall() {
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
          repeat: Infinity,
        }}
      >
        <SiNextdotjs
          color="black"
          className="py-3 absolute bg-bk-white rounded-3xl w-20 h-20 sm:w-32 sm:h-32"
        />
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 10,
          ease: "linear",
          delay: 2,
          repeat: Infinity,
        }}
      >
        <SiFigma
          color="black"
          className="py-3 absolute bg-bk-white rounded-3xl w-20 h-20 sm:w-32 sm:h-32"
        />
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 10,
          ease: "linear",
          delay: 4,
          repeat: Infinity,
        }}
      >
        <SiReact
          color="#61DBFB"
          className="py-3 absolute bg-bk-white rounded-3xl w-20 h-20 sm:w-32 sm:h-32"
        />
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 10,
          ease: "linear",
          delay: 6,
          repeat: Infinity,
        }}
      >
        <SiVercel
          color="black"
          className="py-3 absolute bg-bk-white rounded-3xl w-20 h-20 sm:w-32 sm:h-32"
        />
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 10,
          ease: "linear",
          delay: 8,
          repeat: Infinity,
        }}
      >
        <SiTailwindcss
          color="#35bef8"
          className="py-3 absolute bg-bk-white rounded-3xl w-20 h-20 sm:w-32 sm:h-32"
        />
      </motion.div>
    </div>
  );
}
