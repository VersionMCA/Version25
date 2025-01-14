"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/textarea";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { eventsAtom } from "../../../../../atoms/eventsAtom";
import { z } from "zod";

const eventSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  date: z.string().optional(),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
  venue: z.string().optional(),
  type: z.string().min(1, "Event type is required"),
  minTeamSize: z.preprocess(
    (val) => parseInt(val, 10),
    z.number().min(1, "Min team size must be at least 1"),
  ),
  maxTeamSize: z.preprocess(
    (val) => parseInt(val, 10),
    z.number().min(1, "Max team size must be at least 1"),
  ),
  image: z.string().url("Invalid URL format").optional(),
  eventDetails: z.array(
    z.object({
      title: z.string().min(1, "Title is required"),
      content: z.string().min(1, "Content is required (in Markdown format)"),
    }),
  ),
});

export default function Page() {
  const { id } = useParams();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useAtom(eventsAtom);
  const [event, setEvent] = useState(null);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      eventDetails: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "eventDetails",
  });

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/events");
      if (!res.ok) throw new Error("Failed to fetch events");
      const data = await res.json();
      setEvents(data);
      const selectedEvent = data.find((event) => event.id == parseInt(id));
      setEvent(selectedEvent);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch events.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (events.length === 0) {
      fetchEvents();
    } else {
      const selectedEvent = events.find((event) => event.id == parseInt(id));
      setEvent(selectedEvent);
    }
  }, [events, id]);

  useEffect(() => {
    if (event) {
      setValue("name", event.name);
      setValue("description", event.description);
      setValue("date", event.date);
      setValue("startTime", event.startTime);
      setValue("endTime", event.endTime);
      setValue("venue", event.venue);
      setValue("type", event.type);
      setValue("minTeamSize", event.minTeamSize);
      setValue("maxTeamSize", event.maxTeamSize);
      setValue("image", event.image);
      setValue("eventDetails", event.eventDetails);
    }
  }, [event, setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/admin/events/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to update event");

      alert("Event updated successfully!");
      router.push("/events");
    } catch (error) {
      console.error(error);
      alert("Error updating event!");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <p>Loading event details...</p>;
  }

  if (!event) {
    return <p>Event not found!</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Update Event</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Event Name */}
        <div>
          <Label htmlFor="name">Event Name</Label>
          <Input
            id="name"
            {...register("name")}
            className="w-full mt-1"
            placeholder="Enter event name"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="description">Event Description</Label>
          <Textarea
            id="description"
            {...register("description")}
            className="w-full mt-1"
            placeholder="Enter event description"
          />
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="date">Event Date</Label>
            <Input
              id="date"
              type="date"
              {...register("date")}
              className="w-full mt-1"
            />
          </div>
          <div>
            <Label htmlFor="startTime">Start Time</Label>
            <Input
              id="startTime"
              type="time"
              {...register("startTime")}
              className="w-full mt-1"
            />
          </div>
          <div>
            <Label htmlFor="endTime">End Time</Label>
            <Input
              id="endTime"
              type="time"
              {...register("endTime")}
              className="w-full mt-1"
            />
          </div>
        </div>

        {/* Venue */}
        <div>
          <Label htmlFor="venue">Venue</Label>
          <Input
            id="venue"
            {...register("venue")}
            className="w-full mt-1"
            placeholder="Enter venue"
          />
        </div>

        {/* Event Type */}
        <div>
          <Label htmlFor="type">Event Type</Label>
          <Input
            id="type"
            {...register("type")}
            className="w-full mt-1"
            placeholder="Enter event type"
          />
          {errors.type && (
            <span className="text-red-500">{errors.type.message}</span>
          )}
        </div>

        {/* Team Size */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="minTeamSize">Min Team Size</Label>
            <Input
              id="minTeamSize"
              type="number"
              {...register("minTeamSize")}
              className="w-full mt-1"
              placeholder="Enter minimum team size"
            />
            {errors.minTeamSize && (
              <span className="text-red-500">{errors.minTeamSize.message}</span>
            )}
          </div>
          <div>
            <Label htmlFor="maxTeamSize">Max Team Size</Label>
            <Input
              id="maxTeamSize"
              type="number"
              {...register("maxTeamSize")}
              className="w-full mt-1"
              placeholder="Enter maximum team size"
            />
            {errors.maxTeamSize && (
              <span className="text-red-500">{errors.maxTeamSize.message}</span>
            )}
          </div>
        </div>

        {/* Image URL */}
        <div>
          <Label htmlFor="image">Event Image URL</Label>
          <Input
            id="image"
            type="url"
            {...register("image")}
            className="w-full mt-1"
            placeholder="Enter image URL"
          />
        </div>

        {/* Event Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">
            Event Details (Markdown Supported)
          </h2>
          {fields.map((item, index) => (
            <div key={item.id} className="space-y-2">
              <div>
                <Label htmlFor={`eventDetails[${index}].title`}>
                  Detail Title
                </Label>
                <Input
                  id={`eventDetails[${index}].title`}
                  {...register(`eventDetails.${index}.title`)}
                  className="w-full mt-1"
                  placeholder="Enter detail title"
                />
                {errors.eventDetails?.[index]?.title && (
                  <span className="text-red-500">
                    {errors.eventDetails[index].title.message}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor={`eventDetails[${index}].content`}>
                  Detail Content (Markdown)
                </Label>
                <Textarea
                  id={`eventDetails[${index}].content`}
                  {...register(`eventDetails.${index}.content`)}
                  className="w-full mt-1"
                  placeholder="Enter content in markdown format"
                />
                {errors.eventDetails?.[index]?.content && (
                  <span className="text-red-500">
                    {errors.eventDetails[index].content.message}
                  </span>
                )}
              </div>
              <Button
                type="button"
                variant="destructive"
                onClick={() => remove(index)}
              >
                Remove Detail
              </Button>
            </div>
          ))}
          <Button
            type="button"
            onClick={() => append({ title: "", content: "" })}
          >
            Add Detail
          </Button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Updating Event..." : "Update Event"}
          </Button>
        </div>
      </form>
    </div>
  );
}
