"use client";
import React from "react";
import Social from "@/components/social/Social";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div className="w-[100vw] h-[100vh] flex z-20  flex-col justify-center items-center mt-40">
      <div className="text-5xl md:text-9xl font-autowide opacity-90">
        VELOCIUM
      </div>
      <div className="text-xl md:text-6xl font-iceland opacity-90">
        EMPOWER IDEAS MINIMIZE CODE
      </div>
      <Social />
    </div>
  );
};

export default Home;
