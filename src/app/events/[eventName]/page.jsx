"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import MapDrop from "../../../../public/assets/MapDrop.png";
import { toast } from "react-toastify";
import Markdown from "react-markdown";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import eventsData from "../eventData";
import axios from "axios";
import TeamRegisterModal from "./TeamRegisterModal";
import toastStyle from "@/utilities/toastStyle";
import { useSession } from "next-auth/react";
import IndividualRegister from "./IndividualRegister";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3000";

export default function page() {
  const session = useSession();
  const { eventName } = useParams();
  const event_parsed = eventName.replaceAll("%20", " ");
  const event = eventsData.find((event) => event.name === event_parsed);
  const [contentIndex, setContentIndex] = useState(0);
  const router = useRouter();
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    async function eventRegisterCheck() {
      try {
        const response = await axios.post(
          `${BACKEND_URL}/api/events/eventRegisterCheck`,
          {
            userId: session?.data?.user.id,
            eventId: event?.id,
          },
        );
        if (response.data.message === "YES") setRegistered(true);
      } catch (e) {
        toast.error("Error fetching events registration status", toastStyle);
      }
    }
    if (session?.data?.user?.id) {
      eventRegisterCheck();
    }
  }, []);

  return (
    <div
      className={`h-screen w-screen overflow-hidden relative flex justify-center items-center`}
    >
      <div className={`border p-6 flex flex-col gap-y-8 rounded-xl`}>
        {/* Header Section */}
        <div className=" flex flex-row justify-between items-center">
          <button onClick={() => router.push("/events")}>BACK</button>
          <div className="text-6xl text-center">{event?.name}</div>
          <div></div>
        </div>
        {/* Content Section */}
        <div className=" border h-60 w-[1000px] overflow-y-scroll p-2">
          <div>
            <Markdown>{event?.details[contentIndex].content}</Markdown>
          </div>
        </div>
        {/* Footer Section  */}
        <div className=" flex flex-row justify-between items-center ">
          <div>{event?.date}</div>
          <div className="flex flex-row gap-2">
            <Image src={MapDrop} alt="Map" />
            <span>{event?.venue}</span>
          </div>
          {session?.data?.user?.id ? (
            registered ? (
              <Button variant="ghost">Registered</Button>
            ) : event?.type === "Team" ? (
              <TeamRegisterModal
                userId={session?.data?.user?.id}
                event={event}
                setRegistered={setRegistered}
              />
            ) : (
              <IndividualRegister
                userId={session?.data?.user?.id} //not required
                event={event}
                setRegistered={setRegistered}
              />
            )
          ) : (
            <Button
              onClick={() =>
                toast.error("Login to register for the event", toastStyle)
              }
            >
              Register
            </Button>
          )}
        </div>
      </div>
      {/* Footer Navigation */}
      <div className="flex flex-row gap-10 w-full absolute bottom-0 justify-around bg-primary/5 p-8 rounded-2xl border border-primary/10 shadow-xl shadow-primary/5 min-w-[30vw]">
        {event?.details.map(({ title, content }, idx) => (
          <div
            key={idx}
            className={`font-Orbitron text-xs cursor-pointer ${
              contentIndex === idx ? "border-b-4 border-lime-400" : ""
            }`}
            onClick={() => {
              setContentIndex(idx);
            }}
          >
            <div className="text-xl">{title.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
