"use client";
import NavMobile from "./NavMobile.jsx";
import logo from "../../../public/assets/logo2.png"
import NavDesktop from "./NavDesktop.jsx";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export function Navbar({ bgWhite, noBgBlack ,session }) {
  const loading = false;
  const navBar = useRef();

  return (
    <div
      className={`absolute top-0 left-0 right-0 z-50 md:bg-black md:bg-opacity-5`}
    >
      <nav
        className="container flex items-center justify-between p-4 max-md:p-2 max-sm:p-1 text-base md:text-lg uppercase min-w-full"
        ref={navBar}
      >
        <Link href="/" className=" mx-6 max-md:mx-4 max-sm:mx-0 h-12 max-md:h-10 max-sm:h-8 w-44 relative flex justify-center items-center">
            <Image src={logo} alt="logo" fill objectFit="contain"/>
        </Link>

        {!loading && (
          <>
            <NavMobile navBar={navBar} session={session} />
            <NavDesktop bgWhite={bgWhite} session={session} />
          </>
        )}
      </nav>
    </div>
  );
}
