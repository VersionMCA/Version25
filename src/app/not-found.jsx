import Image from "next/image";
import Link from "next/link";
import Logo from "@public/assets/404.svg";

function NotFound() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <Image src={Logo} alt="404" layout="responsive" />
        </div>
        <div className="font-semibold text-center text-lg sm:text-xl md:text-2xl mt-5 px-2">
          This page could not be found.
        </div>
        <div>
          <Link href="/">
            <button className="font-semibold rounded-xl text-black bg-gradient-to-b from-theme-light_lime to-theme-lime tracking-tight mt-10 p-3 ">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
