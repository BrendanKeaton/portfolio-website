import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";

export default function HeroButtons() {
  return (
    <div className="flex flex-row mt-6 2xl:mt-10 gap-2 md:gap-8 justify-center lg:justify-center">
      <Link
        href="https://www.linkedin.com/in/brendankeaton/"
        className="hover:scale-105 inline-flex items-center bg-bk-off-blue shadow-lg px-10 sm:px-16 xl:px-24 py-2 sm:py-3 font-light text-bk-white text-md md:text-[2rem] rounded-2xl"
      >
        <span>Contact Me</span>
      </Link>
      <Link
        href="Brendan_Keaton_Resume.pdf"
        className="hover:scale-105 inline-flex items-center bg-bk-off-blue shadow-lg px-10 sm:px-16 xl:px-24 py-2 sm:py-3 font-light text-bk-white text-md md:text-[2rem] rounded-2xl gap-1"
        target="_blank"
        download
      >
        <span>Resume</span>
        <MdOutlineFileDownload fill="#FBFBFB" />
      </Link>
    </div>
  );
}
