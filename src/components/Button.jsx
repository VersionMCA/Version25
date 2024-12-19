'use client'
import React from "react";

function Button({text , type='button',bgColor="bg-[#BFF205]", textColor='text-black',className='',...props}){
    return(
        <button className={`${bgColor} ${textColor}  font-mono text-lg font-bold py-3 px-4 rounded-tl-md rounded-br-md clip-path-custom mt-12`}{...props}>
                {text}
        </button>
    )
}

export default Button