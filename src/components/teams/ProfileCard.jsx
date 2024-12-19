import Chirag from "@public/images/Chirag.jpg"
import Image from "next/image";
const ProfileCard = ({ name, image, socialLinks }) => {
  console.log(image);
  return (
<div 
  className="rounded-lg aspect-[1/1] overflow-hidden xl:w-1/4 w-full flex justify-center items-center flex-col relative select-none bg-[#1E1E1E] border-double hover:border-l-8 hover:border-t-8 hover:border-l-[#b7f625] hover:border-t-[#b7f625] transition-all ease-in-out sm:w-1/2 md:w-1/3 lg:w-1/4"
>

      <Image
        src={Chirag}
        alt={`Image ${name}`}
        className="w-full h-full object-cover"
      />
      <div className="group bg-[#A5F524] p-2 sm:p-3 rounded-2xl border-2 border-black absolute bottom-3 sm:bottom-6 font-mono text-black flex justify-center flex-col items-center ">
        <div className="flex justify-center flex-col items-center inset-0 bg-opacity-60 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
        <p className="font-bold text-md sm:text-xl ">{name}</p>
        <p className="text-sm sm:text-md">Head</p>
        </div>
        <div className=" relative w-full flex justify-center pt-2 pb-2 inset-0 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-linear">
          {socialLinks.github && (
            <a href={socialLinks.github} className="mx-5" aria-label="Github">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#718096"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              className="mx-5"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#718096"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
