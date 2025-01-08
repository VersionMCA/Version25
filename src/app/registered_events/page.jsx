import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

export const dynamic = "force-dynamic";

const Page = async () => {
  let session;
  let registeredEvents = [];

  try {
    session = await getServerSession(authOptions);
    if (!session) {
      return <div>Please log in to view your registered events.</div>;
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
    return <div>{errorMessage}</div>;
  }

  if (registeredEvents.length === 0) {
    return <div>You haven't registered for any events yet.</div>;
  }

  return (
    <div>
      {registeredEvents.map((event) => (
        <div key={event}>{event}</div>
      ))}
    </div>
  );
};

export default Page;
