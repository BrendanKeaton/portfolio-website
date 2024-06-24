"use client";

interface CardProps {
  company: string;
  para: string;
  years: string;
  position: string;
  skills: string[];
}

export default function Exp({
  company,
  para,
  years,
  skills,
  position,
}: CardProps) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 px-4">
      <div className="flex flex-col">
        <span className="font-semibold text-bk-blue text-lg 2xl:text-xl leading-none text-start">
          {position}
        </span>
        <span className="font-medium text-bk-blue text-md 2xl:text-[2rem] leading-none md:pb-6 text-start">
          {company}
        </span>
      </div>
      <span className="font-semibold text-bk-blue text-md 2xl:text-lg leading-snug pb-6 text-start lg:text-end">
        {years}
      </span>
      <span className="font-light text-bk-blue text-md 2xl:text-lg leading-snug pb-6 text-start">
        {para}
      </span>
      <ul className="flex flex-wrap md:justify-end gap-x-2 justify-self-end max-w-sm content-start gap-y-2">
        {skills.map((item, index) => (
          <li
            className="px-4 py-1 bg-bk-off-blue text-bk-blue rounded-xl text-center"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
