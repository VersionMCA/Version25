"use client";

import Slider from "react-slick";
import eventsData from "./eventData";
import { cn } from "@/lib/utils";
import Image from "next/image";
import EventImage from "public/event_images/cryptic-min.jpg";
import { useRouter } from "next/navigation";
import { useState } from "react";

function page() {
  const router = useRouter();
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const event = eventsData[activeEventIndex];

  // Custom Prev Button
  const PrevButton = ({ onClick }) => (
    <button
      className="absolute left-0 z-10 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex events-center justify-center top-1/2 hover:bg-gray-700"
      onClick={onClick}
    >
      <Image src={arrowSvg} alt="rightArrow" className="h-12" />
    </button>
  );

  // Custom Next Button
  const NextButton = ({ onClick }) => (
    <button
      className="absolute right-0 z-10 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex events-center justify-center top-1/2 hover:bg-gray-700"
      onClick={onClick}
    >
      <Image src={arrowSvg} alt="rightArrow" className="h-12" />
    </button>
  );

  // Bottom Slider Settings
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    autoplay: false,
    speed: 500,
    focusOnSelect: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-black text-white rounded-lg overflow-hidden">
      {/* Main Content */}
      <div
        className="relative min-h-[300px] sm:min-h-[400px] p-4 sm:p-6 md:p-8 bg-cover bg-center"
        // style={{ backgroundImage: `url(${EventImage}) `}} //not working fix later
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 max-w-3xl mx-auto">
          {event.date && (
            <div className="text-base sm:text-lg mb-3 sm:mb-4 font-mono">
              {event.date}
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 font-mono break-words">
            {event.title}
          </h1>
          <p key={event.id} className="text-base sm:text-lg mb-2">
            {event.description}
          </p>
          <div className="text-cyan-400 text-lg sm:text-xl mt-4 sm:mt-6">
            {event.status}
          </div>
          <button
            onClick={() => {
              router.push(`/events/${event.id}`);
            }}
          >
            Get Details
          </button>
        </div>
      </div>

      {/* Bottom Slider */}
      <div className="relative bg-transparent p-4">
        <Slider {...settings}>
          {eventsData.map((event, index) => (
            <button
              key={event.id}
              onClick={() => setActiveEventIndex(index)}
              className={cn(
                "relative w-1/4 aspect-square p-1",
                activeEventIndex === index
                  ? "z-10"
                  : "opacity-50 hover:opacity-75",
              )}
            >
              <div
                className={cn(
                  "w-full h-full rounded-lg overflow-hidden transition-all duration-300",
                  activeEventIndex === index
                    ? "ring-2 ring-cyan-400 scale-105"
                    : "",
                )}
              >
                <div className="absolute text-white inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Image
                  alt={event.name}
                  src={EventImage}
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

export default page;
