"use client";

import React, { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("version");

  const tabs = [
    { id: "version", label: "Version" },
    { id: "velocium", label: "Velocium" },
  ];

  return (
    <div className="min-h-screen bg-[#171616] text-gray-300 flex flex-col w-4/5 mx-auto border border-[#171616] rounded-xl">
      {/* Header */}
      <header className="py-4 bg-[#171616] shadow-md border rounded-md">
        <h1 className="text-center text-3xl font-bold text-[#C6FF00]">
          Version 2025
        </h1>
      </header>

      {/* Tabs */}
      <div className="flex justify-between border-b border-[#171616]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-grow py-2 text-lg font-semibold text-center ${
              activeTab === tab.id
                ? "border-b-4 border-[#d4ff41] text-white bg-[#171616]"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <main className="flex-grow p-6 bg-[#171616]">
        {activeTab === "version" && (
          <div>
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg">
              Embarking on its 31st edition, Version 2025, the annual All India
              MCA meet hosted by the students of NIT Trichy, stands as the
              pinnacle event for MCA students nationwide. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Delectus nam culpa placeat
              dolorem, error fugit blanditiis animi quis! Molestiae qui maxime
              ipsa magnam, maiores ullam fugiat sapiente illum! Ratione, nisi.
            </p>
          </div>
        )}
        {activeTab === "velocium" && (
          <div>
            <h2 className="text-4xl font-bold mb-4">Events</h2>
            <p className="text-lg">
              Join us for exciting coding challenges, hackathons, and workshops
              with industry experts! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Enim error, fuga quibusdam facilis provident
              nesciunt, beatae necessitatibus consequatur placeat officiis
              cupiditate rem, consectetur iure ratione consequuntur corporis
              facere similique pariatur.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#0] py-4 text-center fixed bottom-0 left-0 w-full">
        <p className="text-sm">
          Made With Love 💖 By Version Web Team | © 2025 Version
        </p>
      </footer>
    </div>
  );
}
