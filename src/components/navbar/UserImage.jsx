import React from "react";

export default function UserImage({ image }) {
  return (
    <div>
      <img
        className="w-full h-full rounded-full cursor-pointer"
        src={image || ""}
        width={100}
        height={100}
        alt="user_profile_image"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}