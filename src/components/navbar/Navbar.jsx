import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import versionLogo from "../../../public/assets/logo2.png";
import UserAccountDropDown from "./UserAccountDropDown";
// import "./navbar.css"   working without importing

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import navLinks from "./navLinks";

const Navbar = ({ toggle }) => {
  const session = useSession();
  const user = session.data?.user;

  return (
    <nav className="sticky  mx-auto  wrapper  top-0 z-50 flex items-center gap-2 py-6 w-full">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          damping: 10,
        }}
        className="flex w-full justify-between mx-auto bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border border-primary/20 p-6 rounded-2xl"
      >
        <Link href={"/"} className="flex items-center cursor-pointer">
          <Image src={versionLogo} alt="Logo" width={230} height={600} />
        </Link>
        <div className="flex justify-center items-center gap-2">
          {navLinks.map(({ name, link }) => {
            return (
              <li
                key={name}
                className="mx-4 pixie md:text-2xl xl:mx-8  hidden md:block"
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
              size={"lg"}
              onClick={async () => {
                await signIn();
              }}
            >
              Login
            </Button>
          ) : (
            ""
          )}
          <UserAccountDropDown />

          {/* Hamburger */}
          <li className="flex justify-end border-white text-white items-center basis-full">
            <button type="button" className="md:hidden " onClick={toggle}>
              <svg
                // className="invert"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
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
