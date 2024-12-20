import ProfileCard from "@/components/teams/ProfileCard";
import Teams from "@/helper/teams";

const links={
  github:'#',
  linkedin:'#'
}

const page = () => {
  const {EEC_Members, PPC_Members, Faculty,CCC_Members,EEC_Heads,PRC_Members,PRC_Heads,PPC_Heads,HRC_Members,HRC_Heads,ARC_Members,ARC_Heads} = Teams;
  console.log(PRC_Members)
  return (
    <div className="flex justify-center items-center p-4 flex-col bg-[#1E1E1E] ">
      <div className="opacity-1 transform-none font-extrabold font-mono text-white">
        <h1 className="text-center text-3xl md:text-4xl mb-10 ">
          MEET THE <span className="text-[#A5F524]"> TEAM </span>
        </h1>
      </div>
      <div className=" flex items-center justify-center flex-col flax-wrap">
        <h3 className=" text-center font-bold text-[#A5F524]">
          HEAD OF THE DEPARTMENT & STAFF ADVISOR
        </h3>
        <div className="flex justify-center items-center flex-wrap p-10 mb-10 gap-8">
          {Faculty.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              image={profile.image}
              designation={profile.designation}
              socialLinks={profile.socialLinks}
            />
          ))}
        </div>
      </div>
      <div className=" flex items-center justify-center flex-col flax-wrap">
        <h3 className=" text-center font-bold text-[#A5F524]">
          CENTRAL CORDINATION COMMITEE
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-10 p-10">
         <ProfileCard
         key={101}
         name={'Chirag Agarwal'}
         image={''}
         designation={'ChairPerson'}
         socialLinks={links}/>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-10 p-10">
          {CCC_Members.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              image={profile.image}
              designation={profile.designation}
              socialLinks={profile.socialLinks}
            />
          ))}
        </div>
      </div>
      <div className=" flex items-center justify-center flex-col flax-wrap">
        <h3 className=" text-center font-bold text-[#A5F524]">
          EVENT EXECUTION COMMITEE
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-10 p-10">
         <ProfileCard
         key={101}
         name={'Chirag Agarwal'}
         image={''}
         designation={'ChairPerson'}
         socialLinks={links}/>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-10 p-10">
        {EEC_Heads.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              image={profile.image}
              designation={profile.designation}
              socialLinks={profile.socialLinks}
            />
          ))}
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-10 p-10">
          {EEC_Members.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              image={profile.image}
              designation={profile.designation}
              socialLinks={profile.socialLinks}
            />
          ))}
        </div>
      </div>
      <div className=" flex items-center justify-center flex-col flax-wrap">
        <h3 className=" text-center font-bold text-[#A5F524]">
          PUBLIC RELATION COMMITEE
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-10 p-10">
         <ProfileCard
         key={101}
         name={'Chirag Agarwal'}
         image={''}
         designation={'ChairPerson'}
         socialLinks={links}/>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-10 p-10">
        {PRC_Heads.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              image={profile.image}
              designation={profile.designation}
              socialLinks={profile.socialLinks}
            />
          ))}
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-10 p-10">
          {PRC_Members.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              image={profile.image}
              designation={profile.designation}
              socialLinks={profile.socialLinks}
            />
          ))}
        </div>
      </div>
      <div className=" flex items-center justify-center flex-col flax-wrap">
        <h3 className=" text-center font-bold text-[#A5F524]">
          ALUMNI RELATION COMMITEE
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-10 p-10">
         <ProfileCard
         key={101}
         name={'Chirag Agarwal'}
         image={''}
         designation={'ChairPerson'}
         socialLinks={links}/>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-10 p-10">
        {ARC_Heads.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              image={profile.image}
              designation={profile.designation}
              socialLinks={profile.socialLinks}
            />
          ))}
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-10 p-10">
          {ARC_Members.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              image={profile.image}
              designation={profile.designation}
              socialLinks={profile.socialLinks}
            />
          ))}
        </div>
      </div>
      <div className=" flex items-center justify-center flex-col flax-wrap">
        <h3 className=" text-center font-bold text-[#A5F524]">
          HOSPITALITY AND RECEPTION COMMITEE
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-10 p-10">
         <ProfileCard
         key={101}
         name={'Chirag Agarwal'}
         image={''}
         designation={'ChairPerson'}
         socialLinks={links}/>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-10 p-10">
        {HRC_Heads.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              image={profile.image}
              designation={profile.designation}
              socialLinks={profile.socialLinks}
            />
          ))}
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-10 p-10">
          {HRC_Members.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              image={profile.image}
              designation={profile.designation}
              socialLinks={profile.socialLinks}
            />
          ))}
        </div>
      </div>
      <div className=" flex items-center justify-center flex-col flax-wrap">
        <h3 className=" text-center font-bold text-[#A5F524]">
          PRINTING AND PUBLISHING COMMITEE
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-10 p-10">
         <ProfileCard
         key={101}
         name={'Chirag Agarwal'}
         image={''}
         designation={'ChairPerson'}
         socialLinks={links}/>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-10 p-10">
        {PPC_Heads.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              image={profile.image}
              designation={profile.designation}
              socialLinks={profile.socialLinks}
            />
          ))}
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8 mb-10 p-10">
          {PPC_Members.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              image={profile.image}
              designation={profile.designation}
              socialLinks={profile.socialLinks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
