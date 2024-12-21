import React from "react";

const CyberButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-lime-400 text-black text-xs rounded-[4px] font-bold px-4 py-2 clip-path-custom  relative transform hover:scale-105 focus:outline-none"
    >
      {text}
    </button>
  );
};

export default CyberButton;
