"use client";
import Image from "next/image";
import React, { useState } from "react";
import MapDrop from "../../../public/assets/MapDrop.png";
import Markdown from "react-markdown";
import EventImage from "public/event_images/cryptic-min.jpg";

const EventCard = ({ event, setShowEvent }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className={` flex text-white justify-center items-center`}>
      <div className={`flex flex-col w-full h-auto`}>
        {/* Header Section */}
        <div className={`flex flex-col items-center w-1/3 p-7`}>
          <h1 className="font-ROG text-xs lg:text-lg">{event.name}</h1>
          <button onClick={() => setShowEvent(false)}>BACK</button>
          <Image
            src={EventImage}
            height={200}
            width={300}
            alt="Event"
            className={`rounded-xl`}
          />
        </div>

        {/* Info Section */}
        <div className={`flex justify-between w-full `}>
          <div className="flex flex-col items-center w-1/2">
            <p className="font-Orbitron text-sm">{event.date}</p>
            <p className="font-Orbitron text-sm">{event.venue}</p>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <p className="font-Orbitron text-md font-black">{event.price}</p>
            <p className="font-Orbitron text-sm">Prize Money</p>
          </div>
        </div>

        {/* Details Section */}
        <div className={`flex flex-col`}>
          <div className={`flex flex-col w-full p-4 `}>
            <div className="flex justify-around items-center w-full">
              {event.details.map(({ title }, idx) => (
                <div
                  key={idx}
                  className={`font-Orbitron text-xs cursor-pointer ${
                    index === idx ? "border-b" : ""
                  }`}
                  onClick={() => setIndex(idx)}
                >
                  {title}
                </div>
              ))}
            </div>
            <div className={`w-full p-3`}>
              <Markdown>
                {event.details[index]?.content || "No content available"}
              </Markdown>
            </div>
          </div>

          {/* Footer Section */}
          <div className={`flex justify-center items-center h-1/6 `}>
            <div className="flex items-center font-Orbitron text-sm">
              <span>{event.date}</span>
              <span className="ml-2 flex items-center">
                <Image src={MapDrop} alt="Venue" width={13} height={13} />
                <span className="ml-2">{event.venue}</span>
              </span>
            </div>
            <button>Register Now</button>
            <div className="font-Orbitron text-sm">
              PRIZE MONEY : {event.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
