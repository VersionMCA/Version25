"use client";
import Image from "next/image";
import React, { useState } from "react";
import MapDrop from "../../../public/assets/MapDrop.png";
import Markdown from "react-markdown";
import EventImage from "public/event_images/cryptic-min.jpg";

const EventCard = ({ event, setShowEvent }) => {
  const [index, setIndex] = useState(0);
  const [content, setContent] = useState(event.details[0].content);

  return (
    <div
      style={{
        backgroundImage: "url('/event_images/EventCardBg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className={` flex text-white justify-center items-center -mt-28 h-screen relative `}
    >
      <div className={` w-full h-full mt-48  `}>
        {/* Header Section */}
        <div className={` ml-16 p-0`}>
          <button onClick={() => setShowEvent(false)}>
            <img
              src="/event_images/back (1).png"
              width={100}
              height={100}
            ></img>
          </button>
        </div>
        <h1 className="font-ROG text-xl md:text-3xl -mt-8 text-center text-theme-light_lime">
          {event.name}
        </h1>

        <div className="  w-3/5 h-1/2 mx-auto sm:mt-3 bg-theme-blue_light bg-opacity-85 rounded-t-3xl">
          <div className="flex w-full h-5/6 ">
            <div className="w-0  md:w-1/5 my-auto p-3">
              <Image
                src={event.background_image}
                height={250}
                width={250}
                alt="Event"
                className={`rounded-xl  mx-auto hidden md:block`}
              />
            </div>
            <div
              className={`relative z-0  scrollbar scrollbar-thumb-theme-lime w-full p-2 md:pl-10 pt-16 overflow-y-scroll`}
            >
              <Markdown>{content}</Markdown>
              <p className=" absolute bottom-0 right-0 z-10 flex space-3 to-blue-800 ">
                {" "}
                <Image src={MapDrop} alt="Venue" width={13} height={13} />
                {event.venue}
              </p>
            </div>
          </div>
          <div className="w-full h-1/6 flex  p-4 justify-stretch text-theme-lime border-b-4 border-b-orange-200 bg-theme-blue_dark">
            <div className="w-1/3">
              <p>{event.date}</p>
            </div>
            <div className="mt-0 w-1/3 text-center">
              <button className="bg-theme-blue_dark border-b-4 border-b-orange-200 p-4 rounded-b-3xl hover:scale-150">
                Register
              </button>
            </div>
            <div className="w-1/3 overflow-hidden">
              <p>
                <strong>Prize Money</strong>{" "}
                {event.price ? event.price : "surprise for you"}
              </p>
            </div>
          </div>
        </div>
        <div></div>
        {/* tags Section */}

        <div className="absolute bottom-0  -mb-7 md:mb-0 md:h-20 flex justify-around items-center w-full bg-theme-lime text-theme-blue_dark text-xl">
          {event.details.map(({ title, content }, idx) => (
            <div
              key={idx}
              className={`font-Orbitron text-xs cursor-pointer ${
                index === idx ? "border-b-4 border-theme-blue_dark" : ""
              }`}
              onClick={() => {
                setIndex(idx);
                setContent(content ? content : "No content available");
              }}
            >
              <h3 className="text-2xl">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
