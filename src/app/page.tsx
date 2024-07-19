import { useEffect } from "react";
import { useRouter } from "next/router";
import ReactGA from "react-ga4";
import Hero from "./hero/hero";
import About from "./components/about";
import Projects from "./projects/projects";
import Experiences from "./experiences/experiences";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize("G-05YDKDM7HY");

    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

    const handleRouteChange = (url: string) => {
      ReactGA.send({ hitType: "pageview", page: url });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="pb-48 max-w-full overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Experiences />
    </div>
  );
}
