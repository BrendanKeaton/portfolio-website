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

export default function Logos() {
  const initial = { y: "-175px", opacity: 1 };
  const animate = {
    y: ["-151px", "100vh"],
    opacity: [1, 1, 1, 0],
  };

  const initial2 = { y: "-175px", opacity: 1 };
  const animate2 = {
    y: ["-151px", "100vh"],
    opacity: [1, 1, 1, 0],
  };

  return (
    <div className="lg:flex lg:flex-row gap-48 hidden">
      <div className="lg:ml-10 2xl:ml-32 h-screen z-10">
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
            className="py-4 absolute bg-bk-white rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
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
            className="py-4 absolute bg-bk-white rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
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
            className="py-4 absolute bg-bk-white rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
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
            className="py-4 absolute bg-bk-white rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
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
            className="py-4 absolute bg-bk-white rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
          />
        </motion.div>
      </div>
      <div className="h-screen z-10">
        <motion.div
          initial={initial2}
          animate={animate2}
          transition={{
            duration: 10,
            ease: "linear",
            delay: 1,
            repeat: Infinity,
          }}
        >
          <SiPowerbi
            color="#f6d958"
            className="py-4 absolute bg-white rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
          />
        </motion.div>

        <motion.div
          initial={initial2}
          animate={animate2}
          transition={{
            duration: 10,
            ease: "linear",
            delay: 3,
            repeat: Infinity,
          }}
        >
          <SiPython
            color="black"
            className="py-4 absolute bg-bk-white rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
          />
        </motion.div>

        <motion.div
          initial={initial2}
          animate={animate2}
          transition={{
            duration: 10,
            ease: "linear",
            delay: 5,
            repeat: Infinity,
          }}
        >
          <SiJira
            color="#0052cc"
            className="py-4 absolute bg-bk-white rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
          />
        </motion.div>

        <motion.div
          initial={initial2}
          animate={animate2}
          transition={{
            duration: 10,
            ease: "linear",
            delay: 7,
            repeat: Infinity,
          }}
        >
          <SiJavascript
            color="#f7df1e"
            className="py-4 absolute bg-black rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
          />
        </motion.div>
        <motion.div
          initial={initial2}
          animate={animate2}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            delay: 9,
          }}
        >
          <SiGithub
            color="black"
            className="py-4 absolute bg-bk-white rounded-3xl lg:w-36 lg:h-36 xl:w-40 xl:h-40"
          />
        </motion.div>
      </div>
    </div>
  );
}
