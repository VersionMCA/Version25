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
      size: Math.random() * 2 + 1 + "px",
      animationDelay: Math.random() * 2 + "s",
      shoot: Math.random() * 100,
    }));
    setStars(starArray);
  }, []);

  return (
    <div className="starryBackground w-max">
      {stars.map((star, index) => (
        <div
          key={index}
          className={`star ${star.shoot <= 20 ? "shooting_star" : ""}`}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.shoot <= 10 ? "30s" : star.animationDelay,
          }}
        />
      ))}
    </div>
  );
};
export default ShootingStars;
