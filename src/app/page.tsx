"use client";

import { useEffect } from "react";
import ReactGA from "react-ga4";
import Hero from "./hero/hero";
import About from "./components/about";
import Projects from "./projects/projects";
import Experiences from "./experiences/experiences";

export default function Home() {
  useEffect(() => {
    ReactGA.initialize("G-05YDKDM7HY");

    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  });

  return (
    <div className="pb-48 max-w-full overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Experiences />
    </div>
  );
}
