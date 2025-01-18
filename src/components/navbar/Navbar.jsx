"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import versionLogo from "../../../public/assets/version_logo_light.png";
import UserAccountDropDown from "./UserAccountDropDown";
// import "./navbar.css"   working without importing

import NavbarMobile from "@/components/navbar/NavbarMobile";
import Image from "next/image";
import { motion } from "framer-motion";
import navLinks from "./navLinks";
import { Button } from "../ui/Button";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { eventsAtom } from "../../atoms/eventsAtom";

const Navbar = () => {
  const session = useSession();
  const user = session.data?.user;
  const [, setEvents] = useAtom(eventsAtom);
  const navBar = useRef();

  const fetchEvents = async () => {
    try {
      const res = await fetch("/api/events");
      if (!res.ok) throw new Error("Failed to fetch events");
      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch events.");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <nav
      className="sticky mx-auto top-0 z-50 flex items-center gap-2 w-full"
      ref={navBar}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          damping: 10,
        }}
        className="flex w-full justify-between mx-auto bg-black shadow-lg shadow-neutral-600/5 backdrop-blur-lg p-2 sm:p-4 rounded-xl"
      >
        <Link
          href={"/"}
          className="relative cursor-pointer max-sm:w-[145px] max-sm:h-[34px]  w-[170px] h-[40px] overflow-hidden"
        >
          <Image
            src={versionLogo}
            fill={true}
            className="object-contain"
            alt="Logo"
          />
        </Link>
        <div className="flex justify-center text-theme-cream items-center gap-1  lg:gap-2 md:text-xl lg:text-2xl">
          {navLinks.map(({ name, link }) => {
            return (
              <li
                key={name}
                className="mx-3 lg:mx-4 pixie  xl:mx-8  hidden md:block"
              >
                <Link href={link}>
                  <p className="transition-all codedText tempp   ease-in-out">
                    {name}
                  </p>
                </Link>
              </li>
            );
          })}
          {!user ? (
            <Button
              className="font-semibold max-sm:h-8 max-sm:text-xs bg-gradient-to-b from-theme-light_lime to-theme-lime tracking-tight"
              onClick={async () => {
                await signIn();
              }}
            >
              LOGIN{" "}
            </Button>
          ) : (
            ""
          )}
          <UserAccountDropDown />
          <NavbarMobile navBar={navBar} />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
