/* eslint-disable no-nested-ternary */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./EventCard.scss";
import formatDate from "../../utilities/formatDate";
import { useRouter } from "next/navigation";

function EventCard({ event }) {
  const { id, name, date, description, image } = event;
  const router = useRouter();

  const todaysDate = new Date();
  const eventDate = new Date(date);
  eventDate.setHours(23);
  eventDate.setMinutes(59);

  return (
    <div className="eventCard__item">
      <LazyLoadImage src={image} alt={name} />
      <div className="content  max-sm:translate-y-14">
        <p className="font-primary content__date">{formatDate(date)}</p>
        <h2 className="font-primary content__name">{name}</h2>
        <div className="[&>*]:font-light [&>*]:font-xs [&>*]:tracking-normal content__info">
          {description}
        </div>
        <button
          className="btn-container font-primary font-light mt-4 md:mt-8"
          onClick={() => router.push(`/events/${id}`)}
        >
          See Details
        </button>
      </div>
    </div>
  );
}

export default EventCard;
