import Image from "next/image";
import Link from "next/link";

const ProfileCard = ({ person }) => {
  const { name, image, designation, socialLinks } = person;
  return (
    <div className="relative flex flex-col justify-center items-center gap-4 p-3 rounded-md border hover:shadow-[0px_6px_15px_0px_rgba(251,191,36,0.12)] hover:border-[color:var(--Gold-800,#63542D)] transition-shadow duration-300">
      <div className="relative group flex justify-center items-center rounded-md overflow-hidden h-60 w-48 gap-2.5">
        <Image
          className="object-cover"
          src={image}
          alt={`${name} profile`}
          fill={true}
        />
        <div className="w-full h-full hidden opacity-70 text group-hover:flex bg-black z-10 justify-center items-center flex-col gap-2">
          {socialLinks.github && (
            <Link href={socialLinks.github} target="_blank">
              Github
            </Link>
          )}
          {socialLinks.linkedin && (
            <Link href={socialLinks.linkedin} target="_blank">
              Linkedin
            </Link>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-gray-400  text-base font-medium leading-normal truncate flex justify-start items-start">
          {designation}
        </div>
        <div className="text-white text-charcoal text-sm font-medium  uppercase leading-tight tracking-tight">
          {name}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
