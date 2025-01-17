"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
export function LampDemo({ content }) {
  return (
    <LampContainer>
      <motion.h3
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-2 bg-gray-300 py-2 bg-clip-text text-center text-4xl  tracking-tight text-transparent md:text-8xl md:font-large"
      >
        {content}
      </motion.h3>
    </LampContainer>
  );
}
