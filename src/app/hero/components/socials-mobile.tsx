import { BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";

export default function SocialsMobile() {
  return (
    <div className="md:hidden flex absolute flex-row gap-4 mb-16 place-self-end">
      <Link href="https://www.linkedin.com/in/brendankeaton/">
        <BsLinkedin color="#FBFBFB" size={32} />
      </Link>
      <Link href="https://github.com/BrendanKeaton">
        <BsGithub color="#FBFBFB" size={32} />
      </Link>
    </div>
  );
}
