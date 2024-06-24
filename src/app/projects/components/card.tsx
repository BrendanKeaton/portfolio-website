"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GoLinkExternal } from "react-icons/go";
import Link from "next/link";

interface CardProps {
  src: string;
  alt: string;
  bgColor?: string;
  link: string;
  para?: string;
  fontColor?: string;
  h?: number;
  w?: number;
  linkColor?: string;
}

export default function Card({
  src,
  alt,
  bgColor = "bg-bk-blue",
  link,
  para = "Default paragraph text",
  fontColor = "text-white",
  h = 200,
  w = 200,
  linkColor = "#FBFBFB",
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <div
        className={`w-[80vw] h-[80vw] md:w-[300px] md:h-[250px] xl:w-[490px] xl:h-[375px] relative items-center px-6 justify-center flex ${bgColor} shadow-lg lg:shadow-xl rounded-3xl`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {isHovered || isClicked ? (
          <div className="flex flex-col items-center">
            <div className={`max-w-[40vw] lg:max-w-[${w}]`}>
              <Image src={src} height={h} width={w} alt={alt} />
            </div>
            <p
              className={`text-center text-sm lg:text-md ${fontColor} pb-1 lg:pb-4 pt-1 lg:pt-4`}
            >
              {para}
            </p>
            <Link href={link}>
              <GoLinkExternal fill={linkColor} size={32} />
            </Link>
          </div>
        ) : (
          <Image src={src} height={h} width={w} alt={alt} />
        )}
      </div>
    </motion.div>
  );
}
