"use client";

import React from "react";
import routes from "./NavRoutes";
import ScrambleText from "./ScrambleText";
import Link from "next/link";
import { signOut } from "next-auth/react";
import CyberButton from "../ui/CyberButton";

export default function NavDesktop({ bgWhite,session }) {
    const user = session?.user;
  ScrambleText();

  return (
    <ul className="hidden lg:flex lg:items-center pr-5 gap-16">
      {routes.map((route) => (
        <li key={route.id} className="w-32 text-center">
          {route.title === "Login" && user ? (
            <span
              className={`flex justify-center cursor-pointer ${
                bgWhite ? "text-black" : "text-offWhite"
              } gap-1 transition-all codedText`}
              onClick={()=>signOut()}
              role="button"
            >
              
            </span>
          ) : (
            <Link
              href={route.href}
              className={`flex justify-center ${
                bgWhite ? "text-black" : "text-offWhite"
              } gap-1 transition-all codedText`}
            >
              {route.title}
            </Link>
          )}
        </li>
      ))}
      <Link href="/signin">
        <CyberButton text="REGISTER" />
      </Link>
    </ul>
  );
}
