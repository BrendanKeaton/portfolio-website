import {
  SiNextdotjs,
  SiVercel,
  SiReact,
  SiFigma,
  SiTailwindcss,
  SiPython,
  SiGithub,
  SiJira,
  SiJavascript,
  SiPowerbi,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

export default function LogosMobile() {
  const initial = { x: "-130px", opacity: 1 };
  const animate = {
    x: ["-130px", "115vw"],
    opacity: [1, 1, 1, 0],
  };

  const initial2 = { x: "-110px", opacity: 1 };
  const animate2 = {
    x: ["-130px", "115vw"],
    opacity: [1, 1, 1, 0],
  };

  return (
    <div className="lg:hidden flex flex-col gap-y-12 sm:gap-y-28 mt-24">
      <div className="w-screen z-10">
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
      <div className="w-screen z-10 mt-12">
        <motion.div
          initial={initial2}
          animate={animate2}
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
          initial={initial2}
          animate={animate2}
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
          initial={initial2}
          animate={animate2}
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
          initial={initial2}
          animate={animate2}
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
          initial={initial2}
          animate={animate2}
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
    </div>
  );
}
