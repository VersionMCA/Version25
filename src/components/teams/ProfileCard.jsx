const ProfileCard = () => {
  return (
    <div className = "rounded-lg aspect-[1/1] overflow-hidden max-w-xs  lg:max-w-sm flex justify-center  items-center flex-col relative select-none bg-[#1E1E1E] border-double hover:border-l-8 hover:border-t-8 hover:border-l-[#b7f625] hover:border-t-[#b7f625] transition-all ease-in-out">
      <img src="https://i.pinimg.com/736x/3d/3b/f1/3d3bf1f13bc997907db8aa68e4ab5153.jpg" alt="" srcSet="https://i.pinimg.com/736x/3d/3b/f1/3d3bf1f13bc997907db8aa68e4ab5153.jpg" className = "w-full h-full object-cover"/>
      <div className="bg-[#A5F524] p-2 sm:p-3 rounded-2xl border-2 border-black absolute bottom-3 sm:bottom-6 font-mono text-black flex justify-center flex-col items-center">
        <p className = "font-bold text-md sm:text-xl">Tyler Durden</p>
        <p className = "text-sm sm:text-md">The Creator</p>
      </div>
    </div>
 
  )
}

export default ProfileCard;