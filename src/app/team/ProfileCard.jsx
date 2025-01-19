import React from "react";
import "./member.css";
import FaculyMessage from "./FaculyMessageModal";

const colors = [
  "#6BBDBA",
  "#FFD601",
  "#01B9FF",
  "#01FFFF",
  "#4BC343",
  "#1D70D8",
  "#0A3C64",
  "#420420",
  "#551533",
  "#4E7300",
  "#0AE098",
  "#8A6F4C",
  "#B70300",
  "#FFA500",
];

const ProfileCard2 = ({ person }) => {
  const { name, image, designation, message, socialLinks } = person;

  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="batch-2025 member-card z-20" data-astro-cid-hu6ywz6e>
      <div
        className="member-container max-h-[290px] w-48 md:max-h-[340px] md:w-56"
        data-astro-cid-6qtsqqpf
      >
        <div
          style={{ backgroundColor: color }}
          className="row-start-3 row-end-4 col-start-2 col-end-3 z-10"
          data-astro-cid-6qtsqqpf
        ></div>
        <div
          className="col-start-1 col-end-3 row-start-1 row-end-3 w-full"
          data-astro-cid-6qtsqqpf
        >
          <div className="image-container" data-astro-cid-6qtsqqpf>
            <div
              className="col-start-1 col-end-3 row-start-1 row-end-3 object-fill"
              data-astro-cid-6qtsqqpf
            >
              <img src={image} alt={name} data-astro-cid-6qtsqqpf />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: color }}
          className="row-start-2 row-end-3 col-start-1 col-end-2"
          data-astro-cid-6qtsqqpf
        ></div>
        <div
          className="z-30 col-start-1 col-end-3 row-start-3 row-end-5"
          data-astro-cid-6qtsqqpf
        >
          <div
            className="flex flex-col items-center justify-center mt-2 md:mt-5"
            data-astro-cid-6qtsqqpf
          >
            <p
              className="font-bold text-center line-clamp-2 md:text-xl text-md"
              data-astro-cid-6qtsqqpf
            >
              {name}
            </p>
            {designation && (
              <p
                className="font-bold text-center line-clamp-2 md:text-sm text-xs"
                data-astro-cid-6qtsqqpf
              >
                {designation}
              </p>
            )}

            <div
              className="flex flex-row items-center justify-center space-x-2 py-2 md:py-4"
              data-astro-cid-6qtsqqpf
            >
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                  data-astro-cid-6qtsqqpf
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github size-6 md:size-8"
                    data-astro-cid-6qtsqqpf
                  >
                    <title>{`${name}'s GitHub`}</title>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </a>
              )}
              {socialLinks.message && (
                <FaculyMessage
                  designation={designation}
                  message={socialLinks.message}
                />
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                  data-astro-cid-6qtsqqpf
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin size-6 md:size-8"
                    data-astro-cid-6qtsqqpf
                  >
                    <title>{`${name}'s LinkedIn`}</title>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(${color} 20%, transparent 90%)`,
            filter: "saturate(100%) brightness(50%)",
          }}
          className="row-start-3 row-end-5 col-start-1 col-end-3 bg-[#1E1E1E00] bg-image-noise -z-10"
          data-astro-cid-6qtsqqpf
        ></div>
      </div>
    </div>
  );
};

export default ProfileCard2;
