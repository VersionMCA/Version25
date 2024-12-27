import "../../app/globals.css"
import Link from "next/link"
import ScrambleText from "../navbar/ScrambleText";

// ! TODO:
// FIX GLITCHES IN SCRAMBLE text

const Navbar = ({toggle}) => {
    ScrambleText();
  
  return (
        <div className="sticky top-0 overflow-hidden z-50 backdrop-blur-sm">
      <div className = "p-2 lg:p-4 m-auto flex flex-row gap-0 md:gap-2 justify-center items-center text-md lg:text-xl sticky pixie z-[99] transition-all ease-in-out">
        <div className = "basis-0 md:basis-1/12 flex justify-center"><span className = "rounded-full p-4 bg-red-900 hidden md:flex">X</span></div>
        <ul className = "flex flex-row items-center bg-[#94dc18] p-2 lg:p-4 basis-full rounded-full text-black transition-all ease-in-out">
          <span className = "basis-1/2"><li className = "mx-5 xl:mr-10">VERSION</li></span>
          <span className = "flex flex-row items-center justify-center basis-1/2">
            <li className = "mx-4 xl:mx-8  hidden md:block"> <Link href="/">
                  <p className = "transition-all codedText   ease-in-out">Home</p>
                </Link></li>
            <li className = "mx-4 xl:mx-8 hidden md:block"><Link href="/about">
                  <p className = "transition-all codedText   ease-in-out">About</p>
                </Link></li>
            <li className = "mx-4 xl:mx-8 hidden md:block"><Link href="/faq">
                  <p className = "transition-all codedText   ease-in-out">FAQ</p>
                </Link></li>
            <li className = "mx-4 xl:mx-8 hidden md:block"><Link href="/team">
                  <p className = "transition-all codedText   ease-in-out">Team</p>
                </Link></li>
            <li className = "mx-4 xl:mx-3  hidden md:block bg-gradient-to-tr from-green-800 to-black rounded-full px-5 text-white border-white border-2">
            <Link href="/signin">
                  <p className = "transition-all codedText ease-in-out">Profile</p>
                </Link>
            </li>
            <li className = "mx-3 px-2 md:p-0 md:mx-0 flex justify-end items-center basis-full">
              <button type="button" className="md:hidden "
            onClick={toggle}>
              <svg className = "invert" xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24">
                    <path fill="#fff"
                          d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                </svg>
            </button>
            </li>
          </span>
          
        </ul>
        <div className = "basis-0 md:basis-1/12 flex justify-center mr-2"><span className = "rounded-full p-4 bg-red-900 hidden md:flex">Y</span></div>
      </div>
      </div>

     
  )
}

export default Navbar