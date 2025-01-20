import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

import eventData from '../events/eventData';

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

export const dynamic = "force-dynamic";

const Page = async () => {
  let session;
  let registeredEvents = [];

 
  try {
    session = await getServerSession(authOptions);
    if (!session) {
      return <div className="p-36 text-center  ">
        <p className="border p-4 text-xl border-red-300 rounded-md text-lime-400">Please log in to view your registered events.</p></div>;
    }

    const response = await fetch(
      `${BACKEND_URL}/api/events/fetchRegisteredEvents`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: session.user.id }),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch registered events");
    }
    registeredEvents = await response.json();
  } catch (error) {
    console.error("Error fetching registered events:", error);
    const errorMessage =
      error.response?.data?.message ||
      "Unable to fetch registered events. Please try again later.";
    return <div className="p-36 text-center  ">{errorMessage}</div>;
  }

  if (registeredEvents.length === 0) {
    return <div className="p-36 text-center">You haven't registered for any events yet.</div>;
  }

  return (
    <div className="p-48 grid grid-cols-1 md:grid-cols-2 gap-4 ">
      {registeredEvents.map((event,index) => (
        <div key={index} className="border border-indigo-400 min-w-full min-h-52 rounded-md z-20 p-0 text-center flex flex-col overflow-hidden">       
            <h3 className="text-lg h-10 border-b-2 hover:bg-indigo-200 hover:text-black">{event.name}</h3>
            <p className="h-32 border  overflow-hidden p-2">{event.description}</p>
            <div className="text-right p-2 pr-5"> <button className="border p-1 rounded-md bg-red-600">Unregister</button></div>
           
          </div>
      ))}
    </div>
  );
};

export default Page;

