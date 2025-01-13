import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import versionLogo from "../../../public/assets/version_logo.png";
import UserAccountDropDown from "./UserAccountDropDown";
// import "./navbar.css"   working without importing

import Image from "next/image";
import { motion } from "framer-motion";
import navLinks from "./navLinks";
import { Button } from "../ui/Button";

const Navbar = ({ toggle }) => {
  const session = useSession();
  const user = session.data?.user;

  return (
    <nav className="fixed mx-auto p-2 md:px-6 top-0 z-50 flex items-center gap-2 w-full">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          damping: 10,
        }}
        className="flex w-full justify-between mx-auto bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border border-primary/20 p-2 sm:p-4 rounded-xl"
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
        <div className="flex justify-center items-center gap-1  lg:gap-2 md:text-xl lg:text-2xl">
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

          {/* Hamburger */}
          <li className="flex justify-end  max-sm:h-2 border-white text-white items-center basis-full">
            <button type="button" className="md:hidden " onClick={toggle}>
              <svg
                // className="invert"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                className="max-sm:h-8 "
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
          </li>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
