import "../../app/globals.css"
import Link from "next/link";

const Sidebar = ({
  isOpen,
  toggle,
}) => {
  return (
    <>
      <div
        className="md:hidden sidebar-container fixed w-full h-full overflow-hidden justify-center bg-[#94dc18bd] backdrop-blur-sm grid pt-[120px] left-0 z-[100] "
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5 text-black" onClick={toggle}>
        {/* Close icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"> 
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-4xl lg:text-7xl font-extrabold text-black max-h-screen pixie">
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
            <li className = "mx-4 xl:mx-8">
            <Link href="/signin">
                  <p>Profile</p>
                </Link>
            </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;