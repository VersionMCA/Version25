"use client";

import React, { useEffect, useState } from "react";
import "./page.css";
import ShootingStars from "../../components/ui/ShootingStars";
import Image from "next/image";
export default function About() {
  const [activeTab, setActiveTab] = useState("version");
  const [animateTab, setAnimateTab] = useState(activeTab);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimateTab(activeTab), 500);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  const tabs = [
    { id: "version", label: "Version" },
    { id: "velocium", label: "Velocium" },
  ];

  return (
    <>
      <ShootingStars />
      <div
        className=" md:pt-0 sm:pt-[10%] h-max min-w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:mt-[2.5%] sm:mt-[3%] rounded-xl"
        id="final"
      >
        <div className="hand ">
          <Image
            src="../../assets/hand.svg"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>

        <div className=" top sm:mt-0 mt-[20%] bg-gradient-to-r from-[#C6FF00] via-[#1b450095] to-[#C6FF00]">
          <div className="top2">
            <Image
              src="../../assets/astronaut.svg"
              alt="Logo"
              id="astro"
              width={100}
              height={100}
              className=" w-64 xl:w-72"
            />
          </div>
        </div>
        {/* Header */}
        <header className=" header bg-[#171616] shadow-md  rounded-md p-7 m-0 orb select-none ">
          <h1 className="text-center text-3xl font-bold text-[#C6FF00]">
            VERSION 2025
          </h1>
        </header>

        {/* Tabs */}
        <div className="applyBorder flex justify-between border-b border-[#171616] orb">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-grow py-2 text-lg font-semibold bg-[#171616] p-2 text-center transition-all ease-in-out ${
                activeTab === tab.id
                  ? "border-b-4 border-[#d4ff41] text-white active_btn"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <main className="main applyBorder flex-grow p-8 bg-gradient-to-t from-[#323a26] via-[#202419] to-[#171616] h-max lg:h-72 doto font-extrabold rounded-xl">
          {/* Version Tab */}
          <div
            className={`tabs select-none ${
              activeTab === "version" ? "fade-in" : "fade-out"
            } ${animateTab === "version" ? "visible" : "hidden"}`}
          >
            <h2 className="text-3xl font-bold mb-4 select-none">About Us</h2>
            <p className="text-md md:text-lg lg:text-lg select-none">
              Embarking on its 31st edition, Version 2025, the annual All India
              MCA meet hosted by the students of NIT Trichy, stands as the
              pinnacle event for MCA students nationwide. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Delectus nam culpa placeat
              dolorem, error fugit blanditiis animi quis! Molestiae qui maxime
              ipsa magnam, maiores ullam fugiat sapiente illum! Ratione, nisi.
            </p>
          </div>

          {/* Velocium Tab */}
          <div
            className={`tabs select-none ${
              activeTab === "velocium" ? "fade-in" : "fade-out"
            } ${animateTab === "velocium" ? "visible" : "hidden"}`}
          >
            <h2 className="text-3xl font-bold mb-4 select-none">Events</h2>
            <p className="text-md md:text-lg lg:text-lg select-none">
              Join us for exciting coding challenges, hackathons, and workshops
              with industry experts! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Enim error, fuga quibusdam facilis provident
              nesciunt, beatae necessitatibus consequatur placeat officiis
              cupiditate rem, consectetur iure ratione consequuntur corporis
              facere similique pariatur.
            </p>
          </div>
        </main>
        <div className="bottom bg-[#323a26]"></div>
      </div>
    </>
  );
}
