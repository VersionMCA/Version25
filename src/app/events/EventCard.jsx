/* eslint-disable no-nested-ternary */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./EventCard.scss";
import formatDate from "../../utilities/formatDate";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

function EventCard({ event }) {
  const { id, name, date, description, image } = event;
  const router = useRouter();

  const todaysDate = new Date();
  const eventDate = new Date(date);
  eventDate.setHours(23);
  eventDate.setMinutes(59);

  return (
    <div className="eventCard__item">
      {/* <LazyLoadImage src={image} alt={name} /> */}
      <div className="content  max-sm:translate-y-14">
        <p className="font-primary content__date">{formatDate(date)}</p>
        <h2 className="font-primary content__name">{name}</h2>
        <div className=" font-mina content__info">{description}</div>
        <Button
          onClick={() => router.push(`/events/${id}`)}
          className="btn-container font-thin font-iceland text-sm  md:text-xl mt-4 md:mt-8"
        >
          See Details
        </Button>
      </div>
    </div>
  );
}

export default EventCard;
