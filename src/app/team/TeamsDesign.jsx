import React from "react";
import ProfileCard from "./ProfileCard";

function TeamsDesign({ Data }) {
  return (
    <div className=" flex max-sm:mb-24 mb-32 items-center justify-center px-4 flex-col flax-wrap ">
      <h3 className="font-aldrich text-theme-cream/50 text-center max-sm:mb-4 mb-8 font-bold bg-gradient-to-r text-xl md:text-2xl lg:text-3xl tracking-tighter">
        {Data.Title}
      </h3>
      <div className=" flex flex-col gap-y-14">
        {Data.Members && (
          <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-8 md:gap-y-14 lg:gap-y-20">
            {Data.Members.map((person, index) => (
              <ProfileCard key={index} person={person} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TeamsDesign;
