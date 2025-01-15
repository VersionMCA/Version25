"use client";
import React, { useEffect, useRef } from "react";
import "./page.scss";
import EventCard from "./EventCard";
import EventThumbnail from "./EventThumbnail";
import { useAtom } from "jotai";
import { eventsAtom } from "../../atoms/eventsAtom";

function Events() {
  const [newItemActive, setNewItemActive] = React.useState(0);
  const [eventData] = useAtom(eventsAtom);

  const Thumbnail = useRef(null);

  useEffect(() => {
    const showSlider = (nextItem) => {
      const items = document.querySelectorAll(
        `.event__slider .allEvents .eventCard__item`,
      );
      console.log("items", items.length);
      const thumbnails = document.querySelectorAll(
        `.thumbnail .thumbnail__item`,
      );
      console.log("thumbnails", thumbnails.length);

      const itemActiveOld = document.querySelector(
        `.event__slider .allEvents .eventCard__item.active`,
      );
      console.log("itemActiveOld", itemActiveOld);

      const thumbnailActiveOld = document.querySelector(
        `.thumbnail .thumbnail__item.active`,
      );
      console.log("thumbnailActiveOld", thumbnailActiveOld);

      // remove active class from old active item
      if (itemActiveOld) itemActiveOld.classList.remove(`active`);
      if (thumbnailActiveOld) thumbnailActiveOld.classList.remove(`active`);

      // add active class to new active item
      if (nextItem < items.length) items[nextItem].classList.add(`active`);
      if (nextItem < thumbnails.length)
        thumbnails[nextItem].classList.add(`active`);
    };

    showSlider(newItemActive);
  }, [newItemActive]);

  function moveLeft() {
    const scrollAmount = Thumbnail.current.clientWidth;
    Thumbnail.current.scrollBy({
      top: 0,
      left: -scrollAmount - 15,
      behavior: "smooth",
    });
  }

  function moveRight() {
    const scrollAmount = Thumbnail.current.clientWidth;
    Thumbnail.current.scrollBy({
      top: 0,
      left: scrollAmount + 15,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div className="event__slider font-secondary">
        <div className="allEvents">
          {eventData.map((event) => {
            return <EventCard key={event.id} event={event} />;
          })}
        </div>
        <div className="thumbnailContainer">
          <div
            className="arrowContainer left"
            aria-hidden="true"
            onClick={moveLeft}
          >
            <img
              src="/assets/carouselArrow.svg"
              alt="leftArrow"
              className="h-12"
            />
          </div>
          <div className="thumbnail font-primary no-scrollbar" ref={Thumbnail}>
            {eventData.map((event, index) => {
              return (
                <EventThumbnail
                  setNewItemActive={setNewItemActive}
                  key={index}
                  index={index}
                  imgLink={event.image}
                  name={event.name}
                />
              );
            })}
          </div>
          <div
            className="arrowContainer right"
            aria-hidden="true"
            onClick={moveRight}
          >
            <img
              src="/assets/carouselArrow.svg"
              alt="rightArrow"
              className="h-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
