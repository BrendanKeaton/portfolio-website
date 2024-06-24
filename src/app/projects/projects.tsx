import Card from "./components/card";

export default function Projects() {
  return (
    <div className=" container px-4 mx-auto pb-10 bg-bk-white z-30 relative flex flex-col pt-10 md:pt-32">
      <span className="font-semibold text-bk-blue text-xl sm:text-xl 2xl:text-2xl leading-none pb-2 md:pb-6 text-center">
        PROJECTS
      </span>
      <div className="grid grid-cols-3 bg-bk-white gap-4">
        <Card
          alt="Logo of Statistex, a data driven game development company."
          src="/assets/stat.png"
          bgColor="bg-bk-blue"
        />
      </div>
    </div>
  );
}
