import ProfileCard from "../../components/teams/ProfileCard"

const page = () => {
  return (
    <div className = "flex justify-center items-center p-4 flex-col bg-[#1E1E1E] ">
      <div className = "text-center font-extrabold font-mono ">Team Page</div>
      <div className = "flex justify-center items-center flex-wrap gap-8 p-10">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />


      </div>
    </div>
  )
}

export default page