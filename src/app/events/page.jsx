import EventCard from "./EventCard";
import InsertEvents from "./InsertEvents";
import eventsList from "@/helper/eventsList";
const page = () => {
  return (
    <div className="flex flex-wrap items-center justify-center mt-[200px] gap-5">
      <h1 className="w-full content-center">Welcome to the events page</h1>
      {
        eventsList.map((event) => (
          <EventCard key={event.id} event={event} />
        ))
      }
      <InsertEvents />
    </div>
  )
}
export default page