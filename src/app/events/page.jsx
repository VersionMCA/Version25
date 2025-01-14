"use client";
import React, { useEffect, useRef } from "react";
import eventData from "./eventData";
import "./page.scss";
import EventCard from "./EventCard";
import EventThumbnail from "./EventThumbnail";
import axios from "axios";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3000";

function Events() {
  const [newItemActive, setNewItemActive] = React.useState(0);

  const Thumbnail = useRef(null);

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

      // remove active class from old active item
      if (itemActiveOld !== null) itemActiveOld.classList.remove(`active`);
      if (thumbnailActiveOld !== null)
        thumbnailActiveOld.classList.remove(`active`);

      // add active class to new active item
      items[nextItem].classList.add(`active`);
      thumbnails[nextItem].classList.add(`active`);
    };

    showSlider(newItemActive);
  }, [newItemActive]);

  useEffect(() => {
    const fetchAllEvents = async () => {
      const res = await axios.get(`${BACKEND_URL}/api/events/fetchEvents`);
      console.log("event ", res.data);
    };
    fetchAllEvents();
  }, []);

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
            return (
              <EventCard
                key={event.id}
                id={event.id}
                content={event.description}
                imgLink={event.image}
                name={event.name}
                date={event.date}
                teamSize={event?.teamSize}
              />
            );
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
