"use client";
import "./ShootingStars.css";
import { useState, useEffect } from "react";

const ShootingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const numberOfStars = 200;
    const starArray = Array.from({ length: numberOfStars }, () => ({
      top: Math.random() * 100 + "vh",
      left: Math.random() * 100 + "vw",
      size: Math.random() * 3 + 1 + "px",
      animationDelay: Math.random() * 2 + "s",
      animationDuration: Math.random() * 3 + 3 + "s",
      shoot: Math.random() * 100,
    }));
    setStars(starArray);
  }, []);

  return (
    <div className="starryBackground w-max">
      {stars.map((star, index) => (
        <div
          key={index}
          className={`${star.shoot <= 5 ? "shooting_star" : "star"}`}
          style={{
            top: star.top,
            left: star.left,
            width: star.shoot <= 10 ? "0px" : star.size,
            height: star.shoot <= 10 ? "0px" : star.size,
            animationDelay: star.shoot <= 10 ? "0s" : star.animationDelay,
            animationDuration: star.animationDuration,
          }}
        />
      ))}
    </div>
  );
};
export default ShootingStars;
