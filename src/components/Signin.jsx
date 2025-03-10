"use client";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Separator } from "./ui/separator";
import versionLogo from "@public/assets/VersionWhite2.png";

const Signin = () => {
  const session = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirected = useRef(false);
  useEffect(() => {
    if (redirected.current === false && session.data?.user) {
      const redirectUrl =
        localStorage.getItem("loginRedirectUrl") ||
        searchParams.get("redirectUrl");
      localStorage.removeItem("loginRedirectUrl");
      router.replace(redirectUrl || "/");
      redirected.current = true;
    }
  }, [redirected, session, router]);

  return (
    <div className="flex flex-center h-screen">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          damping: 10,
        }}
        className="flex flex-col m-1 gap-12 justify-between bg-black/60 p-8 rounded-2xl border border-primary/10 shadow-xl shadow-primary/5 min-w-[30vw]"
      >
        <div className="flex flex-col gap-12">
          <div className="flex flex-col text-center">
            <h2 className="font-semibold text-3xl md:text-4xl tracking-tighter">
              Welcome to{" "}
              <span className="font-bold bg-gradient-to-b from-theme-light_lime to-theme-lime bg-clip-text text-transparent tracking-tighter">
                Version'25
              </span>
            </h2>
            <p className="text-primary/75 font-medium tracking-tighter text-lg md:text-xl">
              Log in to register for events!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div
              className="w-full flex gap-2 p-4 font-medium md:text-lg rounded-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-gradient-to-b from-theme-light_lime to-theme-lime text-theme-black justify-center items-center"
              onClick={async () => {
                await signIn("google");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                fill="currentColor"
                className="size-6 md:size-8 text-theme-black"
              >
                <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
              </svg>
              Continue with Google
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <Separator className="w-full my-2" />
          <Link
            href={"/"}
            className="relative w-[340px] h-[80px] cursor-pointer overflow-hidden"
          >
            <Image
              src={versionLogo}
              fill={true}
              className="object-contain"
              alt="Logo"
            />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Signin;
