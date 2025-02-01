import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { eventsAtom } from "@/atoms/eventsAtom";
import { format } from "date-fns";
import { convertToModalFormat } from "@/utilities/formatTime";

export default function CalendarContent() {
  const [eventData] = useAtom(eventsAtom);
  const [sortedEvents, setSortedEvents] = useState([]);

  useEffect(() => {
    function groupAndSortEvents(events) {
      return (
        Object.entries(
          events.reduce((acc, event) => {
            const eventDate = event.date; // Use the date field to group
            if (!acc[eventDate]) {
              acc[eventDate] = []; // Initialize an array for this date
            }
            acc[eventDate].push(event); // Add the event to the respective date's array
            return acc;
          }, {}),
        )
          // Sort groups by date
          .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
          // Sort events within each group by start time
          .map(([_, eventList]) =>
            eventList.sort(
              (a, b) => new Date(a.startTime) - new Date(b.startTime),
            ),
          )
      );
    }
    setSortedEvents(groupAndSortEvents(eventData));
  }, []);

  return (
    <div className=" w-full  flex gap-y-4 h-full bg-opacity-50 flex-col items-center justify-center">
      <div className="font-audiowide text-4xl md:text-5xl lg:text-6xl text-theme-cream">
        VELOCIUM
      </div>
      <div className="text-left h-[450px] w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
        {sortedEvents.map((events, index) => {
          return <EventSection key={index} day="Sat 16th" events={events} />;
        })}
      </div>
    </div>
  );
}

function EventSection({ day, events }) {
  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold text-theme-lime font-aldrich mb-4">
        {format(new Date(events[0].date), "EEE, MMM d")}
      </h3>
      <div className="space-y-4">
        {events.map((event) => (
          <EventRow key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

function EventRow({ event }) {
  const { startTime, endTime, name, venue } = event;

  // the  Format the start and end time
  const formattedStartTime = convertToModalFormat(startTime);
  const formattedEndTime = convertToModalFormat(endTime);

  return (
    <div className="p-4 bg-theme-lime rounded-lg font-aldrich  shadow-md">
      <div className="flex justify-between items-center text-black text-lg mb-2">
        <span className="">{`${formattedStartTime} - ${formattedEndTime}`}</span>
        <span>{}</span>
      </div>
      <p className="text-black text-2xl mb-1">{name}</p>
      <p className="text-black text-md font-medium text-end">{venue}</p>
    </div>
  );
}
