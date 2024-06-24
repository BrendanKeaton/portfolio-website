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
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const resoniteSkills: string[] = [
    "React",
    "Vercel",
    "Git",
    "TailwindCSS",
    "Next.js",
    "GoLang",
    "TailwindCSS",
    "Jira",
    "Figma",
    "Web Design",
    "UI/UX",
    "R",
    "Typescript",
    "Framer Motion",
    "HTML/CSS",
  ];

  const AZSkills: string[] = [
    "PowerBI",
    "Salesforce",
    "Python",
    "Numpy",
    "Data Cleaning",
    "Excel",
    "DAX",
    "Data Visualization",
    "Pandas",
  ];

  const depSkills: string[] = [
    "Excel",
    "SQL",
    "ArcGIS",
    "Jira",
    "VBA",
    "Data Visualization",
  ];

  const resonitePara =
    "I currently work at Resonite as a fullstack developer. My work at Resonite began a few months after the company was conceived. Due to this, I have learned the basics of how all of the moving pieces of a business work together. Additionally, I have worked individually with clients, taking them through the entire development life cycle, from a concept to a finished product.";

  const AZPara =
    "During my time at AstraZeneca, my focus was on data automation and cleaning. To this end, I implemented a script in Python that pulls and cleans data, and then uses that data to create auto-generated reports. These reports are run quarterly, and save 200+ hours of manual labor yearly. Alongside the prior project, I used the SalesForce API and DAX queries within PowerBI to create dashboards displaying relevant metrics to improve efficiency across multiple teams.";

  const depElectionsPara =
    "My main task at the the Virginia State Board of Elections was to create a script within Excel to generate daily reports, saving team members 2 hours of manual data collection daily. Alongside this, I worked with ArcGIS to find and fix population data by communicating directly with localities.";

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
          years="Oct 2023 - Present (Remote)"
          skills={resoniteSkills}
        />
        <Exp
          company="AstraZeneca Pharmaceuticals"
          position="Data Analyst Intern"
          para={AZPara}
          years="Jun 2023 - Sep 2023 (Wilmington, DE)"
          skills={AZSkills}
        />
        <Exp
          company="Virginia State Board of Elections"
          position="Data Analyst Intern"
          para={depElectionsPara}
          years="Jun 2022 - Sep 2022 (Richmond, VA)"
          skills={depSkills}
        />
      </motion.li>
    </motion.ul>
  );
}
