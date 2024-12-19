'use client'
import React from "react";

function SimpleButton({text , type='button',bgColor="bg-[#BFF205]", textColor='text-black',className='',...props}){
    return(
        <button className={`${bgColor} ${textColor}  text-md font-bold py-2 px-4 rounded-full mt-12`}{...props}>
                {text}
        </button>
    )
}

export default SimpleButton