"use client";
import React from "react";

import { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import events from "../../data/event-data";
import EventCard from "../../components/ui/EventCard";
import { Meteors } from "../../components/ui/meteors";
function Events() {
  const [selectedEvent, setSelectedEvent] = useState<number>(1);
  const [showRotation, setshowRotation] = useState<boolean>(false);

  function ClickEvent(id: number) {
    setSelectedEvent(id);
    setshowRotation(true);
  }

  const BackClick = () => {
    setshowRotation(false);
  };

  return (
    <div className="h-full relative w-full    ">
      {/* <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />  */}
      {/* <Boxes /> */}
      {showRotation ? (
        <EventCard events={events[selectedEvent - 1]} onBack={BackClick} />
      ) : (
        <div className="h-screen overflow-hidden   mt-32">
          <EventMoving onclick={ClickEvent} />
        </div>
      )}
    </div>
  );
}

export default Events;

function EventMoving({ onclick }: { onclick: (id: number) => void }) {
  const PrevButton = ({ onClick }: { onClick?: () => void }) => (
    <button
      className="absolute left-0 z-10 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center top-1/2 hover:bg-gray-700"
      onClick={onClick}
    >
      <ChevronLeftIcon className="w-6 h-6" />
    </button>
  );

  // Custom Next Button
  const NextButton = ({ onClick }: { onClick?: () => void }) => (
    <button
      className="absolute right-0 z-10 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center top-1/2 hover:bg-gray-700"
      onClick={onClick}
    >
      <ChevronRightIcon className="w-6 h-6" />
    </button>
  );

  const settings = {
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    focusOnSelect: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };
  return (
    <div className="h-40 mt-7">
      <Slider {...settings}>
        {events.map((event, idx) => (
          <div
            className="p-9  text-yellow-400 w-48 h-72  bg-slate-800  rounded-2xl shadow-lg transform transition-all hover:scale-105"
            key={idx}
            role="button"
            onClick={() => {
              onclick(event.id);
            }}
          >
            <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
            <p className="">{event.description}</p>
            <Meteors number={10} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
