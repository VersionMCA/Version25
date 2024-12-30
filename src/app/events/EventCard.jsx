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
      <div className={`w-full h-full mt-48  `}>
        {/* Header Section */}
        <div className={`ml-16 p-7`}>
          <button onClick={() => setShowEvent(false)}>BACK</button>
        </div>
        <h1 className="font-ROG text-4xl lg:text-lg -mt-8 text-center">
          {event.name}
        </h1>

        <div className="  w-3/4 h-1/2 mx-auto sm:mt-7 bg-sky-600 bg-opacity-85 rounded-2xl">
          <div className="flex w-full h-5/6 ">
            <div className="  w-1/5 my-auto p-3">
              <Image
                src={EventImage}
                height={200}
                width={200}
                alt="Event"
                className={`rounded-xl  mx-auto hidden md:block`}
              />
            </div>
            <div className={`w-full pl-16 pt-16 overflow-hidden`}>
              <Markdown>{content}</Markdown>
            </div>
          </div>
          <div className="w-full h-1/6 flex p-4 justify-between">
            <div>
              <p>{event.date}</p>
            </div>
            <div>
              <p className="flex space-3">
                {" "}
                <Image src={MapDrop} alt="Venue" width={13} height={13} />
                {event.venue}
              </p>
            </div>
            <div>
              <p>Prize Money {event.price}</p>
            </div>
          </div>
        </div>

        {/* tags Section */}

        <div className="absolute bottom-0  -mb-7 md:mb-0 md:h-20 flex justify-around items-center w-full">
          {event.details.map(({ title, content }, idx) => (
            <div
              key={idx}
              className={`font-Orbitron text-xs cursor-pointer ${
                index === idx ? "border-b-4 border-lime-400" : ""
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
