import "./footer.css";
const Footer = () => {
  return (
    <div
      id="footer"
      className="absolute -bottom-24 bg-[#acda14cd] flex justify-center items-center p-1 w-screen text-xs sm:text-sm md:text-md text-black orb font-semibold overflow-x-hidden"
    >
      Made with{" "}
      <span id="heart" className="mx-2">
        🖤
      </span>{" "}
      by Version
    </div>
  );
};

export default Footer;
