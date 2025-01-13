"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialIcons = () => {
  const icons = [
    {
      id: 1,
      href: "https://www.facebook.com",
      icon: <FaFacebookF />,
      label: "Facebook",
    },
    {
      id: 2,
      href: "https://www.twitter.com",
      icon: <FaTwitter />,
      label: "Twitter",
    },
    {
      id: 3,
      href: "https://www.instagram.com",
      icon: <FaInstagram />,
      label: "Instagram",
    },
    {
      id: 4,
      href: "https://www.linkedin.com",
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
    },
  ];

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-4 z-50 flex flex-col space-y-4">
      {icons.map(({ id, href, icon, label }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative flex items-center justify-center w-10 h-10  text-white rounded-full shadow-lg transition-transform transform hover:scale-110 "
        >
          {icon}
          <span className="absolute right-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-3 py-1 rounded-md transition-opacity">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
