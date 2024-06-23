import { BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="hidden absolute flex-row mt-6 md:flex gap-8 md:bottom-20 place-self-end">
      <Link href="https://www.linkedin.com/in/brendankeaton/">
        <BsLinkedin color="#FBFBFB" size={48} />
      </Link>
      <Link href="https://github.com/BrendanKeaton">
        <BsGithub color="#FBFBFB" size={48} />
      </Link>
    </div>
  );
}
