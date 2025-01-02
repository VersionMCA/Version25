import Image from "next/image";
import "./EventThumbnail.css";

function EventThumbnail({ event, setNewItemActive }) {
  const { id, name, image } = event;
  const thumbnailClass = `thumbnail__item ${id === 0 ? "active" : ""}`;
  return (
    <div
      className={thumbnailClass}
      onClick={() => setNewItemActive(id)}
      aria-hidden="true"
    >
      <Image src={image} width={200} height={500} alt={name} />
      <div className="content">{name}</div>
    </div>
  );
}

export default EventThumbnail;
