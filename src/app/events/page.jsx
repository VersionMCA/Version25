"use client";
import React from "react";
import { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import events from "./eventData";
import EventCard from "./EventCard";
import EventSlider from "./EventSlider";

function Events() {
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const [showEvent, setShowEvent] = useState(false);

  //Function to change the main content to the clicked event
  function changeEvent(ind) {
    setSelectedEventIndex(ind);
  }

  return (
    <div className="h-full relative w-full mt-40">
      {showEvent ? (
        <EventCard
          event={events[selectedEventIndex]}
          setShowEvent={setShowEvent}
        />
      ) : (
        <div className="h-screen overflow-hidden mt-44">
          <EventSlider
            selectedEventIndex={selectedEventIndex}
            changeEvent={changeEvent}
            event={events[selectedEventIndex]}
            setShowEvent={setShowEvent}
          />
        </div>
      )}
    </div>
  );
}

export default Events;
