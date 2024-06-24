"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GoLinkExternal } from "react-icons/go";
import Link from "next/link";

interface CardProps {
  src: string;
  alt: string;
  bgColor: string;
}

export default function Card({ src, alt, bgColor }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <div
        className={`w-[490px] h-[375px] relative items-center px-6 justify-center flex ${bgColor} shadow-2xl rounded-3xl`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <div className="flex flex-col items-center">
            <Image src={src} height={800} width={800} alt={alt} />
            <p className="text-white text-center pb-4">
              Developed an application using the Overwolf API to aid in data
              driven improvement in Valorant.
            </p>
            <Link href="https://statistex.dev/">
              <GoLinkExternal fill="#FBFBFB" size={32} />
            </Link>
          </div>
        ) : (
          <Image src={src} height={800} width={800} alt={alt} />
        )}
      </div>
    </motion.div>
  );
}
