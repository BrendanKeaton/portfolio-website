import { BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Socials() {
  return (
    <div className="hidden absolute flex-row mt-6 lg:flex gap-8 md:bottom-20 place-self-end">
      <motion.div whileHover={{ scale: 1.3, rotate: 360 }}>
        <Link href="https://www.linkedin.com/in/brendankeaton/">
          <BsLinkedin color="#FBFBFB" size={48} />
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.3, rotate: 360 }}>
        <Link href="https://github.com/BrendanKeaton">
          <BsGithub color="#FBFBFB" size={48} />
        </Link>
      </motion.div>
    </div>
  );
}
