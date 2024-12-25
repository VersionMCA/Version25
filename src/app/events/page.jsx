'use client';
import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import InsertEvents from "./InsertEvents";

const Page = () => {
  const [eventList, setEventList] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  useEffect(() => {

    const fetchEvents = async () => {
      try {
        const res = await fetch(`/api/events/fetchEvents`, {
          cache: 'no-store',
        });
        const data = await res.json();
        setEventList(data);
        console.log("Fetched Events:", data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();

    const fetchRegisteredEvents = async () => {
      try {
        const res = await fetch(`/api/events/fetchRegisteredEvents`, {
          cache: 'no-store',
        });
        const data = await res.json();
        setRegisteredEvents(data.map((event) => event.eventId));
        console.log("Registered Events:", data);
      } catch (error) {
        console.error("Error fetching registered events:", error);
      }
    };

    fetchRegisteredEvents();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center mt-[200px] gap-5">
      <h1 className="w-full content-center">Welcome to the events page</h1>
      {eventList.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          isRegistered={registeredEvents.includes(event.id)}
        />
      ))}
      <InsertEvents />
    </div>
  );
};

export default Page;
