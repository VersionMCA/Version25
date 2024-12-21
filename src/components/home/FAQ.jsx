"use client";

import { useState } from "react";
import { Transition } from "@headlessui/react";
import arrowUpIcon from "../../assets/svgs/arrow-up.svg";
import Image from "next/image";
import { faqItems } from "../../helper/faqs.js";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div
    className="border border-theme-cream rounded-lg overflow-hidden bg-theme-black"
    style={{ alignSelf: "start" }}
  >
    <button
      onClick={onClick}
      className="w-full text-left flex justify-between px-4 py-3 font-medium bg-black-100 hover:bg-gray-700 focus:outline-none  focus:ring-gray-300 text-theme-lime"
    >
      Q. {title}
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
      <div className="px-4 py-3 bg-theme-black text-theme-blue">{content}</div>
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
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-6 text-theme-blue">
        Frequently Asked Questions
      </h1>
      <Accordion items={faqItems} />
    </div>
  );
}
