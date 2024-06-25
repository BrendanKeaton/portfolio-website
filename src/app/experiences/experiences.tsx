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
  const isInView = useInView(containerRef, { once: true, amount: 0.999 });

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
    "As one of the first hires at Resonite, I've been a key fullstack developer since the company's early days. This unique position has given me insight into the intricacies of business operations from the ground up. I've taken full ownership of client projects, guiding them through the entire development lifecycle - from initial concept to polished final product. My hands-on experience spans all aspects of software development and client management, making me adept at turning ideas into reality while navigating the complexities of a growing business.";

  const AZPara =
    "At AstraZeneca, I spearheaded data automation initiatives that dramatically improved efficiency, most notably the development of a Python script for automated data extraction, cleaning, and report generation, saving over 200 hours of manual labor annually. I also leveraged the Salesforce API and DAX queries in Power BI to create dynamic dashboards, providing critical metrics that boosted efficiency across multiple teams. Another primary project focused on streamlining quarterly reporting processes, enabling data-driven decision-making and freeing up resources for more critical tasks.";

  const depElectionsPara =
    "At the Virginia State Board of Elections, I was asked to improve efficiency and data accuracy. To accomplish this, I first engineered an Excel script for automated daily report generation, saving the team 2 hours of manual data collection every day - equivalent to 500+ hours annually. Additionally, I leveraged ArcGIS to identify and address population data discrepancies, collaborating directly with local authorities to ensure data integrity.";

  return (
    <motion.ul
      ref={containerRef}
      className="container px-4 mx-auto pb-10 bg-bk-white z-30 relative flex flex-col pt-10 md:pt-16 text-center"
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
