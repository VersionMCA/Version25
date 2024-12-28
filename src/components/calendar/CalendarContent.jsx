"use client";
import Image from "next/image";
import velocium from "../../../public/assets/velocium.svg";

export default function CalendarContent() {
  return (
    <div className="bg-gray-900 w-full flex gap-y-4 h-full bg-opacity-50 flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-theme-lime">Calendar</h2>
      <div className="mx-auto">
        <Image src={velocium} alt="Velocium Logo" height={64} width={300} />
      </div>
      <div className="text-left h-[450px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
        <EventSection day="Sat 16th" events={D1Events} />
        <EventSection day="Sun 17th" events={D2Events} />
        <EventSection day="Mon 18th" events={D3Events} />
      </div>
    </div>
  );
}

function EventSection({ day, events }) {
  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold text-theme-lime mb-4">{day}</h3>
      <div className="space-y-4">
        {events.map((event) => (
          <EventRow
            key={event.name}
            time={event.time}
            duration={event.duration}
            name={event.name}
            location={event.location}
          />
        ))}
      </div>
    </div>
  );
}

function EventRow({ time, duration, name, location }) {
  return (
    <div className="p-4 bg-theme-lime rounded-lg shadow-md">
      <div className="flex justify-between items-center text-black text-lg font-semibold mb-2">
        <span>{time}</span>
        <span>{duration}</span>
      </div>
      <p className="text-black text-xl font-bold">{name}</p>
      <p className="text-black text-md font-medium">{location}</p>
    </div>
  );
}

const D1Events = [
  {
    time: "10:00 am - 5:00 pm",
    duration: "Day 1/3",
    name: "Saturnalia Carnival",
    location: "SBOP Lawns",
  },
  {
    time: "10:00 am - 5:00 pm",
    duration: "Day 1/3",
    name: "Gel Blaster",
    location: "GR-1",
  },
  {
    time: "10:00 am - 5:00 pm",
    duration: "Day 1/3",
    name: "Laser Tag",
    location: "NOX Room",
  },
  {
    time: "10:00 am - 5:00 pm",
    duration: "Day 1/3",
    name: "Bullet Echo (Krafton Experience Zone)",
    location: "Activity Space 2",
  },
];

const D2Events = [
  {
    time: "10:00 am - 5:00 pm",
    duration: "Day 1/3",
    name: "Saturnalia Carnival",
    location: "SBOP Lawns",
  },
  {
    time: "10:00 am - 5:00 pm",
    duration: "Day 1/3",
    name: "Gel Blaster",
    location: "GR-1",
  },
  {
    time: "10:00 am - 5:00 pm",
    duration: "Day 1/3",
    name: "Laser Tag",
    location: "NOX Room",
  },
  {
    time: "10:00 am - 5:00 pm",
    duration: "Day 1/3",
    name: "Bullet Echo (Krafton Experience Zone)",
    location: "Activity Space 2",
  },
];

const D3Events = [
  {
    time: "10:00 am - 5:00 pm",
    duration: "Day 1/3",
    name: "Saturnalia Carnival",
    location: "SBOP Lawns",
  },
  {
    time: "10:00 am - 5:00 pm",
    duration: "Day 1/3",
    name: "Gel Blaster",
    location: "GR-1",
  },
  {
    time: "10:00 am - 5:00 pm",
    duration: "Day 1/3",
    name: "Laser Tag",
    location: "NOX Room",
  },
  {
    time: "10:00 am - 5:00 pm",
    duration: "Day 1/3",
    name: "Bullet Echo (Krafton Experience Zone)",
    location: "Activity Space 2",
  },
];
