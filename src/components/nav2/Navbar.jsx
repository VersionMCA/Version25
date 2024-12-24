import "../../app/globals.css"
// import CyberBtn from '../ui/CyberBtn'

const Navbar = () => {
  return (
        <div className="sticky top-0 z-50 rounded-full backdrop-blur-sm">
      <div className = "py-4 px-2 m-auto flex flex-row justify-center items-center text-xl sticky pixie z-[99]">
        <div className = "basis-1/12 flex justify-center"><span className = "rounded-full p-4 bg-red-900">X</span></div>
        <ul className = "flex flex-row items-center bg-[#94dc18] p-4 basis-full rounded-full text-black">
          <span className = "basis-1/2"><li className = "mx-5 xl:mr-10">VERSION</li></span>
          <span className = "flex flex-row items-center justify-center basis-1/2">
            <li className = "mx-4 xl:mx-8 ">Home</li>
            <li className = "mx-4 xl:mx-8">About</li>
            <li className = "mx-4 xl:mx-8">FAQ</li>
            <li className = "mx-4 xl:mx-8">Team</li>
            <li className = "mx-4 xl:mx-3 bg-gradient-to-tr from-green-800 to-black rounded-full px-5 text-white border-white border-2">Profile</li>
          </span>
          
        </ul>
        <div className = "basis-1/12 flex justify-center mr-2"><span className = "rounded-full p-4 bg-red-900">Y</span></div>
      </div>
      </div>

     
  )
}

export default Navbar