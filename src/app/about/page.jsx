"use client";

import React, { useEffect, useState } from "react";
import "./page.css";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
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
    <div className="absolute w-screen min-h-screen overflow-x-hidden">
      <div
        className="w-full p-6 md:mt-24 lg:mt-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl"
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

        <div className="top bg-gradient-to-r from-[#C6FF00] via-[#1b450095] to-[#C6FF00]">
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
        <header className="header bg-[#171616] shadow-sm  rounded-md p-7 orb ">
          <h1 className="text-center text-3xl font-bold text-[#C6FF00]">
            ABOUT US
          </h1>
        </header>

        {/* Tabs */}
        <div className="applyBorder flex justify-between orb">
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
        <main className="main applyBorder flex-grow p-8 bg-gradient-to-t from-[#323a26] via-[#202419] to-[#171616] h-max lg:h-72 rounded-xl">
          {/* Version Tab */}
          <div
            className={`tabs select-none ${
              activeTab === "version" ? "fade-in" : "fade-out"
            } ${animateTab === "version" ? "visible" : "hidden"}`}
          >
            <ul className="text-xs sm:text-sm lg:text-md xl:text-lg  select-none font-mina opacity-80">
              <li>
                <li>
                  Embarking on its 32nd edition, Version 2025, the annual All
                  India MCA meet hosted by the students of NIT Trichy, stands as
                  the pinnacle event for MCA students nationwide. Since 1991,
                  Version has been a platform for showcasing talent, fostering
                  healthy competition, and promoting creativity.
                </li>
                <li>
                  Beyond a mere contest, Version is an immersive experience
                  featuring coding challenges, hackathons, workshops, and
                  interactions with industry experts. As the star event for MCA
                  at NIT Trichy, it continues to be eagerly anticipated, drawing
                  participants from across India.
                </li>
                <li>
                  Version 2025 promises to uphold its legacy of excellence,
                  offering participants a unique opportunity to push boundaries,
                  forge connections, and leave an indelible mark on the
                  landscape of MCA events. Get ready to celebrate innovation,
                  talent, and camaraderie at the grand stage of Version 2025.
                </li>
              </li>
            </ul>
          </div>

          {/* Velocium Tab */}
          <div
            className={`tabs select-none ${
              activeTab === "velocium" ? "fade-in" : "fade-out"
            } ${animateTab === "velocium" ? "visible" : "hidden"}`}
          >
            <ul className="text-xs sm:text-sm lg:text-md xl:text-lg select-none font-mina opacity-80">
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

      <Footer />
    </div>
  );
}
