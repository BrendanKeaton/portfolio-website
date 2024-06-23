import Hero from "./hero/hero";
import About from "./components/about";
export default function Home() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Hero />
      <About />
    </div>
  );
}
