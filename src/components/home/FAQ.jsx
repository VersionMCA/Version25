"use client";

import { useState } from "react";
import { Transition } from "@headlessui/react";
import arrowUpIcon from "../../assets/svgs/arrow-up.svg";
import Image from "next/image";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border rounded-lg overflow-hidden">
    <button
      onClick={onClick}
      className="w-full text-left flex justify-between px-4 py-3 font-medium bg-black-100 hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
    >
      {title}
      <Image
        priority
        src={arrowUpIcon}
        alt="Arrow"
        width={10}
        style={
          isOpen
            ? { rotate: "180deg", transition: "rotate 500ms ease-in-out" }
            : { rotate: "0deg", transition: "rotate 500ms ease-in-out" }
        }
      />
    </button>
    <Transition
      show={isOpen}
      enter="transition-all duration-300 ease-in-out"
      enterFrom="transform scale-y-0 opacity-0"
      enterTo="transform scale-y-100 opacity-100"
      leave="transition-all duration-300 ease-in-out"
      leaveFrom="transform scale-y-100 opacity-100"
      leaveTo="transform scale-y-0 opacity-0"
      className="overflow-hidden"
    >
      <div className="px-4 py-3 bg-black">{content}</div>
    </Transition>
  </div>
);

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default function FAQ() {
  const faqItems = [
    {
      title: "What is Tailwind CSS?",
      content:
        "Tailwind CSS is a utility-first CSS framework for creating custom designs directly in your HTML.",
    },
    {
      title: "How does the Accordion work?",
      content:
        "This accordion uses React state to manage the open/close logic and Tailwind CSS for animations.",
    },
    {
      title: "Is Tailwind CSS beginner-friendly?",
      content:
        "Yes, Tailwind CSS is designed to be simple and efficient for developers of all levels.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>
      <Accordion items={faqItems} />
    </div>
  );
}
