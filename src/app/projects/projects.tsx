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
  const isInView = useInView(containerRef, { once: true });
  return (
    <motion.ul
      ref={containerRef}
      className="container px-4 mx-auto pb-10 bg-bk-white z-30 relative flex flex-col pt-10 md:pt-32"
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.li className="item flex-1" variants={item}>
        <span className="font-semibold text-bk-blue text-xl sm:text-xl 2xl:text-2xl leading-none pb-4 md:pb-6 text-center">
          PROJECTS
        </span>
      </motion.li>
      <div className="md:grid md:grid-cols-2 2xl:grid-cols-3 bg-bk-white xl:gap-4 flex flex-col items-center justify-center">
        <motion.li className="item flex-1" variants={item}>
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
        <motion.li className="item flex-1" variants={item}>
          <Card
            alt="Logo of Rex Regum Qeon (RRQ), an Indonesian gaming organization."
            src="/assets/RRQ.png"
            bgColor="bg-bk-white"
            link="https://x.com/VoxizeVAL"
            para="Worked as a data analyst for an APAC based Valorant team. Developed a small following on Twitter through my data based content."
            fontColor="text-bk-blue"
            linkColor="#222E50"
          />
        </motion.li>
      </div>
    </motion.ul>
  );
}