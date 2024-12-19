import ProfileCard from "@/components/teams/ProfileCard"
import Teams from "@/helper/teams"

const page = () => {
  const [EEC_Members,PPC_Members]=Teams;
  return (
    <div className = "flex justify-center items-center p-4 flex-col bg-[#1E1E1E] ">
      <div className = "text-center font-extrabold font-mono text-[#A5F524]">Team Page</div>
      <div className = "flex justify-center items-center flex-wrap gap-8 p-10">
        {EEC_Members.map((profile,index)=>(
        <ProfileCard   
        key={index}
        name={profile.name}
        image={profile.image}
        socialLinks={profile.socialLinks}
        />
        ))}
      </div>
    </div>
  )
}

export default page