import React from "react";
import ProfileCard2 from "./ProfileCard2";

function TeamsDesign({ Data }) {
  return (
    <div className=" flex max-sm:mb-24 mb-32 items-center justify-center px-4 flex-col flax-wrap bg-[rgb(3,7,18)]">
      <h3 className=" text-center max-sm:mb-4 mb-8 font-bold bg-gradient-to-r from-theme-light_lime to-theme-lime bg-clip-text text-transparent text-2xl lg:text-3xl hover:scale-105 transition duration-500  tracking-tighter">
        {Data.Title}
      </h3>
      <div className=" flex flex-col gap-y-14">
        {Data.Chairperson && (
          <div className="flex justify-center items-center flex-wrap gap-3">
            {Data.Chairperson.map((person, index) => (
              <ProfileCard2 key={index} person={person} />
            ))}
          </div>
        )}
        {Data.Heads && (
          <div className="flex justify-center items-center flex-wrap gap-3">
            {Data.Heads.map((person, index) => (
              <ProfileCard2 key={index} person={person} />
            ))}
          </div>
        )}
        {Data.Members && (
          <div className="flex justify-center items-center flex-wrap gap-3">
            {Data.Members.map((person, index) => (
              <ProfileCard2 key={index} person={person} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TeamsDesign;