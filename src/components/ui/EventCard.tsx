"use client";

import React from "react";

import { useState } from "react";

const EventCard = ({
  events,
  onBack,
}: {
  events: {
    id: number;
    title: string;
    description: string;
    image: string;
    prize: string;
    rules: string;
  };
  onBack: () => void;
}) => {
  const [part, setpart] = useState<number>(1);
  function DescFunction() {
    setpart(1);
  }

  function RulesFunction() {
    setpart(2);
  }

  function prizeFunction() {
    setpart(3);
  }

  return (
    <div className="relative  w-3/5 md:w-1/2 mx-auto h-64  rounded-lg shadow-lg  mt-40 ">
      {/* Screen */}
      <div className="absolute inset-6 bg-lime-900 rounded-tr-2xl w-100">
        {/* Optional: Add content inside the screen */}
        <div className="text-white text-center pt-20">
          {part === 1 && <p>{events.description}</p>}
          {part === 2 && <p>{events.rules}</p>}
          {part === 3 && <p>{events.prize}</p>}
        </div>
      </div>

      {/* Top Bezel */}
      <div className="absolute top-0 left-6 w-1/2 h-6 bg-gray-400 rounded-tr-full">
        <h3 className="text-orange-950 text-xl text-center">{events.title}</h3>
      </div>

      {/* Bottom Bezel */}
      <div className="absolute bottom-0 left-6 right-6  h-8 bg-gray-400 rounded-b-2xl flex items-center">
        {/* Left Button */}
        <button
          onClick={() => {
            DescFunction();
          }}
          className="w-1/2 h-full bg-gray-500 rounded-bl-2xl border border-zinc-800 hover:scale-125"
        >
          Description
        </button>

        {/* Middle Buttons */}
        <div className="  h-full w-1/4 hover:scale-125">
          <button
            onClick={() => {
              RulesFunction();
            }}
            className="w-full h-full bg-gray-500  border border-stone-800 "
          >
            Rules
          </button>
        </div>

        {/* Right Button */}
        <button
          onClick={() => {
            prizeFunction();
          }}
          className="w-1/4 h-full hover:scale-125 bg-gray-500 rounded-br-2xl border border-stone-800"
        >
          Prize
        </button>
      </div>

      {/* Left Arrow (outside the main container) */}

      <div className="absolute -left-16 -top-1/4 transform -translate-y-1/2 w-28 h-8  bg-gray-500 rounded-sm flex items-center justify-end text-center ">
        <button
          className="mx-auto"
          onClick={() => {
            onBack();
          }}
        >
          Back
        </button>
      </div>

      {/* Right Arrow (outside the main container) */}
      <div className="absolute -right-16 -bottom-1/4 w-28 h-8 bg-gray-500 rounded-sm flex items-center justify-start">
        <button className="mx-auto">Register</button>
      </div>
    </div>
  );
};

export default EventCard;
