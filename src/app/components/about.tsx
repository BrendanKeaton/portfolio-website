"use client";

import Image from "next/image";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
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

  const para =
    "Hello, I'm Brendan Keaton, a passionate fullstack developer and data scientist. I graduated with a degree in Computer Science and a minor in Data Science from the University of Virginia in December 2023. I have had the opportunity to intern as a Data Analyst at three different organizations, where I honed my skills in data visualization, statistical analysis, and database management. Outside of work, I enjoy staying updated with the latest trends in technology and continuously expanding my skill set while working on personal projects.";

  return (
    <div className="justify-between container px-4 mx-auto pb-10 bg-bk-white z-30 relative flex flex-col md:flex-row pt-10 md:pt-32">
      <motion.ul
        ref={containerRef}
        className="flex flex-col md:flex-row container"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.li className="item flex-1" variants={item}>
          <div className="flex flex-col pb-8 md:pb-0">
            <span className="font-semibold text-bk-blue text-xl sm:text-xl 2xl:text-2xl leading-none pb-1 md:pb-6 text-center sm:text-start">
              ABOUT ME
            </span>
            <span className="font-light text-bk-blue text-md 2xl:text-lg leading-snug md:max-w-3xl text-start">
              {para}
            </span>
          </div>
        </motion.li>
        <motion.li className="item flex-1" variants={item}>
          <div className="relative items-start justify-center flex">
            <Image
              className="max-w-[80%] lg:max-w-[50%] rounded-3xl shadow-xl"
              src="/assets/Brendan_Keaton.jpg"
              height={800}
              width={800}
              objectFit="contain"
              alt="Picture of Brendan Keaton, in the about me section"
            />
          </div>
        </motion.li>
      </motion.ul>
    </div>
  );
}
