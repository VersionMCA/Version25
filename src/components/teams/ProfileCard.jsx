import Image from "next/image";
import "./team.css";
import Teams from "@/helper/teams";

const ProfileCard = ({ name, image, socialLinks, designation }) => {
  // const {colors}=Teams;
  // const col_data=colors.color
  // const val=Math.floor(Math.random()*5+1);
  // const bg_color=col_data[val];
  const bg_color = "bg-gradient-to-r from-neutral-500 to-neutral-700";
  return (
    // <div
    //   style={{ backgroundImage: `url(${image})`,
    // backgroundSize:'cover' }}
    //   className="group rounded-lg w-[250px] h-[250px] aspect-[1/1] overflow-hidden   flex justify-center items-center flex-col relative select-none bg-[#1E1E1E] border-double hover:border-l-8 hover:border-t-8 hover:border-l-[#b7f625] hover:border-t-[#b7f625] hover:scale-105 transition-all duration-500 ease-in-out  shadow-sm shadow-[#b7f625]"
    // >
    //   <div className="bg-gradient-to-r from-lime-200 to-lime-400 p-2 sm:p-3 rounded-2xl border-2 border-black absolute bottom-3 sm:bottom-6 font-mono text-black flex justify-center flex-col items-center group-hover:-rotate-180 transition duration-500">
    //     <div className="flex flex-col items-center opacity-100 group-hover:hidden transition-opacity duration-300">
    //       <p className="font-bold text-md sm:text-xl bg-gradient-to-r from-slate-400 to-gray-600 bg-clip-text text-transparent">
    //         {name}
    //       </p>
    //       <p className="text-sm sm:text-md bg-gradient-to-r from-zinc-400 to-stone-500 bg-clip-text text-transparent">
    //         {designation}
    //       </p>
    //     </div>
    //     <div className="hidden group-hover:flex group-hover:rotate-180 flex-row items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    //       {socialLinks.github && (
    //         <a
    //           href={socialLinks.github}
    //           className="mx-5"
    //           aria-label="Github"
    //           rel="noopener noreferrer"
    //           target="_blank"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="1.5"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="feather feather-github"
    //           >
    //             <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    //           </svg>
    //         </a>
    //       )}
    //       {socialLinks.linkedin && (
    //         <a
    //           href={socialLinks.linkedin}
    //           className="mx-5"
    //           aria-label="LinkedIn"
    //           rel="noopener noreferrer"
    //           target="_blank"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="1.5"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="feather feather-linkedin"
    //           >
    //             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
    //             <rect x="2" y="9" width="4" height="12"></rect>
    //             <circle cx="4" cy="4" r="2"></circle>
    //           </svg>
    //         </a>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div
      className="outer group flex items-center justify-center transition duration-300"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      <div
        className={` w-full  p-2 sm:p-3  border-2 border-black absolute bottom-5 sm:bottom-0 font-mono text-black flex justify-center flex-col items-center transition duration-500 ${bg_color}`}
      >
        <div className="flex flex-col h-10 w-full items-center justify-center opacity-100 group-hover:hidden transition-opacity duration-500">
          <p className="font-bold text-md sm:text-xl bg-gradient-to-r from-lime-400 to-lime-600 text-white bg-clip-text text-transparent">
            {name}
          </p>
          <p className="text-sm sm:text-md bg-gradient-to-r from-lime-400 to-lime-500 text-white bg-clip-text text-transparent">
            {designation}
          </p>
        </div>
        <div className="hidden group-hover:flex flex-row items-center group-hover:width-{200px} group-hover:h-10 group-hover:w-full justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              className="mx-5 "
              aria-label="Github"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github "
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          )}

          {socialLinks.linkedin != "" && (
            <a
              href={socialLinks.linkedin}
              className="mx-5"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
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
      </div>{" "}
    </div>
  );
};

export default ProfileCard;
