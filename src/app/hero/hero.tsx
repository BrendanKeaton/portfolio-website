"use client";

import { FiChevronsDown } from "react-icons/fi";
import Logos from "./components/logos";
import LogosSmall from "./components/logos-mobile";
import HeroButtons from "./components/hero-buttons";
import Name from "./components/name";
import Socials from "./components/socials";
import SocialsMobile from "./components/socials-mobile";

export default function Hero() {
  return (
    <div className="h-screen bg-bk-blue z-10 relative">
      <div className="relative justify-center lg:justify-start flex h-screen flex-row container px-4 3xl:px-0 mx-auto pt-10 lg:pt-0 md:items-start">
        <div className="flex flex-col">
          <Name />
          <HeroButtons />
          <div className="hidden md:flex md:absolute md:bottom-20 animate-bounce">
            <FiChevronsDown color="#FBFBFB" size={72} />
          </div>
          <Socials />
          <LogosSmall />
        </div>
        <Logos />
        <SocialsMobile />
      </div>
    </div>
  );
}
