"use client";

import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  eventsAtom,
  removeEventAtom,
  removeTodoAtom,
} from "../../../atoms/eventsAtom";
import toastStyle from "@/utilities/toastStyle";
import axios from "axios";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

export default function EventsPage() {
  const [events, setEvents] = useAtom(eventsAtom);

  return (
    <div className="container mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">All Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {events.length === 0 && (
        <p className="text-center text-gray-600 mt-6">No events found.</p>
      )}
    </div>
  );
}

const EventCard = ({ event }) => {
  const [deleting, setDeleting] = useState(false);
  const [exporting, setExporing] = useState(false);
  const [, removeEvent] = useAtom(removeEventAtom);

  // Delete event by ID
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this event?")) {
      setDeleting(true);
      try {
        const res = await fetch(`/api/admin/events/${id}`, {
          method: "DELETE",
        });
        removeEvent(id);
        toast.success("Event deleted successfully!", toastStyle);
      } catch (error) {
        toast.error("Error deleting event.", toastStyle);
      } finally {
        setDeleting(false);
      }
    }
  };

  const handleExport = async (id) => {
    setExporing(true);
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/admin/export/registrations`,
        {
          eventId: id,
        },
      );
      toast.success("Exported successfully!");
    } catch (error) {
      toast.error("Error exporting data.");
    } finally {
      setExporing(false);
    }
  };

  return (
    <Card className="shadow-lg text-foreground border rounded-lg">
      <CardHeader>
        <CardTitle>{event.name}</CardTitle>
        <CardDescription>
          {event.description || "No description provided."}
        </CardDescription>
      </CardHeader>

      <div className="p-4">
        <p className="text-sm text-gray-500">
          <strong>Date:</strong>{" "}
          {event.date ? new Date(event.date).toLocaleDateString() : "N/A"}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Venue:</strong> {event.venue || "N/A"}
        </p>
      </div>

      <CardFooter className="flex gap-4">
        <Link href={`/admin/events/edit/${event.id}`} passHref>
          <Button variant="outline" className="w-full">
            Edit
          </Button>
        </Link>
        <Button
          variant="destructive"
          onClick={() => handleDelete(event.id)}
          className="w-full"
          disabled={deleting}
        >
          {deleting ? "Deleting..." : "Delete"}
        </Button>
        <Button
          onClick={() => handleExport(event.id)}
          className="w-full"
          disabled={exporting}
        >
          {exporting ? "Exporting..." : "Export"}
        </Button>
      </CardFooter>
    </Card>
  );
};
