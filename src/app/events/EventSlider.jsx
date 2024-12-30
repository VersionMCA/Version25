"use client";

import Slider from "react-slick";
import events from "./eventData";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import EventImage from "public/event_images/cryptic-min.jpg";
import { useState } from "react";

function EventSlider({ changeEvent, setShowEvent }) {
  // Custom Prev Button
  const [event, setEvent] = useState(events[0]);
  const [selectIndex, setSelectIndex] = useState(0);
  const PrevButton = ({ onClick }) => (
    <button
      className="absolute left-0 z-10 transform -translate-y-1/2  text-white rounded-full w-10 h-10 flex events-center justify-center top-1/2 "
      onClick={onClick}
    >
      <Image
        src="/assets/leftArrow.png"
        alt="leftArrow"
        className="h-12 w-12 hover:scale-125"
        width={12}
        height={12}
      />
    </button>
  );

  // Custom Next Button
  const NextButton = ({ onClick }) => (
    <button
      className="absolute right-0 z-10 transform -translate-y-1/2  text-white rounded-full w-10 h-10 flex events-center justify-center top-1/2 "
      onClick={onClick}
    >
      <Image
        src="/assets/rightArrow.png"
        alt="rightArrow"
        className="h-12 w-12 hover:scale-125"
        width={12}
        height={12}
      />
    </button>
  );

  // Bottom Slider Settings
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 500,
    focusOnSelect: true,

    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    afterChange: (current) => {
      // Perform an operation for the middle slide
      const middleIndex = current + Math.floor(3 / 2); // Calculate the middle index
      const eventMid = events[middleIndex % events.length]; // Handle wrapping
      setEvent(eventMid);
      setSelectIndex(middleIndex % events.length);

      // Example: Trigger an operation
    },
  };

  return (
    <div className="relative w-full h-screen max-w-8xl mx-auto bg-black text-white rounded-lg   ">
      {/* Main Content */}

      <div
        className="absolute inset-0 min-h-[300px] sm:min-h-[400px] p-4 sm:p-6 md:p-8 bg-cover bg-center  z-0  "
        style={{
          backgroundImage: `url(${event.background_image}) `,
          opacity: 0.3,
        }} //not working fix later
      ></div>
      {/* <div className="absolute inset-0 bg-black bg-opacity-60" /> */}
      <div
        className="absolute z-10 max-w-3xl left-1/4 p-4 w-100 mx-auto "
        style={{ color: "#BFF205" }}
      >
        <h2 className="text-4xl ">
          <strong>{event.name}</strong>
        </h2>
        <p className="text-xl mt-4">{event.description}</p>
        {event.date && (
          <h4 className="text-base text- sm:text-lg mt-10 sm:mb-4 font-mono">
            {event.date}
          </h4>
        )}

        <button
          onClick={() => {
            setShowEvent(true);
            changeEvent(selectIndex);
          }}
          className="text-blue-800 text-2xl"
        >
          <strong>Get Details</strong>
        </button>
      </div>
      {/* </div> */}

      {/* Bottom Slider */}

      <div className="absolute bottom-0 z-20 p-4 max-w-2xl left-1/2 transform -translate-x-1/2   ">
        <Slider {...settings} className="relative mx-auto">
          {events.map((Event, index) => (
            <button
              key={Event.id}
              onClick={() => {
                changeEvent(index);
                setShowEvent(true);
              }}
              className={cn(
                "relative w-1/4 aspect-square p-1",
                selectIndex === index ? "z-30" : "hover:opacity-75",
              )}
            >
              <div
                className={cn(
                  "w-full h-full rounded-lg overflow-hidden transition-all duration-300",
                  selectIndex === index ? " border-2 border-cyan-800" : "",
                )}
              >
                <div className="absolute text-white inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Image
                  alt={Event.name}
                  src={Event.background_image}
                  width={150} // Adjusted for better aspect ratio fitting
                  height={150} // Adjusted to maintain aspect ratio
                  className="w-full h-full object-cover text-white "
                  loading="lazy" // Lazy load images for better performance
                />
                <div className="absolute bottom-1 left-1 right-1 text-[10px] sm:text-xs md:text-sm font-medium text-center line-clamp-2">
                  {event.title}
                </div>
              </div>
            </button>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default EventSlider;
