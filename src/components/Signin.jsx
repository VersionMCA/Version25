"use client";

import {  useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import Link from "next/link";
import logo from "../../public/assets/logo2.png"; 
import Image from "next/image";
import CyberButton from "./ui/CyberButton";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      // display error message to user
      toast.error("Something went wrong with your login.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8 mt-40">
            <Link
              href="/"
              className="mx-6 max-md:mx-4 max-sm:mx-0 h-20 max-md:h-16 max-sm:h-12 w-80 relative flex justify-center items-center"
            >
              <Image src={logo} alt="logo" fill objectFit="contain" />
            </Link>
            <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-theme-cream">
              Sign in to your account
            </h2>
          </div>

          <CyberButton text="Google" onClick={loginWithGoogle} > </CyberButton>
        </div>
      </div>
    </>
  );
};

export default Page;
