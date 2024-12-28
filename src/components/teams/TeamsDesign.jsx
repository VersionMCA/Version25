import React from "react";
import ProfileCard from "./ProfileCard";

function TeamsDesign({ Data }) {
  return (
    <div className=" flex items-center justify-center flex-col flax-wrap">
      <h3 className=" text-center font-bold bg-gradient-to-r from-lime-200 to-lime-400 bg-clip-text text-transparent text-3xl hover:scale-105 transition duration-500">
        {Data.Title}
      </h3>
      {Data.Chairperson && (
        <div className="flex justify-center items-center flex-wrap p-10 mb-10 gap-8">
          {Data.Chairperson.map(
            ({ name, image, designation, socialLinks }, index) => (
              <ProfileCard
                key={index}
                name={name}
                image={image}
                designation={designation}
                socialLinks={socialLinks}
              />
            ),
          )}
        </div>
      )}
      {Data.Heads && (
        <div className="flex justify-center items-center flex-wrap p-10 mb-10 gap-8">
          {Data.Heads.map(
            ({ name, image, designation, socialLinks }, index) => (
              <ProfileCard
                key={index}
                name={name}
                image={image}
                designation={designation}
                socialLinks={socialLinks}
              />
            ),
          )}
        </div>
      )}
      {Data.Members && (
        <div className="flex justify-center items-center flex-wrap p-10 mb-10 gap-8">
          {Data.Members.map(
            ({ name, image, designation, socialLinks }, index) => (
              <ProfileCard
                key={index}
                name={name}
                image={image}
                designation={designation}
                socialLinks={socialLinks}
              />
            ),
          )}
        </div>
      )}
    </div>
  );
}

export default TeamsDesign;
