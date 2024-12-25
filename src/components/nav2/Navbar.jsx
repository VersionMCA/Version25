import "../../app/globals.css"
import Link from "next/link"

const Navbar = ({toggle}) => {
  return (
        <div className="sticky top-0 overflow-hidden z-50 rounded-full backdrop-blur-sm">
      <div className = "py-4 px-2 m-auto flex flex-row justify-center items-center text-xl sticky pixie z-[99]">
        <div className = "basis-1/12 flex justify-center"><span className = "rounded-full p-4 bg-red-900">X</span></div>
        <ul className = "flex flex-row items-center bg-[#94dc18] p-4 basis-full rounded-full text-black">
          <span className = "basis-1/2"><li className = "mx-5 xl:mr-10">VERSION</li></span>
          <span className = "flex flex-row items-center justify-center basis-1/2">
            <li className = "mx-4 xl:mx-8 "> <Link href="/">
                  <p>Home</p>
                </Link></li>
            <li className = "mx-4 xl:mx-8"><Link href="/about">
                  <p>About</p>
                </Link></li>
            <li className = "mx-4 xl:mx-8"><Link href="/faq">
                  <p>FAQ</p>
                </Link></li>
            <li className = "mx-4 xl:mx-8"><Link href="/team">
                  <p>Team</p>
                </Link></li>
            <li className = "mx-4 xl:mx-3 bg-gradient-to-tr from-green-800 to-black rounded-full px-5 text-white border-white border-2">
            <Link href="/signin">
                  <p>Profile</p>
                </Link>
            </li>
            <li className = "mx-3 p-2 md:p-0 md:mx-0 flex justify-center items-center">
              <button type="button" className="md:block"
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
        <div className = "basis-1/12 flex justify-center mr-2"><span className = "rounded-full p-4 bg-red-900">Y</span></div>
      </div>
      </div>

     
  )
}

export default Navbar