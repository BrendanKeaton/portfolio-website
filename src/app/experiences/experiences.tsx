"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Exp from "./exp-card";

export default function Experiences() {
  const container = {
    hidden: { opacity: 1, scale: 0, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const containerRef2 = useRef(null);
  const isInView2 = useInView(containerRef2, { once: true, amount: 0.1 });

  const containerRef3 = useRef(null);
  const isInView3 = useInView(containerRef3, { once: true, amount: 0.1 });

  const containerRef4 = useRef(null);
  const isInView4 = useInView(containerRef4, { once: true, amount: 0.1 });

  const resoniteSkills: string[] = [
    "React",
    "Vercel",
    "Git",
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
    "As one of the first hires at Resonite, I was a key fullstack developer since the company's early days. This unique position has given me insight into the intricacies of business operations from the ground up. I've taken full ownership of client projects, guiding them through the entire development lifecycle - from initial concept to polished final product. My hands-on experience spans all aspects of software development and client management, making me adept at turning ideas into reality while navigating the complexities of a growing business.";

  const AZPara =
    "At AstraZeneca, I spearheaded data automation initiatives that dramatically improved efficiency, most notably the development of a Python script for automated data extraction, cleaning, and report generation, saving over 200 hours of manual labor annually. I also leveraged the Salesforce API and DAX queries in Power BI to create dynamic dashboards, providing critical metrics that boosted efficiency across multiple teams. Another primary project focused on streamlining quarterly reporting processes, enabling data-driven decision-making and freeing up resources for more critical tasks.";

  const depElectionsPara =
    "At the Virginia State Board of Elections, I was asked to improve efficiency and data accuracy. To accomplish this, I first engineered an Excel script for automated daily report generation, saving the team 2 hours of manual data collection every day - equivalent to 500+ hours annually. Additionally, I leveraged ArcGIS to identify and address population data discrepancies, collaborating directly with local authorities to ensure data integrity.";

  return (
    <div className="container px-4 mx-auto pb-10 bg-bk-white z-30 relative flex flex-col pt-10 md:pt-16 text-center">
      <motion.div
        ref={containerRef}
        variants={container}
        className="pb-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <span className="font-semibold text-bk-blue text-xl sm:text-xl 2xl:text-2xl leading-none text-center">
          EXPERIENCE
        </span>
      </motion.div>
      <motion.div
        ref={containerRef2}
        variants={container}
        className="pb-12"
        initial="hidden"
        animate={isInView2 ? "visible" : "hidden"}
      >
        <Exp
          company="Resonite Development LLC"
          position="Fullstack Developer"
          para={resonitePara}
          years="Oct 2023 - July 2024 (Remote)"
          skills={resoniteSkills}
        />
      </motion.div>
      <motion.div
        ref={containerRef3}
        variants={container}
        className="pb-12"
        initial="hidden"
        animate={isInView3 ? "visible" : "hidden"}
      >
        <Exp
          company="AstraZeneca Pharmaceuticals"
          position="Data Analyst Intern"
          para={AZPara}
          years="Jun 2023 - Sep 2023 (Wilmington, DE)"
          skills={AZSkills}
        />
      </motion.div>
      <motion.div
        ref={containerRef4}
        variants={container}
        initial="hidden"
        animate={isInView4 ? "visible" : "hidden"}
      >
        <Exp
          company="Virginia State Board of Elections"
          position="Data Analyst Intern"
          para={depElectionsPara}
          years="Jun 2022 - Sep 2022 (Richmond, VA)"
          skills={depSkills}
        />
      </motion.div>
    </div>
  );
}
