import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import axios from "axios";
import React from "react";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3000";

const Page = async () => {
  let session;
  let registeredEvents = [];

  try {
    session = await getServerSession(authOptions);
    if (!session) {
      return <div>Please log in to view your registered events.</div>;
    }

    const response = await axios.post(
      `${BACKEND_URL}/api/events/fetchRegisteredEvents`,
      {
        userId: session.user.id,
      },
    );
    console.log(response.data);
    registeredEvents = response.data;
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
