import { BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";

export default function SocialsMobile() {
  return (
    <div className="lg:hidden items-center justify-center pt-7 gap-4 pl-3 flex flex-row">
      <Link href="https://www.linkedin.com/in/brendankeaton/">
        <BsLinkedin color="#FBFBFB" size={32} />
      </Link>
      <Link href="https://github.com/BrendanKeaton">
        <BsGithub color="#FBFBFB" size={32} />
      </Link>
    </div>
  );
}
