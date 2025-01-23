"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { Link } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/Button";
import { FaGoogle } from "react-icons/fa";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

export const dynamic = "force-dynamic";

const Page = () => {
  const { data: session } = useSession();

  const [registeredEvents, setRegisteredEvents] = useState(null);

  const convertToGoogleCalendarFormat = (isoString) => {
    const date = new Date(isoString);

    // Extract components
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const seconds = String(date.getUTCSeconds()).padStart(2, "0");

    return `${year}${month}${day}T${hours}${minutes}${seconds}`;
  };

  const handleAddToCalendar = (event) => {
    const title = `Version 25 - ${event.name}`;
    const details = event.description || "Version 25 Event";
    const location = event.venue || "N/A";
    const startDate = convertToGoogleCalendarFormat(
      event.startTime || new Date().toISOString(),
    );
    const endDate = convertToGoogleCalendarFormat(
      event.endTime || new Date().toISOString(),
    );

    // Construct the Google Calendar URL
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title,
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      details,
    )}&location=${encodeURIComponent(location)}`;

    // Open the URL in a new tab
    window.open(calendarUrl, "_blank", "noopener,noreferrer");
  };

  const handleUnregister = async (event) => {
    // write call here using event and user
    const user = session?.user;
  };

  useEffect(() => {
    const fetchMyEvents = async () => {
      if (!session?.user) return;

      try {
        const res = await axios.post(
          `${BACKEND_URL}/api/events/fetchRegisteredEvents`,
          { userId: session.user.id },
        );
        setRegisteredEvents((prev) => res.data);
      } catch (error) {
        console.log("Fetch my events error", error);
        toast.error("Unable to fetch your events");
      }
    };
    fetchMyEvents();
  }, [session]);

  return (
    <>
      <div className="p-48 ">
        {!session?.user && (
          <div className="p-36 text-center">
            Login to see your registered events
          </div>
        )}
        {registeredEvents?.length === 0 && (
          <div className="p-36 text-center">
            You haven't registered for any events yet.
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {registeredEvents?.map((event, index) => (
            <Card
              key={index}
              className="shadow-lg text-foreground border rounded-lg"
            >
              <CardHeader>
                <CardTitle>{event.name}</CardTitle>
                <CardDescription>
                  {event.description || "No description provided."}
                </CardDescription>
              </CardHeader>

              <div className="p-4">
                <p className="text-sm text-gray-500">
                  <strong>Date:</strong>{" "}
                  {event.date
                    ? new Date(event.date).toLocaleDateString()
                    : "N/A"}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Venue:</strong> {event.venue || "N/A"}
                </p>
              </div>

              <CardFooter className="flex gap-4">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={(e) => handleAddToCalendar(event)}
                >
                  Add to Calendar <FaGoogle size={8} />
                </Button>

                {event.type === "TEAM" && (
                  <Button
                    variant="destructive"
                    className="w-full"
                    onClick={(e) => handleUnregister(event)}
                  >
                    Unregister
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
