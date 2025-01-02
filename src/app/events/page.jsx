"use client";
import React, { useEffect, useRef, useState } from "react";
import EventThumbnail from "./EventThumbnail";
import eventsData from "./eventData";
import arrowSvg from "@public/assets/carouselArrow.svg";
import EventCard from "./EventCard";
import Image from "next/image";

function Page() {
  const [newItemActive, setNewItemActive] = useState(0);
  const thumbnailRef = useRef(null);

  useEffect(() => {
    const showSlider = (nextItem) => {
      const items = document.querySelectorAll(
        `.event__slider .allEvents .eventCard__item`,
      );
      const thumbnails = document.querySelectorAll(
        `.thumbnail .thumbnail__item`,
      );

      const itemActiveOld = document.querySelector(
        `.event__slider .allEvents .eventCard__item.active`,
      );
      const thumbnailActiveOld = document.querySelector(
        `.thumbnail .thumbnail__item.active`,
      );

      // Remove active class from old active item
      if (itemActiveOld) itemActiveOld.classList.remove("active");
      if (thumbnailActiveOld) thumbnailActiveOld.classList.remove("active");

      // Add active class to new active item
      if (items[nextItem]) items[nextItem].classList.add("active");
      if (thumbnails[nextItem]) thumbnails[nextItem].classList.add("active");
    };

    showSlider(newItemActive);
  }, [newItemActive]);

  const moveLeft = () => {
    const scrollAmount = thumbnailRef.current.clientWidth / 3; // Scroll by a fraction of the container width
    thumbnailRef.current.scrollBy({
      top: 0,
      left: -scrollAmount,
      behavior: "smooth",
    });

    setNewItemActive((prev) => (prev > 0 ? prev - 1 : eventsData.length - 1));
  };

  const moveRight = () => {
    const scrollAmount = thumbnailRef.current.clientWidth / 3; // Scroll by a fraction of the container width
    thumbnailRef.current.scrollBy({
      top: 0,
      left: scrollAmount,
      behavior: "smooth",
    });

    setNewItemActive((prev) => (prev < eventsData.length - 1 ? prev + 1 : 0));
  };

  return (
    <div
      className="overflow-hidden h-[100vh] w-[100vw] flex items-center justify-center"
      style={{
        backgroundImage: `url(${eventsData[newItemActive].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply", // Overlay the image with a color
        backgroundColor: "rgba(0, 0, 0, 0.5)", // The color to overlay
      }}
    >
      {/* Event Card  */}
      <EventCard event={eventsData[newItemActive]} />
      {/* Bottom Slider */}
      <div className="fixed bottom-0 z-10 flex justify-center items-center">
        {/* Left Arrow Button */}
        <div
          className="arrowContainer left cursor-pointer w-24 rotate-180"
          aria-hidden="true"
          onClick={moveLeft}
        >
          <Image src={arrowSvg} alt="leftArrow" className="h-12" />
        </div>
        {/* Thumbnails Container */}
        <div
          className="thumbnail flex justify-center items-center gap-3 h-64 box-border overflow-auto font-primary no-scrollbar"
          ref={thumbnailRef}
          style={{ width: "40vw" }}
        >
          {eventsData.map((event, index) => {
            return (
              <EventThumbnail
                key={event.id}
                event={event}
                isActive={index === newItemActive}
                setNewItemActive={() => setNewItemActive(index)}
              />
            );
          })}
        </div>

        {/* Right Arrow Button */}
        <div
          className="arrowContainer right cursor-pointer w-24"
          aria-hidden="true"
          onClick={moveRight}
        >
          <Image src={arrowSvg} alt="rightArrow" className="h-12" />
        </div>
      </div>
    </div>
  );
}

export default Page;
