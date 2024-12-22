import React from "react";

const CyberBtn = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white pixie text-sm rounded-[4px] px-4 py-2 clip-path-custom  relative transform focus:outline-none"
    >
      {text}
    </button>
  );
};

export default CyberBtn;
