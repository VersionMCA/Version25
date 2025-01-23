"use client";
import React from "react";
import { Instagram } from "lucide-react";
import { FaYoutube, FaLinkedin, FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
// import MapModal from "../map/MapModal";
import CalendarModal from "../calendar/CalendarModal";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const icons = [
  {
    id: 2,
    href: "https://www.instagram.com/version_nit_trichy",
    icon: <Instagram className="h-6 w-6" />,
    label: "Instagram",
  },
  {
    id: 3,
    href: "https://www.linkedin.com/company/version-mca-nit-trichy",
    icon: <FaLinkedinIn className="h-6 w-6" />,
    label: "LinkedIn",
  },
  {
    id: 4,
    href: "https://www.youtube.com/@VersionNITTrichy",
    icon: <FaYoutube className="h-6 w-6" />,
    label: "Youtube",
  },
];

const SocialIcons = () => {
  return (
    <div className="fixed z-50 top-1/2 -translate-y-1/2  right-0 p-6  flex flex-col gap-y-6">
      {icons.map(({ id, href, icon, label }) => (
        <Link
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="transition-transform transform hover:scale-110 group "
        >
          {icon}
          <span className="absolute right-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs px-3 py-1 rounded-md transition-opacity">
            {label}
          </span>
        </Link>
      ))}
      {/* <Separator /> */}
      {/* <MapModal /> */}
      <CalendarModal />
    </div>
  );
};

export default SocialIcons;
