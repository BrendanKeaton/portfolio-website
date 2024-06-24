"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Exp from "./exp-card";

export default function Experiences() {
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

  const resoniteSkills: string[] = [
    "React",
    "Vercel",
    "Git",
    "TailwindCSS",
    "Next.js",
    "GoLang",
    "Framer Motion",
    "TailwindCSS",
    "Jira",
    "Figma",
    "Web Design",
    "UI/UX Research",
  ];

  const AZSkills: string[] = [
    "PowerBI",
    "Salesforce",
    "Python",
    "Numpy",
    "Data Cleaning",
    "Excel",
    "DAX",
  ];

  const resonitePara =
    "I work at Resonite as a fullstack developer, learning skills such as tailwind, react, nextjs, vercel deployment, and git.";

  const AZPara =
    "Implemented a data cleaning and automation script in Python that creates auto-generated quarterly reports saving 200+ hours of manual data collection and cleaning yearly. Used the SalesForce API and DAX queries within PowerBI to create dashboards displaying relevant metrics to improve team efficiency.";

  return (
    <motion.ul
      ref={containerRef}
      className="container px-4 mx-auto pb-10 bg-bk-white z-30 relative flex flex-col pt-10 md:pt-32 text-center"
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.li className="item flex-1 pb-4 md:pb-10" variants={item}>
        <span className="font-semibold text-bk-blue text-xl sm:text-xl 2xl:text-2xl leading-none text-center">
          EXPERIENCE
        </span>
      </motion.li>
      <motion.li
        className="flex flex-col gap-y-16 items-center justify-center"
        variants={item}
      >
        <Exp
          company="Resonite LLC"
          position="Fullstack Developer"
          para={resonitePara}
          years="Oct 2023 - Present"
          skills={resoniteSkills}
        />
        <Exp
          company="AstraZeneca Pharmaceuticals"
          position="Data Analyst Intern"
          para={AZPara}
          years="Jun 2022 - Sep 2022"
          skills={AZSkills}
        />
      </motion.li>
    </motion.ul>
  );
}
