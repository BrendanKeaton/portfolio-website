import Hero from "./hero/hero";
import About from "./components/about";
import Projects from "./projects/projects";
import Experiences from "./experiences/experiences";

export default function Home() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Experiences />
    </div>
  );
}
