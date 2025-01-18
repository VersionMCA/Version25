import Teams from "@/helper/teams";
import TeamsDesign from "@/app/team/TeamsDesign";
import { Timeline } from "@/components/ui/timeline";

const page = () => {
  const { EEC, ARC, PPC, PRC, HRC, CCC, Faculty } = Teams;
  const timelineData = [
    {
      title: "HOD",
      content: Faculty,
    },
    {
      title: "CCC",
      content: CCC,
    },
    {
      title: "EEC",
      content: EEC,
    },
    {
      title: "PRC",
      content: PRC,
    },
    {
      title: "PPC",
      content: PPC,
    },
    {
      title: "ARC",
      content: ARC,
    },
    {
      title: "HRC",
      content: HRC,
    },
  ];
  return (
    <div className="flex justify-center mt-16 w-full max-w-[1100px] mx-auto lg:mt-20  items-center p-4 flex-col bg-[rgb(3,7,18)] h-full">
      <div className="opacity-1 transform-none font-extrabold font-mono text-white mt-16">
        <h1 className="text-center text-3xl md:text-6xl mb-10 bg-gradient-to-r from-slate-200 to-gray-400 bg-clip-text text-transparent hover:scale-105 transition duration-500">
          MEET THE{" "}
          <span className="bg-gradient-to-r from-theme-light_lime to-lime-400 bg-clip-text text-transparent">
            {" "}
            TEAM{" "}
          </span>
        </h1>
      </div>
      <Timeline data={timelineData} />
    </div>
  );
};

export default page;
