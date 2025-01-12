/* eslint-disable no-nested-ternary */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./EventCard.scss";
import formatDate from "../../utilities/formatDate";
import { useRouter } from "next/navigation";

function EventCard({ name, date, content, imgLink }) {
  const router = useRouter();

  const todaysDate = new Date();
  const eventDate = new Date(date);
  eventDate.setHours(23);
  eventDate.setMinutes(59);

  const newContent = content.split("\n").map((str, i) => <p key={i}>{str}</p>);
  return (
    <div className="eventCard__item">
      <LazyLoadImage src={imgLink} alt={name} />
      <div className="content  max-sm:translate-y-14">
        <p className="font-primary content__date">{formatDate(date)}</p>
        <h2 className="font-primary content__name">{name}</h2>
        <div className="[&>*]:font-light [&>*]:font-xs [&>*]:tracking-normal content__info">
          {newContent}
        </div>
        <button
          className="btn-container font-primary font-light mt-4 md:mt-8"
          onClick={() => router.push(`/events/${name}`)}
        >
          See Details
        </button>
      </div>
    </div>
  );
}

export default EventCard;
