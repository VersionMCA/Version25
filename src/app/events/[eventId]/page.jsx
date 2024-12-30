"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import MapDrop from "../../../../public/assets/MapDrop.png";
import Markdown from "react-markdown";
import { useRouter } from "next/navigation";

export default function page() {
  const { eventId } = useParams();
  const router = useRouter();
  console.log(eventId);
  //   const event = getEventDetails(eventId);
  const [index, setIndex] = useState(0);
  const event = {
    id: "E001",
    name: "CodeSprint",
    description: "Test your coding skills in this exciting hackathon.",
    date: "21st February 2025",
    venue: "Auditorium Hall A",
    image: "/event_images/cryptic-min.jpg",
    type: "Individual",
    background_image: "/public/event_images/cryptic-min.jpg",
    thumbnail_image: "/public/event_images/cryptic-min.jpg",
    details: [
      {
        title: "Description",
        content: `
### Event Overview  
CodeSprint is a premier coding competition designed for individuals passionate about problem-solving. This event provides challenging problems that will test your coding skills, logical reasoning, and efficiency.

- **Participants:** Individual  
- **Duration:** 3 Hours  
- **Level:** Intermediate to Advanced  
        `,
      },
      {
        title: "Judging Criteria",
        content: `
### How You Will Be Judged  
1. **Correctness:** Accuracy of the solution.  
2. **Efficiency:** Time and space complexity of the code.  
3. **Creativity:** Innovative approaches to solving problems.  

The participant with the highest score and least runtime wins.
        `,
      },
      {
        title: "Rules",
        content: `
### Rules to Follow  
- No external help or pre-written code is allowed.  
- Internet access is restricted during the event.  
- Solutions must be submitted within the allotted time.  
        `,
      },
      {
        title: "Contact",
        content: `
### Need Assistance?  
Email: **codesprint@versionfest.com**  
Phone: **+91 9876543210**  
Reach out for queries regarding registration or problem formats.
        `,
      },
    ],
  };

  return (
    <div className={` flex text-white justify-center items-center`}>
      <div className={`flex flex-col w-full h-auto`}>
        {/* Header Section */}
        <div className={`flex flex-col items-center w-1/3 p-7`}>
          <h1 className="font-ROG text-xs lg:text-lg">{event.name}</h1>
          <button onClick={() => router.push("/events")}>BACK</button>
          <Image
            src={event.image}
            height={200}
            width={300}
            alt="Event"
            className={`rounded-xl`}
          />
        </div>

        {/* Info Section */}
        <div className={`flex justify-between w-full `}>
          <div className="flex flex-col items-center w-1/2">
            <p className="font-Orbitron text-sm">{event.date}</p>
            <p className="font-Orbitron text-sm">{event.venue}</p>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <p className="font-Orbitron text-md font-black">{event.price}</p>
            <p className="font-Orbitron text-sm">Prize Money</p>
          </div>
        </div>

        {/* Details Section */}
        <div className={`flex flex-col`}>
          <div className={`flex flex-col w-full p-4 `}>
            <div className="flex justify-around items-center w-full">
              {event.details.map(({ title }, idx) => (
                <div
                  key={idx}
                  className={`font-Orbitron text-xs cursor-pointer ${
                    index === idx ? "border-b" : ""
                  }`}
                  onClick={() => setIndex(idx)}
                >
                  {title}
                </div>
              ))}
            </div>
            <div className={`w-full p-3`}>
              <Markdown>
                {event.details[index]?.content || "No content available"}
              </Markdown>
            </div>
          </div>

          {/* Footer Section */}
          <div className={`flex justify-center items-center h-1/6 `}>
            <div className="flex items-center font-Orbitron text-sm">
              <span>{event.date}</span>
              <span className="ml-2 flex items-center">
                <Image src={MapDrop} alt="Venue" width={13} height={13} />
                <span className="ml-2">{event.venue}</span>
              </span>
            </div>
            <button>Register Now</button>
            <div className="font-Orbitron text-sm">
              PRIZE MONEY : {event.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
