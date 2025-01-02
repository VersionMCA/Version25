"use client";
import React from "react";
import { Button } from "../../components/ui/Button";
import { useRouter } from "next/navigation";

function EventCard({ event }) {
  const { name, date, description, image } = event;
  const router = useRouter();

  function handleClick() {
    router.push(`/events/${name}`);
  }

  return (
    <div className="relative -top-32 flex flex-col md:w-[80%] gap-y-6 mx-auto  justify-center">
      <div className="">{date}</div>
      <div className="text-6xl ">{name}</div>
      <div className="">{description}</div>
      <div className="btn-container font-primary font-light mt-4 md:mt-8">
        <Button className="btn-register" onClick={handleClick}>
          See Details
        </Button>
      </div>
    </div>
  );
}

export default EventCard;
