"use client";

import { MdOutlineFileDownload } from "react-icons/md";
import Link from "next/link";
import { FiChevronsDown } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Logos from "./logos";
import Logos2 from "./logos2";

export default function Hero() {
  return (
    <div className="h-screen bg-bk-blue z-10 relative">
      <div className="relative justify-center md:justify-start flex h-screen flex-row container px-4 3xl:px-0 mx-auto items-center md:items-start">
        <div className="flex flex-col">
          <div className="flex flex-col mt-10 md:mt-20 w-full md:w-auto justify-center text-center md:text-start">
            <span className="font-semibold text-bk-white text-xl sm:text-2xl 2xl:text-3xl leading-none">
              Brendan Keaton
            </span>
            <span className="font-light text-bk-white text-md sm:text-lg 2xl:text-xl leading-none">
              Software Development and Data Science
            </span>
          </div>
          <div className="flex flex-row 2xl:ml-12 mt-6 2xl:mt-10 gap-2 md:gap-8">
            <Link
              href="https://www.linkedin.com/in/brendankeaton/"
              className="hover:scale-105 inline-flex items-center bg-bk-off-blue shadow-lg px-12 lg:px-20 py-2 font-light text-bk-white text-sm md:text-lg rounded-2xl"
            >
              <span>Contact Me</span>
            </Link>
            <Link
              href="Brendan_Keaton_Resume.pdf"
              className="hover:scale-105 inline-flex items-center bg-bk-off-blue shadow-lg px-12 lg:px-20 py-2 font-light text-bk-white text-sm md:text-lg rounded-2xl gap-1"
              target="_blank"
              download
            >
              <span>Resume</span>
              <MdOutlineFileDownload fill="#FBFBFB" />
            </Link>
          </div>
          <div className="hidden md:flex md:absolute md:bottom-20">
            <FiChevronsDown color="#FBFBFB" size={72} />
          </div>
          <div className="flex absolute flex-row mt-6 md:flex gap-8 md:bottom-20 md:left-1/2">
            <Link href="https://www.linkedin.com/in/brendankeaton/">
              <BsLinkedin color="#FBFBFB" size={48} />
            </Link>
            <Link href="https://github.com/BrendanKeaton">
              <BsGithub color="#FBFBFB" size={48} />
            </Link>
          </div>
        </div>
        <Logos />
        <Logos2 />
      </div>
    </div>
  );
}