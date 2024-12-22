"use client"
import "../../app/globals.css"
import Image from 'next/image';
import velo_svg from "../../../public/assets/velo_svg.svg"
import version_back  from "../../../public/assets/version_back.svg"
import road  from "../../../public/assets/road.svg"
import boy  from "../../../public/assets/boy.svg"
import cloud  from "../../../public/assets/cloud.svg"




import React, { useEffect , useState} from 'react'



// const HackOverlay = () => {
//   const [randomString, setRandomString] = useState('');
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     setMousePosition({ x, y });
//   };

//   const generate = (length) => {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     for (let i = 0; i < length; i++) {
//       result += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return result;
//   }

//   const generateRandomString = () => {
//       const generatedString = generate(3240);
//       setRandomString(generatedString);
//   }

//     useEffect(() => {
//       generateRandomString();
//     }, []);
      
//   return (<div className = "doto text-white hackText min-w-fit object-contain select-none"  onMouseMove = {handleMouseMove} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}  style = {{background: isHovering ? `radial-gradient(circle at ${mousePosition.x*1.2}px ${mousePosition.y*1.2}px, rgba(49 ,156 ,13, 0.3) 50px, rgba(20, 20, 20, 0.9) 500px)`
//   : 'rgba(0, 0, 0, 0.5)',}}>
//     <span className = "opacity-0 relative " onMouseMove={generateRandomString} >
//       {randomString}
//     </span>
//         </div>);
// }

const Home = () => {
  return (
   <div className=' h-screen max-w-screen'>
     <div className="absolute inset-0 z-20 animateThis">
      {/* <div className="gridAnimate absolute top-0 left-4 w-3/4 h-full bg-[#ef2525] opacity-50 transform blur-[120px] animate-circle2" /> */}
        <div className="gridAnimate absolute top-0 -left-4 w-1/4 h-2/4 bg-[#370657] opacity-40 transform blur-[60px] -rotate-12 animate-circle2" />
        <div className="gridAnimate1 absolute bottom-0 -right-0 w-1/2 h-3/4 bg-[#329a0f] opacity-40 blur-[120px] animate-circle2" />
      </div>
         <div className="absoulte top-1/2 left-1/2 -transform-x-1/2 -transform-y-1/2  select-none">
         <Image src={velo_svg} alt="LOGO" className = "relative mainText rounded-3xl p-20 z-20" />
         </div>
        
      <div className="absolute top-0 myGrid w-screen h-[110%] z-20">
      </div>     
    <Image src = {cloud} alt = "cloud" className = " absolute animate-cloud bottom-[30%] mx-4 max-w-14 md:max-w-20 xl:max-w-36 z-[25]" />
      <Image src = {boy} alt = "boy" className = "absolute bottom-0 ml-8 mb-6 max-w-10 md:max-w-12 xl:max-w-16 z-40" />

      <div className = "absolute bottom-0 left-0 w-screen flex justify-end items-end flex-row z-30">
        <Image src = {road} alt = "GAME BACK" className = "-mx-2" />
        <Image src = {version_back} alt = "GAME BACK" className = "w-1/2" />
      </div>
      
   </div>



  )
}

export default Home