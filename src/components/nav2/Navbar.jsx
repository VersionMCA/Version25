import "../../app/globals.css"

const Navbar = () => {
  return (
        <div className="sticky top-0 z-50">
      <div className = "p-4 m-auto flex flex-row justify-center items-center text-lg sticky pixie z-[99]">
        <div className = "basis-1/12 flex justify-center"><span className = "rounded-full p-4 bg-red-900">X</span></div>
        <ul className = "flex flex-row bg-[#94dc18] p-4 basis-full rounded-full text-black">
          <span className = "basis-1/2"><li className = "mx-5 xl:mr-10">VERSION</li></span>
          <span className = "flex flex-row items-center justify-center basis-1/2">
            <li className = "mx-4 xl:mx-10 ">Home</li>
            <li className = "mx-4 xl:mx-10">About</li>
            <li className = "mx-4 xl:mx-10">FAQ</li>
            <li className = "mx-4 xl:mx-10">Team</li>
            <li className = "mx-4 xl:mx-10">Profile</li>
          </span>
          
        </ul>
        <div className = "basis-1/12 flex justify-center"><span className = "rounded-full p-4 bg-red-900">Y</span></div>
      </div>
      </div>
  )
}

export default Navbar