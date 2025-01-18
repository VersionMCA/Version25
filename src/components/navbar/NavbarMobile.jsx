"use client";
import { useClickAway } from "react-use";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import routes from "@/components/navbar/navLinks";
import Link from "next/link";

export default function NavMobile({ navBar }) {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  const toggleHamburger = () => {
    setOpen(!isOpen);
    if (!isOpen) navBar.current.classList.add("bg-neutral-950");
    else navBar.current.classList.remove("bg-neutral-950");
  };

  return (
    <div ref={ref} className="lg:hidden text-offWhite">
      <Hamburger toggled={isOpen} size={20} toggle={toggleHamburger} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20"
          >
            <ul className="grid gap-2 pt-3">
              {routes.map((route, idx) => {
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.name}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                  >
                    <Link
                      onClick={() => setOpen((prev) => !prev)}
                      className="flex items-center justify-between w-full p-4 bg-neutral-950 codedText"
                      href={route.link}
                    >
                      <span className="flex gap-1">{route.name}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
