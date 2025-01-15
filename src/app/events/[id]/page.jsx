"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import MapDrop from "../../../../public/assets/MapDrop.png";
import { toast } from "react-toastify";
import Markdown from "react-markdown";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import axios from "axios";
import TeamRegisterModal2 from "./TeamRegisterModal2";
import toastStyle from "@/utilities/toastStyle";
import { useSession } from "next-auth/react";
import IndividualRegister from "./IndividualRegister";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAtom } from "jotai";
import { eventByIdAtom } from "../../../atoms/eventsAtom";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

export default function page() {
  const session = useSession();
  const { id } = useParams();
  const [getEventById] = useAtom(eventByIdAtom);
  const event = getEventById(id);

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
    <div className="h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full p-2 max-w-4xl translate-y-4 flex flex-col items-center gap-2 sm:gap-6 lg:gap-10">
        {/* Event Header */}
        <div className="flex  w-full p-6 justify-between items-center">
          <div
            className="flex flex-row  cursor-pointer"
            onClick={() => router.push("/events")}
          >
            <ChevronLeft />
            <div className="max-sm:hidden">BACK</div>
            <ChevronRight className="max-sm:hidden" />
          </div>
          <h1 className=" text-4xl lg:text-6xl font-primary">{event?.name}</h1>
          <div></div>
        </div>
        <div className="border w-full h-[22rem] md:h-[24rem] lg:h-[26rem] shadow-lg p-4 md:px-6 lg:px-8 shadow-primary/10 rounded-lg">
          {/* Navigation */}
          <div className="flex gap-2 h-[19%] w-full items-center justify-between py-4 overflow-x-scroll no_scrollbar">
            {event?.eventDetails.map(({ title }, idx) => (
              <div
                key={idx}
                className={`text-sm md:text-lg md:font-primary cursor-pointer ${contentIndex === idx ? "border-b-2 border-lime-400" : ""}`}
                onClick={() => setContentIndex(idx)}
              >
                {title}
              </div>
            ))}
          </div>
          <Separator />
          {/* Content Section */}
          <div className="overflow-y-scroll h-[64%] py-2">
            <Markdown>{event?.eventDetails[contentIndex]?.content}</Markdown>
          </div>
          <Separator />
          {/* Footer Section */}
          <div className="flex max-sm:text-xs  h-[15%] w-full justify-between items-center py-2 pt-4">
            <span>{event?.date}</span>
            {session?.data?.user?.id ? (
              registered ? (
                <Button variant="ghost">Registered</Button>
              ) : event?.type === "TEAM" ? (
                <TeamRegisterModal2
                  userId={session.data.user.id}
                  event={event}
                  setRegistered={setRegistered}
                />
              ) : (
                <IndividualRegister
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
            <div className="flex gap-2 items-center  ">
              <div className="w-5 h-10 flex justify-center items-center">
                <Image src={MapDrop} alt="Map" className=" object-fill" />
              </div>
              <span>{event?.venue}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
