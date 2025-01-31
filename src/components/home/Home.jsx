"use client";
import "./home.css";
import Image from "next/image";
import version_back from "../../../public/assets/version_back.svg";
import road from "../../../public/assets/road.svg";

import boy from "../../../public/assets/boy.svg";
import cloud from "../../../public/assets/cloud.svg";
import Social from "@/components/social/Social";

import React, { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect, useSearchParams } from "next/navigation";

const Home = () => {
  const [active, setActive] = useState(false);
  const [gameWidth, setGameWidth] = useState(1600);
  const [isFacingRight, setFacingRight] = useState(true);
  const [obstacleRect, setObstacleRect] = useState(null);
  const [over, setOver] = useState(false);

  const { data: session } = useSession();
  const searchParams = useSearchParams();

  useEffect(() => {
    const from = searchParams.get("from");

    if (from === "login" && session?.user?.incompleteProfile) {
      redirect("/profile");
    }
  }, [session, searchParams]);

  const gameArea = useRef(null);
  const player = useRef(null);
  const obstacle = useRef(null);
  const fireworks = useRef(null);

  let playerX = 0;
  const speed = 10;
  const xMin = 0;

  const updateBoundaries = () => {
    setFacingRight(true);
    player.current.style.transform = `translateX(0px) rotateY(0deg)`;
    playerX = 0;
  };

  const isColliding = () => {
    const playerRect = player.current.getBoundingClientRect();
    if (!obstacleRect) return false;

    return (
      playerRect.right > obstacleRect.left &&
      playerRect.left < obstacleRect.right &&
      playerRect.bottom > obstacleRect.top &&
      playerRect.top < obstacleRect.bottom
    );
  };

  const jump = () => {
    if (player.current.classList.contains("jumping")) return;

    player.current.classList.add("jumping");
    player.current.style.transform = `translateX(${playerX}px) translateY(-100px)`;

    setTimeout(() => {
      player.current.style.transform = `translateX(${playerX}px) translateY(0)`;
      player.current.classList.remove("jumping");
    }, 500);

    if (isColliding()) {
      setOver(true);
    }
  };

  const movePlayer = (direction) => {
    if (direction === "left" && playerX > xMin) {
      playerX -= speed;

      if (isFacingRight) {
        setFacingRight(false);
        player.current.style.transform = `translateX(${playerX}px) rotateY(180deg)`;
      } else {
        player.current.style.transform = `translateX(${playerX}px)`;
      }
    } else if (direction === "right" && playerX < gameWidth) {
      playerX += speed;

      if (!isFacingRight) {
        setFacingRight(true);
        player.current.style.transform = `translateX(${playerX}px) rotateY(0deg)`;
      } else {
        player.current.style.transform = `translateX(${playerX}px)`;
      }
    }

    if (isColliding()) {
      setOver(true);
    }
  };

  const handleKeydown = (event) => {
    player.current.style.animation = "none";

    if (event.key === "ArrowLeft" || event.key === "a") {
      movePlayer("left");
    } else if (event.key === "ArrowRight" || event.key === "d") {
      movePlayer("right");
    } else if (event.keyCode === 32) {
      jump();
    }
  };

  const startMovingRight = () => {
    let x = playerX; // Current position
    const moveInterval = setInterval(() => {
      if (isColliding() || x > 250) {
        setOver(true);
        clearInterval(moveInterval);
        return;
      }
      x += 10;
      player.current.style.transform = `translateX(${x}px)`;
    }, 100);
  };

  const checkScreenWidth = () => {
    if (window.matchMedia("(max-width: 450px)").matches) {
      player.current.style.animation = "none";
      startMovingRight();
    } else {
      return;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenWidth);
    checkScreenWidth();
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      setGameWidth(gameArea.current.clientWidth);
    };

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    if (over) {
      fireworks.current.style.display = "block";
    }
  }, [over]);

  useEffect(() => {
    if (over) {
      document.removeEventListener("keydown", handleKeydown);
      return;
    }
    if (obstacle.current) {
      setObstacleRect(obstacle.current.getBoundingClientRect());
    }

    if (active) {
      document.addEventListener("keydown", handleKeydown);
    } else {
      document.removeEventListener("keydown", handleKeydown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [active, over]);

  useEffect(() => {
    updateBoundaries();
  }, [gameWidth]);

  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden ">
        <Social />
        <section
          className=" h-screen flex justify-center items-center max-w-screen overflow-x-hidden"
          id="gameSection"
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          <div className="absolute inset-0 z-20 animateThis">
            <div className="gridAnimate border absolute top-0 -left-4 w-1/4 h-2/4 bg-theme-blue_dark opacity-50 transform blur-[60px] -rotate-12 animate-circle2" />
            <div className="gridAnimate1 absolute bottom-0 -right-0 w-1/2 h-3/4 bg-theme-blue_light opacity-20 blur-[120px] animate-circle2" />
          </div>
          {/*  center velocium*/}
          <div className="flex justify-center items-center flex-col -translate-y-32">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-audiowide text-theme-cream ">
              VELOCIUM
            </div>
            <div className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-iceland text-theme-light_lime">
              EMPOWER IDEAS MINIMIZE CODE
            </div>
          </div>

          <div className="absolute top-0 myGrid w-screen h-screen z-20"></div>
          <div className="">
            <div
              className="absolute bottom-0 right-7 sm:right-5 md:right-10 h-screen w-20"
              ref={obstacle}
              id="obstacle"
            ></div>
            <Image
              src={cloud}
              alt="cloud"
              className=" absolute animate-cloud bottom-[30%] left-3 mx-4 max-w-24 xl:min-w-36 z-[25] select-none"
            />
            <Image
              src={cloud}
              alt="cloud"
              className=" absolute animate-cloud3 bottom-[26%] left-1/2 mx-4 max-w-24 xl:min-w-36 z-[25] select-none"
            />
            <Image
              src={cloud}
              alt="cloud"
              className=" absolute animate-cloud2 bottom-[23%] right-3 mx-4 max-w-24 xl:min-w-36 z-[25] select-none "
            />
            <Image
              src={boy}
              ref={player}
              id="player"
              alt="boy"
              className="absolute left-0 bottom-0 mr-8 ml-8 mb-3 xl:mb-5 max-w-8 sm:max-w-10 md:max-w-12 xl:max-w-14 z-40 select-none "
            />
            <div
              id="gameArena"
              className="absolute bottom-0 left-0 w-screen flex justify-end items-end flex-row z-[35] select-none"
              ref={gameArea}
            >
              <Image
                src={road}
                alt="GAME BACK"
                className="-mx-0 sm:-mx-2 hidden sm:block select-none"
              />
              <Image
                src={version_back}
                alt="GAME BACK"
                className="w-full sm:w-1/2 select-none"
              />
            </div>
          </div>
          <div
            id="fireworks"
            className="absolute right-0 mr-32 mb-40 bottom-0"
            ref={fireworks}
          >
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
