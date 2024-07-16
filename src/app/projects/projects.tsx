"use client";

import Card from "./components/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const containerRefMob1 = useRef(null);
  const isInViewMob1 = useInView(containerRefMob1, { once: true, amount: 0.2 });

  const containerRefMob2 = useRef(null);
  const isInViewMob2 = useInView(containerRefMob2, { once: true, amount: 0.2 });

  const containerRefMob3 = useRef(null);
  const isInViewMob3 = useInView(containerRefMob3, { once: true, amount: 0.2 });

  const containerRefMob4 = useRef(null);
  const isInViewMob4 = useInView(containerRefMob4, { once: true, amount: 0.2 });

  return (
    <div>
      <motion.ul
        ref={containerRef}
        className="hidden container px-4 mx-auto pb-10 bg-bk-white z-30 relative md:flex md:flex-col pt-10 md:pt-32 text-center"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.li className="item flex-1 pb-4 md:pb-10" variants={item}>
          <span className="font-semibold text-bk-blue text-xl sm:text-xl 2xl:text-2xl leading-none text-center">
            PROJECTS
          </span>
        </motion.li>
        <div className="min-h-[350px] md:grid md:grid-cols-2 xl:grid-cols-3 bg-bk-white gap-6 flex flex-col items-center justify-center">
          <motion.li
            className="item flex-1 w-full flex items-center justify-center h-full"
            variants={item}
          >
            <Card
              alt="Logo of Statistex, a data driven game development company."
              src="/assets/stat.png"
              bgColor="bg-bk-blue"
              link="https://statistex.dev/"
              para="Developed an application using the Overwolf API to aid in data driven player improvement in Valorant."
              h={800}
              w={800}
            />
          </motion.li>
          <motion.li
            className="item flex-1 w-full flex items-center justify-center h-full"
            variants={item}
          >
            <Card
              alt="Logo of Rex Regum Qeon (RRQ), an Indonesian gaming organization."
              src="/assets/RRQ.png"
              bgColor="bg-bk-blue"
              link="https://x.com/VoxizeVAL"
              para="Worked as a data analyst for an APAC based Valorant team. Developed a small following on Twitter through my data based content."
              fontColor="text-bk-white"
              linkColor="#FBFBFB"
            />
          </motion.li>
          <motion.li
            className="item flex-1 w-full flex items-center justify-center h-full"
            variants={item}
          >
            <Card
              alt="Name Brendan Keaton, for this website as a project."
              src="/assets/Brendan_Keaton.png"
              bgColor="bg-bk-blue"
              link="https://github.com/BrendanKeaton/portfolio-website"
              para="Used Nextjs, React, Tailwindcss, and Framer Motion to create this portfolio website."
              fontColor="text-bk-white"
              linkColor="#FBFBFB"
              h={350}
              w={350}
            />
          </motion.li>
        </div>
      </motion.ul>

      <div className="flex flex-col container px-4 mx-auto pb-10 bg-bk-white z-30 relative md:hidden pt-10 md:pt-32 text-center">
        <motion.div
          ref={containerRefMob1}
          variants={container}
          className="pb-6"
          initial="hidden"
          animate={isInViewMob1 ? "visible" : "hidden"}
        >
          <span className="font-semibold text-bk-blue text-xl sm:text-xl 2xl:text-2xl leading-none text-center">
            PROJECTS
          </span>
        </motion.div>
        <div className="min-h-[350px] bg-bk-white gap-6 grid grid-cols-1 sm:grid-cols-2 items-center justify-center">
          <motion.div
            ref={containerRefMob2}
            variants={container}
            initial="hidden"
            animate={isInViewMob2 ? "visible" : "hidden"}
          >
            <Card
              alt="Logo of Statistex, a data driven game development company."
              src="/assets/stat.png"
              bgColor="bg-bk-blue"
              link="https://statistex.dev/"
              para="Developed an application using the Overwolf API to aid in data driven player improvement in Valorant."
              h={800}
              w={800}
            />
          </motion.div>
          <motion.div
            ref={containerRefMob3}
            variants={container}
            initial="hidden"
            animate={isInViewMob3 ? "visible" : "hidden"}
          >
            <Card
              alt="Logo of Rex Regum Qeon (RRQ), an Indonesian gaming organization."
              src="/assets/RRQ.png"
              bgColor="bg-bk-blue"
              link="https://x.com/VoxizeVAL"
              para="Worked as a data analyst for an APAC based Valorant team. Developed a small following on Twitter through my data based content."
              fontColor="text-bk-white"
              linkColor="#FBFBFB"
            />
          </motion.div>
          <motion.div
            ref={containerRefMob4}
            variants={container}
            initial="hidden"
            animate={isInViewMob4 ? "visible" : "hidden"}
          >
            <Card
              alt="Name Brendan Keaton, for this website as a project."
              src="/assets/Brendan_Keaton.png"
              bgColor="bg-bk-blue"
              link="https://github.com/BrendanKeaton/portfolio-website"
              para="Used Nextjs, React, Tailwindcss, and Framer Motion to create this portfolio website."
              fontColor="text-bk-white"
              linkColor="#FBFBFB"
              h={350}
              w={350}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
