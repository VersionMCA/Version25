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
    <div className="h-screen relative w-full  mt-0 overflow-clip">
      {showEvent ? (
        <EventCard
          event={events[selectedEventIndex]}
          setShowEvent={setShowEvent}
        />
      ) : (
        <EventSlider changeEvent={changeEvent} setShowEvent={setShowEvent} />
      )}
    </div>
  );
}

export default Events;
