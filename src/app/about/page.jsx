"use client";

import React, { useEffect, useState } from "react";
import "./page.css";
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
        <header className=" header bg-[#171616] shadow-sm  rounded-md p-7 m-0 orb select-none ">
          <h1 className="text-center text-3xl font-bold text-[#C6FF00]">
            ABOUT US
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
        <main className="main applyBorder flex-grow p-8 bg-gradient-to-t from-[#323a26] via-[#202419] to-[#171616] h-max lg:h-72  font-extrabold rounded-xl">
          {/* Version Tab */}
          <div
            className={`tabs select-none ${
              activeTab === "version" ? "fade-in" : "fade-out"
            } ${animateTab === "version" ? "visible" : "hidden"}`}
          >
            <ul className="text-xs sm:text-sm lg:text-lg  select-none font-mina opacity-80">
              <li>
                Version 2025 is proud to present its forward-looking theme,
                "Velocium: Empower Ideas, Minimize Code." Velocium, a fusion of
                "velocity" and "optimum," symbolizes the pursuit of speed and
                efficiency in software development through low-code innovation
                and enhanced developer productivity.
              </li>
              <li>
                The theme highlights the transformative power of minimizing
                traditional coding hurdles while maximizing creativity and
                execution. It embodies the essence of building smarter, faster,
                and more efficient solutions, enabling developers to focus on
                bringing ideas to life rather than being bogged down by complex
                code. Velocium celebrates the future of development where
                simplicity meets innovation, empowering individuals to create
                impactful solutions with ease.
              </li>
              <li>
                Prepare to embark on a journey into the realm of Low-Code
                Development and Developer Productivity at Version 2025. Discover
                how this cutting-edge approach is redefining the way we build,
                innovate, and solve challenges in the digital age.
              </li>
            </ul>
          </div>

          {/* Velocium Tab */}
          <div
            className={`tabs select-none ${
              activeTab === "velocium" ? "fade-in" : "fade-out"
            } ${animateTab === "velocium" ? "visible" : "hidden"}`}
          >
            <ul className="text-xs sm:text-sm lg:text-lg  select-none font-mina opacity-80">
              <li>
                Version 2025 is proud to present its forward-looking theme,
                "Velocium: Empower Ideas, Minimize Code." Velocium, a fusion of
                "velocity" and "optimum," symbolizes the pursuit of speed and
                efficiency in software development through low-code innovation
                and enhanced developer productivity.
              </li>
              <li>
                The theme highlights the transformative power of minimizing
                traditional coding hurdles while maximizing creativity and
                execution. It embodies the essence of building smarter, faster,
                and more efficient solutions, enabling developers to focus on
                bringing ideas to life rather than being bogged down by complex
                code. Velocium celebrates the future of development where
                simplicity meets innovation, empowering individuals to create
                impactful solutions with ease.
              </li>
              <li>
                Prepare to embark on a journey into the realm of Low-Code
                Development and Developer Productivity at Version 2025. Discover
                how this cutting-edge approach is redefining the way we build,
                innovate, and solve challenges in the digital age.
              </li>
            </ul>
          </div>
        </main>
        <div className="bottom bg-[#323a26]"></div>
      </div>
    </>
  );
}
