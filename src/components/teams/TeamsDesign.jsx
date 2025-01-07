import React from "react";
import ProfileCard from "./ProfileCard";

function TeamsDesign({ Data }) {
  return (
    <div className=" flex items-center justify-center px-4 flex-col flax-wrap bg-[rgb(3,7,18)]">
      <h3 className=" text-center font-bold bg-gradient-to-r from-theme-light_lime to-theme-lime bg-clip-text text-transparent text-2xl lg:text-3xl hover:scale-105 transition duration-500  tracking-tighter">
        {Data.Title}
      </h3>
      {Data.Chairperson && (
        <div className="flex w-full h-full justify-center items-center flex-wrap p-10 mb-10">
          {Data.Chairperson.map((person, index) => (
            <ProfileCard key={index} person={person} />
          ))}
        </div>
      )}
      {Data.Heads && (
        <div className="flex justify-center items-center flex-wrap p-10 mb-10 gap-8">
          {Data.Heads.map((person, index) => (
            <ProfileCard key={index} person={person} />
          ))}
        </div>
      )}
      {Data.Members && (
        <div className="flex justify-center items-center flex-wrap p-10 mb-10 gap-8">
          {Data.Members.map((person, index) => (
            <ProfileCard key={index} person={person} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TeamsDesign;
