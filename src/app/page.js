import Home from "@/components/home/Home";
import Image from "next/image";
const page = () => {
  return (
    <div className="w-[100vw] h-[100vh] relative border overflow-hidden ">
      <div className="h-full absolute w-full -z-10">
        <Image
          alt="background"
          src={"/assets/aboutBG.png"}
          fill={true}
          className=" object-cover"
        />
      </div>
      <Home />
    </div>
  );
};

export default page;
