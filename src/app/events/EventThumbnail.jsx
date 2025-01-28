import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./EventThumbnail.scss";

function EventThumbnail({ index, imgLink, name, setNewItemActive }) {
  const thumbnailClass = `thumbnail__item ${index === 0 ? "active" : ""}`;
  return (
    <div
      className={thumbnailClass}
      onClick={() => setNewItemActive(index)}
      aria-hidden="true"
    >
      <LazyLoadImage src={imgLink} alt={name} />
      {/* <div className="content max-sm:text-sm">{name}</div> */}
    </div>
  );
}

export default EventThumbnail;
